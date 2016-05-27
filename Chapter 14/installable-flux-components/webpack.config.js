'use strict';

var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'main-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!.*my\-(users|groups))/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015', 'stage-2' ]
        }
      }
    ]
  }
}
