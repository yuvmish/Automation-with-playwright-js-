const { test, expect } = require("@playwright/test");
const { request } = require("http");

// Request context is reused by all tests in the file.
let apiContext;

// test.beforeAll(async ({ playwright }) => {
//   apiContext = await playwright.request.newContext({
//     // All requests we send go to this API endpoint.
//     baseURL: "https://reqres.in/api",
//   });
// });

test.afterAll(async ({}) => {
  // Dispose all responses.
  await apiContext.dispose();
});

test("login with a user", async ({ page }) => {
  await request.post(`https://reqres.in/api/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const result = await apiResponse.json();
  console.log("data " + result);

  expect(newIssue.ok()).toBeTruthy();
});
