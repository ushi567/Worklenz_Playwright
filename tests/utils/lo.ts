
// utils/login.ts
import { expect, Page } from '@playwright/test';

export async function login(page: Page) {

const email = 'ushani@ceydigital.com';
const password = 'Ushani@123';
const baseURL = 'https://react.worklenz.com/auth/login';
  // Navigate to login page
  await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

  // Fill login form
  await page.fill('#login_email',email);
  await page.fill('#login_password', password);
  await page.click("button[type='submit']");
  await page.waitForLoadState('networkidle');

  // Wait until redirected to dashboard
  await page.waitForURL(/worklenz\/home/, { timeout: 60000 });

  // Assert that the dashboard loaded
  await expect(page.getByText(/assigned to me/i)).toBeVisible({ timeout: 60000 });
}


// utils/login.ts
import { expect, Page } from '@playwright/test';

export async function login(page: Page) {
  const email = 'ushani@ceydigital.com';
  const password = 'Ushani@123';
  const baseURL = 'https://react.worklenz.com/auth/login';

  await page.goto(baseURL);
  await page.getByRole('textbox', { name: /email/i }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill(password);
  await page.getByRole('button', { name: /Log in/i }).click();

  
}