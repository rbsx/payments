const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: '../index.html'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  stats: {
    colors: true
  },
  devtool: 'inline-source-map'
}
