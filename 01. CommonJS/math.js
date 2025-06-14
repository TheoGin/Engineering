// 工具模块，各种数学函数

console.log("math module run");

function isOdd(n) {
  return n % 2 !== 0;
}

function sum(a, b) {
  return a + b;
}

module.exports = {
  isOdd,
  sum,
};
