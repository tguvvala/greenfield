const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true, presets: ['react', 'es2015'] },
        exclude: /node_modules/
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true, presets: ['react', 'es2015'] },
        exclude: /node_modules/
      }
    ]
  }

  // plugins: [HtmlWebpackPluginConfig]
}