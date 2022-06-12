describe('API Commed',function(){
const DROPDOWMENU = "#dropdown";

    it('Select by visible Test', function(){
        browser.url('https://the-internet.herokuapp.com/dropdown');
        //OP1
        // browser.waitForVisible(DROPDOWMENU, 10000);
        $(DROPDOWMENU).selectByVisibleText('Tạo đơn lẻ');
        driver.pause(6000);
    })
    it('Select by value Test', function(){
        
    })
    it('Select by index', function(){
        
    })
})