import terser from "@rollup/plugin-terser";
import {
  globals,
  serverConfig,
  standaloneBaseConfig,
} from "./rollup.config";
import replace from "@rollup/plugin-replace";

const minifierPlugin = terser({
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

const prodPlugins = [...standaloneBaseConfig.plugins];

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  external: Object.keys(globals),
  // \0 is rollup convention for generated in memory modules
  // external: (id) =>
  //   !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  output: {
    ...standaloneBaseConfig.output,
    file: "dist/native-piece.min.js",
    name: "nativePiece",
  },
  plugins: prodPlugins.concat(
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    minifierPlugin
  ),
};

export default [
  standaloneProdConfig,
  serverConfig,
  // browserConfig,
  // hooksConfig,
];
