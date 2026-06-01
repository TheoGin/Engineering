// import $ from "../node_modules/jquery/dist/jquery.js"; // Uncaught SyntaxError: The requested module '../node_modules/jquery/dist/jquery.js' does not provide an export named 'default' (at b.js:1:8)
// require("jquery"); // b.js:2 Uncaught ReferenceError: require is not defined
console.log("b");
export default "b";
