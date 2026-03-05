   import {chromium, firefox, webkit, test} from "@playwright/test";
   
   test('Test the login page', async({page})=>
   {
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`//input[@id="username"]`).fill(`Demosalesmanager`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`)
    await page.locator(`//input[@class="decorativeSubmit"]`).click()
    await page.locator(`//a[contains(text(),'CRM')]`).click()
    await page.locator(`//a[text()="Create Lead"]`).click()
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`Sindhuja`)
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`sindhu`)
    await page.locator(`//select[@id="createLeadForm_dataSourceId"]`).click()
    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{ value:"LEAD_COLDCALL"})
    await page.locator(`//select[@id="createLeadForm_currencyUomId"]`).click()
    const currencyDropdown= page.locator(`//select[@id="createLeadForm_currencyUomId"]/option`)  //170 drop down values
    const currencyDropdownCount=await currencyDropdown.count()
    console.log(currencyDropdownCount);
    for(let i=0;i<currencyDropdownCount;i++)
    {
        console.log(await currencyDropdown.nth(i).innerText())
    }
    await page.waitForTimeout(3000)
})