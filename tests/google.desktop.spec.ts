import { test } from "../fixtures/baseTest";

test("Navigate to Google and Search for 'Playwright'", async ({ homePage }) => {
  await homePage.goto();
  await homePage.searchForData("Playwright");
});

/**
 *
 * Add test to mobile devices
 */
test.afterEach(async ({ page }) => {
  // Reports Passed/Failed Status to Browser Stack
  if (test.info().project.name.includes("Browser Stack")) {
    let status = await test.info().status;
    let testCaseName = await test.info().title;

    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: status, reason: testCaseName } })}`);
  }
});
