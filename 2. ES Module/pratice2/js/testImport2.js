// // 1. 仅导入 default
// import m from "./testExport2.js";
// console.log(m); // {a: 1, b: 2}

// // 2. 仅导入 a 和 b
// import { a, b } from "./testExport2.js";
// console.log(a, b); // 1 2

// 3. 同时导入 default、a、b
// import { a, b }, m from "./testExport2.js"; // Uncaught SyntaxError: Unexpected token ',' 默认导出要写前面
import m, { a, b } from "./testExport2.js";
console.log(m, a, b); // {a: 1, b: 2} 1 2

// 4. 导入整个模块对象
/* import("./testExport2.js").then((m) => {
  console.log(m); // Module {Symbol(Symbol.toStringTag): 'Module'}
}); */
import * as moduleObj from  "./testExport2.js";
console.log(moduleObj);

// 5. 不导入任何东西，仅运行一次该模块
import "./testExport2.js";
