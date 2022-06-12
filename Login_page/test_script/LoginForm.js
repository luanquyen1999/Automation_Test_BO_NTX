// const { Browser } = require("selenium-webdriver");

const { Browser } = require("selenium-webdriver");

// const { default: $ } = require("webdriverio/build/commands/browser/$");
describe("API Comand", function () {
  it("Login From", function () {
    browser.url("https://the-internet.herokuapp.com/login");

    const USERNAME_LOGIN = "#username";
    USERNAME_LOGIN.setValue("tomsmith");

    const PASSWORD_LOGIN = "#password";
    PASSWORD_LOGIN.setValue("SuperSecretPassword!");

    const BTN_LOGIN = "#login";
    BTN_LOGIN.submitFrom();

    Browser.pause(3000);
  });
});
