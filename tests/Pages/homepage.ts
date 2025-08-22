import { expect, Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyHomepageElements()
  {
    await this.page.locator("a[href ='/worklenz/projects']").isVisible();
    await this.page.locator("a[href = '/worklenz/reporting/overview']").isVisible();
    await this.page.getByRole('button', { name: /Upgrade Plan/i }).isVisible();
    await this.page.getByRole('button', { name: /Invite/i }).isVisible();
    await this.page.locator('[data-icon="bell"]').isVisible();
    await this.page.locator('[data-icon="question-circle"]').isVisible();
    await this.page.locator('[data-icon="user"]').isVisible();
    await this.page.getByRole('button', { name: /Create Project/i }).isVisible();
    await this.page.locator('[title="List"]').isVisible();
    await this.page.locator('[title="Calendar"]').isVisible();
    await this.page.locator('.ant-picker-calendar-header').isVisible();
    await this.page.locator('[data-icon="sync"]').isVisible();
    await this.page.locator('.ant-select-selection-item').isVisible();
    await this.page.locator('#rc-tabs-1-tab-Today').isVisible();
    await this.page.locator('#rc-tabs-3-tab-Upcoming').isVisible();
    await this.page.locator('#rc-tabs-3-tab-Overdue').isVisible();
    await this.page.locator('#rc-tabs-3-tab-NoDueDate').isVisible();
    await this.page.locator('.ant-card-body').isVisible();
    await this.page.getByPlaceholder('[text = "+ Add Task"]').isVisible();
    await this.page.locator('[data-icon="star"]').isVisible();
    await this.page.locator('[title="Recent"]').isVisible();
    await this.page.locator('[title="Favourites"]').isVisible();
  }

  async verifyTooltips() {
    await this.page.locator("div[id= ':r9s:']").isVisible();
    await this.page.locator("div[id= ':r9u:']").isVisible();
    await this.page.locator("div[id= ':ra1:']").isVisible();
    await this.page.locator("div[id= ':ra3:']").isVisible();
    await this.page.locator("div[id= ':ra6:']").isVisible();
    await this.page.locator("div[id= ':ra9:']").isVisible();
    await this.page.locator("div[id= ':r157:']").isVisible();
    await this.page.locator("div[id= ':r15b:']").isVisible();
    await this.page.locator("div[id= ':r15d:']").isVisible();
    await this.page.locator("div[id= ':r15g:']").isVisible();
  
  }

  async openCreateProjectDrawer() {
    await this.page.locator("//button[@class='ant-btn css-ftw9f5 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-icon-only ant-btn-compact-item ant-btn-compact-last-item ant-dropdown-trigger']").click()
    await expect(this.page.locator("//input[@id= 'name']")).toBeVisible();
  }
}


