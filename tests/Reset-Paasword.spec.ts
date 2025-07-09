import { test, expect } from '@playwright/test';

const baseURL = 'https://react.worklenz.com/auth/login';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Forgot password?' }).click();
});

test('Redirected to the Password Reset Page', async ({ page }) => {
  await expect(page.locator('#forgot-password_email')).toBeVisible();
  console.log("Test case passed - Redirected to the Password Reset Page");
});

test('Reset password link sent with valid email', async ({ page }) => {
  await page.locator('#forgot-password_email').fill('malkiis283@gmail.com');
  await page.getByRole('button', { name: /reset password/i }).click();
  // Add assertion if any success message appears here.
  console.log("Test case passed - Reset password link was sent to the email!!");
});

test('Return to Login from Reset Page', async ({ page }) => {
  await page.getByRole('link', { name: 'Return to Login' }).click();
  await expect(page.locator('#login_email')).toBeVisible();
  console.log("Test case passed - Redirected to the login page!!");
});

test("Reset password with invalid email", async ({ page }) => {
  await page.locator('#forgot-password_email').fill('malkigmail');
  await page.waitForTimeout(3000);
  await expect(page.locator('.ant-form-item-explain-error')).toBeVisible();
  console.log("Test case passed!! - User can't reset the password");
});

test("Reset password with empty email field", async ({ page }) => {
  await page.locator('#forgot-password_email').fill('');
  await page.getByRole('button', { name: /reset password/i }).click();
  await expect(page.locator('.ant-form-item-explain-error')).toBeVisible();
  console.log("Test case pass!! - Error msg displayed");
});
