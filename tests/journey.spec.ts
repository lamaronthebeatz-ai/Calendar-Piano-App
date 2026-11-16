import { expect, test } from '@playwright/test'
import { CHAPTERS } from '../src/features/journey/chapters'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('hành trình: tạo nhân vật, vào cảnh, đọc bài rồi quay lại đúng câu hỏi, trả lời đúng thì nhận thẻ', async ({ page }) => {
  await page.goto('/#/hanh-trinh')
  await page.getByRole('radio').nth(2).click()
  await page.getByLabel('Tên nhân vật').fill('Minh')
  await page.getByRole('button', { name: 'Bắt đầu hành trình' }).click()
  // a chapter opens on its history, a few panels, then the map
  await expect(page.locator('.jr-prologue-panel h2')).toHaveText('Người trả tiền cho âm nhạc')
  await page.getByRole('button', { name: 'Tiếp' }).click()
  await expect(page.locator('.jr-prologue-panel h2')).toHaveText('Thánh ca một bè')
  // the rest of the panels are skipped: five full-screen backdrops are slow to paint on WebKit in CI
  await page.getByRole('button', { name: 'Bỏ qua' }).click()
  await expect(page.locator('.jr-atlas-intro')).toContainText('Minh mở mắt')

  await page.locator('.jr-stop-row.is-next').click()
  const scene = page.locator('.jr-scene')
  // tap through the title card and every line
  for (let i = 0; i < 12 && !(await page.locator('.jr-quest').isVisible()); i++) await scene.click({ position: { x: 20, y: 160 } })
  await expect(page.locator('.jr-ask')).toContainText('Thánh ca Gregorian')

  // the answer is in the library: open the article, come back, the question is still there
  await page.locator('.jr-read').click()
  await expect(page).toHaveURL(/#\/theory\/thanh-ca-gregorian/)
  await page.goBack()
  await expect(page.locator('.jr-ask')).toContainText('Thánh ca Gregorian')

  await page.locator('.jr-choice').nth(1).click()
  await expect(page.locator('.jr-hint')).toBeVisible()
  await page.locator('.jr-choice').nth(0).click()
  await expect(page.locator('.jr-ev h3')).toHaveText('Thánh ca đơn âm')
  await page.getByRole('button', { name: /Lên đường/ }).click()
  await expect(page.locator('.jr-player-meta')).toContainText('1/10 chặng · 1 thẻ chứng cứ')
})

test('lữ hành vô tận: chuyến đi năm chặng sinh từ tiểu sử, trả lời xong thì đếm chặng', async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'] }))
  })
  await page.goto('/#/hanh-trinh')
  await page.getByRole('button', { name: '∞ Lữ hành vô tận' }).click()
  await expect(page.locator('.jr-stop-row')).toHaveCount(5)
  await page.locator('.jr-stop-row.is-next').click()
  const scene = page.locator('.jr-scene')
  for (let i = 0; i < 10 && !(await page.locator('.jr-quest').isVisible()); i++) await scene.click({ position: { x: 20, y: 160 } })
  await expect(page.locator('.jr-read')).toBeVisible()
  // try the choices in turn: a wrong one is only marked, the right one opens the reward
  for (let i = 0; i < 4 && !(await page.locator('.jr-reward').isVisible()); i++) {
    const c = page.locator('.jr-choice').nth(i)
    if (await c.isEnabled()) await c.click()
  }
  await page.getByRole('button', { name: 'Chặng sau →' }).click()
  await expect(page.locator('.jr-titlecard, .jr-dialog').first()).toBeVisible()
  await page.locator('.jr-scene .jr-exit').click()
  await expect(page.locator('.jr-player-meta')).toContainText('1 chặng đã đi')
})

