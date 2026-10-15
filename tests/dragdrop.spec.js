import{test,expect} from '@playwright/test'
test('login validation',async({page})=>
{
    await page.goto('https://testautomationcentral.com/demo/drag_and_drop.html')
    const src=page.locator('#draggable')
    const dest=page.locator('#droppable')
    await src.dragTo(dest)
    await expect(page.locator("#drop-message")).toHaveText("Dropped successfully!")
    await page.waitForTimeout(5000)
})