const puppeteer=require("puppeteer");

async function mobile(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        //slowMo : 200
      });

let pages = await browser.pages();
let tab = pages[0];
await tab.goto("https://www.digit.in/latest-mobile-phones/");
await tab.waitForTimeout(2000);
await tab.waitForSelector(".not-checked");
let alltag=await tab.$$(".not-checked");

for(let i=0;i<alltag.length;i++)
{
    let allids=await alltag[i].evaluate(function(ele){return ele.getAttribute("id");},alltag[i]);
    await tab.waitForTimeout(2000);
    let id='#'+allids;
    await tab.click(id);
    console.log(id);
}



}
mobile();