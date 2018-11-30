const route = require('koa-router')();
const controller = require('./../controllers/adduser.js');
route.post('/add_user', controller.add);

module.exports = route;