import { test, expect } from '@playwright/test';

const baseURL = 'https://react.worklenz.com/auth/login';

async function login(page, email: string, password: string) {
  await page.goto(baseURL);
  await page.getByRole('textbox', { name: /email/i }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill(password);

  await page.getByRole('button', { name: 'Log in' }).click();
}
// Test Case 1: Valid Login
test('Login with valid credentials', async ({ page }) => {
  await login(page, 'ushani@ceydigital.com', 'Ushani@123');
  const assignedToMeSpan = page.locator("span[title='Assigned to me']");
  console.log('Test Case Passed!');
});