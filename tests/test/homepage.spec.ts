import { test } from '@playwright/test';
import { login } from '../utils/login';
import { Homepage } from '../Pages/homepage';

test('Verify homepage UI elements', async ({ page }) => {
  await login(page);
  const homepage = new Homepage(page);
  await homepage.verifyHomepageElements();
  console.log("Test case passed");
});

test('Verify tooltip', async ({ page }) => {
  await login(page);
  const homepage = new Homepage(page);
  await homepage.verifyTooltips();
  console.log("Tooltip test has been passed");
});

test('open Project Drawer', async ({ page }) => {
  await login(page);
  const homepage = new Homepage(page);
  await homepage.openCreateProjectDrawer();
  console.log("Drawer open test and test case passed");
});
