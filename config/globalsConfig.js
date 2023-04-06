import path from "path";

export const ROOT_DIR = path.join(__dirname, "..");
export const ROOT_PKG = path.join(ROOT_DIR, "packages");
export const PKG_DIR = path.join(ROOT_PKG, "native-piece");

export const EXAMPLE_DIR = path.join(ROOT_DIR, "example");

// NATIVE-PIECE
export const SRC_DIR = path.join(PKG_DIR, "src");
export const DIST_DIR = path.join(PKG_DIR, "dist");
export const tsconfig = path.join(PKG_DIR, "tsconfig.json");
export const PACKAGES_DIR = path.join(PKG_DIR, "packages.json");

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