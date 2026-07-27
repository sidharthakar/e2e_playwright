class BrowserHandeler{
    constructor(page){
        this.page = page;
    }
    
    async launchapplication(url){
        await page.goto(url);
    }
    async moveBack(){
       await page.goBack();
    }
    
}