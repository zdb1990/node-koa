const config = require("./../config/config.js");
const mysql = require("mysql");
const db = mysql.createPool(config);
const Data = require("./../common/common.js");
exports.signin = async (ctx, next) => {
	let query = () => {
		return new Promise((resolve, reject) => {
			db.query("SELECT * FROM `test-table`", (err, data) => {
				if (err) {
					reject({
						message: err.message
					})
				} else {
					resolve(Data.handelData(data))
				}

			});
		});
	}
	let result = await query();
	ctx.body = result
	console.log(result);
}