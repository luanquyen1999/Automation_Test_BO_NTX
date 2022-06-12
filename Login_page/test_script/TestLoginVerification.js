let expect = require('chai').expect;
let LoginPage = require("../page_objects/LoginPage.js");
const { getSecureAreaText } = require("../page_objects/SecureAreaPage.js");
let LoginData = require("../test-data/TestLogin.json");

describe("Auto Test LOgin Page", function () {
  let pageUrl = "https://bodev.ntx.com.vn/login";

  before("refresh page", function () {
    browser.url(pageUrl);
  });

  it("check Login page Title", function() {
   LoginPage.verifyLoginTitle;
  });
  it('Login',()=>{
    LoginPage
    .inputUsername(LoginData.accountnotregister.username)
    .inputPassword(LoginData.accountnotregister.passwword)
    .clickOnLoginBtn();

  })

});
