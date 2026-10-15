import {test,expect} from "@playwright/test"

test('Title of a page',async({page})=>
{
    await page.goto('https://www.google.com/')
    const pageTitle=await page.title()
    console.log(pageTitle);
})