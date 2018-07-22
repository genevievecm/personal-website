var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

//for production
//NODE_ENV to production

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
  plugins: [new HtmlWebpackPlugin({
      template: 'app/index.html'
  })]
};

// we're building for production
if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
