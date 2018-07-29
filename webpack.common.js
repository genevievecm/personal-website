const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  }
};
