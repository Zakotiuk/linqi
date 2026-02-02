import { Locator, Page } from "playwright";

export class MainNavigation {
    readonly page;
    readonly processButton : Locator;

    constructor(page : Page) {
        this.page = page;
        this.processButton = page.getByTestId('mainNav-Prozess-Dashboard');
    }

    async clickProcessButton() {
        await this.processButton.click();
    }
}