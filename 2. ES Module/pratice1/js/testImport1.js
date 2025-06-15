// 方式1：
// export const a = 1;

// 方式2：
// const a = 1;
// // export a // Uncaught SyntaxError: Unexpected token 'export'
// export { a };

// 方式3：
const b = 1;
export { b as a };
