const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    filename: "[name].[hash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin({
      // 要清除的文件或目录
      // 排除掉dll目录本身和它里面的文件
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"], // "!dll", "!dll/*"：不清除 dll目录本身和它里面的文件
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 模板文件
    }),
    // 下面不配置好像也正常？？？
    new webpack.DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json"),
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json"),
    }),
  ],
};

