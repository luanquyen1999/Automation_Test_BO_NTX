// let expect = require('chai').expect;
let SecureAreaPage = require('./SecureAreaPage.js');
let Base = require('./Base.js');
const {Builder, By, Key} = require('selenium-webdriver');

const EDIT_NAME= "#r_name";
const EDIT_PHONE = "#r_phone";
const USERNAME_LOGIN = "#username";
const PASSWORD_LOGIN ="#password";
const BTN_EYE = ".ant-input-suffix";
const BTN_LOGIN = '[type="submit"]';

class EditBillPage extends Base{
    EditName(editName){
        $(EDIT_NAME).waitForDisplayed({timeout:10000})
        $(EDIT_NAME).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(EDIT_NAME).setValue(editName);
        return this;
    }
    EditPhone(editPhone){
        $(EDIT_PHONE).waitForDisplayed({timeout:10000})
        $(EDIT_PHONE).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(EDIT_PHONE).setValue(editPhone);
        return this;
    }
}
module.exports = new EditBillPage();