const btn = document.querySelector("button");
btn.onclick = async function () {
  // 动态加载
  // import 是ES6的草案
  // 浏览器会使用JSOP的方式远程去读取一个js模块
  // import()会返回一个promise   （* as obj）
  // const { chunk } = await import("lodash-es"); // 该 chunk 默认没有命名
   const { chunk } = await import(/* webpackChunkName:"lodash" */"lodash-es"); // 无法树摇
  // const { chunk } = await import("./util"); // 通过 util 按需导入（export { chunk } from "lodash-es";） 来实现树摇
  const result = chunk([3, 5, 6, 7, 87], 2);
  console.log(result); // [ [ 3, 5 ], [ 6, 7 ], [ 87 ] ]
};

