import { readFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('tìm trong thân bài tải vài mảnh nhỏ và ra đúng bài', async ({ page }) => {
  const shards: string[] = []
  page.on('request', (r) => r.url().includes('/content/search/') && shards.push(r.url()))
  await page.goto('/#/theory')
  await page.locator('#theory-search').fill('passacaglia chaconne')
  await expect(page.locator('main a[href="#/theory/passacaglia-va-chaconne"]').first()).toBeVisible({ timeout: 10_000 })
  expect(shards.length).toBeGreaterThan(0)
  expect(shards.length).toBeLessThanOrEqual(2)
})

test('lưu một mục rồi đọc khi mất mạng', async ({ page, context, browserName }) => {
  test.skip(browserName !== 'chromium', 'service worker + offline đo trên Chromium')
  await page.goto('/#/theory')
  await page.waitForFunction(() => navigator.serviceWorker?.ready.then(() => true))
  await page.reload() // now controlled by the worker
  await page.goto('/#/theory?c=organ')
  const save = page.locator('.offline-save')
  await save.click()
  await expect(save).toHaveText(/Đã lưu/, { timeout: 30_000 })
  const href = await page.locator('main a[href^="#/theory/"]').nth(2).getAttribute('href')
  await context.setOffline(true)
  await page.goto('/' + href)
  await expect(page.locator('h1').first()).toBeVisible()
  expect((await page.locator('main').innerText()).length).toBeGreaterThan(500)
})

test('thư mục: một công trình gom mọi bài dùng nó, có trích dẫn', async ({ page }) => {
  await page.goto('/#/sources/sposobin-1984')
  await expect(page.locator('h2').first()).toHaveText('Музыкальная форма')
  await expect(page.locator('.src-cite-text')).toContainText('Способин')
  expect(await page.locator('article ul a[href^="#/theory/"]').count()).toBeGreaterThan(20)
})

test('bài viết dẫn sang thư mục và có cách trích dẫn bài', async ({ page }) => {
  await page.goto('/#/theory/passacaglia-va-chaconne')
  await expect(page.locator('a[href^="#/sources/wp-"]').first()).toBeVisible()
  await expect(page.locator('.src-cite-text')).toContainText('Passacaglia')
})

test('tìm bằng tên tiếng Nga / Đức ra đúng bài, đầu bài hiện tên năm thứ tiếng', async ({ page }) => {
  await page.goto('/#/theory')
  await page.locator('#theory-search').fill('фуга')
  await expect(page.locator('main a[href^="#/theory/"]').first()).toHaveAttribute('href', '#/theory/fugue')
  await page.goto('/#/theory/fugue')
  await expect(page.locator('.term-names')).toContainText('Fuge')
})

test('mạng tri thức: hồ sơ Bach nối nơi chốn, hành trình, khái niệm; lọc theo thời kỳ', async ({ page }) => {
  await page.goto('/#/explore?p=johann-sebastian-bach')
  await expect(page.getByText('Leipzig').first()).toBeVisible()
  await expect(page.locator('a[href^="#/musicology/ban-do?j="]')).toBeVisible()
  await expect(page.locator('a[href="#/theory/fugue"]')).toBeVisible()
  await page.goto('/#/explore')
  await page.locator('select').first().selectOption('bar')
  await expect(page.locator('.src-row').first()).toContainText('Baroque')
})

test('tác phẩm: sonata cho phím đàn trước 1800 có bài phân tích K. 545', async ({ page }) => {
  await page.goto('/#/explore?tab=tac-pham')
  await page.locator('select').first().selectOption('sonata')
  await page.locator('input[placeholder="đến năm"]').fill('1800')
  await page.getByText('Cho phím đàn').click()
  await page.getByText('Có bài trong thư viện').click()
  await expect(page.locator('a[href="#/theory/phan-tich-sonata-k545"]')).toBeVisible()
})

test('bàn làm việc: đề tài gom ghi chú theo thẻ, trích dẫn, xuất Markdown có chú thích và thư mục', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('reader:notes', JSON.stringify({ 'thu-vien': [{ id: 'n1', key: 'fugue', text: 'Một chủ đề được các bè lần lượt mô phỏng.', before: '', color: 'yellow', ratio: 0, at: 1, tags: ['fugue-o-bach'] }] }))
  })
  await page.goto('/#/research')
  await page.locator('input[placeholder^="Tên đề tài"]').fill('Fugue ở Bach')
  await page.getByRole('button', { name: 'Tạo' }).click()
  await page.getByRole('button', { name: /Ghi chú · 1/ }).click()
  await page.getByText('Chèn vào bản nháp').click()
  // fill, not per-key typing: WebKit moved the caret mid-typing in the controlled textarea and scrambled the citation
  const draft = page.locator('textarea.rs-draft')
  await expect(draft).toHaveValue(/mô phỏng/)
  await draft.fill((await draft.inputValue()) + ' [^sposobin-1984, tr. 45]')
  const [file] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Xuất Markdown' }).click()])
  const md = readFileSync(await file.path(), 'utf8')
  expect(md).toContain('mô phỏng')
  expect(md).toContain('[^1]: Способин, И. В. Музыкальная форма')
  expect(md).toContain('tr. 45')
  expect(md).toContain('## Thư mục')
  // the same draft as a real .docx: stored zip, so the XML is readable as is; Word footnotes carry the citation
  const [docx] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /Xuất Word/ }).click()])
  expect(docx.suggestedFilename()).toMatch(/\.docx$/)
  const raw = readFileSync(await docx.path(), 'utf8')
  expect(raw).toContain('word/footnotes.xml')
  expect(raw).toContain('<w:footnoteReference w:id="1"/>')
  expect(raw).toContain('tr. 45')
  // APA: in the text, no footnotes
  await page.locator('select[aria-label="Kiểu trích dẫn"]').selectOption('apa')
  const [apa] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Xuất Markdown' }).click()])
  expect(readFileSync(await apa.path(), 'utf8')).toContain('(Способин, 1984, tr. 45)')
})

