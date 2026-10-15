import{test} from '@playwright/test'

test.use({viewport:{width:1536,height:695}})
test('width and height page',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    await page.waitForTimeout(5000)
    console.log(page.viewportSize().width)
    console.log(page.viewportSize().height)
})