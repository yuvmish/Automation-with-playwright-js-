const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    // Selectors
    this.page = page;
    this.pageTitle = page.locator(".login_logo");
    this.userNameFields = page.locator("#user-name");
    this.passwordFields = page.locator("#password");
    this.loginButton = page.locator('//input[@name="login-button"]');
    this.errorMessage = page.locator("div.error-message-container.error");
  }

  // Actions
  async openPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterUserName(userName) {
    await this.userNameFields.fill(userName);
  }

  async enterPassword(password) {
    await this.passwordFields.fill(password);
  }

  async clickLoginButon() {
    await this.loginButton.click();
  }
  async makeLogin(userName, password) {
    await this.enterUserName(userName);
    await this.enterPassword(password);
    await this.clickLoginButon();
  }

  //Assertions
  async validatePageTitle() {
    await expect(this.pageTitle).toBeVisible();
  }
  async validateErrorMessageDispalyed() {
    await expect(this.errorMessage).toBeVisible();
  }
};
