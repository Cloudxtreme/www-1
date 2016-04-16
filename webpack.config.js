var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: 'app.js',
    publicPath: '/'
  },

  resolve: {
    root: [
      path.resolve('node_modules'),
      path.resolve('src')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './dist',
    port: 8080,
    historyApiFallback: true,
    noInfo: true
  }
}
