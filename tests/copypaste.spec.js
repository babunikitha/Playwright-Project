////////////////////////////syntax is keyboard.press('Control+A')--------------------
import{test} from '@playwright/test'

test.beforeEach('redif',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
})


//partial selection
test('copypastepartial',async({page})=>
{
    
    const fullna=page.getByPlaceholder('Enter your full name')
    await fullna.fill('nikitha babu')
    await fullna.click()
    // Select "babu"
    for (let i = 0; i < 4; i++) {
        await page.keyboard.press('Shift+ArrowLeft');
    }
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Tab')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Control+V')
    
await page.waitForTimeout(3000)
})

//full selection

test.only('copypastefull',async({page})=>
{//
    const fullna=page.getByPlaceholder('Enter your full name')
    await fullna.fill('nikitha babu')
    await page.keyboard.press('Control+A')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Tab')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Control+V')
    
await page.waitForTimeout(3000)
})