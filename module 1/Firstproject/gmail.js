const puppeteer=require("puppeteer");
//let browserkadata=puppeteer.launch({headless :false,defaultViewport: null,args :["--start-maximized"]});
const id="infoproject606";
const pass="Pro@ject123";
async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        //slowMo : 200
      });

let pages = await browser.pages();
let tab = pages[0];
await tab.goto("https://www.gmail.com");
await tab.type(".whsOnd.zHQkBf",id);
await tab.click(".VfPpkd-vQzf8d");
await tab.waitForTimeout(2000);
//await tab.waitForSelector("".whsOnd zHQkBf"")
await tab.type(".whsOnd.zHQkBf",pass);
await tab.click(".VfPpkd-vQzf8d");
await tab.waitForSelector(".T-I.T-I-KE.L3");
await tab.click(".T-I.T-I-KE.L3");
await tab.waitForSelector(".aoD.hl");
await tab.type(".aoD.hl","anildayal55@gmail.com");
await tab.waitForTimeout(2000);
await tab.type(".aoT","mobile Information");
//await tab.click(".a1.aaA.aMZ");
await tab.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3");



}
login();

// const puppeteer = require("puppeteer");
// const id = "misid46226@isecv.com";
// const pw = "123456789";
// //let challenges = require("./challenges");

// async function login(){
//     let browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: null,
//         args: ["--start-maximized"],
//         slowMo : 200
//       });
//     let pages = await browser.pages();
//     let tab = pages[0];
//     await tab.goto("https://www.hackerrank.com/auth/login");
// await tab.type("#input-1", id);
// await tab.type("#input-2", pw);
// await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");

