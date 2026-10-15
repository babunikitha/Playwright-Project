import { test, expect } from '@playwright/test';

test('dropdownpg', async ({ page }) => {

    await page.goto('https://www.wix.com/studio/blog/website-hover-effects')
    const enterp=page.getByRole('button', { name: 'Enterprise' })
    await enterp.hover()
    await page.waitForTimeout(3000);
})