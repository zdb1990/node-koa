//登录
const route = require('koa-router')();
const controller = require("./../controllers/signin.js"); //引入登录controllders
//获取登录接口
route.post('/login', controller.signin)
module.exports = route;