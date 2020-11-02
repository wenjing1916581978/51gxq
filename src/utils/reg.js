import tip from './tip';
const phoneReg= /^1[345678]\d{9}$/; //手机号码
const telPhoneReg= /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/; //固定电话
const idCard=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //身份证15位和18位
const email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //邮箱

module.exports= {
  phoneReg,
  telPhoneReg,
  idCard,
  email,
}
