const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CmpressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CmpressionWebpackPlugin({
      test: /\.js/, // 需要压缩 匹配文件
      minRatio: 0.5, // 打包之后文件的压缩比例 是原来文件大小的一半，才会进行压缩
    }),
  ],
};

