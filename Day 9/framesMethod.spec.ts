import {test} from '@playwright/test'
test('Test the iFrames',async({page})=>
{
    await page.goto(`https://www.amazon.in`)
    const frameRef= await page.frames()
    const frameRefCount=frameRef.length
    console.log('Count of frames in Amazon:',frameRefCount);
    for(let index=0;index<frameRefCount;index++)
    {
        console.log('Frame names:',frameRef[index])
    }
    await page.waitForTimeout(3000)
}
)