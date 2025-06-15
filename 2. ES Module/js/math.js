/* export function sum(a, b) {
  return a + b;
}

export const isOdd = (n) => n % 2 !== 0; */

function sum(a, b) {
  return a + b;
}

function isOdd(n) {
  return n % 2 !== 0;
}

export { 
  // sum: sum, // 应为“,”。ts(1005) ⚠ Error (TS1005) 具名导出的花括号不是对象
  sum,
  isOdd
 };
