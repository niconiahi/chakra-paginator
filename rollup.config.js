import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

const PACKAGE_NAME = "chakra-paginator";
const ENTRY_FILE = "./src/index.ts";
const OUTPUT_DIR = "./dist";

export default [
  {
    input: ENTRY_FILE,
    output: {
      file: `${OUTPUT_DIR}/${PACKAGE_NAME}.js`,
      format: "cjs",
      name: PACKAGE_NAME,
    },
    plugins: [resolve(), babel(), commonjs(), uglify()],
  },
];
