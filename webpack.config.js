const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/app.js',
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
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },{
        test: /\.scss$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$$/, loader: 'file-loader'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'
      }
    ]
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
      inject: 'head',
      template: 'app/index.html'
    })
  ]
};
