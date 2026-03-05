import { chromium,firefox,webkit,test } from "@playwright/test";

test('Test the 001 test case',async({page})=>
{
    await page.goto(`http://www.pvrcinemas.com`)
    await page.locator(`//span[@class="sc-lgpSej kdusLc pointer"]`).click
    await page.locator(`//span[@class="cinemas-inactive"]`).click
    await page.locator(`//span[contains(text(),'Select Cinema')]`).click
    await page.locator(`//span[contains(text(),'INOX National,Virugambakkam Chennai')]`).click
    await page.locator(`//span[contains(text(),'Select Date')]`).click
    await page.locator(`//li[@class="p-dropdown-item"][1]`).click
    await page.locator(`//span[contains(text(),'Select Movie')]`).click
    await page.locator(`//span[contains(text(),'LOCKDOWN')]`).click
    await page.locator(`//span[contains(text(),'Select Timing')]`).click
    await page.locator(`//span[contains(text(),'12:50 PM')]`).click
    await page.locator(`//button[@class="p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn"]`).click
    
})