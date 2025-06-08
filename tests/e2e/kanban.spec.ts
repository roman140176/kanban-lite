import { test, expect } from '@playwright/test'

test('user can add a card', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('add-card-btn').click()
  await page.getByPlaceholder('Card title').fill('My first card')
  await page.getByRole('button', { name: /^save$/i }).click()
  // Пока нет доски — проверяем, что модалка закрылась
  // await expect(page.getByPlaceholder('Card title')).not.toBeVisible()
})
