import { chromium, test } from "@playwright/test";
test("launching a browser", async () => {
    const browser = await chromium.launch({headless: false, channel: "chromium"});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.gmail.com");
});