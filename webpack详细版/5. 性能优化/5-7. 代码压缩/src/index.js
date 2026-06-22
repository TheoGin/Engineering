import "./index.css";

const a = "abc";
const b = "bcd";
const c = a + b;

if (true) { // dead code
  console.log(a);
} else {
  console.log(b);
}