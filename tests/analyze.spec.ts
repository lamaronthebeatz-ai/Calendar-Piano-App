import { readFileSync } from 'node:fs'
import { expect, test, type Page } from '@playwright/test'

/** The global key is the analyst's: harmony waits for it. Pick it the way a reader does (tonic + mode). */
async function chooseKey(page: Page, tonic: string, minor = false) {
  const box = page.locator('.an-key.is-empty')
  await expect(box).toBeVisible({ timeout: 60_000 })
  await box.getByLabel('Âm chủ').selectOption({ label: tonic })
  await box.getByRole('radio', { name: minor ? 'Thứ' : 'Trưởng' }).click()
  await box.getByRole('button', { name: 'Phân tích với giọng này' }).click()
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('phân tích hợp xướng Bach: nhãn hợp âm trên bản nhạc, bấm ra giải thích, văn bản nối thư viện và tô ô nhịp', async ({ page }) => {
  await page.goto('/#/analyze/bach-bwv269')
  const harm = page.locator('.an-svg .harm')
  // no key chosen yet: the score is engraved in full, no harmony is drawn, nothing is guessed
  await expect(page.getByTestId('measure-count')).toContainText('Bản nhạc: 22 ô · Đã khắc: 22 ô', { timeout: 60_000 })
  await expect(harm).toHaveCount(0)
  await chooseKey(page, 'Sol (G)')
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
  await expect(report).toContainText('Giọng chủ (người phân tích chọn): Sol trưởng')
  await expect(report.getByRole('link', { name: 'câu kết' })).toHaveAttribute('href', /#\/theory\/cau-ket/)
  await report.locator('.an-barref').first().click()
  await expect(page.locator('.an-svg .measure.is-focus').first()).toBeAttached()
})

test('nhập MusicXML từ máy: bản nhạc vào danh sách của bạn và được phân tích', async ({ page }) => {
  await page.goto('/#/analyze')
  const xml = await (await page.request.get('/analyze/mozart-k545-1.musicxml')).text()
  await page.locator('input[type=file]').setInputFiles({ name: 'k545.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  await chooseKey(page, 'Đô (C)')
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await page.goto('/#/analyze')
  await expect(page.locator('.an-card', { hasText: 'Đã nhập' }).first()).toBeVisible()
})

test('kho bản nhạc: bản nhập còn sau khi tải lại (thân bản ở IndexedDB), tìm theo tên và tác giả, lọc theo nguồn, xoá', async ({ page }) => {
  await page.goto('/#/analyze')
  const xml = (await (await page.request.get('/analyze/mozart-k545-1.musicxml')).text()).replace(/<identification>/, '<identification><creator type="composer">Thử Nghiệm Văn</creator>')
  await page.locator('input[type=file]').setInputFiles({ name: 'ban-thu.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  await chooseKey(page, 'Đô (C)')
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  // the list keeps only metadata in localStorage; the score itself is in IndexedDB
  const raw = await page.evaluate(() => localStorage.getItem('analyze:scores') ?? '')
  expect(raw.length).toBeLessThan(2000)
  const url = page.url()
  await page.reload({ waitUntil: 'domcontentloaded' }) // WebKit on CI sometimes never fires 'load' here
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

test('kho bản nhạc: dữ liệu kiểu cũ (bản nhạc nằm trong localStorage) được chuyển sang IndexedDB mà không mất', async ({ page, browser }) => {
  await page.goto('/#/analyze')
  const xml = await (await page.request.get('/analyze/bach-bwv269.musicxml')).text()
  await page.locator('input[type=file]').setInputFiles({ name: 'cu.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  const id = page.url().split('/').pop()!
  await page.waitForFunction(() => (localStorage.getItem('analyze:scores') ?? '').includes('ps-'))
  // the old layout: the score inline in the list. Built in a fresh context (empty IndexedDB) before the app starts,
  // never by writing to the database the running app holds open (WebKit crashed on reload after that)
  const legacy = await page.evaluate(
    (id) =>
      new Promise<string>((ok) => {
        const r = indexedDB.open('analyze-scores')
        r.onsuccess = () => {
          const g = r.result.transaction('bodies').objectStore('bodies').get(id)
          g.onsuccess = () => {
            const list = JSON.parse(localStorage.getItem('analyze:scores')!)
            list[0].score = JSON.parse(g.result.data)
            r.result.close()
            ok(JSON.stringify(list))
          }
        }
      }),
    id,
  )
  const ctx = await browser.newContext({ viewport: page.viewportSize() ?? undefined })
  await ctx.addInitScript((legacy) => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    if (!localStorage.getItem('analyze:scores')) localStorage.setItem('analyze:scores', legacy)
  }, legacy)
  const fresh = await ctx.newPage()
  await fresh.goto(`/#/analyze/${id}`)
  await chooseKey(fresh, 'Sol (G)')
  await expect(fresh.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await fresh.waitForFunction(() => !(localStorage.getItem('analyze:scores') ?? '').includes('"score"'))
  // WebKit on CI sometimes never fires 'load' on this reload (service worker + IndexedDB); the next line waits for the page itself
  await fresh.reload({ waitUntil: 'domcontentloaded' })
  await expect(fresh.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await ctx.close()
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
  await chooseKey(page, 'La♭ (A♭)')
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
  await chooseKey(page, 'Sol (G)')
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
  await page.reload({ waitUntil: 'domcontentloaded' }) // WebKit on CI sometimes never fires 'load' here
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
})

test('giọng chủ: đổi là chạy lại, giữ lịch sử, cảnh báo có số liệu khi bằng chứng ngược lại, không tự đổi, không lan sang bản khác', async ({ page }) => {
  test.setTimeout(120_000)
  await page.goto('/#/analyze/bach-bwv269')
  await chooseKey(page, 'Sol (G)')
  const report = page.locator('.an-report')
  await expect(report).toContainText('Giọng chủ (người phân tích chọn): Sol trưởng', { timeout: 60_000 })
  const first = await page.locator('.an-svg .harm').first().textContent()
  await page.getByRole('button', { name: 'Đổi giọng chủ' }).click()
  const bar = page.locator('.an-key')
  await bar.getByLabel('Âm chủ').selectOption({ label: 'Mi♭ (E♭)' })
  await bar.getByRole('button', { name: 'Phân tích lại với giọng này' }).click()
  await expect(page.getByTestId('global-key')).toHaveText('Mi♭ trưởng (E♭ major)')
  await expect(bar).toContainText('phiên bản 2')
  // the machine disagrees and says so with figures, but the premise stays the analyst's
  await expect(bar.locator('.an-key-warn.is-strong')).toContainText('Bằng chứng trong bản nhạc ít ủng hộ', { timeout: 60_000 })
  await expect(bar.locator('.an-key-warn')).toContainText('Giọng chủ vẫn giữ theo lựa chọn của bạn')
  await expect(report).toContainText('Giọng chủ (người phân tích chọn): Mi♭ trưởng')
  // the notes are the same; local keys are not forced into E♭ (the first chord is still read in G)
  await expect(page.locator('.an-svg .harm').first()).toHaveText(first ?? '')
  await bar.locator('summary', { hasText: 'Các lần chọn trước' }).click()
  await expect(bar).toContainText('Phiên bản 1: Sol trưởng (G major)')
  // reopening restores it; another work does not inherit it
  await page.reload({ waitUntil: 'domcontentloaded' })
  await expect(page.getByTestId('global-key')).toHaveText('Mi♭ trưởng (E♭ major)', { timeout: 60_000 })
  await page.goto('/#/analyze/mozart-k545')
  await expect(page.locator('.an-key.is-empty')).toBeVisible({ timeout: 60_000 })
})

test('nhập MusicXML dày (105 ô, 12 khuông, đổi nhịp, nhắc lại): đủ 105 ô ở mọi tầng và cuộn tới được ô cuối', async ({ page }) => {
  test.setTimeout(150_000)
  const x = readFileSync('tests/fixtures/musicxml/ensemble-105.musicxml', 'utf8')
  // the dense layout that showed 11 bars before the fix: the three parts copied four times
  const parts = x.match(/<part id="P\d">[\s\S]*?<\/part>/g)!
  const list = x.match(/<score-part id="P\d">[\s\S]*?<\/score-part>/g)!
  const re = (s: string, k: number, i: number) => s.replace(/id="P\d"/, `id="Q${k}${i}"`)
  const xml = x.replace(/<part-list>[\s\S]*<\/part-list>/, `<part-list>${[0, 1, 2, 3].flatMap((k) => list.map((p, i) => re(p, k, i))).join('')}</part-list>`).replace(/<part id=[\s\S]*<\/part>/, [0, 1, 2, 3].flatMap((k) => parts.map((p, i) => re(p, k, i))).join('\n'))
  await page.goto('/#/analyze')
  await page.locator('input[type=file]').setInputFiles({ name: 'dan-nhac.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  await expect(page.getByTestId('measure-count')).toHaveText('Tệp: 105 thẻ ô · Bản nhạc: 105 ô · Đã khắc: 105 ô', { timeout: 90_000 })
  const bars = page.locator('.an-svg g.measure')
  expect(new Set(await bars.evaluateAll((g) => g.map((e) => e.getAttribute('data-id')))).size).toBe(105)
  // scrolled to, then measured: the last bar has a real box inside the window (WebKit's viewport ratio for an SVG <g> reads 0)
  const box = await page.locator('.an-svg g.measure[data-id="m104"]').evaluate((g) => {
    g.scrollIntoView({ block: 'center' })
    const r = g.getBoundingClientRect()
    return { w: r.width, h: r.height, top: r.top, bottom: r.bottom, vh: innerHeight }
  })
  expect(box.w).toBeGreaterThan(10)
  expect(box.h).toBeGreaterThan(10)
  expect(box.bottom).toBeGreaterThan(0)
  expect(box.top).toBeLessThan(box.vh)
})
