import{test} from '@playwright/test'
import testDataVar from '../Util/data.json'
//to give the name of each tests use test.describe
test.describe('login tests',()=>
    {
        for(let data of testDataVar)
        {
            test(`Datadriven test using ${data.username}`,async({page})=>
            {
                await page.goto('https://keralaproperty.in/member/login/')

                await page.locator('#ulogin').fill(data.username)
                await page.locator('#upass').fill(data.password)
                await page.locator('#sub_logbtn').click()
                await page.waitForTimeout(4000)
            })
        }
    
}
)