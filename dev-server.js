var webpack = require('webpack');
var webServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  } else {
    console.log('Listening on port 3000');
  }
});
