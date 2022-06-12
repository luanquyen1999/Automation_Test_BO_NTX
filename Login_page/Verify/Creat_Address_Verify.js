
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

///////////////////Tạo địa chỉ người gửi///////////////
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
module.exports = new CreateAddresslVerify();