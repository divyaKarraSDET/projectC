import {BeforeAll, AfterAll, BeforeStep, AfterStep, Before, After} from '@cucumber/cucumber';
import {chromium, Browser, BrowserContext, Page, expect} from '@playwright/test'
import   {divya} from './pageFixture';

let browser: Browser;
let context: BrowserContext;
let page:Page;

BeforeAll( async function() {
    
      browser = await chromium.launch({headless: false});
});

Before( async function() {

   context = await browser.newContext();
    page = await context.newPage();
    divya.page = page;

});
BeforeStep( async function() {
    console.log("Before every step");

});
AfterStep( async function() {
    console.log("After every step");

});

After( async function() {
   await divya.page.close();

});

AfterAll( async function() {
    console.log("AfterAll");
    await divya.page.close();
});




