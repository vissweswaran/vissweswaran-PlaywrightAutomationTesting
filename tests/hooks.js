import { Before, After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { chromium } from "playwright";


Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // Take screenshot if scenario fails
  if (scenario.result?.status === Status.FAILED && this.page) {
    const dir = path.resolve('reports/screenshots');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, `${scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`);
    await this.page.screenshot({ path: filePath, type: 'png' });
    console.log(`📸 Screenshot saved to ${filePath}`);
  }

  // Close page, context, and browser
  if (this.page) {
    try {
      await this.page.close();
      console.log('🧹 Closed page');
    } catch (e) {
      console.error('❌ Error closing page:', e);
    }
  }

  if (this.context) {
    try {
      await this.context.close();
      console.log('🧹 Closed context');
    } catch (e) {
      console.error('❌ Error closing context:', e);
    }
  }

  if (this.browser) {
    try {
      await this.browser.close();
      console.log('🧹 Closed browser');
    } catch (e) {
      console.error('❌ Error closing browser:', e);
    }
  }
});
