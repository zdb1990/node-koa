const koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session'); //将session存到数据库
const config = require('./config/config.js');
const router = require('koa-router');
const static = require('koa-static');
const cors = require('koa-cors'); //解决跨域
const server = new koa();
//解析post数据
server.use(bodyParser());
//配置session中间件
server.use(session({
    key: 'USER_SID',
    store: new MysqlStore(config) //配置session存入mysql
}));
server.use(cors());
server.use(require('./routers/login.js').routes()); //登录路由
//读取静态文件
server.use(static('./www'));
server.listen(8080);