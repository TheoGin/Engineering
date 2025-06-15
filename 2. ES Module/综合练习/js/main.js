// js入口模块
import login from './login.js'

// dom抽离到单独模块
/* var dom = {
  userName: document.getElementById("userName"),
  userPassword: document.getElementById("userPassword"),
  btnSubmit: document.getElementById("btnSubmit"),
}; */
/* import { btnSubmit } from "./doms.js";
btnSubmit.onclick = async function (e) {
  e.preventDefault();
  login();
}; */

import { formContainer } from "./doms.js";

// 给整个form元素绑定事件
formContainer.onsubmit = async function (e) {
  e.preventDefault(); // 阻止默认刷新行为
  login();
};
