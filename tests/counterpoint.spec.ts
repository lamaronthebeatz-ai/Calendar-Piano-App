import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    localStorage.removeItem('counterpoint:v1')
  })
})

/**
 * Lamar's exercise (Iv = −7 with two variants, five ✱): by the book's rules the ✱ of bar 5 cannot hold a lawful
 * dissonance. The page must say so, offer ways out that keep the đề note for note, and give answers once the teacher's
 * option (a quarter-note preparation) is on.
 */
test('giải phức điệu: bế tắc ở ô 5, cách gỡ giữ nguyên đề, rồi lời giải khi cho nốt đen chuẩn bị', async ({ page }) => {
  test.setTimeout(180_000)
  await page.goto('/#/counterpoint')
  await page.getByLabel(/Khoá đề của thầy/).check()
  await expect(page.locator('.cp-kb')).toHaveCount(0)
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('counterpoint:v1')!).given)
  await page.locator('.cp-go').first().click()
  const fail = page.locator('.cp-fail')
  await expect(fail).toHaveAttribute('data-status', /unsat|unknown/, { timeout: 40_000 })
  // a slow engine (WebKit on CI) may time out first: that must read as "not decided", and searching on must prove it
  if ((await fail.getAttribute('data-status')) === 'unknown') {
    await expect(fail).toContainText('Chưa kết luận')
    await fail.getByRole('button', { name: /Tìm tiếp/ }).click()
  }
  await expect(fail).toHaveAttribute('data-status', 'unsat', { timeout: 80_000 })
  await expect(fail).toContainText('Không có lời giải')
  await expect(fail).toContainText('Đã chứng minh')
  await expect(fail).toContainText('trong khoảng')
  await expect(fail).toContainText('ô 5, phách 1')
  await fail.getByRole('button', { name: /Tìm cách gỡ/ }).click()
  await expect(page.getByText('Cách gỡ — đề của thầy giữ nguyên')).toBeVisible({ timeout: 25_000 })
  await expect(page.getByRole('button', { name: /ô 5, phách 1 để thuận/ })).toBeVisible()
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('counterpoint:v1')!).given)
  expect(after).toEqual(before)
  await page.getByLabel(/Cho phép nốt đen làm nốt chuẩn bị/).check()
  await page.locator('.cp-actions .cp-go').first().click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 25_000 })
  // the Iv belongs to the nguyên thể: drawn are NT, BT1, BT2 — no separate "Iv −7" staff
  await expect(page.locator('.cp-ver')).toHaveCount(3)
  await expect(page.locator('.cp-ver-head b').first()).toHaveText('Nguyên thể · Iv −7')
  // Taneyev's numbers (octave = 7) and the bar on the numbers of the prepared dissonances at the ✱
  const nt = page.locator('.cp-ver').first()
  await expect(nt.locator('.sv-num').last()).toHaveText(/^(0|2|4|5|7|9|11|12|14)$/)
  expect(await nt.locator('.sv-num-line').count()).toBeGreaterThanOrEqual(4)
  // every split I + II = −7 is offered, and each is decided
  await expect(page.locator('.cp-splits button')).toHaveCount(8)
  await page.getByRole('button', { name: 'Xét mọi BT' }).click()
  await expect(page.locator('.cp-splits button.is-ok')).toHaveCount(8, { timeout: 25_000 })
})

test('sinh đề có lời giải, luyện từng nốt với gợi ý', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto('/#/counterpoint')
  await page.locator('.cp-gen').getByRole('button', { name: 'Dễ' }).click()
  await expect(page.getByText('Đề máy sinh · sửa tự do')).toBeVisible({ timeout: 20_000 })
  await page.getByRole('button', { name: 'Xem đáp án' }).click()
  await expect(page.locator('.cp-ver').first()).toBeVisible()
  await page.getByRole('button', { name: 'Gợi ý nốt tiếp' }).click()
  const ok = page.locator('.cp-hints button.is-ok').first()
  await expect(ok).toBeVisible({ timeout: 15_000 })
  await ok.click()
  await expect(page.locator('.cp-live p')).toContainText('✓')
})

