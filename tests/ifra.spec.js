import{test,expect} from '@playwright/test'
test('Frames',async({page})=>
{
    await page.goto('https://vinothqaacademy.com/iframe/')
    const allFrames=page.frames();
    const numFrames=allFrames.length
    console.log('Total no. of frames : '+numFrames);

    for(let f of allFrames)
    {
        console.log('Frame name:'+f.name());
        console.log('Frame url:'+f.url());
    }

    const firstFrame=page.frame('employeetable')
    await firstFrame.locator('#nameInput').fill('Adhya')
    await page.waitForTimeout(2000);
})