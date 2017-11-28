const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'inline-source-map',   // For source-maps
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  },
  plugins: [
    //new CleanWebpackPlugin([
    //   'dist'
    //]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new CopyWebpackPlugin([
      { from: 'app/assets/favicon.ico', to: 'favicon.ivo' }
    ]),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'app/index.html'
    })
  ]
};
