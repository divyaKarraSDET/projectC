import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test';
import {divya} from '../utils/pageFixture';


const url: string = 'https://rahulshettyacademy.com/client/#/auth/login';

Given('user is on login page', {timeout:10000},async function () {

    await divya.page.goto(url);
    // await page.pause();

});


When('user enters valid {string} and {string}', {timeout:10000}, async function (email, password) {
   await divya.page.locator('input#userEmail').fill(email);
   await divya.page.locator('input#userPassword').fill(password);
    await divya.page.locator('input#login').click();
    await expect.soft( divya.page.locator('div#toast-container')).toBeVisible();
    await expect.soft( divya.page.getByText('Sign Out')).toBeVisible();
    });

Then('user should be in dashboard page', {timeout:10000}, async function () {
      await divya.page.getByText('Sign Out').click();
    await expect.soft( divya.page.locator('div#toast-container')).toBeVisible();
    await expect.soft( divya.page.locator('input#login')).toBeVisible();
    
});