const db = require('./../config/createpool');
const Data = require('./../common/common');
const md5 = require('md5'); // 密码加密;
const createId = require('./../common/createstr'); //随机生成32位id
//查找用户
const select=(username)=>{
    return new Promise((reslove,reject)=>{
        console.log(`${username}`);
        db.query(`SELECT * FROM add_user WHERE user='${username}' `,(err,data)=>{
            if(!err){
                let resData=Data.handelData(data);
                reslove(resData);
            }else{
               reject(err);
            }
        })
    })
}
//注册用户
exports.add=async(ctx,next)=>{
    let user={
        name:ctx.request.body.user,
        pass:md5(ctx.request.body.pass),
        id:createId(),
    }
    let dbres=await select(user.name);
    if(dbres.length>0){
       ctx.status=200;
       ctx.body={
           msg:'user exist',
           success:false
       }
    }else{
        await new Promise((reslove,reject)=>{
            console.log(1);
            db.query(`INSERT INTO add_user (user, pass, id) VALUES ('${user.name}', '${user.pass}', '${user.id}');`,(err,data)=>{
                if(!err){
                    reslove()
                }else{
                    reject(err);
                }
           });
        })
        ctx.status = 200;
        ctx.body={success:true,status:500,msg:'注册成功'};
    };
}
