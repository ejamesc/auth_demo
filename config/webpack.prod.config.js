const path         = require('path');
const Merge        = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, '../dist', 'static'),
    filename: 'js/bundle-[contenthash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/styles-[contenthash].css" })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin({})]
  }
});
