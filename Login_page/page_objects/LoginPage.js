// let expect = require('chai').expect;
let SecureAreaPage = require('./SecureAreaPage.js');
let Base = require('./Base.js');

const LOGIN_TITLE= ".ant-typography"
const USERNAME_LOGIN = "#username";
const PASSWORD_LOGIN ="#password";
const BTN_EYE = ".ant-input-suffix";
const BTN_LOGIN = '[type="submit"]';

class LoginPage extends Base{
    getLoginTitle(){
        return $(LOGIN_TITLE).getText();
    }

    inputUsername(username){
        $(USERNAME_LOGIN).setValue(username);
        return this;
    }
    inputPassword(password){
        $(PASSWORD_LOGIN).setValue(password);
        return this;
    }
    clickOnEyeBtn(){
        $(BTN_EYE).click();
        return this;
    }
    clickOnLoginBtn(){
        $(BTN_LOGIN).click();

        return SecureAreaPage;
    }
    // clickOnDropDown(){
    //     $(DROP_DOWN_CREATE_BILL).click();
    //     return this;
    // }
    // verifyLoginTitle(){
    //     let actualLoginPageTitle = this.getLoginTitle();
    //     let expectedLoginPageTitle = 'Đăng nhập';
    //     expect(actualLoginPageTitle).to.equal(expectedLoginPageTitle,'ERR: Login title is wrong');
    // }
}
module.exports = new LoginPage();