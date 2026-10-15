import {test,expect} from '@playwright/test'

test.beforeEach('Alerts',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
})

//simple alert
// test('Simple alert',async({page})=>
// {
//     page.on('dialog',async dlg=>
//     {
//         expect(dlg.type()).toContain("alert")
//         expect(dlg.message()).toContain('I am an alert box!');        
//         await dlg.accept()

//     })
//     await page.waitForTimeout(2000)
//     const alertBtn=page.getByRole('button',{name:'click the button to display an  alert box:'})
//     await alertBtn.click();  
// })






//confirmation alert
// test('confirmation alert',async({page})=>
    
//     {

//         await page.getByRole('link',{name:'Alert with OK & Cancel'}).click()

//         page.on('dialog',async dlg=>
//         {
//             expect(dlg.type()).toContain("confirm")
//             expect(dlg.message()).toContain('Press a Button !')
//             await dlg.accept()
//         })
        
    
//     await page.waitForTimeout(2000)
//     const alertBtn=page.getByRole('button',{name:'click the button to display a confirm box'})
//     await alertBtn.click();
// })


//prompt alert
test.only('prompt alert',async({page})=>
    
    {

        await page.getByRole('link',{name:'Alert with Textbox'}).click()
        let inputValue='nikitha'

        page.on('dialog',async dlg=>
        {
            expect(dlg.type()).toContain("prompt")
            expect(dlg.message()).toContain('Please enter your name')
            await dlg.accept(inputValue)
        })
        
    
    await page.waitForTimeout(2000)
    const prompBtn=page.getByRole('button',{name:'click the button to demonstrate the prompt box'})
    await prompBtn.click();
})
