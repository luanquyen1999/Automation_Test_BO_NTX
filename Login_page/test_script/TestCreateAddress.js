let LoginPage = require("../page_objects/LoginPage.js");
let LoginData = require("../test-data/TC_002_Login.js");
// const { getSecureAreaText } = require("../page_objects/SecureAreaPage.js");
let CreateAddress = require("../page_objects/CreateAddress.js");
let CreateAddressData = require("../test-data/TC_005_CreateAddress.js");
let CreateAddresslVerify = require("../Verify/Creat_Address_Verify.js");

describe("Auto Test LOgin Page", function () {
  let pageUrl = "https://bodev.ntx.com.vn/login";
  const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
  const CREATE_ADDRESS = CreateAddressData.CREATE_ADDRESS;
  before("refresh page", function () {
    browser.maximizeWindow();
    LoginPage.openPage(pageUrl);
    LoginPage
    .inputUsername(VALID_LOGIN_CREDS.username)
    .inputPassword(VALID_LOGIN_CREDS.passwword)
    .clickOnEyeBtn()
    .clickOnLoginBtn()
    CreateAddress
    .clickOnSettingAcc()
    .clickOnAddressBook()
  });

  afterEach("After Each", function () {
    browser.refresh();
  });
  it("Tạo mới địa chỉ người gửi không nhập thông tin bắt buộc",function() {
    CreateAddress
    /////////////tạo mới người gửi////////////////
    .clickBTNAddress()
    .clickBTNSave()
    /////////////tên người gửi//////////
    let currenCreateNullNameC = CreateAddresslVerify.CreateNullName_CVerify()
    let expectCreateNullNameC = "Vui lòng nhập tên liên hệ!"
    expect(currenCreateNullNameC).to.equal(expectCreateNullNameC,"[ERR] noti sai (Vui lòng nhập tên liên hệ!)")
    /////////////Tên gợi nhớ////////////////
    let currenCreateSuggested_name_C = CreateAddresslVerify.CreateNullSuggested_name_C_Verify()
    let expectCreateSuggested_name_C = "Vui lòng nhập tên gợi nhớ!"
    expect(currenCreateSuggested_name_C).to.equal(expectCreateSuggested_name_C,"[ERR] noti sai (Vui lòng nhập tên gợi nhớ!)")
    //////////số điện thoại người gửi/////////////
    let currenCreatePhoneAddress_C = CreateAddresslVerify.CreateNull_phone_C_Verify()
    let expectCreatePhoneAddress_C = "Vui lòng nhập số điện thoại!"
    expect(currenCreatePhoneAddress_C).to.equal(expectCreatePhoneAddress_C,"[ERR] noti sai (Vui lòng nhập số điện thoại!)")
    //////////////Tỉnh thành////////
    let currenCreateCityAddress_C = CreateAddresslVerify.CreateNull_city_C_Verify()
    let expectCreateCityAddress_C = "Vui lòng chọn tỉnh thành!"
    expect(currenCreateCityAddress_C).to.equal(expectCreateCityAddress_C,"[ERR] noti sai (Vui lòng chọn tỉnh thành!)")
    ///////////Quận huyện////////////
    let currenCreateDistrictAddress_C = CreateAddresslVerify.CreateNull_district_C_Verify()
    let expectCreateDistrictAddress_C = "Vui lòng chọn quận huyện!"
    expect(currenCreateDistrictAddress_C).to.equal(expectCreateDistrictAddress_C,"[ERR] noti sai (Vui lòng chọn quận huyện!)")
    /////////////Phường xã////////////
    let currenCreateWardAddress_C = CreateAddresslVerify.CreateNull_ward_C_Verify()
    let expectCreateWardAddress_C = "Vui lòng chọn phường xã!"
    expect(currenCreateWardAddress_C).to.equal(expectCreateWardAddress_C,"[ERR] noti sai (Vui lòng chọn phường xã!)")
    //////////////Địa chỉ/////////////////
    let currenCreateAddressCRE_C = CreateAddresslVerify.CreateNull_AddressCRE_C_Verify()
    let expectCreateAddressCRE_C = "Vui lòng nhập địa chỉ!"
    expect(currenCreateAddressCRE_C).to.equal(expectCreateAddressCRE_C,"[ERR] noti sai (Vui lòng nhập địa chỉ!)")
    driver.pause(3000)

  });

  it("Tạo mới địa chỉ người nhận không nhập thông tin bắt buộc",function() {
    CreateAddress
    /////////////tạo mới người Nhận////////////////
    .clickBTNAddressR()
    .clickBTNAddress()
    .clickBTNSave()
    ///////////tên người Nhận//////////
    let currenCreateNullNameR = CreateAddresslVerify.CreateNullName_RVerify()
    let expectCreateNullNameR = "Vui lòng nhập tên liên hệ!"
    expect(currenCreateNullNameR).to.equal(expectCreateNullNameR,"[ERR] noti sai (Vui lòng nhập tên liên hệ!)")
    /////////////Tên gợi nhớ////////////////
    let currenCreateSuggested_name_R = CreateAddresslVerify.CreateNullSuggested_name_R_Verify()
    let expectCreateSuggested_name_R = "Vui lòng nhập tên gợi nhớ!"
    expect(currenCreateSuggested_name_R).to.equal(expectCreateSuggested_name_R,"[ERR] noti sai (Vui lòng nhập tên gợi nhớ!)")
    //////////số điện thoại người Nhận/////////////
    let currenCreatePhoneAddress_R = CreateAddresslVerify.CreateNull_phone_R_Verify()
    let expectCreatePhoneAddress_R = "Vui lòng nhập số điện thoại!"
    expect(currenCreatePhoneAddress_R).to.equal(expectCreatePhoneAddress_R,"[ERR] noti sai (Vui lòng nhập số điện thoại!)")
    //////////////Tỉnh thành////////
    let currenCreateCityAddress_R = CreateAddresslVerify.CreateNull_city_R_Verify()
    let expectCreateCityAddress_R = "Vui lòng chọn tỉnh thành!"
    expect(currenCreateCityAddress_R).to.equal(expectCreateCityAddress_R,"[ERR] noti sai (Vui lòng chọn tỉnh thành!)")
    ///////////Quận huyện////////////
    let currenCreateDistrictAddress_R = CreateAddresslVerify.CreateNull_district_R_Verify()
    let expectCreateDistrictAddress_R = "Vui lòng chọn quận huyện!"
    expect(currenCreateDistrictAddress_R).to.equal(expectCreateDistrictAddress_R,"[ERR] noti sai (Vui lòng chọn quận huyện!)")
    /////////////Phường xã////////////
    let currenCreateWardAddress_R = CreateAddresslVerify.CreateNull_ward_R_Verify()
    let expectCreateWardAddress_R = "Vui lòng chọn phường xã!"
    expect(currenCreateWardAddress_R).to.equal(expectCreateWardAddress_R,"[ERR] noti sai (Vui lòng chọn phường xã!)")
    //////////////Địa chỉ/////////////////
    let currenCreateAddressCRE_R = CreateAddresslVerify.CreateNull_AddressCRE_R_Verify()
    let expectCreateAddressCRE_R = "Vui lòng nhập địa chỉ!"
    expect(currenCreateAddressCRE_R).to.equal(expectCreateAddressCRE_R,"[ERR] noti sai (Vui lòng nhập địa chỉ!)")
    driver.pause(3000)

  });


  it("Tạo mới địa chỉ người gửi",function() {
    CreateAddress
    /////////////tạo mới người gửi////////////////
    .clickBTNAddress()
    .NameC(CREATE_ADDRESS.nameC)
    .RemineNameC(CREATE_ADDRESS.remineNameC)
    .PhoneC(CREATE_ADDRESS.phoneC)
    .ProvinceC()
    .DistrictC()
    .WardC()
    .AddressC(CREATE_ADDRESS.addessC)
    // .clickBTNReset()
    .clickBTNSave()
    // .clickDeleteAddress()
    // .clickDeleteAddressYes()
    .clickEditAddress()
    .clickBTNToggle()
    .clickBTNSave()
    //////Tạo địa chỉ gửi thành công//////
    let currenCreateAddressSuccess = CreateAddresslVerify.Create_Address_Success_Verify()
    let expectCreateAddressSuccess = "Thực hiện thành công"
    expect(currenCreateAddressSuccess).to.equal(expectCreateAddressSuccess,"Thực hiện thành công")
     //////thay đổi  địa chỉ gửi thành công//////
    //  let currenCreateAddressChange_C = CreateAddresslVerify.Create_Address_Change_CVerify()
    //  let expectCreateAddressChange_C = "Thay đổi thành công!"
    //  expect(currenCreateAddressChange_C).to.equal(expectCreateAddressChange_C,"Thay đổi thành công!")
    ////// .clickDeleteAddress()
    driver.pause(3000)
  });
/////////////////xóa địa chỉ gửi/////////////////////
// it("Xóa địa chỉ gửi",function() {
//     CreateAddress
//     /////////////tạo mới người gửi////////////////
//     // .clickBTNAddress()
//     // .NameC(CREATE_ADDRESS.nameC)
//     // .RemineNameC(CREATE_ADDRESS.remineNameC)
//     // .PhoneC(CREATE_ADDRESS.phoneC)
//     // .ProvinceC()
//     // .DistrictC()
//     // .WardC()
//     // .AddressC(CREATE_ADDRESS.addessC)
//     // .clickBTNReset()
//     // .clickBTNSave()
//     .clickDeleteAddress()
//     .clickDeleteAddressYes()
//     .clickEditAddress()
//     .clickBTNToggle()
//     .clickBTNSave()
//      //////thay đổi  địa chỉ gửi thành công//////
//      let currenCreateAddressChange = CreateAddresslVerify.Create_Address_ChangeVerify()
//      let expectCreateAddressChange = "Thay đổi thành công12!"
//      expect(currenCreateAddressChange).to.equal(expectCreateAddressChange,"Thay đổi thành công!")
//       //////Tạo địa chỉ gửi thành công//////
//     let currenCreateAddressSuccess = CreateAddresslVerify.Create_Address_Success_Verify()
//     let expectCreateAddressSuccess = "Thực hiện thành công"
//     expect(currenCreateAddressSuccess).to.equal(expectCreateAddressSuccess,"Thực hiện thành công")
//     ////// .clickDeleteAddress()
//     driver.pause(3000)
//   });
///////////kích hoạt trạng thái///////////////
// it("kích hoạt trạng thái địa chỉ gửi",function() {
//   CreateAddress
//   // .clickBTNAddress()
//   // .NameC(CREATE_ADDRESS.nameC)
//   // .RemineNameC(CREATE_ADDRESS.remineNameC)
//   // .PhoneC(CREATE_ADDRESS.phoneC)
//   // .ProvinceC()
//   // .DistrictC()
//   // .WardC()
//   // .AddressC(CREATE_ADDRESS.addessC)
//   // .clickBTNReset()
//   // .clickBTNSave()
//   // .clickDeleteAddress()
//   // .clickDeleteAddressYes()
//   .clickEditAddress()
//   .clickBTNToggle()
//   .clickBTNSave()
//   //////Tạo địa chỉ gửi thành công//////
//   let currenCreateAddressSuccess = CreateAddresslVerify.Create_Address_Success_Verify()
//   let expectCreateAddressSuccess = "Thực hiện thành công"
//   expect(currenCreateAddressSuccess).to.equal(expectCreateAddressSuccess,"Thực hiện thành công")
//    //////thay đổi  địa chỉ gửi thành công//////
//   //  let currenCreateAddressChange = CreateAddresslVerify.Create_Address_ChangeVerify()
//   //  let expectCreateAddressChange = "Thay đổi thành công1!"
//   //  expect(currenCreateAddressChange).to.equal(expectCreateAddressChange,"Thay đổi thành công!")
//   ////// .clickDeleteAddress()
//   driver.pause(3000)
// });

  it("Tạo mới địa chỉ người Nhận",function() {
    CreateAddress
    /////////Tạo mới người nhận//////////////
    .clickBTNAddressR()
    .clickBTNAddress()
    .NameC(CREATE_ADDRESS.nameR)
    .RemineNameC(CREATE_ADDRESS.remineNameR)
    .PhoneC(CREATE_ADDRESS.phoneR)
    .ProvinceR()
    .DistrictR()
    .WardR()
    .AddressC(CREATE_ADDRESS.addessR)
    // .clickBTNReset()
    .clickBTNSave()
    // .clickDeleteAddress()
    // .clickDeleteAddressYes()
    .clickEditAddress()
    .clickBTNToggle()
    .clickBTNSave()
    //////Tạo địa chỉ gửi thành công//////
    let currenCreateAddressSuccess = CreateAddresslVerify.Create_Address_Success_Verify()
    let expectCreateAddressSuccess = "Thực hiện thành công"
    expect(currenCreateAddressSuccess).to.equal(expectCreateAddressSuccess,"Thực hiện thành công")
    driver.pause(3000)
  });

});
