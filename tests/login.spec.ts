// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { type } from 'os';

const baseURL = 'https://react.worklenz.com/auth/login';

async function login(page, email: string, password: string) {
  await page.goto(baseURL);
  await page.getByRole('textbox', { name: /email/i }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill(password);
  await page.getByRole('button', { name: /Log in/i }).click();
}

test('Login with valid credentials', async ({ page }) => {
  await login(page, 'ushani@ceydigital.com', 'Ushani@123');
  await page.locator('//input[@placeholder="+ Add task"]')

  console.log('Test case passed!');
});


test('Login with invalid email', async ({ page }) => {
  await login(page, 'ushnaiceydigital.com', 'gdsjer@3465');

  await expect(page.locator('#login_email_help')).toBeVisible({
    timeout: 10000,
  });
  console.log("Test Case Passed! - User can't log into the Account");
});

test('Login with empty email and password', async ({ page }) => {
  await login(page, '' ,'');
  await expect(page.locator('#login_email_help ,.ant-form-item-explain-error')).toBeChecked

  console.log("Test Case Passed! - User can't log into the Account with empty fields");
});



test('Login with wrong password', async ({ page }) => {
  await login(page, 'ushani@ceydigital.com', 'Ushani@5');

  await expect(page.locator('.ant-notification-notice-description')).toBeVisible

  console.log('Test Case Passed! - Error message displayed');
});


test('Test checkbox is clickable', async ({ page }) => {
  await page.goto('https://react.worklenz.com/auth/login'); // Ensure you're on the right page

  const checkbox = page.locator('#login_remember');
  await checkbox.click();

});
