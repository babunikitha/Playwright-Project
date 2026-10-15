//using codegen

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByText('right click me').click({
//     button: 'right'
//   });
//     await page.waitForTimeout(3000)

//     await page.getByText('Cut').click();
//     await page.waitForTimeout(3000)
//     page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.waitForTimeout(3000)
//   await page.getByRole('button', { name: 'Double-Click Me To See Alert' }).dblclick();
//   await page.waitForTimeout(3000)
// });

//manual typed
import {test,expect} from '@playwright/test'
test.beforeEach('Alerts',async({page})=>
{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
})
test('right clicked and alert',async({page})=>{
  page.on('dialog',async dlg=>{
    expect(dlg.type()).toContain('alert')
    expect(dlg.message()).toContain('clicked: edit')
    await dlg.accept()
  })

  await page.waitForTimeout(2000)
    const rightBtn=page.getByText('right click me')
    await rightBtn.click({button:"right"});
    await page.getByText('Edit').click()  
})


test.only('doubleclicked and alert',async({page})=>{    
    page.on('dialog',async dlg=>{
    expect(dlg.type()).toContain('alert')
    expect(dlg.message()).toContain('You double clicked me.. Thank You..')
    await dlg.accept()
  })

  await page.waitForTimeout(2000)
  await page.getByRole('button', { name: 'Double-Click Me To See Alert' }).dblclick();
  await page.waitForTimeout(2000)
})