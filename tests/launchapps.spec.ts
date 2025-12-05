import {test,chromium,webkit} from "@playwright/test";
import {log} from "console";
test("launching amazon",async()=>
{
    const browser1=await chromium.launch({headless: false,channel:"msedge"})
    const context1=await browser1.newContext()
    const page1=await context1.newPage()
    await page1.goto("https://www.amazon.in/")
    if(await page1.title()==="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in" && await page1.url()==="https://www.amazon.in/")
    {
        console.log("amazon is loaded"); 
    }
    else
    {
        console.log("wrong navigation");
    }
})
test("launching flipkart",async()=>
{
    const browser2=await webkit.launch({headless: false})
    const context2=await browser2.newContext()
    const page2=await context2.newPage()
    await page2.goto("https://www.flipkart.com/")
    if(await page2.title()==="Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com" && await page2.url()==="https://www.flipkart.com/")
    {
        console.log("flipkart is loaded"); 
    }
    else
    {
        console.log("wrong navigation");
    }
})