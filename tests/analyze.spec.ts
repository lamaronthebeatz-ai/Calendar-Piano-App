import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('phân tích hợp xướng Bach: nhãn hợp âm trên bản nhạc, bấm ra giải thích, văn bản nối thư viện và tô ô nhịp', async ({ page }) => {
  await page.goto('/#/analyze/bach-bwv269')
  const harm = page.locator('.an-svg .harm')
  await expect(harm.first()).toBeVisible({ timeout: 60_000 })
  expect(await harm.count()).toBeGreaterThan(30)
  // the first chord of the chorale is the tonic
  await expect(harm.first()).toHaveText(/^\s*T\s*$/)
  await harm.nth(2).click()
  await expect(page.getByRole('complementary', { name: 'Hợp âm đã chọn' })).toContainText(/Sol trưởng/)
  // the notation switch rewrites the labels
  await page.getByRole('radio', { name: 'Quốc tế' }).click()
  await expect(harm.first()).toHaveText(/^\s*I\s*$/)
  // the report: key plan and cadences, terms are library links, bar references light the score
  const report = page.locator('.an-report')
  await expect(report).toContainText('Giọng chính: Sol trưởng')
  await expect(report.getByRole('link', { name: 'câu kết' })).toHaveAttribute('href', /#\/theory\/cau-ket/)
  await report.locator('.an-barref').first().click()
  await expect(page.locator('.an-svg .measure.is-focus').first()).toBeAttached()
})

test('nhập MusicXML từ máy: bản nhạc vào danh sách của bạn và được phân tích', async ({ page }) => {
  await page.goto('/#/analyze')
  const xml = await (await page.request.get('/analyze/mozart-k545-1.musicxml')).text()
  await page.locator('input[type=file]').setInputFiles({ name: 'k545.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await page.goto('/#/analyze')
  await expect(page.locator('.an-card', { hasText: 'Đã nhập' }).first()).toBeVisible()
})

test('kho bản nhạc: bản nhập còn sau khi tải lại (thân bản ở IndexedDB), tìm theo tên và tác giả, lọc theo nguồn, xoá', async ({ page }) => {
  await page.goto('/#/analyze')
  const xml = (await (await page.request.get('/analyze/mozart-k545-1.musicxml')).text()).replace(/<identification>/, '<identification><creator type="composer">Thử Nghiệm Văn</creator>')
  await page.locator('input[type=file]').setInputFiles({ name: 'ban-thu.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  // the list keeps only metadata in localStorage; the score itself is in IndexedDB
  const raw = await page.evaluate(() => localStorage.getItem('analyze:scores') ?? '')
  expect(raw.length).toBeLessThan(2000)
  const url = page.url()
  await page.reload()
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  expect(page.url()).toBe(url)

  await page.goto('/#/analyze')
  const cards = page.locator('.an-grid .an-card')
  const search = page.getByRole('searchbox', { name: 'Tìm trong kho bản nhạc' })
  await search.fill('thu nghiem')
  await expect(cards).toHaveCount(1)
  await expect(cards.first()).toContainText('Thử Nghiệm Văn')
  await search.fill('debussy')
  await expect(cards).toHaveCount(1)
  await expect(cards.first()).toContainText('Clair de lune')
  await search.fill('')
  await page.getByRole('button', { name: 'Đã nhập' }).click()
  await expect(cards).toHaveCount(1)
  page.once('dialog', (d) => void d.accept())
  await page.getByRole('button', { name: /^Xoá / }).click()
  await expect(page.getByText('Không có bản nào khớp')).toBeVisible()
})

test('kho bản nhạc: dữ liệu kiểu cũ (bản nhạc nằm trong localStorage) được chuyển sang IndexedDB mà không mất', async ({ page }) => {
  await page.goto('/#/analyze')
  const xml = await (await page.request.get('/analyze/bach-bwv269.musicxml')).text()
  await page.locator('input[type=file]').setInputFiles({ name: 'cu.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  const id = page.url().split('/').pop()!
  // rebuild the old layout: score inline in the list, IndexedDB emptied
  await page.waitForFunction(() => (localStorage.getItem('analyze:scores') ?? '').includes('ps-'))
  await page.evaluate(async (id) => {
    const db: IDBDatabase = await new Promise((ok, no) => {
      const r = indexedDB.open('analyze-scores')
      r.onsuccess = () => ok(r.result)
      r.onerror = () => no(r.error)
    })
    const row: { data: string } = await new Promise((ok) => {
      const g = db.transaction('bodies').objectStore('bodies').get(id)
      g.onsuccess = () => ok(g.result)
    })
    const list = JSON.parse(localStorage.getItem('analyze:scores')!)
    list[0].score = JSON.parse(row.data)
    localStorage.setItem('analyze:scores', JSON.stringify(list))
    await new Promise((ok) => {
      const tx = db.transaction('bodies', 'readwrite')
      tx.objectStore('bodies').clear()
      tx.oncomplete = ok
    })
    db.close()
  }, id)
  await page.reload()
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await page.waitForFunction(() => !(localStorage.getItem('analyze:scores') ?? '').includes('"score"'))
  await page.reload()
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
})

test('nhận file theo nội dung, không theo đuôi (điện thoại hay lưu thành .txt); file lạ thì báo lỗi', async ({ page }) => {
  await page.goto('/#/analyze')
  const input = page.locator('input[type=file]')
  await expect(input).not.toHaveAttribute('accept')
  await input.setInputFiles({ name: 'ghi-chu.txt', mimeType: 'text/plain', buffer: Buffer.from('xin chào') })
  await expect(page.getByText('không phải MusicXML hay MIDI')).toBeVisible()
  const xml = await (await page.request.get('/analyze/bach-bwv269.musicxml')).text()
  await input.setInputFiles({ name: 'bach.musicxml.txt', mimeType: 'text/plain', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
})

test('ba lăng kính: jazz ghi ký hiệu hợp âm và thang âm, TK XX ghi tên Forte, có sơ đồ hình thức và bảng từng ô', async ({ page }) => {
  await page.goto('/#/analyze/joplin-maple-leaf')
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await page.getByRole('radio', { name: 'Jazz' }).click()
  await expect(page.locator('.an-report')).toContainText('Thang âm và nốt dẫn hướng', { timeout: 30_000 })
  await expect(page.locator('.an-report')).toContainText('march / ragtime')
  await expect(page.getByRole('figure', { name: 'Sơ đồ hình thức' })).toBeVisible()
  await expect(page.locator('.an-table tbody tr').first()).toBeVisible()

  await page.goto('/#/analyze/schoenberg-op19-6')
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await expect(page.locator('.an-report')).toContainText('Tập cao độ')
  await expect(page.locator('.an-svg .harm').filter({ hasText: /\d-\d+/ }).first()).toBeVisible()
  // no keys or cadences drawn for atonal music
  await expect(page.locator('.an-svg .dir').filter({ hasText: /kết nửa|kết trọn|trưởng|thứ$/ })).toHaveCount(0)
})

test('kho bản nhạc khi kho mã hoá mở: thân bản trong IndexedDB là bản mã, tải lại vẫn đọc được', async ({ page }) => {
  // a vault key as the lock screen would leave it in the session (random, not derived from any code)
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('app:vault')) sessionStorage.setItem('app:vault', btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))))
  })
  await page.goto('/#/analyze')
  const xml = await (await page.request.get('/analyze/bach-bwv269.musicxml')).text()
  await page.locator('input[type=file]').setInputFiles({ name: 'mat.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  const id = page.url().split('/').pop()!
  await expect
    .poll(() =>
      page.evaluate(
        (id) =>
          new Promise<string>((ok) => {
            const r = indexedDB.open('analyze-scores')
            r.onsuccess = () => {
              const g = r.result.transaction('bodies').objectStore('bodies').get(id)
              g.onsuccess = () => ok(String(g.result?.data ?? '').slice(0, 5))
            }
          }),
        id,
      ),
    )
    .toBe('enc1:')
  await expect.poll(() => page.evaluate(() => (localStorage.getItem('analyze:scores') ?? '').slice(0, 5))).toBe('enc1:')
  await page.reload()
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
})
