import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";
import assert from "assert";
let browser, context, page;

Given('the user is on the login page', async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto('https://www.facebook.com/');
});

When('the user enters valid username and password', async function () {
  await this.page.fill('#email', 'validUser');
  await this.page.fill('#pass', 'validPassword');
  await this.page.click('button[name="login"]');
});





