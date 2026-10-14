// Exercise 2, Part B: review only. This file is not run.
import { expect, test } from '@playwright/test';

test('download answer as PDF', async ({ page }) => {
  await page.goto('https://staging.example-research.com/chat/123');
  await page.click('text=Download');
  await page.waitForTimeout(5000);
  await expect(page.locator('.toast')).toBeVisible();
});

test('download disabled while generating', async ({ page }) => {
  await page.goto('https://staging.example-research.com/chat/123');
  await page.fill('#query', 'What causes ALS?');
  await page.press('#query', 'Enter');
  await expect(page.getByRole('button', { name: 'Download' })).toBeVisible();
});
