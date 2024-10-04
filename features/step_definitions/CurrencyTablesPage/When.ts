import { When } from '@cucumber/cucumber';
import { currencyOptions } from '../../../config/currencyOptions'; 

When(/^User selects the "(.*)" currency$/, async function (currency) {
  const page = this.page; 

  const optionId = currencyOptions[currency];
  if (optionId === undefined) {
    throw new Error(`Currency option for ${currency} not found`);
  }

  await page.click('#currency'); // Open the currency dropdown
  await page.waitForSelector(`#currency-option-${optionId}`); // Wait for the option to be visible
  await page.click(`#currency-option-${optionId}`); // Select the currency option
});

When(/^User selects the "(.*)" date$/, async function (date) {
  const page = this.page;
  const dateInput = page.locator('.DayPickerInput input');
  await dateInput.fill(date); 
  await page.click('body');
  await page.locator('button:has-text("Confirm")').click(); 
});