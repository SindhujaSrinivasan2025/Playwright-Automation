import { test } from "@playwright/test";

test.use({storageState:"Data/login_Salesforce.json"})

test(`Skip Login using saved credentials`,async ({page}) => {
    
await page.goto(`https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home`)

await page.getByTitle("App Launcher",{exact:true}).click();

await page.getByRole("button",{name:"View All Applications"}).click();

await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads")

})