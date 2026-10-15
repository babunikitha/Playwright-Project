

import {test,expect} from '@playwright/test'

//-------------------------------------------------autoretry assertion-------------------------------//
//title verification  toHaveTitle()

test.beforeEach('Redif',async({page})=>
{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
})

test('Title verification',async({page})=>
{
    //await expect(page).toHaveTitle("Rediff")
    await expect(page).toHaveTitle("Rediffmail Free Unlimited Storage")
})

//toBeVisible()
test('logo verification',async({page})=>
    {
        const rdlogo=page.getByAltText('Rediffmail')
        await expect(rdlogo).toBeVisible();
})


//toBeEnabled() and toBeDisabled()
test('button enabled or disabled',async({page})=>{
    const regBtn=page.locator('#Register')
    await expect(regBtn).toBeEnabled();
    //await expect(regBtn).toBeDisabled();
})

//toBeChecked()
test('checkbox present or not',async({page})=>{
    const checkbox=page.locator('#altid_msg')
    await expect(checkbox).toBeChecked()
})

//field editable  toBeEditable()
test('field editable',async({page})=>{
    const fulN=page.getByPlaceholder('Enter your full name')
    await expect(fulN).toBeEditable()
})




//----------------------------------------------------non-retry assertion------------------------------------------------//

//toContain --------check for any msg inside that msg any word present or not in that string not checked the assertion full page after loading just returns instantly

test.only('non-retrying',async({page})=>
{
    const msg="Account created successfully"
    expect(msg).toContain('created')
    
    //check if any null value returns
    const nullValue=null
    expect(nullValue).toBeNull()

    //check if it returns true or not ,otherways false value or not
    const pwd=true
    expect(pwd).toBeTruthy()
    //expect(pwd).toBeFalsy()
})