import { test as base } from "@playwright/test";
import HomePage from "../page-objects/HomePage.page";

export const test = base.extend<{
    homePage: HomePage;
}>({
    // define fixture
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});
