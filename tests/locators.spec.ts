import {test} from "@playwright/test";
test("login to salesforce",async({page})=>
{
    await page.goto(`https://login.salesforce.com/`)
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`#password`).fill(`TestLeaf@2025`)
    await page.locator(`#Login`).click()
    await page.waitForTimeout(2000)
})