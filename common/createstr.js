function createId() {
    const $leg = 32;
    let str = '';
    let $chart = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let maxPos = $chart.length;
    for (let i = 0; i < $leg; i++) {
        str += $chart.charAt(Math.floor(Math.random() * maxPos))
    }
    return str;
}
module.exports = createId;