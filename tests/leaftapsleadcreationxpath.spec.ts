import {test} from "@playwright/test";
import {text} from "stream/consumers";
test("creating lead",async({page})=>
{
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`)
    await page.locator(`//input[@type="submit"]`).click()
    await page.locator(`//a[contains(text(),"CRM/SFA")]`).click()
    await page.locator(`//a[contains(text(),"Leads")]`).click()
    await page.locator(`//a[contains(text(),"Create Lead")]`).click()
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill(`sunikonit`)
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`sunit`)
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`sahoo`)
    await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill(`mr.`)
    await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill(`associate`)
    await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill(`automation`)
    await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`9000`)
    await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`7008056509`)
    await page.locator(`//input[@name="submitButton"]`).click()
    await page.waitForTimeout(3000)
    if((await page.locator(`//span[@id="viewLead_companyName_sp"]`).textContent())?.includes(`sunikonit`) && await page.locator(`//span[@id="viewLead_firstName_sp"]`).textContent()===`sunit` && await page.locator(`//span[@id="viewLead_lastName_sp"]`).textContent()===`sahoo` && await page.locator(`//span[@id="viewLead_statusId_sp"]`).textContent()===`Assigned`)
    {
        console.log(`successfully created lead`)
    }
    else
    {
        console.log(`wrong creation`)
    }
    console.log(await page.title())
})