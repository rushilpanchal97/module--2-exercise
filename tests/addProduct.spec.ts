import {test, expect, Page} from '@playwright/test';
import { LoginPage } from '../module-2/LoginPage';
import { ProductsPage } from './productPage';

let page: Page;
let loginpage;
let productsPage;

test.beforeAll("Login Application", async ({browser}) => {
    page = await browser.newPage();
    const LoginPage = new loginPage(page);
    await LoginPage.login("standard_user", "secret_sauce");
});


test("Add product", async ({ browser }) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.shoppingCartIcon).toContainText('1');
});