const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, '../dev', 'static'),
    filename: "js/bundle.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/styles.css" }),
    new CopyPlugin([{
      from: './templates/*.html', 
      to: '../',
      ignore: ['spa.html', 'base.html']
    }])
  ],
});
