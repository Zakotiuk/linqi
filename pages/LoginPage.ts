import { Locator, Page } from "playwright";

export class LoginPage {
    readonly page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('login-username');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-submit');
    }
}