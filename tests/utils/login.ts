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

}


