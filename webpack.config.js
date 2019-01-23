const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, 'examples/index.js'),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },

  plugins: [htmlWebpack],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    port: 3001,
  },
};