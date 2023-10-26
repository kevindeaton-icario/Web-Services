const { _android } = require("@playwright/test");
import { test } from "@playwright/test";
import { getAndroidCdpEndpoint, getCdpEndpoint } from "../browserstack.config";

test("Android Add to Cart Test", async () => {
  test.slow(); // Takes a minute to connect and establish the device/browser
  
  const device = await getAndroidCdpEndpoint();
  
  await device.shell("am force-stop com.android.chrome");
  const context = await device.launchBrowser();
  const page = await context.newPage();
  
  try { // Actual Test Steps 
    await page.goto("https://bstackdemo.com/");
    await page.locator('[id="\\31 "]').getByText("Add to cart").click();
    await page.getByText("Checkout").click();
    await page.locator("#username svg").click();
    await page.locator("#react-select-2-option-0-0").click();
    await page.locator("#password svg").click();
    await page.locator("#react-select-3-option-0-0").click();
    await page.getByRole("button", { name: "Log In" }).click();
    await page.getByLabel("First Name").click();
    await page.getByLabel("First Name").fill("SampleFirst");
    await page.getByLabel("Last Name").click();
    await page.getByLabel("Last Name").fill("SampleLast");
    await page.getByLabel("Address").click();
    await page.getByLabel("Address").fill("sampleAddress");
    await page.getByLabel("State/Province").click();
    await page.getByLabel("State/Province").fill("SampleState");
    await page.getByLabel("Postal Code").click();
    await page.getByLabel("Postal Code").fill("123456");
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByRole("button", { name: "Continue Shopping »" }).click();

    await page.evaluate((_) => {}, `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Product added to cart" } })}`);
  } catch (e) {
    await page.evaluate((_) => {}, `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test failed" } })}`);
  }
  await context.close();
  await device.close();
});
