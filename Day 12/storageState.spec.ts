import { test } from "@playwright/test";

test(`Learn playwright locators`,async ({page}) => {
    
await page.goto(`https://login.salesforce.com/?locale=in`);

await page.getByAltText("Salesforce").isVisible();

await page.getByRole("textbox",{name:"Username"}).fill(`ravindran.ramdas@testleaf.com`);

await page.getByRole("textbox",{name:"Password"}).fill(`Ravitestleaf#1234`);

 await page.getByRole("button",{name:"Log In"}).click();

 await page.getByTitle("App Launcher",{exact:true}).click();

await page.waitForTimeout(3000)

//Save cookies + localStorage
await page.context().storageState({path:"Data/login_Salesforce.json"})

})
