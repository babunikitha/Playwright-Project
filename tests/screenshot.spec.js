import{test,expect} from '@playwright/test'
test('screenshot page',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    
    //full page screenshot             syntax is screenshot({path:".//folder name//screenshotfilename,name"})
    await page.screenshot({path:".//screenshotfull//fullPage.png",fullPage:true});
    await page.waitForTimeout(3000)

    //element screenshot                 syntax is screenshot({path:".//folder name//screenshotfilename"}) 
    const screensh=page.getByPlaceholder('Enter your full name')
    await screensh.fill('nikitha b')
    await screensh.screenshot({path:".//screenshot//fullnamenikki.png"})
})


