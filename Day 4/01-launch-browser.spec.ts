import {test,chromium, firefox,webkit} from "@playwright/test"

test(`Launch the application`,async()=>
{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    await page1.goto("https://www.apple.com/");
    await page2.goto("https://www.rolls-roycemotorcars.com/")
}
)