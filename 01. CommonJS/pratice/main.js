const config = require("./config.js");
const print = require("./print.js");
const delay = require("./delay.js");

/**
 * 运行该函数，会逐字打印config.js中的文本
 * 每个字之间的间隔在config.js已有配置
 */
async function run() {
  /* for (var i = 0; i < config.text.length; i++) {
    console.log(config.text[i]);
    await delay(config.wordDuration);
  } */
  for (var i = 0; i < config.text.length; i++) {
    print(i);
    await delay(config.wordDuration);
  }
}

run();
