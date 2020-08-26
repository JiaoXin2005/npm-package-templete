import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import child_process from "child_process";
import pkg from "./package.json";

const clean = () => {
  let dir = ["./types"].join(" ");
  child_process.execSync(`rm -rf ${dir}`);
};
clean();

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "es/index.js",
      format: "es",
    },
    {
      file: "lib/index.js",
      format: "umd",
      exports: "named",
      name: pkg.name,
    },
  ],

  plugins: [
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
    }),
    nodeResolve({
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
    }),
    json(),
    commonjs(),
  ],
};

export default config;
