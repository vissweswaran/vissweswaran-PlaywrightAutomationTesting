import { Given, When, Then } from "@cucumber/cucumber";


Given(/^I Browse opencart website$/, async function() {
  await this.page.goto('https://demo.opencart.com/');
  await this.page.click('button[name="login"]');

});


When(/^Navigate to “My Account” for “Register” and fill all mandatory fields$/, async function() {
	await this.page.click('//span[text()="My Account"]');
  await this.page.click('//a[text()="Register"]');
  await this.page.fill('//input[@id="input-firstname"]','Vishwa')
});


Then(/^Leave mandatory fields empty and verify error messages$/, async function() {
	await expect(this.page.locator('.error-message')).toHaveText('This field is required');
});


Then(/^Enter an existing email ID and verify system response$/, () => {
	
});
