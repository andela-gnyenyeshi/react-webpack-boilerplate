var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/js/app'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }]
  }
};
