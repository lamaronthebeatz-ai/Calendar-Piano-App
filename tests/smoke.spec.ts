import { expect, test, type Page } from '@playwright/test'
import { readFileSync } from 'node:fs'

/** Every main page: opens without a script error and shows its content, with and without animations. */
/** [name, address, what must be visible on the first screen — headings unless the page has none, least text (200)] */
const PAGES: [string, string, string?, number?][] = [
  ['Trang chủ', '/#/home'],
  ['Thời khoá biểu', '/#/'],
  ['Học viên', '/#/students'],
  ['Lý thuyết', '/#/theory'],
  ['Mục Lý thuyết', '/#/theory?c=harmony'],
  ['Bài', '/#/theory/johann-sebastian-bach'],
  ['Âm nhạc học', '/#/musicology'],
  ['Bản đồ', '/#/musicology/ban-do', '.mm-full svg'],
  ['Tủ sách', '/#/curriculum'],
  ['Trình đọc', '/#/curriculum/neuhaus/bia'],
  ['Bảng tính', '/#/tools'],
  ['Solfège', '/#/solfege'],
  ['Nghe hợp âm', '/#/chord-ear'],
  ['Giải phức điệu', '/#/counterpoint'],
  ['Sổ nghiên cứu', '/#/notes'],
  ['Sổ tay tri thức', '/#/brain'],
  ['Phân tích tác phẩm', '/#/analyze'],
  // the title; the engraving (Verovio, several MB on a first visit) is waited for in analyze.spec.ts
  ['Một bản phân tích', '/#/analyze/bach-bwv269', 'h2', 60],
  ['Thư mục học', '/#/sources'],
  ['Một nguồn', '/#/sources/sposobin-1984'],
  ['Việc còn treo', '/#/sources/treo'],
  ['Thuật ngữ', '/#/terms'],
  ['Bàn làm việc', '/#/research'],
  ['Tra cứu', '/#/explore'],
  ['Hồ sơ một người', '/#/explore?p=johann-sebastian-bach'],
  ['Dòng thời gian', '/#/explore?tab=thoi-gian'],
  ['Dòng truyền', '/#/explore?tab=pha-he'],
  ['Sức khoẻ thư viện', '/#/sources/suc-khoe'],
  ['Cài đặt', '/#/settings'],
  // an editor: a sheet and its tools, little prose
  ['Soạn nhạc', '/#/compose', '.cmp-paper', 60],
]

/** Unlocked session, tour done: the pages themselves, not the lock screen (the passcode is never used in tests). */
async function open(page: Page, url: string, still = false) {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.addInitScript((still) => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    // "still": every animation and transition off, as when they fail to run — content must not depend on them
    if (still)
      document.addEventListener('DOMContentLoaded', () => {
        const s = document.createElement('style')
        s.textContent = '*, *::before, *::after { animation: none !important; transition: none !important; }'
        document.head.append(s)
      })
  }, still)
  await page.goto(url)
  // a slow machine may still be fetching the page's code: the Lamar curtain is up until it has come
  await expect(page.locator('.pc-root')).toHaveCount(0, { timeout: 20_000 })
  await page.waitForTimeout(2500)
  return errors
}

/** Headings the reader can actually see: rendered, on screen, and not faded out by any ancestor. */
const visible = (page: Page, selector = 'h1, h2') =>
  page.evaluate((selector) =>
    [...document.querySelectorAll(selector)]
      .filter((el) => {
        let opacity = 1
        for (let e: Element | null = el; e; e = e.parentElement) {
          const cs = getComputedStyle(e)
          if (cs.display === 'none' || cs.visibility === 'hidden') return false
          opacity *= Number(cs.opacity)
        }
        const r = el.getBoundingClientRect()
        return opacity > 0.6 && r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight
      })
      .map((el) => el.textContent?.trim() || el.tagName),
  selector)

for (const still of [false, true]) {
  test.describe(still ? 'không hiệu ứng' : 'bình thường', () => {
    for (const [name, url, key, least = 200] of PAGES)
      test(name, async ({ page }) => {
        const errors = await open(page, url, still)
        expect(errors, 'lỗi script').toEqual([])
        expect((await page.locator('body').innerText()).length, 'trang có nội dung').toBeGreaterThan(least)
        expect(await visible(page, key), 'màn đầu có nội dung chính nhìn thấy được').not.toEqual([])
      })
  })
}

