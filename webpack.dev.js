const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
  },

  plugins: [new ESLintWebpackPlugin()],
});
