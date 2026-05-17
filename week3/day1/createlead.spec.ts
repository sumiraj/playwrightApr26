import { test, expect } from "@playwright/test"

test("Create Lead in LeafTaps CRM", async ({ page }) => {

    // Step 1: Navigate to the URL
    await page.goto("http://leaftaps.com/opentaps/control/main")

    // Step 2: Enter Username
    await page.locator("input[name='USERNAME']").fill("democsr2")

    // Step 3: Enter Password
    await page.locator("input[name='PASSWORD']").fill("crmsfa")

    // Step 4: Click Login button
    await page.locator("input[type='submit']").click()
    await page.waitForLoadState("networkidle")

    // Step 5: Click CRM/SFA
    await page.locator("text=CRM/SFA").click()

    // Step 6: Click Leads
    await page.locator("a[href*='leadsMain']").click()

    // Step 7: Click Create Lead
    await page.locator("text=Create Lead").click()
    await page.waitForLoadState("networkidle")

    // Step 8: Fill Company Name
    await page.locator("#createLeadForm_companyName").fill("TestLeaf Technologies")

    // Step 9: Fill First Name
    await page.locator("#createLeadForm_firstName").fill("Noel")

    // Step 10: Fill Last Name
    await page.locator("#createLeadForm_lastName").fill("Gallagher")

    // Step 11: Fill Salutation
    await page.locator("#createLeadForm_personalTitle").fill("Mr.")

    // Step 12: Fill Title
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer")

    // Step 13: Fill Annual Revenue
    await page.locator("#createLeadForm_annualRevenue").fill("500000")

    // Step 14: Fill Department
    await page.locator("#createLeadForm_departmentName").fill("Quality Assurance")

    // Step 15: Fill Phone Number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("+4401619001994")

    // Step 16: Click Create Lead button
    await page.locator(".smallSubmit").click()

    // Step 17: Get page title
    const pageTitle = await page.title()
    console.log("Page Title after Lead Creation:", pageTitle)

})
