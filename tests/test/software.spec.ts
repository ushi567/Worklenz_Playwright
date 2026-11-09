import { test, expect } from '@playwright/test';

const baseURL = 'https://react.worklenz.com/auth/login';

async function login(page, email: string, password: string) {
  await page.goto(baseURL);
  await page.getByRole('textbox', { name: /email/i }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill(password);

  await page.getByRole('button', { name: 'Log in' }).click();
}