const { expect } = require("@playwright/test");

exports.YourChartPage = class YourChartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    //Selectors
    this.pageTitle = page.locator("span.title");
    this.removeBtn = page.locator("#remove-sauce-labs-fleece-jacket");
    this.continueShoppingBtn = page.locator("#continue-shopping");
    this.checkoutBtn = page.locator("#checkout");
    this.chartItem = page.locator("div.cart_item_label a div");
  }

  //Actions
  async clickRemveButton() {
    await this.removeBtn.click();
  }

  async clickCheckoutButton() {
    await this.checkoutBtn.click();
  }

  async clickContinueShoppingButton() {
    await this.continueShoppingBtn.click();
  }

  //Assertions
  async validatePageTitle() {
    await expect(this.pageTitle).toBeVisible();
  }

  async validateItemInChart() {
    await expect(this.chartItem).toHaveText("Sauce Labs Fleece Jacket");
  }
};
