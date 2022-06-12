const NULL_ADDRESS_FILE = '//div[text()= "Vui lòng chọn địa chỉ gửi"]'
const NULL_CHOSE_FILE = '//div[text()= "Vui lòng chọn đơn trước khi nhấn tạo!"]'
const CREATE_FILE_SUCCESS = '//*[@id="root"]/div/div[2]/header/ul[1]/ol/li[2]'

    /////////////////Tạo đơn từ file///////////////
        class CreateBillFilelVerify{
            Null_address_file_verify(){
                $(NULL_ADDRESS_FILE).waitForDisplayed({time: 15000})
                let Null_address_file_verify = $(NULL_ADDRESS_FILE).getText()
                return Null_address_file_verify
            }
            Null_chose_file_verify(){
                $(NULL_CHOSE_FILE).waitForDisplayed({time: 15000})
                let Null_chose_file_verify = $(NULL_CHOSE_FILE).getText()
                return Null_chose_file_verify
            }
            Bill_Success_verify(){
                $(CREATE_FILE_SUCCESS).waitForDisplayed({time: 15000})
                let Bill_success_file_verify = $(CREATE_FILE_SUCCESS).getText()
                return Bill_success_file_verify
            }
        }
        module.exports =  new CreateBillFilelVerify();