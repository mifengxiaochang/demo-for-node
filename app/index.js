// "use strict";
const Koa = require("koa");
console.log("--------Koa------");
const app = new Koa();

// const router = require("./routes");
// console.log("--------routes finsh------");
// app.use(router.routes());

// 对于任何请求，app将调用该异步函数处理请求
app.use(async ctx => {
  ctx.body = "Hello Koa2";
});
console.log("--------app use------");
app.listen(4321); //设置监听端口
module.exports = app;
