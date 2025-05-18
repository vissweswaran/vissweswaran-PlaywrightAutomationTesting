import { After } from "@cucumber/cucumber";

After(async function () {
  if (this.page) {
    try {
      await this.page.close();
      console.log('After page running');
    } catch (e) {
      console.log("Error closing page:", e);
    }
  }
  if (this.context) {
    try {
      await this.context.close();
      console.log('After context running');
    } catch (e) {
      console.log("Error closing context:", e);
    }
  }
  if (this.browser) {
    try {
      await this.browser.close();
      console.log('After browser running');
    } catch (e) {
      console.log("Error closing browser:", e);
    }
  }
});
