import path from "path";
import {
  getESM,
  getCJS,
  SRC_DIR,
  tsconfig,
  DIST_DIR,
  EXTENSIONS,
  EXAMPLE_DIR,
} from "./globalsConfig.js";
import json from "rollup-plugin-json";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "../package.json" assert { type: "json" };

export const input = path.join(SRC_DIR, "index.ts");
export const inputDev = path.join(EXAMPLE_DIR, "index.tsx");

export const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "@emotion/styled": "styled",
  "styled-system": "styledSystem",
  "@emotion/styled/base": "_styled",
};

// Array of extensions to be handled by babel
const isProd = process.env.NODE_ENV === 'production';
export const output = {
  file: path.join(DIST_DIR, "native-piece.js"),
  format: "umd",
  globals,
  sourcemap: true,
  name: "native-piece",
};

export const commonPlugins = [
  peerDepsExternal(),
  json(),
  postcss(),
  sourceMaps(),
  typescript({
    // The build breaks if the tests are included by the typescript plugin.
    // Since un-excluding them in tsconfig.json, we must explicitly exclude them
    // here.
    tsconfig,
    outputToFilesystem: true,
    exclude: ["**/*.test.ts", "**/*.test.tsx", "dist"],
  }),
  nodeResolve({
    browser: true,
  }),
  commonjs({
    esmExternals: false,
    ignoreGlobal: true,
  }),
  babel({
    babelHelpers: "runtime", // runtime-bundled
    exclude: /node_modules/,
    extensions: EXTENSIONS,
    include: EXTENSIONS.map((ext) => `${SRC_DIR}/**/*${ext}`),
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      [
        '@emotion',
        {
          sourceMap: isProd,
          autoLabel: 'dev-only',
          labelFormat: '[filename]--[local]',
        },
      ],
    ].filter(Boolean),
  }),
  replace({
    preventAssignment: true,
    __VERSION__: JSON.stringify(pkg.version),
  }),
  /** @type {import('rollup').Plugin} */
  ({
    name: "postprocessing",
    // Rollup 2 injects globalThis, which is nice, but doesn't really make sense for Microbundle.
    // Only ESM environments necessitate globalThis, and UMD bundles can't be properly loaded as ESM.
    // So we remove the globalThis check, replacing it with `this||self` to match Rollup 1's output:
    renderChunk(code, chunk, opts) {
      if (opts.format === "umd") {
        // minified:
        code = code.replace(
          /([a-zA-Z$_]+)="undefined"!=typeof globalThis\?globalThis:(\1\|\|self)/,
          "$2"
        );
        // unminified:
        code = code.replace(
          /(global *= *)typeof +globalThis *!== *['"]undefined['"] *\? *globalThis *: *(global *\|\| *self)/,
          "$1$2"
        );
        return { code, map: null };
      }
    },
  }),
];

const configBase = {
  input,
  // \0 is rollup convention for generated in memory modules
  // external: (id) =>
  //   !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins: commonPlugins,
};

export const minifierPlugin = terser({
  compress: {
    passes: 10,
    keep_infinity: true,
    pure_getters: true,
  },
  ecma: 5,
  format: {
    wrap_func_args: false,
    comments: /^\s*([@#]__[A-Z]+__\s*$|@cc_on)/,
    preserve_annotations: true,
  },
});

export const standaloneBaseConfig = {
  ...configBase,
  output,
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
      preventAssignment: true,
    }),
    minifierPlugin
  ),
  treeshake: {
    propertyReadSideEffects: false,
  },
};

export const serverConfig = {
  ...configBase,
  output: [
    getESM({ file: "dist/esm/native-piece.esm.js" }),
    getCJS({ file: "dist/cjs/native-piece.cjs.js" }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      window: undefined,
      preventAssignment: true,
      __SERVER__: JSON.stringify(true),
    }),
    minifierPlugin
  ),
};

export const browserConfig = {
  ...configBase,
  output: [
    getCJS({ file: "dist/cjs/native-piece.browser.cjs.js" }),
    getESM({ file: "dist/esm/native-piece.browser.esm.js" }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      preventAssignment: true,
      __SERVER__: JSON.stringify(false),
    }),
    minifierPlugin
  ),
};

// export const hooksConfig = {
//   ...configBase,
//   input: SRC_DIR + "/hooks/index.ts",
//   output: [
//     getESM({ file: "hooks/dist/native-piece.hooks.esm.js" }),
//     getCJS({ file: "hooks/dist/native-piece.hooks.cjs.js" }),
//   ],
//   plugins: configBase.plugins.concat(
//     replace({
//       preventAssignment: true,
//       __SERVER__: JSON.stringify(false),
//     })
//   ),
// };
