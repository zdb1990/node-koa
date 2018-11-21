//登录
const route = require('koa-router')();
const config = require('./../config/config.js');
const mysql = require('mysql');
const db = mysql.createPool(config);
const Data = require('./../common/common.js');
route.post('/login', async(ctx, next) => {
    await db.query("SELECT * FROM `test-table`", function(err, data) {});
})
module.exports = route;