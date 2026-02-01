import { Locator, Page } from "playwright";

export class ActionsModal {
    readonly page;
    readonly processStartButton : Locator;
    readonly closeModalButton : Locator;

    constructor(page : Page) {
        this.page = page;
        this.processStartButton = page.getByText('Process start');
        this.closeModalButton = page.getByRole('button', { name: 'Close' });
    }
}