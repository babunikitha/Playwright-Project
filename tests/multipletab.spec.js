import {test} from '@playwright/test'
test('multiple tabs',async({context})=>{
    const page1=await context.newPage();                 //blank page open
    await page1.goto('https://www.amazon.com/')
    const amTl1=await page1.title()
    console.log(amTl1);

    const page2=await context.newPage();
    await page2.goto('https://www.google.com/')
    const googlTl2=await page2.title()
    console.log(googlTl2);

    const page3=await context.newPage();
    await page3.goto('https://www.facebook.com/')
    const faceTl3=await page3.title()
    console.log(faceTl3);

})

//page redirected to another page and agin goback to orginal page
test.only('multi tabs',async({context})=>
    {
    const page1=await context.newPage();
    await page1.goto('https://demo.guru99.com/popup.php/')

    const[newPage]=await Promise.all([
        context.waitForEvent('page'),
        page1.getByRole('link',{name:'Demo Site'}).click()
    ]) 

    await newPage.waitForLoadState()
    await page1.waitForTimeout(4000)
    await newPage.locator('#emailid').fill('Abc@gmail.com')
    await newPage.waitForTimeout(4000)
    await newPage.close()
    await page1.bringToFront();
    
})