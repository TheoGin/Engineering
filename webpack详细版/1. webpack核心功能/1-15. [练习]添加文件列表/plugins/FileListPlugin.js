module.exports = class FileListPlugin {

  constructor(filename = "filelist.txt") {
    this.filename = filename;
  }

  apply(compiler) {
    // emit钩子：输出 asset 到 output 目录之前执行。这个钩子 不会 被复制到子编译器。回调参数：compilation
    // "FileListPlugin" 名字随意
    compiler.hooks.emit.tap("FileListPlugin", complation => {
      // console.log('complation.assets: ', complation.assets);
      /** 每个文件会有 source() 和 size() 方法
       *   complation.assets: {
       *     'main.js': ConcatSource { children: [Array] },
       *     'main.js.map': RawSource {
       *       _value: `{"version":3,"sources":["webpack:///webpack/bootstrap","webpack:///./src/index.js"],"names":[],……`
       *     }
       *   },
       */
      var fileList = [];
      for (const key in complation.assets) { // 对象遍历
        var content = `【${ key }】
大小：${ complation.assets[key].size() / 1000 }KB`;
        fileList.push(content);
      }

      var str = fileList.join("\n\n");
      complation.assets[this.filename] = {
        // 每个文件会有 source() 和 size() 方法
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
};
