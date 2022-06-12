let Base = require('./Base.js');
// let path = require ('path');
let SecureAreaPage = require('./SecureAreaPage.js');

const {Builder, By, Key} = require('selenium-webdriver');
// const { default: $ } = require('webdriverio/build/commands/browser/$');
// const { default: $ } = require('webdriverio/build/commands/browser/$');
// // const { default: $ } = require('webdriverio/build/commands/browser/$');
// const { default: $ } = require('webdriverio/build/commands/browser/$');

const EDIT_COMPLAIN = '//*[@id="_tickets_dropdown"]/a'
const CREATE_REQUEST = "#_request_ticket";
const INPUT_BILL = '#bill_pending_search';
const BTN_SEARCH = '//*[@id="request_form"]/div/div[1]/div/div[2]/div/div[2]/div/div/span/span/span'
const DROP_REQUEST ='//*[@id="request_form"]/div/div[1]/div/div[5]/div/div[1]/div/div/div/div/div'

const CANCLE_BILL = '//*[@id="cancel_"]/div';
const EDIT_BILL = '//*[@id="edit_"]/div';
const CHOSE_TYPE = '//input[@id="request_type"]'
const EDIT_COD = '//*[@id="editCod_"]/div';

const EDIT_R_NAME = '//*[@id="request_form"]/div/div[2]/div/div[2]/div/div[1]/div/div[2]/div/div';
const EDIT_R_PHONE = '#r_phone'
// const REQUEST_R = '//*[@id="request_form"]/div/div[2]/div/div[2]/div/div[5]/div/div[2]/div/div/div/div'
//*[@id="request_form"]/div/div[1]/div/div[5]/div/div[2]/div/div/div/div/div
//*[@id="request_form"]/div/div[2]/div/div[2]/div/div[6]/div/div[2]/div/div/div/div/span[2]
//*[@id="request_form"]/div/div[2]/div/div[2]/div/div[5]/div/div[2]/div/div/div/div/span[2]
class CreateRequest extends Base{
    Edit_Complain(){
        $(EDIT_COMPLAIN).click();
        return this;
    }
    Create_Request(){
        $(CREATE_REQUEST).click();
        return this;
    }
    InputBill(inputbill){
        // $(iNPUT_BILL).click();
        $(INPUT_BILL).setValue(inputbill);
        $(INPUT_BILL).pause(1000)
        return this;
    }
    ClickBTNSearch(){
        $(BTN_SEARCH).click();
        // $(BTN_SEARCH).pause(500)
        return this;
    }
    DropRequest(){
        $(DROP_REQUEST).click();
        $(DROP_REQUEST).pause(500)
        return this;
    }
    ///////Chỉnh sửa đơn//////
    DropEdit(){
        $(EDIT_BILL).click();
        $(EDIT_BILL).pause(500)
    }
    DropType(){
        $(CHOSE_TYPE).click();
        $(CHOSE_TYPE).pause(500)
    }
    DropEditCOD(){
        $(EDIT_COD).click();
        $(EDIT_COD).pause(500)
    }
    NameR(nameR){
        $(EDIT_R_NAME).waitForDisplayed({timeout:10000})
        $(EDIT_R_NAME).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(EDIT_R_NAME).setValue(nameR)
        return this;
    }
    PhoneR(phoneR){
        $(EDIT_R_PHONE).waitForDisplayed({timeout:10000})
        $(EDIT_R_PHONE).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(EDIT_R_PHONE).setValue(phoneR)
        return this;
    }
    ///////Hủy đơn hàng///////
    DropChoseCancle(){
        $(CANCLE_BILL).click()
        $(CANCLE_BILL).pause(2000)
    }

}
module.exports = new CreateRequest();