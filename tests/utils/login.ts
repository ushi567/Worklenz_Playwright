// utils/login.ts
import { expect } from '@playwright/test';


export async function login(page) {
  const email = 'ushani@ceydigital.com';
  const password = 'Ushani@123';
  const baseURL = 'https://react.worklenz.com/auth/login';

  await page.goto(baseURL);
  await page.getByRole('textbox', { name: /email/i }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill(password);
  await page.getByRole('button', { name: /Log in/i }).click();

  await page.getByRole('link', {name:'/worklenz/home'});

  

}


//await expect(page.getByAltText('Worklenz Logo')).toBeVisible({ timeout: 10000 });