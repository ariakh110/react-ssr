const path = require("path");
module.exports = {
  target: "node",
  entry: "./src/index.js",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
  resolve: {},
  devtool: "source-map",
  plugins: [],
};
