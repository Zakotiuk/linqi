import { LoginPage } from "../pages/LoginPage";
import { test as base } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;

export const test = base.extend<{ loginPage : LoginPage }>({
loginPage: async ({ page }, use) => {
    const loginPage =  new LoginPage(page);
        
    await page.goto('https://linqi.wecantest.it');    
    await loginPage.usernameInput.fill(username);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();
    await use(loginPage);
}});