test('nhập nốt thăng / giáng / bình cho nốt kế tiếp', async ({ page }) => {
  await page.goto('/#/counterpoint')
  await page.getByRole('button', { name: 'Xoá hết' }).click()
  const fa4 = page.locator('.cp-key').filter({ hasText: 'Fa' }).filter({ hasText: '4' })
  await page.getByTitle('Thăng cho nốt kế tiếp').click()
  await fa4.click()
  await fa4.click()
  await page.getByTitle('Giáng cho nốt kế tiếp').click()
  await page.locator('.cp-key').filter({ hasText: 'Si' }).filter({ hasText: '4' }).click()
  await expect(page.locator('.cp-hint')).toHaveText('Fa♯4 · Fa4 · Si♭4')
  await expect(page.locator('.cp-card svg text').filter({ hasText: '♮' })).toHaveCount(1)
})

test('dạng bài chuyển động chiều ngang: tick chọn dạng, giải bài mẫu, nguyên thể và biến thể Ih chung một tổng phổ ba khuông', async ({ page }) => {
  test.setTimeout(180_000)
  await page.goto('/#/counterpoint')
  await page.getByRole('radio', { name: 'Chuyển động chiều ngang (Ih)' }).check()
  await expect(page.locator('select').filter({ hasText: '−1 ô' })).toBeVisible()
  await page.locator('.cp-go').first().click()
  const done = page.locator('.cp-sols button, .cp-fail')
  await expect(done.first()).toBeVisible({ timeout: 40_000 })
  // a slow engine may only time out first; searching on must reach a verdict
  if (await page.locator('.cp-fail[data-status="unknown"]').count()) await page.getByRole('button', { name: /Tìm tiếp/ }).click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 80_000 })
  // the book's layout: original and shifted copy as one score, I – I′ – II bar under bar
  await expect(page.locator('.cp-ver-head span').filter({ hasText: 'BT · Ih −1' }).first()).toBeVisible()
  await expect(page.getByRole('img', { name: 'Bản nhạc 3 khuông' }).first()).toBeVisible()
  await expect(page.locator('.cp-ver-head b').first()).toHaveText(/^I · (I′ · II|II · II′)$/)
  // the three lines together, then stop
  const all = page.getByRole('button', { name: '▶ Cả ba bè' }).first()
  await all.click()
  await expect(page.getByRole('button', { name: '■ Dừng' }).first()).toBeVisible()
  await page.getByRole('button', { name: '■ Dừng' }).first().click()
})

test('dạng bài ba bè và tam trùng: chọn dạng, đề làm bè dưới, máy viết hai bè trên, vẽ mọi biến thể đã tick', async ({ page }) => {
  test.setTimeout(180_000)
  await page.goto('/#/counterpoint')
  await page.getByRole('radio', { name: 'Đối vị ba bè' }).check()
  await expect(page.getByText('Đề là bè')).toBeVisible()
  await page.locator('.cp-go').first().click()
  if (await page.locator('.cp-fail[data-status="unknown"]').count()) await page.getByRole('button', { name: /Tìm tiếp/ }).click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 80_000 })
  await expect(page.locator('.cp-ver')).toHaveCount(1)
  await page.getByRole('radio', { name: /Tam trùng/ }).check()
  await expect(page.getByRole('group', { name: 'Biến thể' }).getByRole('button')).toHaveCount(5)
  // only two of the five versions asked for
  for (const bt of ['BT3', 'BT4', 'BT5']) await page.getByRole('button', { name: new RegExp(`^${bt}`) }).click()
  await page.locator('.cp-go').first().click()
  const done = page.locator('.cp-sols button, .cp-fail')
  await expect(done.first()).toBeVisible({ timeout: 40_000 })
  if (await page.locator('.cp-fail[data-status="unknown"]').count()) await page.getByRole('button', { name: /Tìm tiếp/ }).click()
  await expect(page.locator('.cp-fail[data-status="unsat"], .cp-sols button').first()).toBeVisible({ timeout: 80_000 })
  if (await page.locator('.cp-sols button').count()) await expect(page.locator('.cp-ver')).toHaveCount(3)
})

