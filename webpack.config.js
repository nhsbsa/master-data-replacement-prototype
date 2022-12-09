/* jshint esversion: 6 */
const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');
const outputDir = path.resolve(__dirname, "build");

alert('hi from config')

module.exports = {
  mode: "development",
  entry: [
    path.resolve(__dirname, "./public/js/application.js")
  ],
  resolve: {
    alias: {
      // NOTE: Required to load jQuery Plugins into the *global* jQuery instance:
      'jquery': require.resolve('jquery')
    }
  },
  devtool: "inline-source-map",
  output: {
    path: outputDir,
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/i, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(?:png|jpe?g|svg|gif)$/i, use: [ { loader: 'url-loader', options: {
            limit: 10000  // Inline images smaller than 10kb as data URIs
          } } ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Make jQuery / $ available in every module:
      $: 'jquery',
      jQuery: 'jquery',
      // NOTE: Required to load jQuery Plugins into the *global* jQuery instance:
      jquery: 'jquery'
    })
  ]
};
