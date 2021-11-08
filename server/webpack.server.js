const path = require("path");
const baseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");

const config = {
  mode: "none",
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
module.exports = merge(baseConfig, config);
