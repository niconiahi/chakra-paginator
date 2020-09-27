import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const PACKAGE_NAME = "index";
const ENTRY_FILE = "./src/index.ts";
const OUTPUT_DIR = "./dist";

export default [
  {
    input: ENTRY_FILE,
    output: [
      {
        file: `${OUTPUT_DIR}/${PACKAGE_NAME}.js`,
        format: "cjs",
        exports: "named",
        name: PACKAGE_NAME,
      },
      {
        file: `${OUTPUT_DIR}/${PACKAGE_NAME}.js`,
        format: "esm",
        exports: "named",
        name: PACKAGE_NAME,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({ inputSourceMap: true }),
      commonjs(),
      terser(),
      typescript(),
    ],
  },
];
