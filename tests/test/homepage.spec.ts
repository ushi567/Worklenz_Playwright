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
  console.log("Tooltip test passed");
});

test('Verify project drawer UI elements', async ({ page }) => {
  await login(page);
  const homepage = new Homepage(page);
  await homepage.openCreateProjectDrawer();
  console.log("Drawer test passed");
});
