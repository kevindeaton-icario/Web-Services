import { defineConfig, devices } from "@playwright/test";
import { getAndroidCdpEndpoint } from "./browserstack.config";

const { getCdpEndpoint } = require("./browserstack.config.js");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "list",

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'Browser Stack OSX Chrome',
    //   use: {
    //     connectOptions: { wsEndpoint: getCdpEndpoint('chrome@latest:osx Ventura','Front End Tests OS X Chrome') },
    //   },
    // },

    {
      name: "Browser Stack Desktop Tests",
      testMatch: "*desktop.spec.ts",
      use: {
        connectOptions: {
          wsEndpoint: getCdpEndpoint(
            "chrome@latest:Windows 11",
            "Desktop Tests Windows 11 Chrome"
          ),
        },
      },
    },

    {
      name: "Browser Stack Mobile Tests",
      testMatch: "*mobile.spec.ts"
    },

    // {
    //   name: "Local Desktop Chrome",
    //   use: {
    //     ...devices["Desktop Chrome"]
    //   }
    // },

    //   {
    //     name: 'Local Desktop Firefox',
    //     use: { ...devices['Desktop Firefox'] },
    //   },

    //   {
    //     name: 'Local Desktop Webkit',
    //     use: { ...devices['Desktop Safari'] },
    //   },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    //   /* Test against branded browsers. */
    //   {
    //     name: 'Microsoft Edge',
    //     use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //   },
    //   {
    //     name: 'Google Chrome',
    //     use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    //   },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
