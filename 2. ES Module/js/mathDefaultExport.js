/* function sum(a, b) {
  return a + b;
}

const isOdd = (n) => n % 2 !== 0;

// 默认导出的花括号是对象
export default {
  sum: sum,
  isOdd,
}; */

// 整个模块里边默认导出只能有一次，不能反复的默认导出它不是覆盖关系，它只能写一次，写多了会报错
// Uncaught SyntaxError: Unexpected token 'const' (at mathDefaultExport.js:17:16)
/* export default function sum(a, b) {
  return a + b;
}

export default const isOdd = (n) => n % 2 !== 0; */

// 写法二：
export default {
  sum: function(a, b) {
    return a + b;
  },

  isOdd: (n) => n % 2 !== 0,
};
