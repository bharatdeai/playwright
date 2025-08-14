import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magecomp.com/');
  await page.getByRole('link', { name: 'SMS Notification PRO', exact: true }).click();
  await page.getByRole('textbox', { name: 'Domain URL' }).click();
  await page.getByRole('textbox', { name: 'Domain URL' }).fill('www.magecomp.com');
  await page.getByLabel('Addons').selectOption('3722');
  await page.getByLabel('Installations').selectOption('2800');
  await page.getByLabel('Magento Edition').selectOption('3386');
  await page.getByRole('button', { name: 'Buy Now' }).click();
  const checkoutBtn = page.locator('button[data-role="proceed-to-checkout"]');
  await expect(checkoutBtn).toBeVisible();
  await expect(checkoutBtn).toBeEnabled();

  await Promise.all([
    page.waitForURL(/\/checkout/),
    checkoutBtn.click()
  ]);
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill('test.magecomp@gmail.com');
  await page.getByRole('textbox', { name: 'Email Address*' }).press('Tab');
  await page.getByRole('button', { name: 'Tooltip' }).press('Tab');
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Test');
  await page.getByRole('textbox', { name: 'First Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('MageComp');
  await page.getByRole('textbox', { name: 'Last Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Street Address: Line 1' }).fill('604 victoria corporate');
  await page.getByRole('textbox', { name: 'Street Address: Line 1' }).press('Tab');
  await page.getByRole('textbox', { name: 'Street Address: Line 2' }).fill('Bhavnagar');
  await page.getByRole('textbox', { name: 'Street Address: Line 2' }).press('Tab');
  await page.getByRole('group', { name: 'Payment Information' }).getByLabel('Country').press('Tab');
  await page.getByRole('group', { name: 'Payment Information' }).locator('select[name="region_id"]').selectOption('491');
  await page.getByRole('textbox', { name: 'City*' }).click();
  await page.getByRole('textbox', { name: 'City*' }).fill('Bhavnagar');
  await page.getByRole('textbox', { name: 'City*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9428079318');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByText('Bank Transfer Payment').click();
  await page.locator('.payment-method._active > .payment-method-content > .actions-toolbar > div').click();
  
  await page.getByRole('button', { name: 'Place Order' }).click();
  
});