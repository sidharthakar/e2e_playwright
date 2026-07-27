const { ActionsUtility } = require('../utility/ActionsUtility');
class LoginPage{
    
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginbuttoon = page.getByRole('button',{name:'Login'});
        this.actions = new ActionsUtility(this.page);
    }

    async logintoSausdemo(UserName,PassWord){
        await this.actions.fillInput(this.username,UserName);
        await this.actions.fillInput(this.password,PassWord);
        await this.actions.performclick(this.loginbuttoon);
    }
}

module.exports={LoginPage}