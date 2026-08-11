const{test,expect} = require('@playwright/test')
const {ActionsUtility} = require('../utility/ActionsUtility')
const {LoginPage} = require('../pages/LoginPage')
const data_login = require('../data.json')
const { request, STATUS_CODES } = require('node:http')
const { json } = require('node:stream/consumers')
const { fail } = require('node:assert')

for(const user_data of data_login.login){
test(`Open Browser ${user_data.username}`,async({page})=>{    
    const action = new ActionsUtility(page);
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState();
    const loginpage = new LoginPage(page);
    await loginpage.logintoSausdemo(user_data.username, user_data.password)
    console.log(await page.url())
})
}

test('Open Crm Applocation',async({page})=>{
    await page.goto('/');
    console.log(await page.title())
    const loginpage = new LoginPage(page);
    loginpage.logintoSausdemo('Admin','admin123')

    page.route('',
        async route=>{
            const respone = await page.request.fetch(route.request())
            route.fulfil({
                respone,
                body:JSON.stringify(""),
                staus:200
        })
           
    })

    page.route('',async route=>{
        route.continue({headers:
            {"":""},
            url:""})
    })

    page.route('',async route=>{
        route.abort('failed')
    } )

})