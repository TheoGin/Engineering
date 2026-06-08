/*

 ./ :
 1. 模块化代码中，比如require("./")，表示当前js文件所在的目录
 2. 在路径处理中，"./"表示node运行目录

 __dirname: 所有情况下，都表示当前运行的js文件所在的目录，它是一个绝对路径

 */

//该对象提供了大量路径处理的函数

var path = require("path") //导出了一个对象

// ` ./ ` 会随着运行 node 的目录而改变
var relativeResult = path.resolve("./", "child", "abc", "123");
console.log('relativeResult: ', relativeResult);

// __dirname 是静态的
var dirNameResult = path.resolve(__dirname, "src");
console.log('__dirname: ', __dirname);
console.log('__dirname result: ', dirNameResult);

/**
 * PS D:\webpack\1. webpack核心功能\1-9. 入口和出口\node> node .\pathtest.js
 * relativeResult:  D:\webpack\1. webpack核心功能\1-9. 入口和出口\node\child\abc\123
 * __dirname:  D:\webpack\1. webpack核心功能\1-9. 入口和出口\node
 * __dirname result:  D:\webpack\1. webpack核心功能\1-9. 入口和出口\node\src
 */

/**
 * PS D:\webpack\1. webpack核心功能\1-9. 入口和出口> node .\node\pathtest.js
 * relativeResult:  D:\webpack\1. webpack核心功能\1-9. 入口和出口\child\abc\123
 * __dirname:  D:\webpack\1. webpack核心功能\1-9. 入口和出口\node
 * __dirname result:  D:\webpack\1. webpack核心功能\1-9. 入口和出口\node\src
 */