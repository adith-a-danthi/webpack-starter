const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
        },
      },
    },
  },
});
