const VALID_LOGIN_CREDS_VERIFY = '//*[@id="root"]/div/div[2]/header/ul[1]/ol/li[2]'
const ACC_DOSE_EXIST_VERIFY = '//div[text()="Tài khoản không tồn tại"]'
const PASS_WRONG_VERIFY = '//div[text()="Mật khẩu không đúng"]'
const PASS_PHONE_NULL_VERIFY = '//div[text()= "Vui lòng nhập SDT/Mật khẩu."]'

////////////Login//////////////
class LoginVerify{
    ///Nhập đúng số điện thoại và password
    getValidLoginVerify(){
        $(VALID_LOGIN_CREDS_VERIFY).waitForDisplayed({timeout:15000})
        let loginValidVerify = $(VALID_LOGIN_CREDS_VERIFY).getText();
        return loginValidVerify;
    }
    ///Nhập số điện thoại chưa đăng ký
    getUnregisteredVerify(){
        $(ACC_DOSE_EXIST_VERIFY).waitForDisplayed({timeout:15000})
        let loginUnregisteredVerify = $(ACC_DOSE_EXIST_VERIFY).getText();
        return loginUnregisteredVerify;
    }
    ///Nhập số điện thoại là ký tự đặc biệt hoặc chữ cái
    getErrFormatPhoneVerify(){
        $(ACC_DOSE_EXIST_VERIFY).waitForDisplayed({timeout:15000})
        let LoginErrFormatphone = $(ACC_DOSE_EXIST_VERIFY).getText()
        return LoginErrFormatphone
    }
    ///Nhập đúng số điện thoại đã đăng ký, sai mật khẩu
    getWrongPassVerify(){
        $(PASS_WRONG_VERIFY).waitForDisplayed({time:15000})
        let loginWrongPassVerify = $(PASS_WRONG_VERIFY).getText()
        return loginWrongPassVerify
    }
    ///Nhập số điện thoại không hợp lệ, đúng mật khẩu
    getInvalidPhoneVerify(){
        $(ACC_DOSE_EXIST_VERIFY).waitForDisplayed({time:15000})
        let loginInvaliPhoneVerify = $(ACC_DOSE_EXIST_VERIFY).getText()
        return loginInvaliPhoneVerify
    }
    ///Bỏ trống cả số điện thoại và mật khẩu
    getPhonePassNullVerify(){
        $(PASS_PHONE_NULL_VERIFY).waitForDisplayed({time: 15000})
        let loginPhonePassNullVerify = $(PASS_PHONE_NULL_VERIFY).getText()
        return loginPhonePassNullVerify
    }
    ///Bỏ trống số điện thoại, nhập đúng mật khẩu
    getPhoneNullVerify(){
        $(PASS_PHONE_NULL_VERIFY).waitForDisplayed({time: 15000})
        let loginPhoneNullVerify = $(PASS_PHONE_NULL_VERIFY).getText()
        return loginPhoneNullVerify
    }
    //Nhập đúng số điện thoại đăng ký, bỏ trống mật khẩu
    getPassNullVerif(){
        $(PASS_PHONE_NULL_VERIFY).waitForDisplayed({time: 15000})
        let loginPassNullVerify = $(PASS_PHONE_NULL_VERIFY).getText();
        return loginPassNullVerify;
    }
}
module.exports = new LoginVerify();
