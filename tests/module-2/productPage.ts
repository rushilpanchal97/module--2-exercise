import {Page, Locator} from "playwright"

export class ProductsPage{
    readonly page: Page;
    readonly backPack: Locator;
    readonly AddtoCart: Locator;
    readonly shoppingCartIcon: Locator;
    readonly checkoutButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.backPack = page.locator('[data-test="item-4-title-link"]')
        this.AddtoCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.checkoutButton = page.locator('[data-test="checkout"]')
    }

    async addbackpackShoppingCart(){
        await this.backPack.click();
        await this.AddtoCart.click();
    }

    async navtoCheckout(){
        await this.checkoutButton.click();
    }
}