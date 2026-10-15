import{test,expect} from '@playwright/test'
test('getByRole Locator',async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    const fullname=page.getByRole('textbox',{name:'Enter your full name'})
    await fullname.fill('nikhil')

    const email=page.getByPlaceholder('Enter Rediffmail ID')
    await email.fill('nikhil2212')

    const pswrd=page.locator("#newpasswd")
    await pswrd.fill('abc123')

    const cnfmpswrd=page.locator('//*[@id="newpasswd1"]')
    await cnfmpswrd.fill('abc123')

    const day=page.locator(".day")
    await day.click()

    const fml=page.getByLabel('Female')
    await fml.click()

    // const hom=page.getByText('Rediff Home')
    // await hom.click()

    // const signIn=page.getByTitle('Rediff Login')
    // await signIn.click()

    // const logo=page.getByAltText('Rediffmail')
    // await logo.click()

    await page.waitForTimeout(6000)
})