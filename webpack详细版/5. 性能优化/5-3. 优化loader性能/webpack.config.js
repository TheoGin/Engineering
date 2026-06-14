module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "cache-loader", // 缓存 loader
            options: {
              cacheDirectory: "./cache", // 缓存存放目录
            },
          },
          // "thread-loader", // 多线程 loader
          "babel-loader",
        ],
      },
    ],
  },
};

