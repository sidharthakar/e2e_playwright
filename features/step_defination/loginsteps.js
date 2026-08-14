const{test,expect} = require('@playwright/test')
const {ActionsUtility} = require('../../utility/ActionsUtility')
const {LoginPage} = require('../../pages/LoginPage')
const data_login = require('../../data.json')
const { Given, When, Then } = require('@cucumber/cucumber');


Given('Open Browser and Launch {string}', async function (App_Url) {
    await this.page.goto(App_Url)
});

When('Login With Correct {string} and {string}', async function (username, password) {
   await this.loginpage.logintoSausdemo(username,password)
});

Then('Validated the {string} Screen have {string}', async function (Titel, Screen) {
    await expect(this.page).toHaveTitle('Swag Labs');
});
