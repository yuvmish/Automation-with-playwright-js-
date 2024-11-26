const { test, expect } = require("@playwright/test");
const { request } = require("http");

// Request context is reused by all tests in the file.
let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: "https://reqres.in/api",
  });
});

test.afterAll(async ({}) => {
  // Dispose all responses.
  await apiContext.dispose();
});

test("login with a user", async ({ page }) => {
  const response = await apiContext.get(
    `https://reqres.in/api/users?page=2`,
    {}
  );
  expect(response.ok()).toBeTruthy();
  const result = await response.json();
  console.log(result);
});
