"use strict";
module.exports = {
  addData: async ctx => {
    const { Area } = ctx.orm();
    const { name, id, gender } = ctx.request.body;

    // 如果不想使用原始查询结果，可以第二个可选参数中传一个type参数，并指定查询的类型。设置后，sequelize会对结果进行格式化：
    //sequelize.query('SELECT...', { type: sequelize.QueryTypes.SELECT }).then(function (results) {
    // SELECT query - use then
    //})
    const result = await Area.findOrCreate({
      where: { key },
      defaults: { name, id, gender }
    }).spread((cfg, created) => {
      //spread扩展操作符用于返回结果 返回结果数组 一个包含元数据
      if (created) return cfg;
      else {
        return cfg.update({ name, id, gender }).then(() => cfg);
      }
    });

    console.log(result);
    ctx.res.ok(rst, "success");
  }
};
