let Base = require('./Base.js');
let SecureAreaPage = require('./SecureAreaPage.js');
const {Builder, By, Key} = require('selenium-webdriver');

const BTN_CREATE_BILL = "#create_bill_header";
const NAME_CONSIGNORS = "#s_name";
const PHONE_CONSIGNOR = "#s_phone";
const ADDRESS_CONSIGNOR = "#s_address";
const PROVINCE_CONSIGNOR =  "#s_province_id";
const PROVINELIST_CONSIGNOR = "//*[@id='50_s_province_id']/div";
const DISTRICT_CONSIGNOR = "#s_district_id";
const DISTRICTLIST_CONSIGNOR = "//*[@id='5016_s_district_id']/div";
const WARD_CONSIGNOR = "#s_ward_id";
const WARDLIST_CONSIGNOR = "//*[@id='28455_s_ward_id']/div"

const NAME_RECEIVER = "#r_name";
const PHONE_RECEIVER = "#r_phone";
const ADDRESS_RECEIVER = "#r_address";
const PROVINCE_RECEIVER =  "#r_province_id";
const PROVINELIST_RECEIVER = "//*[@id='29_r_province_id']/div";
const DISTRICT_RECEIVER = "#r_district_id";
const DISTRICTLIST_RECEIVER = "//*[@id='2903_r_district_id']/div";
const WARD_RECEIVER = "#r_ward_id";
const WARDLIST_RECEIVER = "//*[@id='25450_r_ward_id']/div"


const WEIGHT = "#create_bill_weight";
const PACKAGENO = "#create_bill_packageno";
const COD = "#create_bill_codamt";
const CARGO = "#create_bill_cargo";
const LENGTH = "#create_bill_length";
const WIDTH = "#create_bill_width";
const HEIGHT = "#create_bill_height";
const NOTE = "#create_bill_note";
const BTN_CREATE = "#submitBtn";
const CHOTHUHANG = '//*[@id="note"]/label[3]/span[1]';
// const MENU = ".tao-van-don";
class CreateBillPage extends Base{
    ///////////////////////////////////////////////////////
    clickOnCreatBill(){
        $(BTN_CREATE_BILL).click();
        return this;
    }
    clickCreatBill(){

        $(BTN_CREATE).waitForDisplayed({timeout:3000})
        $(BTN_CREATE).doubleClick();
        return this;
    }
    ////////////consignors/////////////////
    Nameconsignors(sendnameconsignors){
        $(NAME_CONSIGNORS).waitForDisplayed({timeout:10000})
        $(NAME_CONSIGNORS).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(NAME_CONSIGNORS).setValue(sendnameconsignors);
        return this;
    }
    Phoneconsignors(phoneconsignors){
        $(PHONE_CONSIGNOR).waitForDisplayed({timeout:10000})
        $(PHONE_CONSIGNOR).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(PHONE_CONSIGNOR).setValue(phoneconsignors);
        return this;
    }
    AddressSendconsignors(addresssendconsignors){
        $(ADDRESS_CONSIGNOR).waitForDisplayed({timeout:10000})
        $(ADDRESS_CONSIGNOR).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(ADDRESS_CONSIGNOR).setValue(addresssendconsignors)
        return this;
    }
    Provinceconsignors(provincesendconsignors){      
        $(PROVINCE_CONSIGNOR).setValue(provincesendconsignors);
        $(PROVINELIST_CONSIGNOR).waitForDisplayed({timeout:10000})
        $(PROVINELIST_CONSIGNOR).click();
        return this;
    }
    Districtconsignors(districtconsignors){
        $(DISTRICT_CONSIGNOR).setValue(districtconsignors);
        $(DISTRICTLIST_CONSIGNOR).waitForDisplayed({timeout:10000})
        $(DISTRICTLIST_CONSIGNOR).click();
        return this;
    }
    Wardconsignor(wardconsignors){
        $(WARD_CONSIGNOR).setValue(wardconsignors);
        $(WARDLIST_CONSIGNOR).waitForDisplayed({timeout:10000})
        $(WARDLIST_CONSIGNOR).click();
        return this;
    }
    //////////// receiver/////////////////
    Namereceiver(namereceiver){
        $(NAME_RECEIVER).waitForDisplayed({timeout:10000})
        $(NAME_RECEIVER).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(NAME_RECEIVER).setValue(namereceiver);
        return this;
    }
    Phonereceiver(phonereceiver){
        $(PHONE_RECEIVER).waitForDisplayed({timeout:10000})
        $(PHONE_RECEIVER).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(PHONE_RECEIVER).setValue(phonereceiver);
        return this;
    }
    AddressSendreceiver(addresssendreceiver){
        $(ADDRESS_RECEIVER).waitForDisplayed({timeout:10000})
        $(ADDRESS_RECEIVER).setValue(Key.chord(Key.CONTROL, "a", Key.BACK_SPACE ));
        $(ADDRESS_RECEIVER).setValue(addresssendreceiver)
        return this;
    }
    Provincereceiver(provincesendreceiver){
        $(PROVINCE_RECEIVER).setValue(provincesendreceiver);
        $(PROVINELIST_RECEIVER).waitForDisplayed({timeout:10000})
        $(PROVINELIST_RECEIVER).click();
        return this;
    }
    Districtreceiver(districtreceiver){
        $(DISTRICT_RECEIVER).setValue(districtreceiver);
        $(DISTRICTLIST_RECEIVER).waitForDisplayed({timeout:10000})
        $(DISTRICTLIST_RECEIVER).click();
        return this;
    }
    Wardreceiver(wardreceiver){
        $(WARD_RECEIVER).setValue(wardreceiver);
        $(WARDLIST_RECEIVER).waitForDisplayed({timeout:10000})
        $(WARDLIST_RECEIVER).click();
        return this;
    }
    ////////////////////////////////////////////////////////////////////////////////
    
    weight(weight){
        $(WEIGHT).waitForDisplayed({timeout:15000})
        $(WEIGHT).setValue(weight);
        return this;
    }
    packageno(packageno){
        $(PACKAGENO).waitForDisplayed({timeout:15000})
        $(PACKAGENO).setValue(Key.BACK_SPACE );
        $(PACKAGENO).setValue(packageno);
        return this;
    }
    cod(cod){
        $(COD).waitForDisplayed({timeout:15000})
        $(COD).setValue(cod);
        return this;
    }
    cargo(cargo){
        $(CARGO).pause(1100);
        $(CARGO).waitForDisplayed({timeout:15000});
        $(CARGO).setValue(cargo);
        return this;
    }
    length(length){
        $(LENGTH).waitForDisplayed({timeout:15000})
        $(LENGTH).setValue(length);
        return this;
    }
    width(width){
        $(WIDTH).waitForDisplayed({timeout:15000})
        $(WIDTH).setValue(width);
        return this;
    }
    height(height){
        $(HEIGHT).waitForDisplayed({timeout:15000})
        $(HEIGHT).setValue(height);
        // $(HEIGHT).wait(20000);
        return this;
    }
    note(note){
        $(NOTE).waitForDisplayed({timeout:15000})
        $(NOTE).setValue(note)
        return this;
    }
    radiobutton(radiobutton){
        $(CHOTHUHANG).click()
        $(CHOTHUHANG).pause(500)
        $(CHOTHUHANG).isSelected(radiobutton)
    }
//     setTimeout(){
//          10000; 
//    };
//     waitfor(){
//         $(WAIT).waitForDisplayed(10000);
//     }
}
module.exports = new CreateBillPage();