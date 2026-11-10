import { expect, test, type Page } from '@playwright/test'

/** Every main page: opens without a script error and shows its content, with and without animations. */
/** [name, address, what must be visible on the first screen — headings unless the page has none] */
const PAGES: [string, string, string?][] = [
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
    for (const [name, url, key] of PAGES)
      test(name, async ({ page }) => {
        const errors = await open(page, url, still)
        expect(errors, 'lỗi script').toEqual([])
        expect((await page.locator('body').innerText()).length, 'trang có nội dung').toBeGreaterThan(200)
        expect(await visible(page, key), 'màn đầu có nội dung chính nhìn thấy được').not.toEqual([])
      })
  })
}
