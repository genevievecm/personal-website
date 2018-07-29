const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

if(process.env.NODE_ENV === 'production'){
  module.exports = merge(common, {
    mode: 'production',
    optimization: {
      minimizer: [
        new UglifyJsPlugin()
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: 'app/index.html',
        favicon: 'app/favicon.ico'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  });
}else{
  console.log('Build has failed.')
}
