import {test} from "@playwright/test";

test('Test the locators',async({page})=>
{
    await page.goto(`https://login.salesforce.com/`)
    await page.getByAltText(`alt="Salesforce",{exact:true}`).isVisible
    await page.getByRole(`textbox`,{name:"Username"}).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.getByLabel(`Password`,{exact:true}).fill(`TestLeaf@2025`)
    await page.getByRole(`button`,{name:"Log In"}).click()
    await page.getByTitle(`title="Sales",{exact:true}`).isVisible
    await page.waitForTimeout(3000)
}
)