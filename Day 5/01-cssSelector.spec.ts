import {chromium, firefox, test} from "@playwright/test";

test('Test the login page', async({page})=>
{
    // const browser = await chrominum.launch()
    // const context= await browser.newContext()
    // const page=await context.newPage()
    await page.goto('https://login.salesforce.com/')
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`#password`).fill(`TestLeaf@2025`)
    await page.locator(`#Login`).click()
    await page.waitForTimeout(3000)

}
)