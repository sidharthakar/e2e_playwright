
class ActionsUtility{
    
    constructor(page){
        this.page = page;
    }

    async performclick(selector){
        await selector.click();
    }
    async performdoubleclick(selector){
          await selector.dblclick();
        }
    async fillInput(selector, text) {
        await selector.clear();
        await selector.fill(text);
    }
    async hoverOver(selector) {
        await this.page.locator(selector).hover();
    }
    async setCheckbox(selector, shouldCheck = true) {
        const locator = this.page.locator(selector);
        if (shouldCheck) {
            await locator.check();
        } else {
            await locator.uncheck();
        }
    }
    async selectFromDropdown(selector, option) {
        await this.page.locator(selector).selectOption(option);
    }
    async dragAndDrop(sourceSelector, targetSelector) {
        await this.page.locator(sourceSelector).dragTo(this.page.locator(targetSelector));
    }
}
module.exports={ActionsUtility}