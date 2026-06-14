module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    // noParse: /jquery/, // 打包结果还会有 jquery ，但是不会进行 抽象语法树分析、拿到 dependencies、替换依赖函数 require，直接跳过这三个步骤
    noParse: /test/,
  },
};
