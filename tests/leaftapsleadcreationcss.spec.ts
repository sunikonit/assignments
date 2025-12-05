import {test} from "@playwright/test";
import {text} from "stream/consumers";
test("creating lead",async({page})=>
{
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`#username`).fill(`demosalesmanager`)
    await page.locator(`#password`).fill(`crmsfa`)
    await page.locator(`.decorativeSubmit`).click()
    await page.locator(`#button`).click()
    await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click()
    await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click()
    await page.locator(`#createLeadForm_companyName`).fill(`sunikonit`)
    await page.locator(`#createLeadForm_firstName`).fill(`sunit`)
    await page.locator(`#createLeadForm_lastName`).fill(`sahoo`)
    await page.locator(`#createLeadForm_personalTitle`).fill(`mr.`)
    await page.locator(`#createLeadForm_generalProfTitle`).fill(`associate`)
    await page.locator(`#createLeadForm_departmentName`).fill(`automation`)
    await page.locator(`#createLeadForm_annualRevenue`).fill(`9000`)
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`7008056509`)
    await page.locator(`.smallSubmit`).click()
    await page.waitForTimeout(3000)
    if((await page.locator(`#viewLead_companyName_sp`).textContent())?.includes(`sunikonit`) && await page.locator(`#viewLead_firstName_sp`).textContent()===`sunit` && await page.locator(`#viewLead_lastName_sp`).textContent()===`sahoo` && await page.locator(`#viewLead_statusId_sp`).textContent()===`Assigned`)
    {
        console.log(`successfully created lead`)
    }
    else
    {
        console.log(`wrong creation`)
    }
    console.log(await page.title())
})