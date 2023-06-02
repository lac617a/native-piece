import { inputDev, standaloneBaseConfig } from "./rollup.config.js";
import dev from "rollup-plugin-dev";
import html from "@rollup/plugin-html";
import image from "@rollup/plugin-image";
import replace from "@rollup/plugin-replace";
import { htmlTemplate } from "./htmlTemplate.js";
import livereload from "rollup-plugin-livereload";

const devPlugins = [...standaloneBaseConfig.plugins];

devPlugins.unshift(
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": JSON.stringify("development"),
  })
);

devPlugins.push(
  dev({
    dirs: ["dist"],
    spa: true,
    force: true
  })
);

devPlugins.push(
  livereload({
    watch: "dist",
    delay: 300,
  })
);

devPlugins.push(
  html({
    template: ({ files }) => htmlTemplate(files.js),
  })
);

devPlugins.push(image());

const standaloneDevConfig = {
  ...standaloneBaseConfig,
  input: inputDev,
  plugins: devPlugins,
};

export default standaloneDevConfig;
