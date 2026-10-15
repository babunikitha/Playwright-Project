import { test, expect } from '@playwright/test';

test('drag accounts', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/drag_drop.html', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    const src1 = page.locator('//*[@id="products"] //li[2]');
    const src2 = page.locator('//*[@id="products"] //li[4]');

    const src3 = page.locator("//*[@id='credit2']/a");
    const src4 = page.locator("//*[@id='credit1']/a");

    const dest1 = page.locator("//*[@id='bank']/li");
    const dest2 = page.locator("//*[@id='amt7']/li");
    const dest3 = page.locator("//*[@id='loan']/li");
    const dest4 = page.locator("//*[@id='amt8']/li");

    await src3.dragTo(dest1);
    await src4.dragTo(dest3);
    await src1.dragTo(dest2);
    await src2.dragTo(dest4);

    await expect(page.getByText('Perfect!')).toHaveText('Perfect!');
});