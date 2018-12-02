const db = require("./../config/createpool.js");
const Data = require("./../common/common.js");
const md5 = require('md5');
const createId=require('./../common/createstr');
//登录
login=(username)=>{
   return new Promise((reslove,reject)=>{
       //查找用户名一样的用户
      db.query(`SELECT * FROM user WHERE user='${username}'`,(err,data)=>{
          if(!err){
              let resData=Data.handelData(data);
              reslove(resData);
          }else{
              reject(err);
          }
      })
   });
};
exports.signin = async(ctx, next) => {
    let user={
        name:ctx.request.body.user,
        pass:md5(ctx.request.body.pass)
    }
    let dbres=await login(user.name);
    if(dbres.length>0){
        if(user.name===dbres[0].user&&user.pass===dbres[0].pass){
            ctx.status=200;
            //设置session
            ctx.session.sess = createId();
            ctx.body={
                msg:'Landing successfully',
                success:true,
                session:ctx.session.sess
            }
            console.log(ctx.body);
        }else{
            ctx.status=401;
            ctx.body={
                msg:'ERROR Incorrect username or password',
                success:false
            }
        }
    }else{
        ctx.status=401;
        ctx.body={
            msg:'user does not exist',
            success:false,
        }
    }
    console.log(dbres);
}