const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html'
});

const baseConfig = require('../../../webpack.config.js');

module.exports = {
  ...baseConfig,

  entry: path.join(__dirname, 'examples/src/index.js'),

  output: {
    path: path.join(__dirname, 'examples/dist', 'index.js'),
  },

  plugins: [htmlPlugin],
};