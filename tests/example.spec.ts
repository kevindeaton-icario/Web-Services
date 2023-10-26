import { test, expect } from "@playwright/test";
import * as urls from "../config/urls.json";

/**
 * This is an example API test using the beforeAll Hook to setup the API Configuration
 * All the tests scoped to this class can use the same baseURL to execute
 * It can also be setup using the playwright.config.ts file but that is more global
 */

// let apiContext;

// test.beforeAll( async ({ playwright }) => {
//   apiContext = await playwright.request.newContext({
//     baseURL: "http://www.boredapi.com"
//   })
// })

// test.afterAll(async ({}) => {
//   await apiContext.dispose();
// })

// test("This is a Sample GET Test with apiContext", async ({ page }) => {
//   const response = await apiContext.get("/api/activity/");
//   const responseBody = await response.json();

//   expect(responseBody.activity).toBeTruthy();
//   expect(responseBody.accessibility).not.toBeNull();
//   expect(responseBody.type).toBeTruthy();
//   expect(responseBody.participants).not.toBeNull();
//   expect(responseBody.price).not.toBeNull();
//   expect(responseBody.key).toBeTruthy();
// });

/**
 * This is an example of how it can be setup using a config file
 */

// let baseUrl, activity;

// test.beforeAll(async ({ }) => {
//   baseUrl = urls.activities.baseUrl;
//   activity = urls.activities.uris.activity;
// });

// test("This is a Sample GET Test with config files", async ({ request }) => {
//   let url = baseUrl + activity;

//   const response = await request.get(url);
//   const responseBody = await response.json();

//   expect(responseBody.activity).toBeTruthy();
//   expect(responseBody.accessibility).not.toBeNull();
//   expect(responseBody.type).toBeTruthy();
//   expect(responseBody.participants).not.toBeNull();
//   expect(responseBody.price).not.toBeNull();
//   expect(responseBody.key).toBeTruthy();
// });
