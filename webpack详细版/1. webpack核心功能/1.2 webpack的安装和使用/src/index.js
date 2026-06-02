require("./a")
console.log("hello webpack");

/**
 * > npx webpack
 * Hash: b668abf01872a1999152
 * Version: webpack 4.47.0
 * Time: 1233ms
 * Built at: 2026/06/02 10:09:26
 *   Asset      Size  Chunks             Chunk Names
 * main.js  86.3 KiB       0  [emitted]  main
 * Entrypoint main = main.js
 * [1] ./src/index.js 46 bytes {0} [built]
 * [2] ./src/a.js 40 bytes {0} [built]
 * [3] ./src/b.js + 1 modules 132 bytes {0} [built]
 *     | ./src/b.js 39 bytes [built]
 *     | ./src/c.js 88 bytes [built]
 *     + 1 hidden module
 *
 * WARNING in configuration
 * The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
 * You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
 *
 * 会有警告，因为没有设置mode，所以会默认为production。
 */

/**
 * > npx webpack --mode=development
 * Hash: 4b7869e54a0eaed2be7e
 * Version: webpack 4.47.0
 * Time: 181ms
 * Built at: 2026/06/02 10:12:20
 *   Asset     Size  Chunks             Chunk Names
 * main.js  321 KiB    main  [emitted]  main
 * Entrypoint main = main.js
 * [./src/a.js] 40 bytes {main} [built]
 * [./src/b.js] 38 bytes {main} [built]
 * [./src/c.js] 88 bytes {main} [built]
 * [./src/index.js] 952 bytes {main} [built]
 *     + 1 hidden module
 */