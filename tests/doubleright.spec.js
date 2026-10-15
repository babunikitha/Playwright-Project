import{test,expect} from '@playwright/test'
test('double click and right',async({page})=>
{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html", {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    //rightclick -----------------syntax is .click({button:"right"})
    const rightcl=page.getByText('right click me')
    await rightcl.click({button:"right"});
    await page.getByText('Edit').click()
    await page.waitForTimeout(5000)

//double click---------------------------syntax is .dblclick()
    const doublcl=page.getByText('Double-Click Me To See Alert')
    await doublcl.dblclick()
    await page.waitForTimeout(5000)
})
