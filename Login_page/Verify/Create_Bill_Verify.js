const NULL_NAME_C = '//div[text()= "Vui lòng nhập tên người gửi"]'
const NULL_PHONE = '//div[text()= "Vui lòng nhập số điện thoại!"]'
const NULL_ADDRESS = '//div[text()= "Vui lòng nhập địa chỉ"]'
const NULL_NAME_R = '//div[text()= "Vui lòng nhập tên người nhận"]'
const NULL_CITY_R = '//div[text()= "Vui lòng chọn tỉnh thành"]'
const NULL_DISTRICT_R = '//div[text()= "Vui lòng chọn quận huyện"]'
const NULL_WARD_R = '//div[text()= "Vui lòng chọn phường xã"]'
const NULL_WEIGHT = '//div[text()= "Hãy điền khối lượng hàng hóa"]'
const SUCCESS_CREATE = '//div[text()= "Tạo đơn thành công"]'

///////////Tạo đơn/////////////////
class CreateBillVerify{
    getCreaetNullNameCVerify(){
        $(NULL_NAME_C).waitForDisplayed({time: 15000})
        let CreateNullNameCVerify = $(NULL_NAME_C).getText()
        return CreateNullNameCVerify
    }
    getCreaetNullPhoneCVerify(){
        $(NULL_PHONE).waitForDisplayed({time: 15000})
        let CreateNullPhoneCVerify = $(NULL_PHONE).getText()
        return CreateNullPhoneCVerify
    }
    getCreateNullAddressCVerify(){
        $(NULL_ADDRESS).waitForDisplayed({time: 15000})
        let CreateNullAddressCVerify = $(NULL_ADDRESS).getText()
        return CreateNullAddressCVerify
    }
    getCreaetNullNameRVerify(){
        $(NULL_NAME_R).waitForDisplayed({time: 15000})
        let CreateNullNameRVerify = $(NULL_NAME_R).getText()
        return CreateNullNameRVerify
    }
    getCreaetNullPhoneRVerify(){
        $(NULL_PHONE).waitForDisplayed({time: 15000})
        let CreateNullPhoneRVerify = $(NULL_PHONE).getText()
        return CreateNullPhoneRVerify
    }
    getCreateNullAddressRVerify(){
        $(NULL_ADDRESS).waitForDisplayed({time: 15000})
        let CreateNullAddressRVerify = $(NULL_ADDRESS).getText()
        return CreateNullAddressRVerify
    }
    getCreateNullCityRVerify(){
        $(NULL_CITY_R).waitForDisplayed({time: 15000})
        let CreateNullCityRVerify = $(NULL_CITY_R).getText()
        return CreateNullCityRVerify
    }
    getCreateNullDistrictRVerify(){
        $(NULL_DISTRICT_R).waitForDisplayed({time: 15000})
        let CreateNullDistrictRVerify = $(NULL_DISTRICT_R).getText()
        return CreateNullDistrictRVerify
    }
    getCreateNullWardRVerify(){
        $(NULL_WARD_R).waitForDisplayed({time: 15000})
        let CreateNullWardRVerify = $(NULL_WARD_R).getText()
        return CreateNullWardRVerify
    }
    getCreateNullWeightRVerify(){
        $(NULL_WEIGHT).waitForDisplayed({time: 15000})
        let CreateNullWeightRVerify = $(NULL_WEIGHT).getText()
        return CreateNullWeightRVerify
    }
    getCreatSuccessBillVerify(){
        $(SUCCESS_CREATE).waitForDisplayed({time: 15000})
        let CreateSuccessBillVerify = $(SUCCESS_CREATE).getText()
        return CreateSuccessBillVerify
    }
}

module.exports = new CreateBillVerify();