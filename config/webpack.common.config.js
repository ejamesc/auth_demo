const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./templates/spa.html",
      filename: "../templates/spa.html"
    }),
    new HtmlPlugin({
      inject: false,
      template: "./templates/base.html",
      filename: "../templates/base.html"
    })
  ],
  entry: "./src/js/index.js",
  mode: "none"
};
