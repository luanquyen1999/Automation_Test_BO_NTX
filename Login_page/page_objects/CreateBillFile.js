let Base = require("./Base.js");
let SecureAreaPage = require("./SecureAreaPage.js");
const { Builder, By, Key } = require("selenium-webdriver");

let path = require("path");
const EXCEL = "#_bill_excel";
const CREATEBILLMENU = "#_create_bill_dropdown";

const BTN_IMPORT_EXCEL = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div[1]/div/div/div/div/form/div/div[2]/div/div[1]/button";
const INPUT_FILE = "//input[@id='_upload_file_excel']";
const BTN_UPLOAD = "#_push_excel";
const CHECK_SELECE_BILL ="//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[2]/td[1]/label/span";
const DROPDOWN_CONSGNORS = "//*[@id='partner_address_id']";
const DROPDOWN_LIST_CONSGNORS = '//*[@id="22816_"]';
const BTN_UPLOAD_BILL = "//span[text()='Đẩy đơn']";
const BTN_NEXT = "//span[text()='Chuyển hướng']";
//tab đơn không hợp lệ
const TAB_SUCCESS = "//*[@id='rc-tabs-1-tab-success']/span"
const TAB_ABSURD = "//*[@id='rc-tabs-1-tab-error']/span";
// const TAB_ABSURD = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div[2]/div/div[1]/div/div/div/div[1]/div[1]/div/div[2]"
const TAB_NOT_SUPPORT = "//*[@id='rc-tabs-1-tab-warning']/span";
const BTN_DELETE_BILL = "//*[@id='root']/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div/div[2]/button";

class CreateBillFile extends Base {
  clickOnCreatBillMenu() {
    $(CREATEBILLMENU).click();
    return this;
  }
  clickOnCreatBillExcel() {
    $(EXCEL).click();
    return this;
  }
  clickBtnImportExcel() {
    $(BTN_IMPORT_EXCEL).click();
    return this;
  }
  clickInputExcelDecent() {
    let filePath = path.join(__dirname,"./NTX_Excel_Create_Bill_Template_2022610.xlsm"
    );
    // $(INPUT_FILE).clearValue();

    $(INPUT_FILE).addValue(filePath);
    return this;
  }
  clickUploadFile() {
    // $(BTN_UPLOAD).waitForDisplayed({timeout:10000})
    $(BTN_UPLOAD).click();
    // $(BTN_UPLOAD).waitForDisplayed({timeout:10000})
    $(BTN_UPLOAD).pause(5700)
    return this;
  }
  clickDropDownC() {
    $(DROPDOWN_CONSGNORS).click();
    // $(DROPDOWN_LIST_CONSGNORS).isClickable()

    $(DROPDOWN_LIST_CONSGNORS).click();
    return this;
  }
  clickSeleceBill(radiobutton) {
    $(CHECK_SELECE_BILL).click();
    $(CHECK_SELECE_BILL).waitForDisplayed({ timeout: 15000 });
    $(CHECK_SELECE_BILL).isSelected(radiobutton);
    console.log("có bấm nút không nè");
    return this;
  }
  clickUploadBill() {
    $(BTN_UPLOAD_BILL).waitForDisplayed({timeout:15000})
    $(BTN_UPLOAD_BILL).click();
    return this;
  }
  clickBTNNext() {
    $(BTN_UPLOAD_BILL).waitForDisplayed({timeout:15000})
    $(BTN_NEXT).click();
    return this;
  }
  clickTabSuccess() {
    $(TAB_SUCCESS).waitForDisplayed({ timeout: 15000 });
    $(TAB_SUCCESS).click();
    return this;
  }
  clickTabAbsurd() {
    $(TAB_ABSURD).waitForDisplayed({ timeout: 15000 });
    $(TAB_ABSURD).click();
    return this;
  }
  clickInputExcelAbsurd() {
    let filePath = path.join(
      __dirname,
      "./NTX_Excel_Create_Bill_Template_202262_TC_Absurd.xlsm"
    );
    // $(INPUT_FILE).clearValue();

    $(INPUT_FILE).addValue(filePath);
    return this;
  }
  clickTabNotSupport() {
    $(TAB_NOT_SUPPORT).waitForDisplayed({ timeout: 15000 });
    $(TAB_NOT_SUPPORT).click();
    return this;
  }
  clickInputExcelNotSupport() {
    let filePath = path.join(__dirname,"./NTX_Excel_Create_Bill_Template_202262_Not_SP.xlsm");
    // $(INPUT_FILE).clearValue();

    $(INPUT_FILE).addValue(filePath);
    return this;
  }
  clickBtnDelete() {
    $(BTN_DELETE_BILL).click();
    return this;
  }
}
module.exports = new CreateBillFile();
//*[@id="root"]/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[2]/td[2]
//*[@id="root"]/div/div[2]/div/main/div/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div/div/div/div/div/table/tbody/tr[2]/td[2]
//*[@id="rc-tabs-1-tab-warning"]/span
//*[@id="22754_"]