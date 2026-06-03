// 注意：这里和课堂的转发地址不一样，课堂上的地址已弃用
const url = `/api/herolist`;
fetch(url)
  .then((resp) => resp.json())
  .then((resp) => {
    console.log(resp);
  });
