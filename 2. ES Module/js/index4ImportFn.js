// 1. 不使用import函数写法
/* import math from "./mathDefaultExport.js";

setTimeout(() => {
  console.log(math.isOdd(2));
}, 1000); */

/* setTimeout(() => {
  import math from "./mathDefaultExport.js"; // Uncaught SyntaxError: Unexpected identifier 'math' 导入声明只能在模块的顶层使用
  console.log(math.isOdd(2));
}, 1000); */

// 2. 使用import函数写法
setTimeout(function () {
  var math = import("./mathDefaultExport.js");
  // 为什么要返回promise呢？因为它要去加载这个文件，加载文件是需要一段时间的。那为什么node js不需要呢？因为node js是在服务器环境里边
  console.log(math); // Promise {<pending>}
}, 1000);

setTimeout(async () => {
  import("./mathDefaultExport.js")
    .then((moduleObj) => {
      console.log(moduleObj); // Module {Symbol(Symbol.toStringTag): 'Module'  default: {isOdd: (n) > n % 2 !== 0,sum: ƒ sum(a, b)}}
      var math = moduleObj.default;
      console.log(math.isOdd(3));
    })
    .catch((err) => {
      console.log(err);
    });
}, 1000);

setTimeout(async () => {
  var moduleObj = await import("./mathDefaultExport.js");
  console.log(moduleObj); // Module {Symbol(Symbol.toStringTag): 'Module'  default: {isOdd: (n) > n % 2 !== 0,sum: ƒ sum(a, b)}}
  var math = moduleObj.default;
  console.log(math.isOdd(3));
}, 1000);
