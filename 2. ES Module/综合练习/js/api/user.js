const URL = "https://study.duyiedu.com/api/user/login";

/**
 * 登录
 * @param {*} userName
 * @param {*} userPassword
 * @returns
 */
export async function login(userName, userPassword) {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      loginId: userName,
      loginPwd: userPassword,
    }),
  }).then((resp) => {
    // console.log(resp); // Response {type: 'cors', url: 'https://study.duyiedu.com/api/user/login', redirected: false, status: 200, ok: true, …}
    return resp.json();
  });
  console.log("@", res.data);

  return res.data;
}

/* export async function login(userName, userPassword) {
  const data = new FormData(); // 学完再看
  data.append("loginId", userName);
  data.append("loginPwd", userPassword);
  const res = await fetch(URL, {
    method: "POST",
    body: data,
  }).then((resp) => {
    return resp.json();
  });
  console.log("@", res);

  return res.data;
}
 */