test('nút ← trong game lùi lịch sử: về bản đồ rồi Back của máy là rời game, không vào lại cảnh', async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'] }))
  })
  await page.goto('/#/theory')
  await page.goto('/#/hanh-trinh')
  await page.locator('.jr-stop-row.is-next').click()
  await expect(page).toHaveURL(/s=/)
  await page.locator('.jr-scene .jr-exit').click()
  await expect(page.locator('.jr-stop-row').first()).toBeVisible()
  await expect(page).not.toHaveURL(/s=/)
  await page.goBack()
  await expect(page).toHaveURL(/#\/theory/)
})

test('save cũ journey:v1 được chuyển sang v2 một lần, bản gốc giữ ở journey:v1.bak, tiến trình còn nguyên', async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'], done: ['trung-co/phong-chep-sach'], cards: [] }))
  })
  await page.goto('/#/hanh-trinh')
  await expect(page.locator('.jr-player-name')).toHaveText('Minh')
  const store = await page.evaluate(() => ({ v2: JSON.parse(localStorage.getItem('journey:v2') ?? '{}'), bak: localStorage.getItem('journey:v1.bak') }))
  expect(store.bak).toContain('"Minh"')
  expect(store.v2).toMatchObject({ version: 2, name: 'Minh', done: ['trung-co/phong-chep-sach'], chaptersOpen: ['trung-co'] })
})

test('phiên toà sử gia: phán quyết rồi chỉ ra bài làm căn cứ, mới thấy lời giải', async ({ page }) => {
  const ch = CHAPTERS[0]
  await page.addInitScript((done) => {
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'], done }))
  }, ch.scenes.map((s) => `${ch.id}/${s.id}`))
  await page.goto(`/#/hanh-trinh?c=${ch.id}&v=court`)
  const first = page.locator('.jr-claim').first()
  const claim = ch.court.claims[0]
  await first.getByRole('button', { name: 'Có chứng cứ' }).click()
  await expect(first).toContainText('căn cứ nằm ở bài nào?')
  await first.locator(`button[data-slug="${claim.read}"]`).click()
  await expect(first).toContainText('✓ Đúng nguồn.')
  await expect(first).toContainText(claim.explain.slice(0, 30))
})

test('thử thách hôm nay: chuyến năm chặng có độ khó, đi một chặng thì đếm', async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'] }))
  })
  await page.goto('/#/hanh-trinh')
  await page.getByRole('button', { name: /☀ Thử thách hôm nay/ }).click()
  await expect(page.locator('.jr-kicker')).toContainText('độ khó vừa')
  await expect(page.locator('.jr-stop-row')).toHaveCount(5)
  await page.locator('.jr-stop-row.is-next').click()
  const scene = page.locator('.jr-scene')
  for (let i = 0; i < 10 && !(await page.locator('.jr-quest').isVisible()); i++) await scene.click({ position: { x: 20, y: 160 } })
  for (let i = 0; i < 4 && !(await page.locator('.jr-reward').isVisible()); i++) {
    const c = page.locator('.jr-choice').nth(i)
    if (await c.isEnabled()) await c.click()
  }
  await page.locator('.jr-scene .jr-exit').click()
  await expect(page.locator('.jr-player-meta')).toContainText('1 chặng đã đi')
})

test('chơi lại chương: chặng và phán quyết làm lại, thẻ vẫn giữ', async ({ page }) => {
  const ch = CHAPTERS[0]
  await page.addInitScript((done) => {
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'], done, cards: ['don-am'] }))
  }, ch.scenes.map((s) => `${ch.id}/${s.id}`))
  await page.goto(`/#/hanh-trinh?c=${ch.id}`)
  await expect(page.locator('.jr-player-meta')).toContainText(`${ch.scenes.length}/${ch.scenes.length} chặng`)
  page.once('dialog', (d) => d.accept())
  await page.getByRole('button', { name: '↺ Chơi lại chương này' }).click()
  await expect(page.locator('.jr-player-meta')).toContainText(`0/${ch.scenes.length} chặng · 1 thẻ chứng cứ`)
  // chapter II stays open
  await expect(page.locator('.jr-chapters a').nth(1)).not.toHaveClass(/is-locked/)
})