// a page added to the router without a line in PAGES fails here, so no page goes untested
test('mọi trang trong router đều có trong danh sách kiểm', () => {
  test.skip(test.info().project.name !== 'chromium-phone', 'kiểm một lần là đủ')
  const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
  const routes = [...app.matchAll(/<Route path="([^"]+)" element=\{(<Navigate)?/g)].filter((m) => !m[2]).map((m) => m[1])
  // need a record that exists only on the device (a student's id)
  const NEEDS_DATA = ['/students/:id']
  const missing = routes
    .filter((r) => !NEEDS_DATA.includes(r))
    .filter((r) => {
      const base = r.replace(/\/:[^/]+\??/g, '') || '/'
      return !PAGES.some(([, url]) => url.slice(2).split('?')[0] === base)
    })
  expect(routes.length).toBeGreaterThan(15)
  expect(missing).toEqual([])
})

test('nút + xoè các công cụ có tên, bấm một mục thì mở trang đó', async ({ page }) => {
  test.skip(test.info().project.name.endsWith('desktop'), 'máy tính không có thanh dưới')
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
  await page.goto('/#/theory')
  await page.getByRole('button', { name: 'Thêm nhanh' }).click()
  const fan = page.getByRole('dialog', { name: 'Thao tác nhanh' })
  for (const name of ['Solfège', 'Nghe hợp âm', 'Giải phức điệu', 'Bảng tính', 'Tìm & đi nhanh', 'Soạn nhạc', 'Thêm buổi học', 'Thêm học viên'])
    await expect(fan.getByRole('button', { name })).toBeVisible()
  // every item stays on screen on a phone, once the fan has settled
  await fan.locator('.qf-item').last().evaluate((el) => Promise.all(el.getAnimations().map((x) => x.finished)))
  for (const b of await fan.locator('.qf-item').all()) {
    const r = (await b.boundingBox())!
    expect(r.x).toBeGreaterThanOrEqual(0)
    expect(r.x + r.width).toBeLessThanOrEqual(page.viewportSize()!.width)
  }
  await fan.getByRole('button', { name: 'Bảng tính' }).click()
  await expect(page).toHaveURL(/#\/tools/)
  await expect(fan).toHaveCount(0)
})

// the service worker would answer from its cache and hide the slow request
test.describe('màn che khi tải trang', () => {
  test.use({ serviceWorkers: 'block' })

  test('trang tải lâu: màn logo Lamar che lại rồi mở ra trên trang đã sẵn sàng', async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem('app:unlocked', '1')
      localStorage.setItem('onboarding-done', '1')
  })
    // the Tools page's code arrives late, as on a first visit over a slow network
    await page.route(/assets\/ToolsPage-[^/]+\.js$/, async (route) => {
      await new Promise((r) => setTimeout(r, 1500))
      await route.continue()
  })
    await page.goto('/#/theory')
    await expect(page.locator('#theory-search')).toBeVisible({ timeout: 20_000 })
    await page.evaluate(() => (location.hash = '#/tools'))
    await expect(page.locator('.pc-root')).toBeVisible({ timeout: 3000 })
    await expect(page.locator('.pc-root img')).toHaveAttribute('src', /logo-full/)
    await expect(page.locator('.pc-root')).toHaveCount(0, { timeout: 10_000 })
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible()
  })

  test('trang mở nhanh thì không chớp màn logo', async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem('app:unlocked', '1')
      localStorage.setItem('onboarding-done', '1')
      // count every time the curtain is put up
      new MutationObserver((ms) => ms.forEach((m) => m.addedNodes.forEach((n) => (n as Element).classList?.contains('pc-root') && ((window as unknown as { curtains: number }).curtains = ((window as unknown as { curtains: number }).curtains ?? 0) + 1)))).observe(document, { subtree: true, childList: true })
  })
    await page.goto('/#/theory')
    await expect(page.locator('#theory-search')).toBeVisible({ timeout: 20_000 })
    // the first load may show it (the page's code came over the network); count from here
    await page.waitForTimeout(800)
    await page.evaluate(() => ((window as unknown as { curtains: number }).curtains = 0))
    await page.evaluate(() => (location.hash = '#/theory/johann-sebastian-bach'))
    await page.waitForTimeout(1200)
    expect(await page.evaluate(() => (window as unknown as { curtains?: number }).curtains ?? 0)).toBe(0)
  })
})
