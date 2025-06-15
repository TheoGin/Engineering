// import { sum } from './math' // GET http://127.0.0.1:5500/2.%20ES%20Module/js/math net::ERR_ABORTED 404 (Not Found)
// import { sum } from 'math.js' // Uncaught TypeError: Failed to resolve module specifier "math.js". Relative references must start with either "/", "./", or "../". net::ERR_ABORTED 404 (Not Found)
import { sum } from "./math.js"; // 注：此处花括号不是解构！！！

console.log(sum); // ƒ sum(a, b) {   return a + b; }
console.log(sum(1, 2));
