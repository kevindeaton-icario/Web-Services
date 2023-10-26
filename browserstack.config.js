const base = require("@playwright/test");
const { _android } = require("@playwright/test");
const cp = require("child_process");
const clientPlaywrightVersion = cp
  .execSync("npx playwright --version")
  .toString()
  .trim()
  .split(" ")[1];
// const BrowserStackLocal = require('browserstack-local');
const util = require("util");

const BROWSERSTACK_USERNAME = "hezdfwhstydfn1";
const BROWSERSTACK_ACCESS_KEY = "xAB5o4zXzjmZNpRxjpF6";

/**
 * 
 * BrowserStack Desktop Specific Capabilities.
 * 
 */
const caps = {
  browser: "chrome",
  os: "windows",
  os_version: "10",
  build: "Playwright-Desktop",
  "browserstack.username": BROWSERSTACK_USERNAME,
  "browserstack.accessKey": BROWSERSTACK_ACCESS_KEY,
  "client.playwrightVersion": clientPlaywrightVersion,
  "browserstack.debug": "true",
  "browserstack.networkLogs": "true",
  "browserstack.playwrightLogs": "true",
  "browserstack.console": "verbose",
};

// Patching the capabilities dynamically according to the project name.
const patchCaps = (name, title) => {
  let combination = name.split(/@browserstack/)[0];
  let [browerCaps, osCaps] = combination.split(/:/);
  let [browser, browser_version] = browerCaps.split(/@/);
  let osCapsSplit = osCaps.split(/ /);
  let os = osCapsSplit.shift();
  let os_version = osCapsSplit.join(" ");
  caps.browser = browser ? browser : "chrome";
  caps.browser_version = browser_version ? browser_version : "latest";
  caps.os = os ? os : "Windows";
  caps.os_version = os_version ? os_version : "11";
  caps.name = title;
};

exports.getCdpEndpoint = (name, title) => {
  patchCaps(name, title);
  const cdpUrl = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(
    JSON.stringify(caps)
  )}`;

  return cdpUrl;
};


/**
 * 
 * BrowserStack Android Specific Capabilities.
 * 
 */
const android_caps = {
  osVersion: "12.0",
  deviceName: "Samsung Galaxy S22", // "Samsung Galaxy S22 Ultra", "Google Pixel 7 Pro", "OnePlus 9", etc.
  browserName: "chrome",
  realMobile: "true",
  name: "Android Tests Galaxy S22 Chrome",
  build: "Playwright-Android",
  "browserstack.username": process.env.BROWSERSTACK_USERNAME || BROWSERSTACK_USERNAME,
  "browserstack.accessKey": process.env.BROWSERSTACK_ACCESS_KEY || BROWSERSTACK_ACCESS_KEY,
  "browserstack.playwrightLogs": "true",
  "browserstack.console": "verbose",
  "browserstack.debug": "true",
  "browserstack.networkLogs": "true",
};

exports.getAndroidCdpEndpoint = () => {
  return _android.connect(
    `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(android_caps))}`
  );
};