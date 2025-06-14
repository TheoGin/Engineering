// 导入一般会写在第一行，这样知道导入了哪些东西
const config = require("./config.js");


/**
 * 该函数会做以下两件事：
 * 1. console.clear() 清空控制台
 * 2. 读取config.js中的text配置，打印开始位置到index位置的字符
 * @param {number} index 索引，而不是长度
 */
function print(index) {
  console.clear();
  //   console.log(config.text.slice(0, index));
  console.log(config.text.substring(0, index + 1));
}

module.exports = print;
