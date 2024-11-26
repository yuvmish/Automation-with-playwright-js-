const { expect } = require("@playwright/test");

exports.ProductsPage = class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    // Selectors
    this.page = page;
    this.pageTitle = page.locator("span.title");
    this.productFilterDrodown = page.locator("select.product_sort_container");
    this.firstItemInList = page.locator(
      "(//div[@class='inventory_item_name '])[1]"
    );
    this.AddToCartButtonFleeceJacketOption = page.locator(
      "button#add-to-cart-sauce-labs-fleece-jacket"
    );
    this.RemoveButtonFleeceJacketOption = page.locator(
      "button#remove-sauce-labs-fleece-jacket"
    );
    this.shoppingCartLink = page.locator("a.shopping_cart_link");
    this.shoppingCartItemNumber = page.locator("span.shopping_cart_badge");
  }

  // Actions
  async clickFilterDropDown() {
    await this.productFilterDrodown.click();
  }

  async chooseNameFromZtoAOption() {
    await this.productFilterDrodown.selectOption("Name (Z to A)");
  }

  async chooseNameFromAtoZOption() {
    await this.productFilterDrodown.selectOption("Name (A to Z)");
  }

  async choosePriceFromLowtoHighOption() {
    await this.productFilterDrodown.selectOption("Price (low to high)");
  }

  async choosePriceFromHightoLowOption() {
    await this.productFilterDrodown.selectOption("Price (high to low)");
  }

  async clickAddToCartFleeceJacketButton() {
    await this.AddToCartButtonFleeceJacketOption.click();
  }

  async clicShoppingCartLink() {
    await this.shoppingCartLink.click();
  }

  //Assertions
  async validatePageTitle() {
    await expect(this.pageTitle).toBeVisible();
  }

  async validateNameAToZProductInList() {
    await expect(this.firstItemInList).toHaveText("Sauce Labs Backpack");
  }

  async validateNameZToAProductInList() {
    await expect(this.firstItemInList).toHaveText(
      "Test.allTheThings() T-Shirt (Red)"
    );
  }

  async validatePriceLowToHighProductInList() {
    await expect(this.firstItemInList).toHaveText("Sauce Labs Onesie");
  }

  async validatePriceHighToLowProductInList() {
    await expect(this.firstItemInList).toHaveText("Sauce Labs Fleece Jacket");
  }

  async validateRemoveButtonFleeceJacketButton() {
    await expect(this.RemoveButtonFleeceJacketOption).toBeVisible();
  }

  async validateCartBadgeNumber() {
    await expect(this.shoppingCartItemNumber).toHaveText("1");
  }
};
