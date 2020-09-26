import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const PACKAGE_NAME = "chakra-paginator";
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
        sourcemap: true,
      },
      {
        file: `${OUTPUT_DIR}/${PACKAGE_NAME}.js`,
        format: "es",
        exports: "named",
        name: PACKAGE_NAME,
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      resolve(),
      babel(),
      commonjs(),
      terser(),
    ],
  },
];
