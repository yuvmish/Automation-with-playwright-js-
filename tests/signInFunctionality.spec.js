// @ts-check
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages_objects/LoginPage");
const TestData = require("../test_data/signInFunctionalityTestData");

test("Signin with locked out user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPage();
  await loginPage.validatePageTitle();
  await loginPage.makeLogin(
    TestData.user.lockedOutUser.userName,
    TestData.user.lockedOutUser.password
  );
  await loginPage.validateErrorMessageDispalyed();
});

test("Signin with standard user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPage();
  await loginPage.validatePageTitle();
  await loginPage.makeLogin(
    TestData.user.standardUser.userName,
    TestData.user.standardUser.password
  );
});
