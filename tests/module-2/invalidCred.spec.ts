import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

test('Invalid Username', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login("username_name", "secret_sauce");
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('Invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login("standard_user", "NoPassword");
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
});
