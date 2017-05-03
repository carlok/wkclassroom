var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/lib',
    filename: 'mylib.js',
    libraryTarget: 'var',
    library: 'EntryPoint'
  }
}
