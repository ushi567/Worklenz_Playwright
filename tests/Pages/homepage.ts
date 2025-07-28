import { expect, Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyHomepageElements() {
    await this.page.waitForLoadState('networkidle');
    

    await expect(this.page.getByRole('link', { name: 'Reporting' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: /Upgrade Plan/i })).toBeVisible();
    await expect(this.page.getByRole('button', { name: /Invite/i })).toBeVisible();
    await expect(this.page.locator('[data-icon="bell"]')).toBeVisible();
    await expect(this.page.locator('[data-icon="question-circle"]')).toBeVisible();
    await expect(this.page.locator('[data-icon="user"]')).toBeVisible();
    await expect(this.page.getByRole('button', { name: /Create Project/i })).toBeVisible();
    await expect(this.page.locator('[title="List"]')).toBeVisible();
    await expect(this.page.locator('[title="Calendar"]')).toBeVisible();
    await expect(this.page.locator('.ant-picker-calendar-header')).toBeVisible();
    await expect(this.page.locator('[data-icon="sync"]')).toBeVisible();
    await expect(this.page.locator('.ant-select-selection-item')).toHaveText('Assigned to me');
    await expect(this.page.locator('#rc-tabs-1-tab-Today')).toBeVisible();
    await expect(this.page.locator('#rc-tabs-3-tab-Upcoming')).toBeVisible();
    await expect(this.page.locator('#rc-tabs-3-tab-Overdue')).toBeVisible();
    await expect(this.page.locator('#rc-tabs-3-tab-NoDueDate')).toBeVisible();
    await expect(this.page.locator('.ant-card-body')).toBeVisible();
    await expect(this.page.getByPlaceholder('[text = "+ Add Task"]')).toBeVisible();
    await expect(this.page.locator('[data-icon="star"]')).toBeVisible();
    await expect(this.page.locator('[title="Recent"]')).toBeVisible();
    await expect(this.page.locator('[title="Favourites"]')).toBeVisible();
  }

  async verifyTooltips() {
    await expect(this.page.locator('#:rb:')).toBeVisible();
    await expect(this.page.locator('#:rd:')).toBeVisible();
    await expect(this.page.locator('#:rg:')).toBeVisible();
    await expect(this.page.locator('#:ri:')).toBeVisible();
    await expect(this.page.locator('#:rk:')).toBeVisible();
    await expect(this.page.locator('#:rn:')).toBeVisible();
    await expect(this.page.locator('#:r10:')).toBeVisible();
    await expect(this.page.locator('#:r60:')).toBeVisible();
    await expect(this.page.locator('#:r5i:')).toBeVisible();
    await expect(this.page.locator('#:r5k:')).toBeVisible();
    await expect(this.page.locator('#:r14:')).toBeVisible();
    await expect(this.page.locator('#:r1a:')).toBeVisible();
    await expect(this.page.locator('#:r44:')).toBeVisible();
  }

  async openCreateProjectDrawer() {
    await this.page.getByRole('button', { name: /Create Project/ }).click();
    await expect(this.page.getByPlaceholder('[text = "Enter project name"]')).toBeVisible();
    await expect(this.page.locator('.ant-color-picker-color-block-inner')).toBeVisible();
    await expect(this.page.locator('.ant-typography.css-ftw9f5')).toBeVisible();
  }
}


//console.log('Current URL:', await this.page.url());