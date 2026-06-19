var path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  target: "node",
  output: {
    // library: "$", // jquery
    library: "abc",
    // libraryTarget: "window",
    libraryTarget: "var",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  /* externals: { // 来自于外部 CDN
    jquery: "$",
    lodash: "_",
  }, */
  stats: {
    // colors: false,
    modules: false, // [./src/index.js] 270 bytes {index} [built];    [fs] external "fs" 42 bytes {index} [built]     看有那些 chunk
    hash: false, // 是否显示 Hash: d3bd56e825500c0c8ae3
    builtAt: false, // 是否显示 Built at: 2026/06/19 10:00:30
  },
};
