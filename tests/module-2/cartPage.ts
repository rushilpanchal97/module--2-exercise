import { Page, Locator } from "playwright"
import { expect } from "@playwright/test"

export class cartPage{
    readonly page: Page;
    readonly cartIcon: Locator;

    constructor(page: Page){
        this.page = page;
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async gotoCart(){
        await this.cartIcon.click();
    }
}