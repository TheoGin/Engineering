import $ from "jquery";
// import { chunk } from "lodash-es"; // 按需导入
// import _ from "lodash"; // 默认导入

$(".red").click(async function () {
  const { chunk } = await import("./util"); // 懒加载
  console.log(chunk([1, 3, 4, 67], 2));
  // console.log(_.chunk([1, 3, 4, 67], 2)); // 默认导入
});

