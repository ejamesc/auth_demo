const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./templates/spa.html",
      filename: "../templates/spa.html"
    })
  ],
  entry: './src/js/index.js',
  mode: 'none'
};
