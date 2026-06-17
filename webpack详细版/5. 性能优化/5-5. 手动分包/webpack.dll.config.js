const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery"],
    lodash: ["lodash"]
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]" // 每个bundle暴露的全局变量名，否则Uncaught ReferenceError: jquery is not defined
  },
  plugins: [
    new webpack.DllPlugin({
      // webpack 在打包过程中需要用的，若没有配置会 Error: Cannot find module './dll/jquery.manifest.json'
      path: path.resolve(__dirname, "dll", "[name].manifest.json"),
      name: "[name]"
    })
  ]
};

