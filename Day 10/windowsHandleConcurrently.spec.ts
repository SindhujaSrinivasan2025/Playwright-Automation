import { test } from "@playwright/test";

test.only(`Learn window handling concurrent method`, async ({ page, context }) => {
    await page.goto(`https://www.flipkart.com/`);
    const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`)
    await searchBox.fill(`Phones`);
    await searchBox.press("Enter");

    // const newPage = context.waitForEvent('page') // enable a listener before an event occurs // click action
    // await page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()
    // const childPage = await newPage

    const [childPage] = await Promise.all([context.waitForEvent('page'),page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()]) // array of promise resolved
    //Here the pages are captured usiung the concept called destructuring of array to resolve the promise of all the actions performed
    console.log(await childPage.title());
    await page.bringToFront(); // page => parent page
    await page.locator(`//span[text()="Electronics"]`).click()
    await page.waitForTimeout(3000)
    await childPage.bringToFront();

})