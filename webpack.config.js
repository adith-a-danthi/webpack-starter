const path = require('path');

const webpackConfig = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
}

module.exports = webpackConfig;