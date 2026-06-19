const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home: "./src/index.js",
    a: "./src/a.js",
  },
  output: {
    filename: "scripts/[name].[chunkhash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "home.html",
      chunks: ["home"], // 多个入口时， 可以控制 dist/index.html 的引用哪些 script，否则默认会引用各个入口的 js 文件
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "a.html",
      chunks: ["a"],
    }),
  ],
};
