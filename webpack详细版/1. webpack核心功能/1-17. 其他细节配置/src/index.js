// require("fs"); // target: "web", 从 node_modules找，发现没找到，就会 Module not found: Error: Can't resolve 'fs'
let fs = require("fs");
console.log(fs);
/**
 * {
 *   appendFile: [Function: appendFile],
 *   ......
 * }
 */

module.exports = fs;