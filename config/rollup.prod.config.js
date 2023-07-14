import {
  serverConfig,
  browserConfig,
  minifierPlugin,
  standaloneBaseConfig,
} from "./rollup.config";
import replace from "@rollup/plugin-replace";
import pkg from "../package.json" assert { type: "json" };

const prodPlugins = [...standaloneBaseConfig.plugins];

const standaloneProdConfig = {
  ...standaloneBaseConfig,
  external: [...Object.keys(pkg.peerDependencies || {})],
  output: {
    ...standaloneBaseConfig.output,
    file: "dist/native-piece.min.js",
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
