let Base = require('./Base.js');
// let path = require ('path');
let SecureAreaPage = require('./SecureAreaPage.js');

const {Builder, By, Key} = require('selenium-webdriver');
const BTN_UPLOAD = "#_push_excel";
const MENU_SETTING_ACC = "//*[@id='_setting_dropdown']/a";
const ADDRESS_BOOK = "//*[@id='address_config']";
const BTN_NEW_ADDRESS = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div/div[1]/div/div/div/div[2]/button";
const BTN_NEW_ADDRES_RECEIVER = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div/div[1]/div/div/div/div[1]/div/div[1]/div[1]/div/div[2]";
const NAME_C = "#contact_name";
const REMINISCENT_C = "#reminiscent_name";
const PHONE_C = "#contact_phone";
const ADDRESS_C = "//input[@id='address']"
const PROVINCE_C = "#province_id";
const PROVINCE_LIST_C = "//*[@id='50_']";
const DISTRICT_C = "#district_id";
const DISTRICT_LIST_C = "//*[@id='5005_']/div";   
const WARD_C = "#ward_id";
const WARD_LIST_C = "//*[@id='28299_']/div";
// const DELETE_ADDRESS = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[1]/td[11]/div/div[2]/svg/path[1]"

const PROVINCE_LIST_R = "//*[@id='29_']/div";
const DISTRICT_LIST_R = "//*[@id='2903_']/div";   
const WARD_LIST_R = "//*[@id='25450_']/div";
//*[@id="29_"]/div
// const RESET = "//div[contains(@class, 'btn__refresh')]/button"
// const RESET = '[type="button"]';
//span[contains(@class, 'input__excel')]/input
// const RESET = "//div[@class='ant-space-item']"
// const RESET = "#menu-minimize";
const RESET = "//button[text()='Đặt lại']";
// const RESET = "//button[@class='btn__refresh'and text()='Đặt lại']";
// const RESET = "//button[contains(@class,'btn__refresh')]//span[contains(text(),'Đặt lại')]";
//div[@class='footer']//a[@title='Site Map']
const SAVE = '[type="submit"]';
const BTN_EDIT = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[2]/td[11]/div/div"
const BTN_DELETE = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[1]/td[11]/div/div[2]"
const BTN_YES = "//span[text()='Đồng ý']";
const BTN_TOGGLE = '[role="switch"]'
class CreateAddress extends Base{
    clickOnSettingAcc(){
        $(MENU_SETTING_ACC).click();
        return this;
    }
    clickOnAddressBook(){
        $(ADDRESS_BOOK).click();
        return this;
    }
    NameC(NameC){
        $(NAME_C).setValue(NameC);
        return this;
    }
    RemineNameC(RemineNameC){
        $(REMINISCENT_C).setValue(RemineNameC);
        return this;
    }
    PhoneC(PhoneC){
        $(PHONE_C).setValue(PhoneC);
        return this;
    }
    AddressC(AddressC){
        $(ADDRESS_C).setValue(AddressC);
        // $(ADDRESS_C).pause(5000)
        return this;
    }
    clickBTNAddress(){
        $(BTN_NEW_ADDRESS).click()
        // $(BTN_NEW_ADDRESS).pause(5000)
        return this;
    }
    clickBTNAddressR(){
        $(BTN_NEW_ADDRES_RECEIVER).click()
        return this;
    }
    ProvinceC(){
        $(PROVINCE_C).click()
        $(PROVINCE_LIST_C).waitForDisplayed({timeout:10000})
        $(PROVINCE_LIST_C).click()
        return this;
    }
    DistrictC(){
        $(DISTRICT_C).click()
        $(DISTRICT_LIST_C).waitForDisplayed({timeout:10000})
        $(DISTRICT_LIST_C).click()
        return this;
    }
    WardC(){
        $(WARD_C).click()
        $(WARD_LIST_C).waitForDisplayed({timeout:10000})
        $(WARD_LIST_C).click()
        return this;
    }
    clickBTNSave(){
        $(SAVE).click()
        $(SAVE).waitForDisplayed({timeout:10000})
        return this;
    }
    clickBTNReset(){
        // console.log('có bấm nút không nè')
        // $(RESET).isClickable()
        // console.log(RESET)
        // $(RESET).moveToElement()
        // $(RESET).executeScript("arguments[0].click()", RESET);
        $(RESET).click();
        console.log('đâsdasasdasdasaasasdasdasdasas')
        return this;
    }
    ProvinceR(){
        $(PROVINCE_C).click()
        $(PROVINCE_LIST_R).waitForDisplayed({timeout:10000})
        $(PROVINCE_LIST_R).click()
        return this;
    }
    DistrictR(){
        $(DISTRICT_C).click()
        $(DISTRICT_LIST_R).waitForDisplayed({timeout:10000})
        $(DISTRICT_LIST_R).click()
        return this;
    }
    WardR(){
        $(WARD_C).click()
        $(WARD_LIST_R).waitForDisplayed({timeout:10000})
        $(WARD_LIST_R).click()
        return this;
    }
    clickDeleteAddress(){
        $(BTN_DELETE).click()
        $(BTN_DELETE).pause(2000)
        console.log(BTN_DELETE)
        return this;
    }
    clickDeleteAddressYes(){
        $(BTN_YES).click()
        $(BTN_YES).pause(5000)
        console.log(BTN_DELETE)
        return this;
    }
    clickEditAddress(){
        $(BTN_EDIT).click()
        $(BTN_EDIT).pause(2000)
        return this;
    }
    clickBTNToggle(){
        $(BTN_TOGGLE).click();
        console.log(BTN_TOGGLE)
        $(BTN_TOGGLE).pause(3000)
        return this;
    }
}
module.exports = new CreateAddress();