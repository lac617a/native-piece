import path from "path";
import fs from "fs";
import { SRC_DIR } from "./globalsConfig";

export const htmlTemplate = (js = []) => {
  const htmlDir = path.join(SRC_DIR, "index.dev.html");
  const html = fs.readFileSync(htmlDir, { encoding: "utf8" });
  let scripts = "";

  for (let script of js) {
    scripts += `<script src="${script.fileName}"></script>\n`;
  }
  return html.replace("${scripts}", scripts);
};
