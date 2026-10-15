import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pagefolder/Logipage.js';
import {HomePage} from '../../Pagefolder/HomePage.js';

test('Login and enter property label', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.openLoginPage();

    await login.enterUsername(process.env.kp_un);
    await login.enterPassword(process.env.kp_pw);

    await login.clickLogin();

    await home.clickAddProperty();

    await home.enterPropertyLabel('paippad property');

    await expect(home.propertyLabel)
        .toHaveValue('paippad property');
});