const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages_objects/LoginPage");
const { ProductsPage } = require("../pages_objects/ProductsPage");
const TestData = require("../test_data/signInFunctionalityTestData");

test("Login to app and change dropdown option", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.openPage();
  await loginPage.validatePageTitle();
  await loginPage.makeLogin(
    TestData.user.standardUser.userName,
    TestData.user.standardUser.password
  );
  await productsPage.validatePageTitle();
  await productsPage.chooseNameFromZtoAOption();
  await productsPage.validateNameZToAProductInList();

  await productsPage.choosePriceFromHightoLowOption();
  await productsPage.validatePriceHighToLowProductInList();

  await productsPage.choosePriceFromLowtoHighOption();
  await productsPage.validatePriceLowToHighProductInList();

  await productsPage.chooseNameFromAtoZOption();
  await productsPage.validateNameAToZProductInList();
});
