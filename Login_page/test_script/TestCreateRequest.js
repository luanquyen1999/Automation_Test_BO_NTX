let LoginPage = require("../page_objects/LoginPage.js");
const { getSecureAreaText } = require("../page_objects/SecureAreaPage.js");
let LoginData = require("../test-data/TC_002_Login.js");
let CreateRequest = require("../page_objects/CreateRequest.js");
let EditBill = require("../page_objects/EditBillPage.js");
let EditBillData = require("../test-data/TC_006_Edit_Bill.js");
let CreateRequestBillData = require("../test-data/TC_004_CreateRequest.js");

describe("Auto Test LOgin Page", function () {
  let pageUrl = "https://bodev.ntx.com.vn/login";
  const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
  const EDIT_BILL_DATA = EditBillData.EDIT_BILL;
  const CREATE_REQUEST_DATA = CreateRequestBillData.CREATE_REQUEST;
  before("refresh page", function () {
    browser.maximizeWindow();
    LoginPage.openPage(pageUrl);
    LoginPage
    .inputUsername(VALID_LOGIN_CREDS.username)
    .inputPassword(VALID_LOGIN_CREDS.passwword)
    .clickOnEyeBtn()
    .clickOnLoginBtn()
    CreateRequest
    .Edit_Complain()
    .Create_Request()
  });

  afterEach("After Each", function () {
    browser.refresh();
  });
  it("Tạo yêu cầu chỉnh sửa",function() {
    CreateRequest
        .InputBill(CREATE_REQUEST_DATA.Bill)
        .ClickBTNSearch()
        .DropRequest()
        ///////Chỉnh sửa đơn///////
        .DropEdit()
        // .NameR(CREATE_REQUEST.nameR)
    EditBill
        .EditName(EDIT_BILL_DATA.namer)
        .EditPhone(EDIT_BILL_DATA.phoner)
      
        // .DropType()
        // .DropEditCOD()
        ///////Hủy đơn hàng///////
        // .DropChoseCancle()
        driver.pause(3000)
  });

});
