import {test} from "@playwright/test";
test("editing lead",async({page})=>
{
    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`)
    await page.locator(`//input[@type="submit"]`).click()
    await page.locator(`//a[contains(text(),"CRM/SFA")]`).click()
    await page.locator(`//a[contains(text(),"Leads")]`).click()
    await page.locator(`//a[contains(text(),"Find Leads")]`).click()
    await page.locator(`(//input[@name="companyName"])[2]`).fill(`sunikonit`)
    await page.locator(`//button[contains(text(),"Find Leads")]`).click()
    await page.locator(`(//a[contains(text(),"sunikonit")])[2]`).click()
    await page.locator(`//a[contains(text(),"Edit")]`).click()
    await page.locator(`//input[@id="updateLeadForm_generalProfTitle"]`).fill(`manager`)
    await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill(`devops`)
    await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill(`11000`)
    await page.locator(`//textarea[@id="updateLeadForm_description"]`).fill(`this employee has been promoted`)
    await page.locator(`(//input[@name="submitButton"])[1]`).click()
    await page.waitForTimeout(3000)
    if(await page.locator(`//span[@id="viewLead_generalProfTitle_sp"]`).textContent()===`manager` && await page.locator(`//span[@id="viewLead_departmentName_sp"]`).textContent()===`devops` && await page.locator(`//span[@id="viewLead_annualRevenue_sp"]`).textContent()===`$11,000.00`)
    {
        console.log(`successfully edited lead`);
    }
    else
    {
        console.log(`wrong edition`);
    }
    console.log(await page.title())
})