import { Page, Locator } from "playwright";

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton : Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]')
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]')

    }

    async login(username:string, password:string)
    {
        await this.page.goto("https://www.saucedemo.com")
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

}