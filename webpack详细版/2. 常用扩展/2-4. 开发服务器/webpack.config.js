const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].[chunkhash:5].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      //代理规则
      '/api': {
        target: 'https://study.duyiedu.com', // 注意：这里和课堂的转发地址不一样，课堂上的地址已弃用
        changeOrigin: true, //更改请求头中的host和origin
      },
    },
  },
  stats: {
    modules: false,
    colors: true,
  },
};
