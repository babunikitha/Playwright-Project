//getbyrole
// import {test} from '@playwright/test'
// test('getlocator1',async({page})=>
// {
//         await page.goto("https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs")
//         await page.getByRole('textbox',{name:'Name'}).fill('nikithaaa')
//         await page.getByRole('textbox',{name:'Email'}).fill('babunikitha6@gmail.com')
//         await page.getByRole('textbox',{name:'Address'}).fill('kanjirathummottil house,nalukody p.o,kottayam')
//         await page.getByRole('button',{name:'Submit'}).click()
//         await page.waitForTimeout(5000)

// })



//getByPlaceholder
// import {test} from '@playwright/test'
// test('getlocator2',async({page})=>
// {
//         await page.goto("https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs")
//         await page.getByPlaceholder('Enter your name').fill('nikkimol')
//         await page.getByPlaceholder('Enter your email').fill('nikkimol@gmail.com')
//         await page.getByPlaceholder('Enter your address').fill('abc house,efg p.o,yz')
//         await page.getByRole('button',{name:'submit'}).click()
//         await page.waitForTimeout(5000)
// })


//absolute xpath
// import {test} from '@playwright/test'
// test('getlocator3',async({page})=>
// {
//         await page.goto("https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs")
//         await page.locator("xpath=/html/body/div[4]/main/div[2]/section[1]/div/form/div[1]/div[1]/input").fill('nameabc')
//         await page.locator("xpath=html/body/div[4]/main/div[2]/section[1]/div/form/div[1]/div[2]/input").fill('emailabc@gmail.com')
//         await page.locator("xpath=/html/body/div[4]/main/div[2]/section[1]/div/form/div[2]/textarea").fill('abc adresss,abcjdkj')
//         await page.locator("xpath=/html/body/div[4]/main/div[2]/section[1]/div/form/div[3]/button[1]").click()
//         await page.waitForTimeout(5000)
       
// })


//relative xpath
import {test} from '@playwright/test'
test('getlocator4',async({page})=>
{
        await page.goto("https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-text-inputs")
        await page.locator('xpath=//input[@id="name"]').fill('nikkiiiiii')
        await page.locator('xpath=//input[@id="email"]').fill('nikkkkiiii@email.com')
        await page.locator('xpath=//textarea[@id="address"]').fill('address1,adreess2,addr3')
        await page.locator('xpath=//button[@id="btn-submit-text-inputs"]').click()
        await page.waitForTimeout(5000)
})