import { test } from "@playwright/test";

test(`Learn window handling concurrent method`, async ({ page }) => {
    await page.goto(`https://www.flipkart.com/`);

})

test(`Learn multiple test`, async ({ page }) => {
    await page.goto(`https://www.flipkart.com/`);
    const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`)
    await searchBox.fill(`Phones`);
    await searchBox.press("Enter");
})

test.only(`Amazon Website`, async ({ page }) => {
    await page.goto(`https://www.amazon.com/`);

})

test(`Apple Website`, async ({ page }) => {
    await page.goto(`https://www.apple.co.in/`);

})
