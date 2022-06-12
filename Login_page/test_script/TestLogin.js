// let expect = require('chai').expect;
let LoginPage = require("../page_objects/LoginPage.js");
// let LoginData = require("../test-data/TestLogin.json");
let LoginData = require("../test-data/TC_002_Login.js");
let LoginVerify = require("../Verify/Login_Page_Verify.js");

describe("Auto Test LOgin Page", function () {
  let pageUrl = "https://bodev.ntx.com.vn/login";
  const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
  const LOGIN_FALSE_NULL_PASS = LoginData.LOGIN_FALSE_NULL_PASS;
  const LOGIN_FALSE_NULL_PHONE = LoginData.LOGIN_FALSE_NULL_PHONE;
  const LOGIN_FALSE_NULL_PHONE_PASS = LoginData.LOGIN_FALSE_NULL_PHONE_PASS;
  const LOGIN_FALSE_ERR_PHONE = LoginData.LOGIN_FALSE_ERR_PHONE;
  const LOGIN_FALSE_ERR_PASS = LoginData.LOGIN_FALSE_ERR_PASS;
  const LOGIN_FALSE_ERR_FORMAT_PHONE = LoginData.LOGIN_FALSE_ERR_FORMAT_PHONE;
  const LOGIN_FALSE_PHONE_UNREGISTERED = LoginData.LOGIN_FALSE_PHONE_UNREGISTERED;

  before("refresh page", function () {
    browser.maximizeWindow();
    LoginPage.openPage(pageUrl);
    // browser.url(pageUrl);
  });
  // beforeEach('Refresh page', function() {

  //     browser.refresh();
  // });

  afterEach("After Each", function () {
    browser.refresh();
  });

  // //Nhập đúng số điện thoại đăng ký, bỏ trống mật khẩu
  it("Nhập đúng số điện thoại đăng ký, bỏ trống mật khẩu", function() {
    LoginPage
      .inputUsername(LOGIN_FALSE_NULL_PASS.username)
      .inputPassword(LOGIN_FALSE_NULL_PASS.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn();
      let currenLoginPassNull = LoginVerify.getPassNullVerif();
      let expectLoginPassNull = "Vui lòng nhập SDT/Mật khẩu."
      expect(currenLoginPassNull).to.equal(expectLoginPassNull,"[ERR] noti sai (Vui lòng nhập SDT/Mật khẩu.)");
    driver.pause(4000);
  });

  //Bỏ trống số điện thoại, nhập đúng mật khẩu
  it("Bỏ trống số điện thoại, nhập đúng mật khẩu ", function () {
    LoginPage
      .inputUsername(LOGIN_FALSE_NULL_PHONE.username)
      .inputPassword(LOGIN_FALSE_NULL_PHONE.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currenLoginPhoneNull = LoginVerify.getPhoneNullVerify()
      let expectLoginPhoneNull = "Vui lòng nhập SDT/Mật khẩu."
      expect(currenLoginPhoneNull).to.equal(expectLoginPhoneNull,"[ERR] noti sai (Vui lòng nhập SDT/Mật khẩu.)")

    driver.pause(4000);
  });

  //Bỏ trống cả số điện thoại và mật khẩu
  it("Bỏ trống cả số điện thoại và mật khẩu", function () {
    LoginPage
      .inputUsername(LOGIN_FALSE_NULL_PHONE_PASS.username)
      .inputPassword(LOGIN_FALSE_NULL_PHONE_PASS.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currentloginPhonePassNull = LoginVerify.getPhonePassNullVerify()
      let expectloginPhonePassNull = "Vui lòng nhập SDT/Mật khẩu."
      expect(currentloginPhonePassNull).to.equal(expectloginPhonePassNull,"[ERR] noti sai (Vui lòng nhập SDT/Mật khẩu.)")

    driver.pause(4000);
  });

  //Nhập số điện thoại không hợp lệ, đúng mật khẩu
  it("Nhập số điện thoại không hợp lệ, đúng mật khẩu", function () {
    LoginPage
      .inputUsername(LOGIN_FALSE_ERR_PHONE.username)
      .inputPassword(LOGIN_FALSE_ERR_PHONE.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currentLoginInvalidPhone = LoginVerify.getInvalidPhoneVerify();
      let expectLoginInvaliPhone = "Số điện thoại chưa đúng định dạng";
      expect(currentLoginInvalidPhone).to.equal(expectLoginInvaliPhone,"[ERR] noti sai (Số điện thoại chưa đúng định dạng)")

    driver.pause(4000);
  });

  //Nhập đúng số điện thoại đã đăng ký, sai mật khẩu
  it("Nhập đúng số điện thoại đã đăng ký, sai mật khẩu", function () {
    LoginPage
      .inputUsername(LOGIN_FALSE_ERR_PASS.username)
      .inputPassword(LOGIN_FALSE_ERR_PASS.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currentLoginWrongPass = LoginVerify.getWrongPassVerify();
      let expecteLoginWrongPass = "Mật khẩu không đúng";
      expect(currentLoginWrongPass).to.equal(expecteLoginWrongPass, "[ERR] noti sai (Mật khẩu không đúng)")
    driver.pause(4000);
  });

  //Nhập số điện thoại là ký tự đặc biệt hoặc chữ cái
  it("Nhập số điện thoại là ký tự đặc biệt hoặc chữ cái", function () {
    LoginPage
      .inputUsername(LOGIN_FALSE_ERR_FORMAT_PHONE.username)
      .inputPassword(LOGIN_FALSE_ERR_FORMAT_PHONE.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currentLoginErrFormatphone = LoginVerify.getErrFormatPhoneVerify();
      let expecteLoginErrFormatphone = "Tài khoản không tồn tại";
      expect(currentLoginErrFormatphone).to.equal(expecteLoginErrFormatphone, "[ERR] noti sai (tài khoản không tồn tại")
    driver.pause(4000);
  });

  //Nhập số điện thoại chưa đăng ký
  it("Nhập số điện thoại chưa đăng ký", function () {
    LoginPage
      .inputUsername(LOGIN_FALSE_PHONE_UNREGISTERED.username)
      .inputPassword(LOGIN_FALSE_PHONE_UNREGISTERED.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currentloginUnregisteredVerify = LoginVerify.getUnregisteredVerify();
      let expecteloginUnregisteredVerify = "Tài khoản không tồn tại";
      expect(currentloginUnregisteredVerify).to.equal(expecteloginUnregisteredVerify, "[ERR] Noti sai (Tài khoản không tồn tại)");
    driver.pause(4000);
  });

  //Nhập đúng số điện thoại và password
  it("Nhập đúng số điện thoại và password", function () {
    LoginPage
      .inputUsername(VALID_LOGIN_CREDS.username)
      .inputPassword(VALID_LOGIN_CREDS.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn()
      let currentloginValidVerify = LoginVerify.getValidLoginVerify();
      let expecteloginValidVerify = "Dashboard";
      expect(currentloginValidVerify).to.equal(expecteloginValidVerify, "[ERR] Welcome text wrong");
    driver.pause(4000);
  });
});
