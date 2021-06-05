const puppeteer = require("puppeteer");
const id = "misid46226@isecv.com";
const pw = "123456789";
let tab;
let idx;
let gCode;

// puppeteer has promisfied functions

// by default headless = true

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then(function (browser) {
    console.log("browser is opened !");
    return browser.pages();
  })
  .then(function (pages) {
    tab = pages[0];
    return tab.goto("https://www.91mobiles.com/upcoming-mobiles-in-india");
  })
  .then(function(){
      return ".pro_list_date"
  })
  