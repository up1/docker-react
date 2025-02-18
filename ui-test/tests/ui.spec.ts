import { test, expect } from '@playwright/test';

test('เปิดหน้าแรก', async ({ page }) => {
  await page.goto('http://ui:');
  await expect(page.locator('#root > h1')).toHaveText('Vite + React');
  await expect(page.locator('#root > div.card > button')).toHaveText('count is 0');
});