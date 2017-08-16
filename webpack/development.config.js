const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const ENTRY_POINT = '../src/index.js';
const OUTPUT_PATH = '../www';

module.exports = merge([{
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, ENTRY_POINT)
  ],
  output: {
    path: path.join(__dirname, OUTPUT_PATH),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [ new HotModuleReplacementPlugin() ],
  devServer: {
    stats: 'errors-only',
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, OUTPUT_PATH)
  }
}]);
