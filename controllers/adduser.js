const db = require('./../config/createpool');
const Data = require('./../common/common');
const md5 = require('md5'); // 密码加密;
const createId = require('./../common/createstr'); //随机生成32位id
exports.add = async(ctx, next) => {
        // let query = () => {
        console.log(createId())
            // return new Promise((reject, reslove) => {
            //     db.query("SELECT * FROM `add_user`", (err, data) => {
            //         let req = ctx.request.body;
            //         let pass = md5(ctx.request.body.pass);
            //         let id = createId();
            //         //加密密码
            //         if (!err) {
            //             console.log(data, req);
            //             if (data.length <= 0) {
            //                 //加密 用户密码
            //                 db.query("INSERT INTO add_user (user,pass,id) VALUES (req.user,pass,id)", (err, res) => {
            //                     if (!err) {
            //                         console.log(err)
            //                     } else {
            //                         console.log(res);
            //                     }
            //                 })
            //             } else {

        //             }
        //         } else {
        //             reject(err);
        //         }
        //     })
        // })
    }
    // let result = await query();
}