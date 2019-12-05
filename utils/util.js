const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const random = function generateMixed(n) {
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}

var notNull = function (val) {
  if (!val) return false;
  return true;
}
// 验证邮箱
var checkEmail = function (value) {
  let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (reg.test(value)) {
    return true;
  }
  return false;
}
// 验证手机号码
var checkPhone = function (phone) {
  if (!(/^1[23456789]\d{9}$/.test(phone))) {
    return false
  }
  return true
}



module.exports = {
  random: random,
  notNull: notNull,
  checkEmail: checkEmail,
  checkPhone: checkPhone
}