import{test,expect} from '@playwright/test'
test('Login validation',async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/')

    await page.locator('#ulogin').fill('abc@gmail.com')
    await page.locator('#upass').fill('abc112233')
    await page.locator('#sub_logbtn').click()
    await page.waitForTimeout(4000)
})