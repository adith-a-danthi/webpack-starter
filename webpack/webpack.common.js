const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: path.resolve(__dirname, '../src', 'index.js'),

  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    assetModuleFilename: 'assets/[name].[contenthash].[ext]',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['*', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      template: path.resolve(__dirname, '../src', 'index.html'),
    }),
  ],
};

module.exports = webpackConfig;
