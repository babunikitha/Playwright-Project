import{test,expect} from '@playwright/test'
test('dropdownpg',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details",{
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });


    const day=page.locator('select[class="day"]')
    await day.selectOption("06")

    const month=page.locator('select[class="middle month"]')
    await month.selectOption({label:"APR"})

    const year=page.locator('select[class="year"]')
    await year.selectOption({index:17})

    await page.waitForTimeout(5000)
})
