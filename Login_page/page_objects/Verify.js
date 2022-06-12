const VALID_LOGIN_CREDS_VERIFY = '//*[@id="root"]/div/div[2]/header/ul[1]/ol/li[2]'
const ACC_DOSE_EXIST_VERIFY = '//div[text()="Tài khoản không tồn tại"]'
const PASS_WRONG_VERIFY = '//div[text()="Mật khẩu không đúng"]'
const PASS_PHONE_NULL_VERIFY = '//div[text()= "Vui lòng nhập SDT/Mật khẩu."]'

const NULL_NAME_C = '//div[text()= "Vui lòng nhập tên người gửi"]'
const NULL_PHONE = '//div[text()= "Vui lòng nhập số điện thoại!"]'
const NULL_ADDRESS = '//div[text()= "Vui lòng nhập địa chỉ"]'
const NULL_NAME_R = '//div[text()= "Vui lòng nhập tên người nhận"]'
const NULL_CITY_R = '//div[text()= "Vui lòng chọn tỉnh thành"]'
const NULL_DISTRICT_R = '//div[text()= "Vui lòng chọn quận huyện"]'
const NULL_WARD_R = '//div[text()= "Vui lòng chọn phường xã"]'
const NULL_WEIGHT = '//div[text()= "Hãy điền khối lượng hàng hóa"]'
const SUCCESS_CREATE = '//div[text()= "Tạo đơn thành công"]'

const NULL_NAME_C_CREATE = '//*[@id="address"]/div/div[1]/div/div[2]/div[2]/div'
const NULLL_SUGGESTED_NAME = '//*[@id="address"]/div/div[2]/div/div[2]/div[2]/div'
const NULLL_PHONE_ADDRESS = '//*[@id="address"]/div/div[3]/div/div[2]/div[2]/div'
const NULL_CITY_ADDRESS = '//*[@id="address"]/div/div[4]/div/div[2]/div[2]/div'
const NULL_DISTRICT_ADDRESS ='//*[@id="address"]/div/div[5]/div/div[2]/div[2]/div'
const NULL_WARD_ADDRESS = '//*[@id="address"]/div/div[6]/div/div[2]/div[2]/div'
const NULL_ADDRESS_CREATE = '//*[@id="address"]/div/div[7]/div/div[2]/div[2]/div'

const NULL_NAME_R_CREATE = '//*[@id="address"]/div/div[1]/div/div[2]/div[2]/div'
const NULLL_SUGGESTED_NAME_R = '//*[@id="address"]/div/div[2]/div/div[2]/div[2]/div'
const NULLL_PHONE_ADDRESS_R = '//*[@id="address"]/div/div[3]/div/div[2]/div[2]/div'
const NULL_CITY_ADDRESS_R = '//*[@id="address"]/div/div[4]/div/div[2]/div[2]/div'
const NULL_DISTRICT_ADDRESS_R ='//*[@id="address"]/div/div[5]/div/div[2]/div[2]/div'
const NULL_WARD_ADDRESS_R = '//*[@id="address"]/div/div[6]/div/div[2]/div[2]/div'
const NULL_ADDRESS_CREATE_R = '//*[@id="address"]/div/div[7]/div/div[2]/div[2]/div'

const SUCCESS_CREATE_ADDRESS = '//div[text()= "Thực hiện thành công"]'
const CHANGE_CREATE_ADDRESS = '//div[normalize-space(.)="Thay đổi thành công!")]'

const NULL_ADDRESS_FILE = '//div[text()= "Vui lòng chọn địa chỉ gửi"]'
const NULL_CHOSE_FILE = '//div[text()= "Vui lòng chọn đơn trước khi nhấn tạo!"]'
const CREATE_FILE_SUCCESS = '//*[@id="root"]/div/div[2]/header/ul[1]/ol/li[2]'

