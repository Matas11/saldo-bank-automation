import { Before } from '@cucumber/cucumber';
import { chromium } from 'playwright';

Before({ tags: '@UI' }, async function () {
    // Launch the browser with Playwright
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage(); 
});