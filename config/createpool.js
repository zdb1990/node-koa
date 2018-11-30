const config = require("./../config/config.js");
const mysql = require("mysql");
const db = mysql.createPool(config);
module.exports = db;