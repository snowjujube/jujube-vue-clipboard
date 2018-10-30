const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ["./src/index.js"],
  output: {
    filename: "jujube-vue-clipboard.js",
    path: path.resolve(__dirname, 'dist'),
    library: "JujubeVueClipboard",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};