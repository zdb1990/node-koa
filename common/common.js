module.exports = {
    //去掉mysql数据返回带有RowDataPacket字段.
    handelData(data) {
        if (!data) return;
        let dbdata = JSON.stringify(data);
        dbdata = JSON.parse(dbdata);
        return dbdata;
    }
};