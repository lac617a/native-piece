import path from "path";

export const ROOT_DIR = path.join(__dirname, "..");
export const SRC_DIR = path.join(ROOT_DIR, "src");
export const DIST_DIR = path.join(ROOT_DIR, "dist");
export const PKG_DIR = path.join(ROOT_DIR, "packages");
export const EXAMPLE_DIR = path.join(ROOT_DIR, "example");
export const tsconfig = path.join(ROOT_DIR, "tsconfig.json");
export const PACKAGES_DIR = path.join(ROOT_DIR, "packages.json");

export const EXTENSIONS = [".ts", ".tsx"];

const cjs = {
  exports: "named",
  interop: "auto",
  format: "cjs",
  sourcemap: true,
};

const esm = {
  format: "esm",
  interop: "auto",
  sourcemap: true,
};

export const getCJS = (override) => ({ ...cjs, ...override });
export const getESM = (override) => ({ ...esm, ...override });