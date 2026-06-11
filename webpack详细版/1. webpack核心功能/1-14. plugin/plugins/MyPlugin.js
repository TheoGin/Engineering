module.exports = class MyPlugin {
  apply(compiler) {
    //在这里注册事件，类似于window.onload  $(function(){})
    compiler.hooks.done.tap("MyPlugin-done", function (compilation) { // done钩子: 在 compilation 完成时执行（初始化完成，编译之前？？？）。这个钩子 不会 被复制到子编译器。
      // 事件处理函数
      console.log("编译完成");
    });
  }
};
