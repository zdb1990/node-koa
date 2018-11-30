const db = require('./../config/createpool');
const Data = require('./../common/common');
exports.add = async(ctx, next) => {
    let query = () => {
        return new Promise((reject, reslove) => {
            db.query("SELECT * FROM `add_user`", (err, data) => {
                console.log(data, ctx.request.body);
            })
        })
    }
    let result = await query();
}