////////////Login//////////////
// class LoginVerify{
//     ///Nhập đúng số điện thoại và password
//     getValidLoginVerify(){
//         $(VALID_LOGIN_CREDS_VERIFY).waitForDisplayed({timeout:15000})
//         let loginValidVerify = $(VALID_LOGIN_CREDS_VERIFY).getText();
//         return loginValidVerify;
//     }
//     ///Nhập số điện thoại chưa đăng ký
//     getUnregisteredVerify(){
//         $(ACC_DOSE_EXIST_VERIFY).waitForDisplayed({timeout:15000})
//         let loginUnregisteredVerify = $(ACC_DOSE_EXIST_VERIFY).getText();
//         return loginUnregisteredVerify;
//     }
//     ///Nhập số điện thoại là ký tự đặc biệt hoặc chữ cái
//     getErrFormatPhoneVerify(){
//         $(ACC_DOSE_EXIST_VERIFY).waitForDisplayed({timeout:15000})
//         let LoginErrFormatphone = $(ACC_DOSE_EXIST_VERIFY).getText()
//         return LoginErrFormatphone
//     }
//     ///Nhập đúng số điện thoại đã đăng ký, sai mật khẩu
//     getWrongPassVerify(){
//         $(PASS_WRONG_VERIFY).waitForDisplayed({time:15000})
//         let loginWrongPassVerify = $(PASS_WRONG_VERIFY).getText()
//         return loginWrongPassVerify
//     }
//     ///Nhập số điện thoại không hợp lệ, đúng mật khẩu
//     getInvalidPhoneVerify(){
//         $(ACC_DOSE_EXIST_VERIFY).waitForDisplayed({time:15000})
//         let loginInvaliPhoneVerify = $(ACC_DOSE_EXIST_VERIFY).getText()
//         return loginInvaliPhoneVerify
//     }
//     ///Bỏ trống cả số điện thoại và mật khẩu
//     getPhonePassNullVerify(){
//         $(PASS_PHONE_NULL_VERIFY).waitForDisplayed({time: 15000})
//         let loginPhonePassNullVerify = $(PASS_PHONE_NULL_VERIFY).getText()
//         return loginPhonePassNullVerify
//     }
//     ///Bỏ trống số điện thoại, nhập đúng mật khẩu
//     getPhoneNullVerify(){
//         $(PASS_PHONE_NULL_VERIFY).waitForDisplayed({time: 15000})
//         let loginPhoneNullVerify = $(PASS_PHONE_NULL_VERIFY).getText()
//         return loginPhoneNullVerify
//     }
//     //Nhập đúng số điện thoại đăng ký, bỏ trống mật khẩu
//     getPassNullVerif(){
//         $(PASS_PHONE_NULL_VERIFY).waitForDisplayed({time: 15000})
//         let loginPassNullVerify = $(PASS_PHONE_NULL_VERIFY).getText();
//         return loginPassNullVerify;
//     }
// }

