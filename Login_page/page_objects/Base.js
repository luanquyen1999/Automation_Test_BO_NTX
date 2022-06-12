class Base{
    openPage(pageUrl){
        browser.url(pageUrl);
        return this;
    }
}
module.exports = Base;