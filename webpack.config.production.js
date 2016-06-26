var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/js/app',
  output: {
    path: path.resolve(__dirname),
    filename: './public/js/bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
};
