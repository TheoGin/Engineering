/* 
{
  a: 1;
}

书写一个 ESM 模块，查阅文档，导入上面的模块，你可以写出多少中导入的方式
*/
// 方式1：
// import { a } from './testImport1.js'
// console.log(a); // 1

// 方式2：
// import * as t from './testImport1.js'
// console.log(t.a); // 1

// 方式3：
import {a as temp} from "./testImport1.js";
console.log(temp); // 1
