const puppeteer=require("puppeteer");
let tab;
const id="dikapi6927@pidhoes.com";
const pas="123456789"
let browserkadata=puppeteer.launch({headless :false,defaultViewport: null,args :["--start-maximized"]});   //lauch function open the brower....
console.log(browserkadata);
browserkadata.then(function(browser)
{
    console.log("browser is open...")
    return browser.pages();
})
.then(function(pages)
{
    tab=pages[0];
    console.log("hiiii");
    return tab.goto("https://www.hackerrank.com/auth/login");
})
.then(function()
{
    console.log("site open ho gya...");
    return tab.type("#input-1.input",id);
})
.then(function()
{
    return tab.type("#input-2.input",pas);
})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    //return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
})
// .then(function(){
//     return tab.waitForSelector("#base-card-1-link");
    
// })
// .then(function(){
//     return tab.click("#base-card-1-link");
//     //return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
// })
// .then(function(){
//     return tab.waitForSelector('a[data-attr1="warmup"]');
    
// })
// .then(function(){
//     return tab.click('a[data-attr1="warmup"]');
    
// })
.then(function () {
    return waitAndClick("#base-card-1-link");
  })
  .then(function () {
    return waitAndClick('a[data-attr1="warmup"]');
  })
  .then(function(){
    return tab.waitForSelector('.js-track-click.challenge-list-item');
  })
  .then(function(){
    return tab.$$(".js-track-click.challenge-list-item");
  })
  .then(function(allatag){
    let alllink=[];
    for(let i=0;i<allatag.length;i++)
    {
      //console.log(allatag[i]);
      let onetag=allatag[i];
      let pendingPromise = tab.evaluate(function (element) { return element.getAttribute("href");}  , onetag);
      alllink.push(pendingPromise);
    }
    let hreflink=Promise.all(alllink);
    return hreflink;
  })
  .then(function(link){
      for(let i=0;i<link.length;i++)
      {
        console.log(link[i]);
      }
  })
//   .then(function () {
//     return waitAndClick('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"');
//   })


function waitAndClick(selector) {
    return new Promise(function (scb, fcb) {
      let waitPromise = tab.waitForSelector(selector, { visible: true });
      waitPromise
        .then(function () {
          return tab.click(selector);
        })
        .then(function () {
          scb();
        })
        .catch(function () {
          fcb();
        });
    });
}