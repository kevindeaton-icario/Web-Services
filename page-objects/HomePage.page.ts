import { expect, Page } from "@playwright/test";

export default class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto("https://www.google.com");
    }

    // Locators
    searchBox = () => this.page.getByRole('combobox', { name: 'Search' });
    searchButton = () => this.page.getByRole('button', { name: 'Google Search' })

    // Actions
    public async searchForData(text: string) {
        await this.searchBox().fill(text);
        await this.page.keyboard.press('Enter'); // Changed from clicking searchButton just to get test to pass consistently

        await expect(this.searchBox()).toHaveText(text);
    }
}