var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
        { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

// we're building for production
if(process.env.NODE_ENV === 'production'){
  var config = {
    entry: './dist/index.html',
    mode: 'production',
    module: {
      rules: [
        { test: /\.(html)$/, use: { loader: 'html-loader' } }
      ]
    },
    plugins: [
      new UglifyJsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }
}

module.exports = config;
