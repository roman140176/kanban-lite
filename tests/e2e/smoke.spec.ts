import { test, expect } from '@playwright/test'
test('smoke', async ({ page }) => {
  await page.goto('/')
  expect(await page.title()).toBeTruthy()
})
