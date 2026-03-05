
import { test } from "@playwright/test";

test.only(`Test to Handle alerts/dialogs using page.on`,async ({page}) => {
    await page.goto(`https://leafground.com/alert.xhtml`);

    page.on("dialog",async(alert)=>
    {
    const message = alert.message(); 
    console.log(message);       
    const alertType = alert.type(); 
    console.log(`The type of the alert is ${alertType} `);

    //3 different alerts
    await page.locator(`(//span[text()="Show"])[1]`).click();
    await page.waitForTimeout(3000)
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator(`//span[text()="Show"]`).click()
    await page.waitForTimeout(3000)
    await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator(`//span[text()="Show"]`).click()
    await page.waitForTimeout(3000)


    if(alertType==="confirm"){
        await alert.accept()
    }else if(alertType==="prompt"){
        await alert.accept("Testleaf")
    }else
    await alert.dismiss();  
})
})