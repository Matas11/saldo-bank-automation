import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then(/^User verifies the currency unit$/, async function (dataTable) {
  // Extract the expected value from the DataTable
  const expectedValue = dataTable.rawTable[1][0]; // Access the second row (index 1) and first column (index 0)
  // Locate the cell with the "USD per unit" value
  const usdPerUnitCell = this.page.locator('tbody tr:nth-child(2) td:nth-child(4)'); 
  // Wait for the cell to be visible
  await usdPerUnitCell.waitFor({ state: 'visible' });
  // Get the text content of the cell
  const usdPerUnitValue = await usdPerUnitCell.innerText();
  // Trim whitespace from the value
  const trimmedValue = usdPerUnitValue.trim();
  expect(trimmedValue).toBe(expectedValue);
});