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
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: 'handlebars-loader',
        query: {
          runtime: path.join(
            __dirname,
            '../../node_modules/handlebars/dist/handlebars.runtime.min.js'
          )
        }
      }
    ]
  }
}
