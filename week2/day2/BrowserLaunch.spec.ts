import { test, chromium, firefox } from "@playwright/test"

// Test 1: Load Red Bus in Edge browser
test("Load Red Bus in Edge browser", async () => {
    const browser = await chromium.launch({
        headless: false,
        channel: 'msedge'  // Launch Edge browser
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    // Navigate to Red Bus
    await page.goto("https://www.redbus.in")

    // Get page title and URL
    const pageTitle = await page.title()
    const pageURL = page.url()

    // Print the results
    console.log("=== Red Bus (Edge Browser) ===")
    console.log("Page Title:", pageTitle)
    console.log("Page URL:", pageURL)

    // Wait for demonstration
    await page.waitForTimeout(3000)

    // Close browser
    await browser.close()
})

// Test 2: Load Flipkart in Firefox browser
test("Load Flipkart in Firefox browser", async () => {
    const browser = await firefox.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    // Navigate to Flipkart
    await page.goto("https://www.flipkart.com")

    // Get page title and URL
    const pageTitle = await page.title()
    const pageURL = page.url()

    // Print the results
    console.log("=== Flipkart (Firefox Browser) ===")
    console.log("Page Title:", pageTitle)
    console.log("Page URL:", pageURL)

    // Wait for demonstration
    await page.waitForTimeout(3000)

    // Close browser
    await browser.close()
})