test('canon vô tận: đề ngắn làm đoạn A, máy viết tiếp bè P, bè R chép lại quãng 8 dưới', async ({ page }) => {
  test.setTimeout(180_000)
  const p = (step: number, midi: number) => ({ step, alter: 0, midi })
  const A = [
    { start: 0, dur: 2, p: p(35, 72) },
    { start: 2, dur: 2, p: p(36, 74) },
    { start: 4, dur: 2, p: p(37, 76) },
    { start: 6, dur: 2, p: p(35, 72) },
  ]
  await page.addInitScript((given) => {
    localStorage.setItem('counterpoint:v1', JSON.stringify({ keyIdx: 0, meterIdx: 2, givenIs: 'II', given, stars: [], form: 'canon-vo-tan' }))
  }, A)
  await page.goto('/#/counterpoint')
  await expect(page.getByRole('radio', { name: 'Canon vô tận (hai bè)' })).toBeChecked()
  await expect(page.getByText('Vào sau')).toBeVisible()
  await page.locator('.cp-go').first().click()
  if (await page.locator('.cp-fail[data-status="unknown"]').count()) await page.getByRole('button', { name: /Tìm tiếp/ }).click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 80_000 })
  await expect(page.locator('.cp-ver-head span')).toContainText('R1: sau 2 ô, quãng 8 dưới')
})

test('phần IV, thể hai đoạn mô phỏng: đoạn 1 canon ba bè, câu nối, đoạn 2 đảo ảnh — ghép thành một bài', async ({ page }) => {
  test.setTimeout(180_000)
  const p = (step: number, midi: number) => ({ step, alter: 0, midi })
  const A = [
    { start: 0, dur: 2, p: p(35, 72) },
    { start: 2, dur: 2, p: p(36, 74) },
    { start: 4, dur: 2, p: p(37, 76) },
    { start: 6, dur: 2, p: p(35, 72) },
  ]
  await page.addInitScript((given) => {
    localStorage.setItem('counterpoint:v1', JSON.stringify({ keyIdx: 0, meterIdx: 2, givenIs: 'II', given, stars: [], form: 'hai-doan-mo-phong' }))
  }, A)
  await page.goto('/#/counterpoint')
  await expect(page.getByRole('radio', { name: 'Thể hai đoạn mô phỏng' })).toBeChecked()
  await page.locator('.cp-go').first().click()
  await expect(page.locator('.cp-sols button, .cp-fail').first()).toBeVisible({ timeout: 40_000 })
  if (await page.locator('.cp-fail[data-status="unknown"]').count()) await page.getByRole('button', { name: /Tìm tiếp/ }).click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 80_000 })
  await expect(page.locator('.cp-parts li')).toHaveCount(3)
  await expect(page.locator('.cp-parts li').nth(1)).toContainText('Câu nối')
})

test('chấm bài tự viết cho canon: trình nhập có ô cho từng bè học viên viết, bài viết dở thì báo chưa xong', async ({ page }) => {
  const p = (step: number, midi: number) => ({ step, alter: 0, midi })
  const A = [
    { start: 0, dur: 2, p: p(35, 72) },
    { start: 2, dur: 2, p: p(36, 74) },
    { start: 4, dur: 2, p: p(37, 76) },
    { start: 6, dur: 2, p: p(35, 72) },
  ]
  await page.addInitScript((given) => {
    localStorage.setItem('counterpoint:v1', JSON.stringify({ keyIdx: 0, meterIdx: 2, givenIs: 'II', given, stars: [], form: 'canon-vo-tan', mine: [{ start: 8, dur: 4, p: { step: 35, alter: 0, midi: 72 } }], extra: [] }))
  }, A)
  await page.goto('/#/counterpoint')
  await expect(page.getByRole('button', { name: 'P (viết tiếp sau A)' })).toBeVisible()
  await page.getByRole('button', { name: 'Chấm bài của tôi' }).click()
  await expect(page.locator('[data-graded="bad"]')).toContainText('Chưa viết tới cuối: P (viết tiếp sau A)')
})
