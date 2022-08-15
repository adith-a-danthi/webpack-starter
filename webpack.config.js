const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js"],
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
