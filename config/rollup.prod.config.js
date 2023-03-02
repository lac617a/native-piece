import {
  globals,
  EXTERNAL,
  serverConfig,
  browserConfig,
  minifierPlugin,
  standaloneBaseConfig,
} from "./rollup.config";
import replace from "@rollup/plugin-replace";

const prodPlugins = [...standaloneBaseConfig.plugins];

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  external: [...Object.keys(globals), ...EXTERNAL],
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
  browserConfig,
];
