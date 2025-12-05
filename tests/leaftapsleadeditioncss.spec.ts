import {test} from "@playwright/test";
test("editing lead",async({page})=>
{
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`#username`).fill(`demosalesmanager`)
    await page.locator(`#password`).fill(`crmsfa`)
    await page.locator(`.decorativeSubmit`).click()
    await page.locator(`#button`).click()
    await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click()
    await page.locator(`a[href="/crmsfa/control/findLeads"]`).click()
    await page.locator(`input[name="companyName"]`).nth(1).fill(`sunikonit`)
    await page.locator(`[type="button"]`).nth(6).click()
    await page.locator(`.linktext`).nth(7).click()
    await page.locator(`.subMenuButton`).nth(2).click()
    await page.locator(`#updateLeadForm_generalProfTitle`).fill(`manager`)
    await page.locator(`#updateLeadForm_departmentName`).fill(`devops`)
    await page.locator(`#updateLeadForm_annualRevenue`).fill(`11000`)
    await page.locator(`#updateLeadForm_description`).fill(`this employee has been promoted`)
    await page.locator(`.smallSubmit`).first().click()
    await page.waitForTimeout(3000)
    if(await page.locator(`#viewLead_generalProfTitle_sp`).textContent()===`manager` && await page.locator(`#viewLead_departmentName_sp`).textContent()===`devops` && await page.locator(`#viewLead_annualRevenue_sp`).textContent()===`$11,000.00`)
    {
        console.log(`successfully edited lead`);
    }
    else
    {
        console.log(`wrong edition`);
    }
    console.log(await page.title())
})