// let expect = require('chai').expect;
let LoginPage = require("../page_objects/LoginPage.js");
// const { getSecureAreaText } = require("../page_objects/SecureAreaPage.js");
let LoginData = require("../test-data/TC_002_Login.js");
let CreateBillFile = require("../page_objects/CreateBillFile.js");
let CreateBillFilelVerify = require("../Verify/Create_Bill_File_Verify.js");
// const { Driver } = require("selenium-webdriver/chrome");

describe("Auto Test LOgin Page", function () {
  const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
  let pageUrl = "https://bodev.ntx.com.vn/login";
  before("refresh page", function () {
    browser.maximizeWindow();
    LoginPage.openPage(pageUrl);
    LoginPage.inputUsername(VALID_LOGIN_CREDS.username)
    .inputPassword(VALID_LOGIN_CREDS.passwword)
      .clickOnEyeBtn()
      .clickOnLoginBtn();
    CreateBillFile
    .clickOnCreatBillMenu()
    .clickOnCreatBillExcel();
  });

  afterEach("After Each", function () {
    browser.refresh();
  });
  it("Tạo đơn từ file không chọn địa chỉ gửi", function () {
    CreateBillFile
      .clickBtnImportExcel()
      .clickInputExcelDecent()
      .clickUploadFile()
      .clickTabSuccess()
      .clickSeleceBill()
      .clickUploadBill()
      let currenCreatefileNullAddress = CreateBillFilelVerify.Null_address_file_verify();
    let expectCreatefileNullAddress = "Vui lòng chọn địa chỉ gửi"
    expect(currenCreatefileNullAddress).to.equal(expectCreatefileNullAddress,"[ERR] noti sai (Vui lòng chọn địa chỉ gửi)");
    driver.pause(3000);
  });
 ////////////////////////////////Tạo đơn từ file không chọn đơn////////////////////
  it("Tạo đơn từ file không chọn đơn", function () {
    CreateBillFile
    .clickDropDownC()
    .clickBtnImportExcel()
    .clickInputExcelDecent()
    .clickUploadFile()
    .clickTabSuccess()
    .clickUploadBill()
    let currenCreateNullChoseFile = CreateBillFilelVerify.Null_chose_file_verify()
    let expectCreateNullChoseFile = "Vui lòng chọn đơn trước khi nhấn tạo!"
    expect(currenCreateNullChoseFile).to.equal(expectCreateNullChoseFile,"[ERR] noti sai (Vui lòng chọn đơn trước khi nhấn tạo!)")
    // .clickUploadBill()
    //  .clickBTNNext()
    driver.pause(3000);
  });
///////////////////////Tạo đơn từ file với thông tin hợp lệ////////////
  
   ///////////////////Tạo đơn từ file với thông tin không hợp lệ//////////////////////////
  it("Tạo đơn từ file với thông tin không hợp lệ", function () {
    CreateBillFile
    .clickDropDownC()
    .clickBtnImportExcel()
    .clickInputExcelAbsurd()
    .clickUploadFile()
    .clickTabAbsurd()
    // .clickUploadBill()
    driver.pause(3000);
  });
  //////////////////////////toạn đơn thông tin hợp lệ//////////
  it("Tạo đơn từ file với thông tin hợp lệ", function () {
    CreateBillFile
      .clickDropDownC()
      .clickBtnImportExcel()
      .clickInputExcelDecent()
      .clickUploadFile()
      .clickTabSuccess()
      .clickSeleceBill()
      // .clickUploadBill()
    // .clickBTNNext()
    let currenCreateBillFileSuccess = CreateBillFilelVerify.Bill_Success_verify()
    let expectCreateBillFileSuccess = "Quản lí đơn từ file"
    expect(currenCreateBillFileSuccess).to.equal(expectCreateBillFileSuccess,"[ERR] noti sai (Phảỉ chuyển qua màn hình Quản lí đơn từ file)")
    driver.pause(3000);
  });
  //////////////Nhập excel đơn không hỗ trợ////////////
  // it("Nhập excel đơn không hỗ trợ",function() {
  //   CreateBillFile
  //     .clickDropDownC()
  //     .clickBtnImportExcel()
  //     .clickInputExcelNotSupport()
  //     .clickUploadFile()
  //     .clickTabNotSupport()
  //     // .clickSeleceBill()
  //     // .clickBtnDelete()
  //     // .clickUploadBill()
  // //       // .clickBTNNext()
  //    driver.pause(3000)
  // });
  /////////Tạo đơn từ file với thông tin hợp lệ//////////
});
