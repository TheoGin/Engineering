const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    page1: "./src/page1",
    page2: "./src/page2",
  },
  // devtool: "source-map",
  output: {
    filename: "[name].[hash:5].js",
  },
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",
      maxSize: 60000, // 分包的基础单位是模块，，如果一个完整的模块超过了该体积，它是无法做到再切割的
      // automaticNameDelimiter: ".", // 默认值~ vendors~page1~page2.59713.js
      // minChunks: 1, // 一个模块被多少个chunk使用时，才会进行分包，默认值 1（只要用到了一次就会进行分包）
      minSize: 0, // 【默认只会分包第三方，若要分自己的，可以配置这个】当分包达到多少字节后才允许被真正的拆分，默认值30000
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2
        }
      }
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:5].css",
      chunkFilename: "common.[hash:5].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["page1"], // 控制 dist/index.html 的引用哪些 script
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index2.html",
      chunks: ["page2"], // 控制 dist/index.html 的引用哪些 script
    }),
  ],
  stats: {
    // colors: false, // 默认为 true
    chunks: false, // chunk {page1} page1.f8230.js (page1) 174 bytes ={vendors~page1~page2}= [entry]  …… 看有那些 chunk
    modules: false, //  [./src/common.js] 27 bytes {page1} [built]   ……  看有那些 module
  },
};

