
/////////////////////////erroorrr/////////////////////////////////////////////


import { test, expect } from '@playwright/test';

test('dropdownpg', async ({ page }) => {

    await page.goto('https://www.ebay.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 5000
    });
  //hover -------.hover()
    const electromenu = page.getByRole('link',{name:'Motors',exact:true});

    await electromenu.hover()

    await page.waitForTimeout(8000);

    // const clicking = page.getByRole('link',{name:'Cars and trucks'});

    // await clicking.click();

    // await page.waitForTimeout(3000);
});