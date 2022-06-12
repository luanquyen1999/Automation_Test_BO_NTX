let expect = require('chai').expect;
let CreateBillPage = require("../page_objects/CreateBillPage.js");
let LoginPage = require("../page_objects/LoginPage.js");
// const { getSecureAreaText } = require("../page_objects/SecureAreaPage.js");
let CreateBillData = require("../test-data/TC_003_Create_Bill.js");
let LoginData = require("../test-data/TC_002_Login.js");

let CreateBillVerify = require("../Verify/Create_Bill_Verify.js");
describe("Auto Test LOgin Page", function () {
    // const DROP_DOWN_CREATE_BILL = "#c-sidebar-nav-d";
  let pageUrl = "https://bodev.ntx.com.vn/login";
  const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
  const CREATE_BILL = CreateBillData.CREATE_BILL;
  // const BTN_CREATE_BILL = ".ant-btn-default";
  // before("refresh page", function () {
  //   browser.url(pageUrl);
  // });
  before("refresh page", function () {
    browser.maximizeWindow();
    LoginPage.openPage(pageUrl);
    LoginPage
    .inputUsername(VALID_LOGIN_CREDS.username)
    .inputPassword(VALID_LOGIN_CREDS.passwword)
    .clickOnEyeBtn()
    .clickOnLoginBtn()
        CreateBillPage
    .clickOnCreatBill()
  });

  afterEach("After Each", function () {
    browser.refresh();
  });

    ///Creat Bill Nhập thông tin tạo vận đơn (bỏ trống các field bắt buộc)
   it("Creat Bill Nhập thông tin tạo vận đơn (bỏ trống các field bắt buộc)", function () {
    CreateBillPage
    // .Nameconsignors(CREATE_BILL.consignors)
    // .Phoneconsignors(CREATE_BILL.Phoneconsignors)
    // .AddressSendconsignors(CREATE_BILL.address1)

    .Provinceconsignors(CREATE_BILL.province1)
    .Districtconsignors(CREATE_BILL.district1)
    .Wardconsignor(CREATE_BILL.ward1)

    // .Namereceiver(CREATE_BILL.receiver)
    // .Phonereceiver(CREATE_BILL.phonereceiver)
    // .AddressSendreceiver(CREATE_BILL.address2)
    // .Provincereceiver(CREATE_BILL.province2)
    // .Districtreceiver(CREATE_BILL.district2)
    // .Wardreceiver(CREATE_BILL.ward2)
    // .weight(CREATE_BILL.weight)
    // .packageno(CREATE_BILL.quantity)

    // .cod(CREATE_BILL.COD)
    // .cargo(CREATE_BILL.item_value)
    // .length(CREATE_BILL.length)
    // .width(CREATE_BILL.Width)
    // .height(CREATE_BILL.height)

    // .radiobutton()
    // .note(CREATE_BILL.notebill)
     .clickCreatBill()
     /////null Name_c
      let currenCreateNullNameC = CreateBillVerify.getCreaetNullNameCVerify()
      let expectCreateNullNameC = "Vui lòng nhập tên người gửi"
      expect(currenCreateNullNameC).to.equal(expectCreateNullNameC,"[ERR] noti sai (Vui lòng nhập tên người gửi)")
      /////Null Phone_c
      let currenCreateNullPhoneC = CreateBillVerify.getCreaetNullPhoneCVerify()
      let expectCreateNullPhoneC = "Vui lòng nhập số điện thoại!"
      expect(currenCreateNullPhoneC).to.equal(expectCreateNullPhoneC,"[ERR] noti sai (Vui lòng nhập số điện thoại!)")
      ///Null Address_C
      let currenCreateNullAddressC = CreateBillVerify.getCreateNullAddressCVerify()
      let expectCreateNullAddressC = "Vui lòng nhập địa chỉ"
      expect(currenCreateNullAddressC).to.equal(expectCreateNullAddressC,"[ERR] noti sai (Vui lòng nhập địa chỉ)")
      ////Null Name_R
      let currenCreateNullNameR = CreateBillVerify.getCreaetNullNameRVerify()
      let expectCreateNullNameR = "Vui lòng nhập tên người nhận"
      expect(currenCreateNullNameR).to.equal(expectCreateNullNameR),"[ERR] noti sai (Vui lòng nhập tên người nhận)"
      ////////Null Phone_R
      let currenCreateNullPhoneR = CreateBillVerify.getCreaetNullPhoneRVerify()
      let expectCreateNullPhoneR = "Vui lòng nhập số điện thoại!"
      expect(currenCreateNullPhoneR).to.equal(expectCreateNullPhoneR),"[ERR] noti sai (Vui lòng nhập số điện thoại!)"
      /////////Null Address_R
      let currenCreateNullAddressR = CreateBillVerify.getCreateNullAddressRVerify()
      let expectCreateNullAddressR = "Vui lòng nhập địa chỉ"
      expect(currenCreateNullAddressR).to.equal(expectCreateNullAddressR),"[ERR] noti sai (Vui lòng nhập địa chỉ)"
      ////Null City_R
      let currenCreateNullCityR = CreateBillVerify.getCreateNullCityRVerify()
      let expectCreateNullCityR = "Vui lòng chọn tỉnh thành"
      expect(currenCreateNullCityR).to.equal(expectCreateNullCityR),"[ERR] noti sai (Vui lòng chọn tỉnh thành)"
      /////Null District_R
      let currenCreateNullDistrictR = CreateBillVerify.getCreateNullDistrictRVerify()
      let expectCreateNulDistrictR = "Vui lòng chọn quận huyện"
      expect(currenCreateNullDistrictR).to.equal(expectCreateNulDistrictR),"[ERR] noti sai (Vui lòng chọn quận huyện)"
      //////Null Ward_R
      let currenCreateNullWardR = CreateBillVerify.getCreateNullWardRVerify()
      let expectCreateNulWardR = "Vui lòng chọn phường xã"
      expect(currenCreateNullWardR).to.equal(expectCreateNulWardR),"[ERR] noti sai (Vui lòng chọn phường xã)"
      // ///////Null Weight
      let currenCreateNullWeightR = CreateBillVerify.getCreateNullWeightRVerify()
      let expectCreateNullWeightR = "Hãy điền khối lượng hàng hóa"
      expect(currenCreateNullWeightR).to.equal(expectCreateNullWeightR),"[ERR] noti sai (Hãy điền khối lượng hàng hóa)"
      driver.pause(3000)
  });  

  it("Creat Bill Nhập sai định dạng số thông tin dịch vụ hàng hóa", function () {
    CreateBillPage
    // .clickOnCreatBill()
    .Nameconsignors(CREATE_BILL.consignors)
    .Phoneconsignors(CREATE_BILL.Phoneconsignors)
    .AddressSendconsignors(CREATE_BILL.address1)
    .Provinceconsignors(CREATE_BILL.province1)
    .Districtconsignors(CREATE_BILL.district1)
    .Wardconsignor(CREATE_BILL.ward1)
    .Namereceiver(CREATE_BILL.receiver)
    .Phonereceiver(CREATE_BILL.phonereceiver)
    .AddressSendreceiver(CREATE_BILL.address2)
    .Provincereceiver(CREATE_BILL.province2)
    .Districtreceiver(CREATE_BILL.district2)
    .Wardreceiver(CREATE_BILL.ward2)
    .weight(CREATE_BILL.weighterr)
    .packageno(CREATE_BILL.quantityer)
    .cod(CREATE_BILL.CODerr)
    .cargo(CREATE_BILL.item_value_err)
    .length(CREATE_BILL.lengtherr)
    .width(CREATE_BILL.widtherr)
    .height(CREATE_BILL.heighterr)
    // .note(CREATE_BILL.notebill)
    // .radiobutton()
    .clickCreatBill()
    let currenCreateSuccessBill = CreateBillVerify.getCreatSuccessBillVerify()
    let expectCreateSuccessBill = "Tạo đơn thành công"
    expect(currenCreateSuccessBill).to.equal(expectCreateSuccessBill),"[ERR] noti sai (Tạo đơn thành công)"
    driver.pause(3000)
  
  });  

  it("Creat Bill Nhập đúng thông tin tạo vận đơn", function () {
    CreateBillPage
    // .clickOnCreatBill()
    .Nameconsignors(CREATE_BILL.consignors)
    .Phoneconsignors(CREATE_BILL.Phoneconsignors)
    .AddressSendconsignors(CREATE_BILL.address1)
    .Provinceconsignors(CREATE_BILL.province1)
    .Districtconsignors(CREATE_BILL.district1)
    .Wardconsignor(CREATE_BILL.ward1)
    .Namereceiver(CREATE_BILL.receiver)
    .Phonereceiver(CREATE_BILL.phonereceiver)
    .AddressSendreceiver(CREATE_BILL.address2)
    .Provincereceiver(CREATE_BILL.province2)
    .Districtreceiver(CREATE_BILL.district2)
    .Wardreceiver(CREATE_BILL.ward2)
    .weight(CREATE_BILL.weight)
    .packageno(CREATE_BILL.quantity)
    .cod(CREATE_BILL.COD)
    .cargo(CREATE_BILL.item_value)
    .length(CREATE_BILL.length)
    .width(CREATE_BILL.width)
    .height(CREATE_BILL.height)    
    // .radiobutton()
    // .note(CREATE_BILL.notebill)
    .clickCreatBill()
    let currenCreateSuccessBill = CreateBillVerify.getCreatSuccessBillVerify()
    let expectCreateSuccessBill = "Tạo đơn thành công"
    expect(currenCreateSuccessBill).to.equal(expectCreateSuccessBill),"[ERR] noti sai (Tạo đơn thành công)"
    driver.pause(3000)
  });  
});
