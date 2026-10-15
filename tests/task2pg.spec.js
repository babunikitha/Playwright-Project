//getbyrole
// import {test} from '@playwright/test'
// test('task2sitelogin',async({page})=>
// {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.getByRole('textbox',{name:'Username'}).fill('Admin');
//     await page.getByRole('textbox',{name:'Password'}).fill('admin123')
//     await page.getByRole('button',{name:'Login'}).click()
//     await page.waitForTimeout(5000)
// })





//getbyplaceholder
// import {test} from '@playwright/test'
// test('task2sitelogin',async({page})=>
// {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.getByPlaceholder('Username').fill('Admin')
//     await page.getByPlaceholder('Password').fill('admin123')
//     await page.getByRole('button',{name:'Login'}).click()
//     await page.waitForTimeout(5000)
// })



//absolute xpath
import {test} from '@playwright/test'
test('task2sitelogin',async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('xpath=/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').fill('Admin')
    await page.locator('xpath=/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').fill('admin123')
    await page.locator('xpath=/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()
    await page.waitForTimeout(5000)
})


// // no     relative xpath
// import {test} from '@playwright/test'
// test('task2sitelogin',async({page})=>
// {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.locator('xpath=')
// })







