import{test,expect} from '@playwright/test'
test('getByRole Locator',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    //await page.getbyrole('rolename',{name:'element name'})
    await page.getByRole('textbox',{name:"enter your full name"}).fill('nikitha babu')
                        //or
    //syntax is await page.getbyplaceholder('element name')
    //await page.getByPlaceholder("Enter your full name").fill('niki')
                       //or
    //absolute xpath -starts from root node and denoted with single slash '/'
    //await page.locator("xpath=html/body/div[2]/div[2]/form/div/div[2]/input").fill('nikki')
                      //or
    //syntax of relative xpath is //tagname[@attribute='value']
    // errrrrrrrrrooorr await page.locator('xpath=//input[@name="namead604c9a"]').fill("sharo")


                       //or
                       //getbylabel
    //await page.getByLabel('').fill('niki sharo')
    
    await page.getByRole('textbox',{name:"Enter Rediffmail ID"}).fill('babu.nikitha6')
                    //or
    //absolute xpath -starts from root node and denoted with single slash '/'
    //await page.locator("xpath=html/body/div[2]/div[2]/form/div[1]/div[3]/div/input").fill('nikki.babu')

    await page.getByRole('button',{name:"Check availability"}).click()
    
   
    await page.waitForTimeout(100000)
})