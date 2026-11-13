import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('sổ tay: ghi chú nối tới bài bằng [[, bài hiện ghi chú ở mục “Trong sổ tay của bạn”', async ({ page }) => {
  await page.goto('/#/brain')
  await page.getByRole('button', { name: 'Ghi chú mới' }).click()
  await page.getByLabel('Tên ghi chú').fill('Fuga ở Bach')
  const area = page.getByLabel('Nội dung ghi chú')
  await area.pressSequentially('Cấu trúc của [[passacag')
  const pick = page.getByRole('listbox', { name: 'Gợi ý liên kết' }).getByRole('option').first()
  await expect(pick).toContainText(/passacaglia/i)
  await area.press('Enter')
  await expect(area).toHaveValue(/\[\[passacaglia-va-chaconne\]\]/)
  // a new note made from the suggestion list, linked at once
  await area.pressSequentially(' và [[Ý tưởng mới')
  await page.getByRole('option', { name: /Tạo ghi chú “Ý tưởng mới”/ }).click()
  await expect(area).toHaveValue(/\[\[n:[a-z0-9]+\|Ý tưởng mới\]\]/)

  await page.getByRole('button', { name: 'Xem', exact: true }).click()
  await expect(page.locator('.rs-preview a.wiki-link').first()).toBeVisible()
  await expect(page.getByRole('region', { name: 'Liên kết của ghi chú' })).toContainText('Ý tưởng mới')

  // the other side of the link: the article lists the note
  await page.locator('.rs-preview a.wiki-link').first().click()
  await expect(page).toHaveURL(/#\/theory\/passacaglia-va-chaconne/)
  const mine = page.getByRole('region', { name: 'Trong sổ tay của bạn' })
  await expect(mine).toContainText('Fuga ở Bach', { timeout: 15_000 })

  // and the new note knows who points at it
  await page.goto('/#/brain')
  await page.getByRole('link', { name: /^Ý tưởng mới/ }).click()
  await expect(page.getByRole('region', { name: 'Liên kết của ghi chú' })).toContainText('Fuga ở Bach')
})

test('ghi nhanh từ ⌘K tạo ghi chú', async ({ page }) => {
  test.skip(test.info().project.name.endsWith('phone'), 'phím tắt máy tính')
  await page.goto('/#/theory')
  await expect(page.locator('#theory-search')).toBeVisible({ timeout: 20_000 })
  await page.keyboard.press('Control+k')
  await page.keyboard.type('Ý về hoà âm Scriabin')
  await page.getByText('Ghi nhanh: “Ý về hoà âm Scriabin”').click()
  await expect(page).toHaveURL(/#\/brain\/[a-z0-9]+/)
  await expect(page.getByLabel('Tên ghi chú')).toHaveValue('Ý về hoà âm Scriabin')
})