///////////Tạo đơn/////////////////
// class CreateBillVerify{
//     getCreaetNullNameCVerify(){
//         $(NULL_NAME_C).waitForDisplayed({time: 15000})
//         let CreateNullNameCVerify = $(NULL_NAME_C).getText()
//         return CreateNullNameCVerify
//     }
//     getCreaetNullPhoneCVerify(){
//         $(NULL_PHONE).waitForDisplayed({time: 15000})
//         let CreateNullPhoneCVerify = $(NULL_PHONE).getText()
//         return CreateNullPhoneCVerify
//     }
//     getCreateNullAddressCVerify(){
//         $(NULL_ADDRESS).waitForDisplayed({time: 15000})
//         let CreateNullAddressCVerify = $(NULL_ADDRESS).getText()
//         return CreateNullAddressCVerify
//     }
//     getCreaetNullNameRVerify(){
//         $(NULL_NAME_R).waitForDisplayed({time: 15000})
//         let CreateNullNameRVerify = $(NULL_NAME_R).getText()
//         return CreateNullNameRVerify
//     }
//     getCreaetNullPhoneRVerify(){
//         $(NULL_PHONE).waitForDisplayed({time: 15000})
//         let CreateNullPhoneRVerify = $(NULL_PHONE).getText()
//         return CreateNullPhoneRVerify
//     }
//     getCreateNullAddressRVerify(){
//         $(NULL_ADDRESS).waitForDisplayed({time: 15000})
//         let CreateNullAddressRVerify = $(NULL_ADDRESS).getText()
//         return CreateNullAddressRVerify
//     }
//     getCreateNullCityRVerify(){
//         $(NULL_CITY_R).waitForDisplayed({time: 15000})
//         let CreateNullCityRVerify = $(NULL_CITY_R).getText()
//         return CreateNullCityRVerify
//     }
//     getCreateNullDistrictRVerify(){
//         $(NULL_DISTRICT_R).waitForDisplayed({time: 15000})
//         let CreateNullDistrictRVerify = $(NULL_DISTRICT_R).getText()
//         return CreateNullDistrictRVerify
//     }
//     getCreateNullWardRVerify(){
//         $(NULL_WARD_R).waitForDisplayed({time: 15000})
//         let CreateNullWardRVerify = $(NULL_WARD_R).getText()
//         return CreateNullWardRVerify
//     }
//     getCreateNullWeightRVerify(){
//         $(NULL_WEIGHT).waitForDisplayed({time: 15000})
//         let CreateNullWeightRVerify = $(NULL_WEIGHT).getText()
//         return CreateNullWeightRVerify
//     }
//     getCreatSuccessBillVerify(){
//         $(SUCCESS_CREATE).waitForDisplayed({time: 15000})
//         let CreateSuccessBillVerify = $(SUCCESS_CREATE).getText()
//         return CreateSuccessBillVerify
//     }
// }
// ///////////////////Tạo địa chỉ người gửi///////////////
class CreateAddresslVerify{
    CreateNullName_CVerify(){
        $(NULL_NAME_C_CREATE).waitForDisplayed({time: 15000})
        let CreateNullName_CVerify = $(NULL_NAME_C_CREATE).getText()
        return CreateNullName_CVerify
    }
    CreateNullSuggested_name_C_Verify(){
        $(NULLL_SUGGESTED_NAME).waitForDisplayed({time: 15000})
        let CreateNullSuggested_name_CVerify = $(NULLL_SUGGESTED_NAME).getText()
        return CreateNullSuggested_name_CVerify
    }
    CreateNull_phone_C_Verify(){
        $(NULLL_PHONE_ADDRESS).waitForDisplayed({time: 15000})
        let CreateNullPhoneAddress_CVerify = $(NULLL_PHONE_ADDRESS).getText()
        return CreateNullPhoneAddress_CVerify
    }
    CreateNull_city_C_Verify(){
        $(NULL_CITY_ADDRESS).waitForDisplayed({time: 15000})
        let CreateNullCityAddress_CVerify = $(NULL_CITY_ADDRESS).getText()
        return CreateNullCityAddress_CVerify
    }
    CreateNull_district_C_Verify(){
        $(NULL_DISTRICT_ADDRESS).waitForDisplayed({time: 15000})
        let CreateNullDistrictAddress_CVerify = $(NULL_DISTRICT_ADDRESS).getText()
        return CreateNullDistrictAddress_CVerify
    }
    CreateNull_ward_C_Verify(){
        $(NULL_WARD_ADDRESS).waitForDisplayed({time: 15000})
        let CreateNullWardAddress_CVerify = $(NULL_WARD_ADDRESS).getText()
        return CreateNullWardAddress_CVerify
    }
    CreateNull_AddressCRE_C_Verify(){
        $(NULL_ADDRESS_CREATE).waitForDisplayed({time: 15000})
        let CreateNulldAddressCreate_CVerify = $(NULL_ADDRESS_CREATE).getText()
        return CreateNulldAddressCreate_CVerify
    }
    ///////////////////Tạo địa chỉ người nhận///////////////
    CreateNullName_RVerify(){
        $(NULL_NAME_R_CREATE).waitForDisplayed({time: 15000})
        let CreateNullName_RVerify = $(NULL_NAME_R_CREATE).getText()
        return CreateNullName_RVerify
    }
    CreateNullSuggested_name_R_Verify(){
        $(NULLL_SUGGESTED_NAME_R).waitForDisplayed({time: 15000})
        let CreateNullSuggested_name_RVerify = $(NULLL_SUGGESTED_NAME_R).getText()
        return CreateNullSuggested_name_RVerify
    }
    CreateNull_phone_R_Verify(){
        $(NULLL_PHONE_ADDRESS_R).waitForDisplayed({time: 15000})
        let CreateNullPhoneAddress_RVerify = $(NULLL_PHONE_ADDRESS_R).getText()
        return CreateNullPhoneAddress_RVerify
    }
    CreateNull_city_R_Verify(){
        $(NULL_CITY_ADDRESS_R).waitForDisplayed({time: 15000})
        let CreateNullCityAddress_RVerify = $(NULL_CITY_ADDRESS_R).getText()
        return CreateNullCityAddress_RVerify
    }
    CreateNull_district_R_Verify(){
        $(NULL_DISTRICT_ADDRESS_R).waitForDisplayed({time: 15000})
        let CreateNullDistrictAddress_RVerify = $(NULL_DISTRICT_ADDRESS_R).getText()
        return CreateNullDistrictAddress_RVerify
    }
    CreateNull_ward_R_Verify(){
        $(NULL_WARD_ADDRESS_R).waitForDisplayed({time: 15000})
        let CreateNullWardAddress_RVerify = $(NULL_WARD_ADDRESS_R).getText()
        return CreateNullWardAddress_RVerify
    }
    CreateNull_AddressCRE_R_Verify(){
        $(NULL_ADDRESS_CREATE_R).waitForDisplayed({time: 15000})
        let CreateNulldAddressCreate_RVerify = $(NULL_ADDRESS_CREATE_R).getText()
        return CreateNulldAddressCreate_RVerify
    }
    ////////tạo địa chỉ gửi thành công//////////////
    Create_Address_Success_Verify(){
        $(SUCCESS_CREATE_ADDRESS).waitForDisplayed({time: 15000})
        let CreateAddressCreateSuccessVerify = $(SUCCESS_CREATE_ADDRESS).getText()
        return CreateAddressCreateSuccessVerify
    }
    ///////////thay đổi địa chỉ thành công/////////
    Create_Address_ChangeVerify(){
        $(CHANGE_CREATE_ADDRESS).waitForDisplayed({time: 15000})
        let CreateAddressCreateChangeVerify = $(CHANGE_CREATE_ADDRESS).getText()
        return CreateAddressCreateChangeVerify
    }
}
        /////////////////Tạo đơn từ file///////////////
// class CreateBillFilelVerify{
//     Null_address_file_verify(){
//         $(NULL_ADDRESS_FILE).waitForDisplayed({time: 15000})
//         let Null_address_file_verify = $(NULL_ADDRESS_FILE).getText()
//         return Null_address_file_verify
//     }
//     Null_chose_file_verify(){
//         $(NULL_CHOSE_FILE).waitForDisplayed({time: 15000})
//         let Null_chose_file_verify = $(NULL_CHOSE_FILE).getText()
//         return Null_chose_file_verify
//     }
//     Bill_Success_verify(){
//         $(CREATE_FILE_SUCCESS).waitForDisplayed({time: 15000})
//         let Bill_success_file_verify = $(CREATE_FILE_SUCCESS).getText()
//         return Bill_success_file_verify
//     }
// }
module.exports = new LoginVerify();
module.exports = new CreateBillVerify();
module.exports = new CreateAddresslVerify();
module.exports = new CreateBillFilelVerify();