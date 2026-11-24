import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('Trung tâm tri thức: số liệu thật, toàn vẹn sổ luật, tra cứu thuật ngữ đa ngữ, một luật có nguồn và trang', async ({ page }) => {
  await page.goto('/#/umk')
  const stats = page.getByTestId('umk-stats')
  await expect(stats).toContainText('bài thư viện')
  // the glossary is fetched: its count must not stay at the empty first render
  await expect(stats.locator('.umk-stat', { hasText: 'thuật ngữ đa ngữ' }).locator('b')).not.toHaveText('0')
  await expect(page.getByText(/counterpoint\.strict\.pham-tu-huong-1991@2: (\d+)\/\1 mục có trong UMK/)).toBeVisible()
  await expect(page.getByText('Quan hệ không trỏ tới đâu: 0')).toBeVisible()
  await page.getByRole('tab', { name: 'Sổ luật' }).click()
  await expect(page.locator('[data-umk-rulebook="counterpoint.strict.pham-tu-huong-1991"]')).toContainText('Taneyev')
  await page.getByRole('tab', { name: 'Cấu trúc & tra cứu' }).click()
  // a foreign name from the glossary finds the concept
  await page.getByRole('searchbox', { name: 'Tìm trong UMK' }).fill('fugue')
  await page.locator('.umk-hit').first().click()
  await expect(page.locator('[data-umk-focus]')).toContainText(/fugue/i)
  await page.goto('/#/umk?id=r%3Acounterpoint.strict.pham-tu-huong-1991%2Fdis-strong')
  const focus = page.locator('[data-umk-focus]')
  await expect(focus).toContainText('Phạm Tú Hương')
  await expect(focus).toContainText(/tr\. \d/)
  await expect(focus).toContainText('Được nêu trong bài')
})

test('Phân tích → UMRE → UMK: ngữ cảnh tri thức đi kèm kết quả, mâu thuẫn giọng chủ được báo về Trung tâm tri thức (không thành tri thức)', async ({ page }) => {
  test.setTimeout(150_000)
  await page.goto('/#/analyze/bach-bwv269')
  const box = page.locator('.an-key.is-empty')
  await box.getByLabel('Âm chủ').selectOption({ label: 'Mi♭ (E♭)' }, { timeout: 60_000 })
  await box.getByRole('button', { name: 'Phân tích với giọng này' }).click()
  const panel = page.locator('.um-panel')
  await panel.locator('summary').first().click()
  const used = panel.locator('.umk-used')
  await expect(used).toBeVisible()
  await used.locator('summary').click()
  await expect(used).toContainText('Truyền thống lý thuyết')
  await expect(used).toContainText('Mâu thuẫn', { timeout: 60_000 })
  // a wrong key leaves the tonal reading ambiguous: not presented as an established result
  await expect(used).toContainText('Mức xác lập: Chưa kết luận')
  await page.goto('/#/umk?tab=gaps')
  await expect(page.getByTestId('umk-reported')).toContainText('Mâu thuẫn')
  await expect(page.getByTestId('umk-reported')).toContainText('open')
})
