// 入口模块
// 路径必须以./或../开头，后缀不写默认为js
const math = require('./math');
console.log(math.sum(1, 2));

// 有缓存，只会运行一次
require('./math');
require('./math');
require('./math');
require('./math');
require('./math');
require('./math');
require('./math');