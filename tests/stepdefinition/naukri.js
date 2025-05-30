import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from '@playwright/test'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


Given(/^the user is on the Naukri login page$/, { timeout: 20000 }, async function () {
    await this.page.goto('https://www.naukri.com/')
    await this.page.click('//a[@title="Jobseeker Login"]');
});

When(/^the user enters valid email and password$/, { timeout: 20000 }, async function () {
    await this.page.fill('//input[@placeholder="Enter your active Email ID / Username"]', "vissweswaran27@gmail.com");
    await this.page.fill('//input[@placeholder="Enter your password"]', "Visswes@27");

});

When(/^clicks on the login button$/, { timeout: 20000 }, async function () {
    await this.page.click('//button[@class="btn-primary loginButton"]');
});

Then(/^the user should be redirected to the homepage$/, { timeout: 20000 }, async function () {
    await this.page.waitForURL('**/homepage', { timeout: 10000 })
    const currentUrl = await this.page.url();
    console.log(currentUrl)
    expect(currentUrl).toContain('/homepage')
});

Then(/^the profile section should be visible$/, { timeout: 20000 }, async function () {
    await expect(this.page.locator('//a[text()="View"]')).toBeVisible();
});


Given(/^the user is logged into their Naukri profile$/,{ timeout: 30000 }, async function () {
    await this.page.goto('https://www.naukri.com/')
    await this.page.click('//a[@title="Jobseeker Login"]');
    await this.page.fill('//input[@placeholder="Enter your active Email ID / Username"]', "vissweswaran27@gmail.com");
    await this.page.fill('//input[@placeholder="Enter your password"]', "Visswes@27");
    await this.page.click('//button[@class="btn-primary loginButton"]');
    await this.page.waitForURL('**/homepage', { timeout: 10000 })
    await expect(this.page.locator('//div[@class="view-profile-wrapper"]')).toBeVisible();

});


When(/^the user navigates to the resume upload section$/, async function () {
    await this.page.click('//div[@class="view-profile-wrapper"]');
});


When(/^uploads a valid resume file$/,{ timeout: 30000 },async function () {
    await this.page.click('//i[@data-title="delete-resume"]',{ timeout: 10000 });
    await this.page.click('(//button[text()="Delete"])[3]',{ timeout: 10000 });
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.page.click('//span[text()="Upload resume"]');
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, '../../pdfs/Vissweswaran C 2025(2).pdf'));

});


Then(/^a success message should appear$/, { timeout: 20000 }, async function () {
    await expect(this.page.locator('//input[@value="Update resume"]')).toBeVisible();
});


Then(/^the resume filename should be updated$/, async function() {
	const locator = this.page.locator('//div[text()="Vissweswaran C 20252.pdf"]');
    await expect(locator).toContainText('Vissweswaran C 20252');
});


Given(/^the user is logged into the dashboard$/, { timeout: 20000 }, async function() {
 await this.page.goto('https://www.naukri.com/')
    await this.page.click('//a[@title="Jobseeker Login"]');
    await this.page.fill('//input[@placeholder="Enter your active Email ID / Username"]', "vissweswaran27@gmail.com");
    await this.page.fill('//input[@placeholder="Enter your password"]', "Visswes@27");
    await this.page.click('//button[@class="btn-primary loginButton"]');
    await this.page.waitForURL('**/homepage', { timeout: 10000 })
    await expect(this.page.locator('//div[@class="view-profile-wrapper"]')).toBeVisible();
});


When(/^the user clicks on the logout option$/,{ timeout: 10000 },  async function() {
	await this.page.click('//div[@class="naukri-drawer right open"]');
    await this.page.click('//a[@title="Logout"]',{ timeout: 2000 });
});


Then(/^the user should be redirected to the login page$/,  async function() {
	await this.page.waitForURL('https://www.naukri.com/');
    const url = this.page.url();
    expect(url).toContain('https://www.naukri.com/');
});







