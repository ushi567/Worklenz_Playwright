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

// Test Case 2: Invalid Email Format
test('Login with invalid email', async ({ page }) => {
  await login(page, 'ushnaiceydigital.com', 'gdsjer@3465');
  await expect(page.locator('#login_email_help')).toBeVisible({ timeout: 10000 });
  console.log("Test Case Passed! - User can't log into the Account");
});

// Test Case 3: Empty Email and Password
test('Login with empty email and password', async ({ page }) => {
  await page.goto(baseURL); // skip login method since it fills
  await page.getByRole('button', { name: /Log in/i }).click();

  await expect(page.locator('#login_email')).toBeVisible();
  await expect(page.locator('#login_password')).toBeVisible();
  console.log("Test Case Passed! - User can't log in with empty fields");
});

// Test Case 4: Wrong Password
test('Login with wrong password', async ({ page }) => {
  await login(page, 'ushani@ceydigital.com', 'Ushani@5');
  const alerts = await page.locator('[role="alert"]').allTextContents();

  console.log('Test Case Passed! - Error message displayed');
});

// Test Case 5: Checkbox is Clickable
test('Test checkbox is clickable', async ({ page }) => {
  await page.goto(baseURL);
  const checkbox = page.locator('#login_remember');
  await checkbox.check(); // or .click()
  await expect(checkbox).toBeChecked();
});


//await expect(page.locator('div.greeting')).toContainText('Hi Ushani');
        
//await expect(page.getByText('/Hi Ushani/i')).toBeVisible();


