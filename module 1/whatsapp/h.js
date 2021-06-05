const puppeteer = require("puppeteer");

async function scrape(url){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(" [title='BSNL']");
    const target = await page.$(" [title='BSNL']");
    await target.click(" [title='BSNL']");
    const inputbox = await page.$("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
    );
    for(let i = 0; i<1000 ; i++){
        await inputbox.type("Pushpa...");
        await page.keyboard.press("Enter");

    }
}

scrape("https://web.whatsapp.com");