import { Given } from '@cucumber/cucumber';
import URLs from '../../config/xe';

Given(/^User is opening thfe website$/, async function () {
    await this.page.goto(URLs.XE_URL); // Navigate to the website
  });