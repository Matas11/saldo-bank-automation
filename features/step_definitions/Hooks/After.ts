import { After } from '@cucumber/cucumber';

After({ tags: '@UI' }, async function () {
    // Ensure everything is properly closed
    if (this.page) {
        await this.page.close(); // Close the page
    }
    if (this.context) {
        await this.context.close(); // Close the context
    }
    if (this.browser) {
        await this.browser.close(); // Close the browser
    }
});