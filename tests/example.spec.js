// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://magecomp.com/');
//   await page.locator('#maincontent').getByRole('link', { name: 'Mobile OTP Login' }).click();
//   await page.getByRole('textbox', { name: 'Domain URL' }).click();
//   await page.getByRole('textbox', { name: 'Domain URL' }).fill('www.magecomp.com');
//   await page.getByLabel('Magento Edition').selectOption('2112');
//   await page.getByLabel('Addons').selectOption('3561');
//   await page.getByRole('button', { name: 'Buy Now' }).click();
//   await expect(page.getByText('You added Magento 2 Mobile')).toBeVisible();
//   await page.getByRole('heading', { name: 'Apply Discount Code' }).click();
//   await page.getByRole('textbox', { name: 'Enter discount code' }).click();
//   await page.getByRole('textbox', { name: 'Enter discount code' }).fill('magecomp123');
//   await page.getByRole('button', { name: 'Apply Discount' }).click();
//   await expect(page.getByText('The coupon code "magecomp123')).toBeVisible();
// });
