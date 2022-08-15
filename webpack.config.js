const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Starter",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  mode: "production",
};

module.exports = webpackConfig;
