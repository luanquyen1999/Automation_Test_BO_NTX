let SecureAreaPage = require('./SecureAreaPage.js')

const USERNAME_LOGIN = "#username";
const PASSWORD_LOGIN ="#password";
const BTN_LOGIN = '[type="submit"]';

class LoginPage{
    inputUsername(username){
        $(USERNAME_LOGIN).setValue(username);
        return this;
    }
    inputPassword(password){
        $(PASSWORD_LOGIN).setValue(password);
        return this;
    }
    clickOnLoginBtn(){
        $(BTN_LOGIN).click();
        return SecureAreaPage();
    }
}
module.exports = new LoginPage();