const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const DeepScope = require("webpack-deep-scope-plugin").default;

const MiniCss = require("mini-css-extract-plugin");
// purge
const Purgecss = require("purgecss-webpack-plugin");

const path = require("path");
const globAll = require("glob-all");
const srcAbs = path.resolve(__dirname, "src"); // 得到src的绝对路径
const htmlPath = path.resolve(__dirname, "public/index.html");
const paths = globAll.sync([`${srcAbs}**/*.js`, htmlPath]);

module.exports = {
  mode: "production",
  module: {
    rules: [{ test: /\.css$/, use: [MiniCss.loader, "css-loader"] }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DeepScope(),
    new MiniCss(),
    new Purgecss({
      // 该插件会正则匹配指定绝对路径的文件，若匹配得到，则不会删除，否则会删除
      paths
    })
  ]
};

