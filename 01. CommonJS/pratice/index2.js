const delay = require("./delay");

async function run() {
  console.log(1);
  await delay(1000);
  console.log(2);
}
run();
