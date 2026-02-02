import { Locator, Page } from "playwright";

export class ProcessPage {
    readonly page;
    readonly createProcessButton : Locator;
    
    constructor(page : Page) {
        this.page = page;
        this.createProcessButton = page.getByTestId('processList-addProcess-click');
    }

    async clickCreateProcessButton() {
        await this.createProcessButton.click();
    }
}