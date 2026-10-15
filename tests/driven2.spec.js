import {test}from'@playwright/test'
import testDataVar1 from '../Util/data2.json'
test.describe('login tests',()=>
    {
        for(let data of testDataVar1)
        {
            test(`Datadriven ${data.username}`,async({page})=>
            {
                await page.goto("https://practicetestautomation.com/practice-test-login/")
                const user=page.locator('//*[@id="username"]')
                await user.fill(data.username);
                const pass=page.locator('//*[@id="password"]')
                await pass.fill(data.password);
                await page.locator('//*[@id="submit"]').click

                })
        }
    
}
)
