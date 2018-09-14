"use strict";
const Router = require("koa-router");

//const areaController = require("./controllers/area");
console.log("--------routes------");
const router = new Router();
router.get("/", (ctx, next) => {
  ctx.body = "Hello Koa";
});
//router.get("./area", areaController.addData);

module.exports = router;
