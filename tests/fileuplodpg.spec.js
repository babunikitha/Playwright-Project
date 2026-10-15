////////////////////////////////////////////syntax is filevar.setInputFiles("select the file location as path","path")////////////
// import{test,expect} from '@playwright/test'
// test('fileuploading',async({page})=>
// {
//     await page.goto("https://demo.automationtesting.in/FileUpload.html")
//     const fileup=page.locator("#input-4")
//     await page.waitForTimeout(2000)
//     await fileup.setInputFiles("C:\\Users\\Nikitha Babu\\Desktop\\fileuplo\\Nikitha_Babu_Resume.docx","path")
//     await page.waitForTimeout(4000)

// })



/////////////////task2 of file upload/////////////////////////////
import{test,expect} from '@playwright/test'
test('fileuploading',async({page})=>
{
    await page.goto("https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-upload-standard")
    const fileup=page.locator("#upload-single")
    await page.waitForTimeout(2000)
    await fileup.setInputFiles("C:\\Users\\Nikitha Babu\\Desktop\\fileuplo\\Nikitha_Babu_Resume.docx","path")
    await page.waitForTimeout(4000)

})

