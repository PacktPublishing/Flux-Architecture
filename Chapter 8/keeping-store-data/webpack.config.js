module.exports = {
  entry: [ 'babel-polyfill', './main.js' ],
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
      }
    ]
  }
}
