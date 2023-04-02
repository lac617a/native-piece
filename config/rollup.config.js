import path from "path";
import {
  getESM,
  getCJS,
  SRC_DIR,
  PKG_DIR,
  tsconfig,
  DIST_DIR,
  EXTENSIONS,
  EXAMPLE_DIR,
} from "./globalsConfig.js";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
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
  // "styled-system": "styledSystem",
};

// Array of extensions to be handled by babel

export const output = {
  file: path.join(DIST_DIR, "native-piece.js"),
  format: "umd",
  globals,
};

export const commonPlugins = [
  typescript({
    // The build breaks if the tests are included by the typescript plugin.
    // Since un-excluding them in tsconfig.json, we must explicitly exclude them
    // here.
    exclude: ["**/*.test.ts", "**/*.test.tsx", "dist"],
    outputToFilesystem: true,
    tsconfig,
  }),
  nodeResolve({
    browser: true,
  }),
  peerDepsExternal(),
  commonjs(),
  babel({
    babelHelpers: "runtime", // runtime-bundled
    exclude: /node_modules/,
    extensions: EXTENSIONS,
    include: EXTENSIONS.map((ext) => `arc/**/*${ext}`),
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: ["@babel/plugin-transform-runtime"],
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
  plugins: commonPlugins,
};

export const standaloneBaseConfig = {
  ...configBase,
  output,
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
      preventAssignment: true,
    })
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
    })
  ),
};

export const browserConfig = {
  ...configBase,
  output: [
    getESM({ file: "dist/esm/native-piece.browser.esm.js" }),
    getCJS({ file: "dist/cjs/native-piece.browser.cjs.js" }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      preventAssignment: true,
      __SERVER__: JSON.stringify(false),
    })
  ),
};

export const hooksConfig = {
  ...configBase,
  input: PKG_DIR + "/hooks/index.ts",
  output: [
    getESM({ file: "hooks/dist/native-piece.hooks.esm.js" }),
    getCJS({ file: "hooks/dist/native-piece.hooks.cjs.js" }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      preventAssignment: true,
      __SERVER__: JSON.stringify(false),
    })
  ),
};