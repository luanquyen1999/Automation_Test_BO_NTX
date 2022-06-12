//Nhập đúng số điện thoại và password
const VALID_LOGIN_CREDS = {
  username: "0948178476",
  passwword: "Qt*10081999",
};
///Nhập đúng số điện thoại đăng ký, bỏ trống mật khẩu
const LOGIN_FALSE_NULL_PASS = {
  username: "0948178476",
  passwword: "",
};
///Bỏ trống số điện thoại, nhập đúng mật khẩu
const LOGIN_FALSE_NULL_PHONE = {
  username: "",
  passwword: "Qt*10081999",
};
///Bỏ trống cả số điện thoại và mật khẩu
const LOGIN_FALSE_NULL_PHONE_PASS = {
  username: "",
  passwword: "",
};
///Nhập số điện thoại không hợp lệ , đúng mật khẩu
const LOGIN_FALSE_ERR_PHONE = {
  username: "09435",
  passwword: "Qt*10081999",
};
///Nhập đúng số điện thoại đã đăng ký, sai mật khẩu
const LOGIN_FALSE_ERR_PASS = {
  username: "0948178476",
  passwword: "Qt*10081999/",
};
///Nhập số điện thoại là ký tự đặc biệt hoặc chữ cái
const LOGIN_FALSE_ERR_FORMAT_PHONE = {
  username: "0948784e/",
  passwword: "Qt*10081999",
};
///Nhập số điện thoại chưa đăng ký
const LOGIN_FALSE_PHONE_UNREGISTERED = {
  username: "0948178479",
  passwword: "Qt*10081988",
};
exports.VALID_LOGIN_CREDS = VALID_LOGIN_CREDS;
exports.LOGIN_FALSE_NULL_PASS = LOGIN_FALSE_NULL_PASS;
exports.LOGIN_FALSE_NULL_PHONE = LOGIN_FALSE_NULL_PHONE;
exports.LOGIN_FALSE_NULL_PHONE_PASS = LOGIN_FALSE_NULL_PHONE_PASS;
exports.LOGIN_FALSE_ERR_PHONE = LOGIN_FALSE_ERR_PHONE;
exports.LOGIN_FALSE_ERR_PASS = LOGIN_FALSE_ERR_PASS;
exports.LOGIN_FALSE_ERR_FORMAT_PHONE = LOGIN_FALSE_ERR_FORMAT_PHONE;
exports.LOGIN_FALSE_PHONE_UNREGISTERED = LOGIN_FALSE_PHONE_UNREGISTERED;
