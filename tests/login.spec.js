const{test,expect} = require('@playwright/test')
const {ActionsUtility} = require('../utility/ActionsUtility')
const {LoginPage} = require('../pages/LoginPage')
const data_login = require('../data.json')

// for(const user_data of data_login.login){
// test(`Open Browser ${user_data.username}`,async({page})=>{    
//     const action = new ActionsUtility(page);
//     await page.goto('https://www.saucedemo.com/')
//     await page.waitForLoadState();
//     const loginpage = new LoginPage(page);
//     await loginpage.logintoSausdemo(user_data.username, user_data.password)
//     console.log(await page.url())
// })
// }


test('Open Browser And Validated Login', async({page})=>{
    // const context = await browser.newContext();
    // const page = await context.newPage();
    const action = new ActionsUtility(page);
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState()
    const loginpage = new LoginPage(page);
    loginpage.logintoSausdemo(data_login.username,data_login.password)
    await expect(page).toHaveTitle('Swag Labs');
})
