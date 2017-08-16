const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const ENTRY_POINT = '../src/index.js';
const OUTPUT_PATH = '../www';
const PORT = 8080;

module.exports = merge([{
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, ENTRY_POINT)
  ],
  output: {
    path: path.join(__dirname, OUTPUT_PATH),
    filename: 'bundle.js',
    publicPath: `http://localhost:${PORT}/`
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
    port: PORT,
    contentBase: path.join(__dirname, OUTPUT_PATH)
  }
}]);
