import {test} from '@playwright/test'
test('environment setting',async({page})=>
{
    await page.goto(process.env.BaseUrl)

    await page.locator('#ulogin').fill(process.env.kp_un)
    await page.locator('#upass').fill(process.env.kp_pw)
    await page.locator('#sub_logbtn').click()
    await page.waitForTimeout(4000)
})