// const LOGIN_CONTENT ='[type="button"]';
const LOGIN_CONTENT = ".breadcrumb-item"
// const Xpath = //button[@id='']
// xpath=//div[text()='Tạo vận đơn']
class SecureAreaPage {
    getSecureAreaText(){
        let loginContent = $(LOGIN_CONTENT).getText();
        console.log(loginContent);
    }
}
module.exports = new SecureAreaPage();
