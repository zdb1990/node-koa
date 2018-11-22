//登录
const route = require('koa-router')();
const config = require('./../config/config.js');
const mysql = require('mysql');
const db = mysql.createPool(config);
const Data = require('./../common/common.js');
route.get('/login', async(ctx, next) => {
    await db.query("SELECT * FROM `test-table`", function(err, data) {
        if (!err) {
            console.log(ctx.request.body);
            ctx.body = Data.handelData(data);
            console.log(ctx.body);
        } else {
            console.log(err);
        }
    });
})
module.exports = route;