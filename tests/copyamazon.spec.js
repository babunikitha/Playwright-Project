import {test} from '@playwright/test'
test('copy paste delete search',async({page})=>{
    await page.goto('https://www.amazon.com/')
    const searching=page.getByRole('searchbox',{Name:'Search Amazon'});
    await searching.fill('mobile phones');
    await searching.click()
    for (let i = 0; i < 7; i++) {
        await page.keyboard.press('Shift+ArrowLeft')
        }
    await page.waitForTimeout(3000)
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
})