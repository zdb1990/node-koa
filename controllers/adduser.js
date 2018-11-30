const db = require('./../config/createpool');
const Data = require('./../common/common');
const md5 = require('md5'); // 密码加密;
const createId = require('./../common/createstr'); //随机生成32位id
exports.add = async(ctx, next) => {
    let query = () => {
        let req = ctx.request.body;
        let password = md5(ctx.request.body.pass);
        let id = createId();
        return new Promise((reject, reslove) => {
            console.log(req, password, id)
            db.query(`SELECT * FROM add_user`, (err, data) => {
                //加密密码
                if (!err) {
                    console.log(data, req);
                    if (data.length <= 0) {
                        //加密 用户密码
                        db.query(`INSERT INTO add_user (user, pass_word, id) VALUES ('${req.user}', '${password}', '${id}');`, (err, res) => {
                            if (!err) {
                                console.log(res);
                            } else {
                                console.log(err);
                            }
                        })
                    } else {

                    }
                } else {
                    reject(err);
                }
            })
        })
    }
    let result = await query();
}