test('đối chiếu trường phái, thầy – trò, số trang Sposobin và Albrechtsberger', async ({ page }) => {
  await page.goto('/#/theory/chuc-nang-hoa-am')
  await expect(page.locator('.term-schools')).toContainText('Nga – Xô viết')
  await page.goto('/#/explore?p=franz-liszt')
  await expect(page.locator('.ex-lineage')).toContainText('Học trò')
  await page.goto('/#/sources/sposobin-1984')
  await expect(page.locator('.src-pages').first()).toContainText('tr.')
  await page.goto('/#/theory/quang-va-hop-am-albrechtsberger')
  await expect(page.locator('h2').filter({ hasText: 'Quãng' }).first().locator('.cite-inline')).toContainText('tr. 9')
})

test('phả hệ và độ tin cậy: cây thầy – trò, dòng truyền, nhãn loại bài, sức khoẻ thư viện', async ({ page }) => {
  await page.goto('/#/explore?p=ludwig-van-beethoven')
  await expect(page.locator('.lg-tree .lg-node.is-me')).toContainText('Beethoven')
  await page.goto('/#/explore?tab=pha-he')
  expect(await page.locator('.lg-chain').count()).toBeGreaterThan(3)
  await page.goto('/#/theory/passacaglia-va-chaconne')
  await expect(page.locator('.kind-badge')).toHaveText('Tổng hợp có nguồn')
  await page.goto('/#/sources/suc-khoe')
  await expect(page.getByText('Liên kết nguồn')).toBeVisible()
  await expect(page.locator('.hl-grid > div')).toHaveCount(5)
})

test('công cụ nghiên cứu vào được từ trang chủ Lý thuyết và Âm nhạc học (điện thoại không có ngăn kéo)', async ({ page }) => {
  for (const url of ['/#/theory', '/#/musicology']) {
    await page.goto(url)
    for (const to of ['/explore', '/explore?tab=pha-he', '/sources', '/terms', '/research', '/notes']) await expect(page.locator(`.rt a[href="#${to}"]`)).toBeVisible()
  }
})

test('tab Dòng truyền nằm trọn trong màn hình điện thoại', async ({ page }) => {
  await page.goto('/#/explore')
  const box = await page.locator('.src-tabs button', { hasText: 'Dòng truyền' }).boundingBox()
  const width = page.viewportSize()!.width
  expect(box!.x + box!.width).toBeLessThanOrEqual(width)
})

test('các trang nghiên cứu không tràn ngang trên điện thoại', async ({ page }) => {
  for (const url of ['/#/terms', '/#/sources', '/#/sources/suc-khoe', '/#/explore', '/#/explore?tab=tac-pham', '/#/explore?tab=pha-he', '/#/explore?p=franz-liszt', '/#/research']) {
    await page.goto(url)
    await page.waitForTimeout(1200)
    const over = await page.evaluate(() => {
      const w = document.documentElement.clientWidth
      return [...document.querySelectorAll('.term-card, .src-row, .rt-card, .lg-chain, .ex-block, .src-cite, header, .src-tabs')]
        .filter((e) => e.getBoundingClientRect().right > w + 1)
        .map((e) => e.className)
    })
    expect(over, url).toEqual([])
  }
})

test('ví dụ nhạc là bản khắc LilyPond; nút Nghe giữ dạng kể cả sau khi đã mở Bản đồ', async ({ page }) => {
  await page.goto('/#/musicology/ban-do') // its stylesheet stays loaded: a shared class name once turned every play button into a circle
  await page.waitForTimeout(1500)
  await page.goto('/#/theory/ky-am-binh-ca-gregorian')
  await expect(page.locator('.engraved').first()).toBeVisible()
  const box = await page.locator('.mm-play').first().boundingBox()
  expect(box!.width).toBeGreaterThan(box!.height * 1.5)
})

test('bầu trời âm nhạc học: các chủ đề và bài lý thuyết là mạng nơron, chọn được, mở được', async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
  await page.goto('/#/musicology')
  await expect(page.locator('.s3-canvas')).toBeVisible({ timeout: 20_000 })
  // every topic of the library is in the web (the keyboard list mirrors the canvas)
  expect(await page.locator('.s3 .sr-only button', { hasText: 'Chủ đề lý thuyết:' }).count()).toBeGreaterThanOrEqual(20)
  // the list for keyboards is hidden from sight: pressed the way a keyboard would
  await page.locator('.s3 .sr-only button', { hasText: 'Chủ đề lý thuyết: Phức điệu' }).evaluate((b: HTMLButtonElement) => b.click())
  const card = page.getByRole('dialog', { name: 'Phức điệu' })
  await expect(card).toBeVisible()
  await expect(card.getByRole('link', { name: 'Mở chủ đề' })).toHaveAttribute('href', '#/theory?c=polyphony')
  // the canvas keeps turning by itself when nothing is chosen
  await card.getByRole('button', { name: 'Đóng' }).click()
  const frame = () => page.locator('.s3-canvas').evaluate((c: HTMLCanvasElement) => c.toDataURL().length)
  const a = await frame()
  await page.waitForTimeout(3500)
  expect(await frame()).not.toBe(a)
})
