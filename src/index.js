module.exports = function reverse (n) {
    var len = n.toString().length;
    var num = n.toString();
    var newNum = [];
    var counter = 0;
    for (var i = len - 1; i >= 0; i--) {
        newNum[counter] = num[i];
        counter++;
    }
    return newNum.join("");
}
