import {test} from '@playwright/test'

test('Checking the Frames Locator',async({page})=>
{
    await page.goto(`https://leafground.com/frame.xhtml`)
    await page.waitForTimeout(5000)
    const frameRef= await page.frames()
    const frameRefCount=frameRef.length
    console.log(`Count of frames:`,frameRefCount)
})