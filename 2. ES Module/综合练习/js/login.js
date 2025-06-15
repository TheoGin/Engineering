import * as doms from "./doms.js";
// import { login as apiLogin } from "./api/user.js"; // 如果怕重名可以取别名
import { login } from "./api/user.js";

// 导出一个函数，调用该函数，会自动获取文本框的值完成登录

// 用于记录是否正在登录，防止频繁点击
let isLogining = false;

// 默认导出可以不取名字
export default async function () {
  if (isLogining) {
    return; //正在登录中
  }
  // 开始处理登录
  isLogining = true;
  doms.btnSubmit.value = "登录中...";
  // 1.获取当前的账号密码
  const userName = doms.userName.value;
  const userPassword = doms.userPassword.value;
  /* if (userName.trim() === "") {
    alert("请输入账号");
    return;
  }
  if (userPassword.trim() === "") {
    alert("请输入密码");
    return;
  } */
  // 2. 做一些简单的验证
  if (!userName) {
    alert("请输入账号");
    return;
  }
  if (!userPassword) {
    alert("请输入密码");
    return;
  }
  // 3. 远程请求
  var resp = await login(userName, userPassword);

// 有值表示登录成功，拿到用户信息
  if (resp) {
    alert(`登录成功，欢迎您! ${resp.nickname}`);
  } else {
    alert("登录失败");
  }
  // 结束处理登录
  isLogining = false;
  doms.btnSubmit.value = "登录";
}
