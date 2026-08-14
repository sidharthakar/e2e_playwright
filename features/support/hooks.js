const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const playwright = require('@playwright/test')
const {ActionsUtility} = require('../../utility/ActionsUtility')
const {LoginPage} = require('../../pages/LoginPage')

Before(async function(){
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.action = new ActionsUtility(this.page);
    this.loginpage = new LoginPage(this.page); 
})

After(async function(){
    console.log('Closing Application')
})

AfterStep(async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshoot('ScreeShoot_Failed.png');
    }
})