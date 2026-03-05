import { test } from "@playwright/test";

test.only(`Multiple pages window handling`,async ({page,context}) => {
await page.goto(`https://leafground.com/window.xhtml`);
await Promise.all([context.waitForEvent("page"), page.getByText(`Open Multiple`,{exact:true}).click()]);
const allPages = context.pages();
await page.waitForLoadState("domcontentloaded");
console.log(`Frame count:`,allPages)
console.log(await allPages[0].title()); // allPages[0] => parent page reference
console.log(await allPages[1].title()); // allPages[1] => childPage one ref
console.log(await allPages[2].title());// allPages[2] => childPage two ref

})