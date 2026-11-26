import { expect, test, type Page } from '@playwright/test'

/**
 * Academic activities of "Ghi chú bên lề" (ui/academic): listening (puzzle system), reading the score (structured
 * notes, the editor's engraver), a melody analysis run by UMRE in its worker, the comparison puzzle, and a sources
 * puzzle — graded by the existing puzzle system, recorded in the existing save, with what each result rests on.
 */
const BASE = '/#/hanh-trinh?c=trung-co&v=arc&a=ban-thao&l='
test.beforeEach(async ({ page }, info) => {
  if (info.project.name.startsWith('webkit')) await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    sessionStorage.setItem('journey:clip-off', '1')
    localStorage.setItem('onboarding-done', '1')
    if (!localStorage.getItem('journey:v1') && !localStorage.getItem('journey:v2')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'], done: ['trung-co/phong-chep-sach', 'trung-co/neume'] }))
  })
})
const save = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('journey:v2') ?? '{}'))
/** opens a place's list screen with the save changed first (what the story would have given by now) */
async function openWith(page: Page, place: string, change: (s: Record<string, unknown>) => Record<string, unknown>) {
  await page.goto(BASE + encodeURIComponent(place))
  await expect(page.locator('.ar-place-title')).toBeVisible()
  await page.evaluate((src) => {
    const s = JSON.parse(localStorage.getItem('journey:v2')!)
    localStorage.setItem('journey:v2', JSON.stringify(new Function('s', `return (${src})(s)`)(s)))
  }, change.toString())
  await page.reload()
  await expect(page.locator('.ar-place-title')).toBeVisible()
}

test('bàn so bản chép: nghe, đọc bản nhạc (dữ liệu có cấu trúc), UMRE phân tích giai điệu, câu đố so hướng, hệ quả', async ({ page }) => {
  test.slow()
  await openWith(page, 'loc:bt/phong-chep', (s) => ({ ...s, inventory: [...(s.inventory as string[]), 'item:bt/manh-cu'] }))
  await page.getByRole('button', { name: /Bàn so bản chép/ }).click()
  const panel = page.getByRole('dialog', { name: 'Hoạt động học thuật: Bàn so bản chép' })
  await expect(panel).toBeVisible({ timeout: 20_000 })

  // 1 — listening: the arc's recording, replayable clips, a volume slider; graded by the puzzle's data, explained after
  await expect(panel.getByRole('button', { name: /^Nghe/ })).toHaveCount(3)
  await expect(panel.getByRole('slider')).toBeVisible()
  await expect(panel).toContainText('không phải phân tích của UMRE')
  const rows = panel.locator('.ar-order li')
  await rows.nth(1).getByRole('button', { name: 'Lên' }).click() // la ut mi → ut la mi
  await rows.nth(2).getByRole('button', { name: 'Lên' }).click() // → ut mi la
  await panel.getByRole('button', { name: 'Kiểm tra' }).click()
  await expect(panel).toContainText('Đúng theo tiêu chí của câu đố')
  await expect(panel.locator('.ac-explain')).toContainText('ut, re, mi, fa, sol, la')

  // 2 — the score: a tap on a drawn note gives that note's data (not its pixels)
  await panel.getByRole('button', { name: 'Bước tiếp →' }).click()
  await expect(panel.locator('.ac-sheet svg').first()).toBeVisible({ timeout: 40_000 })
  // the click lands on the drawn note element; the panel resolves it through the element's id to the data
  await panel.locator('.ac-sheet [data-id="n5"]').first().dispatchEvent('click')
  await expect(panel.locator('.ac-info')).toContainText('thứ 5 · Sol4')
  await panel.getByRole('button', { name: 'Nốt 9: Đô5' }).click()
  await panel.getByRole('button', { name: 'Nốt 1: Rê4' }).click()
  await expect(panel).toContainText('Đã xem 3/12 nốt')
  await panel.getByRole('button', { name: 'Phóng to' }).click()
  await expect(panel.locator('.ac-zoom')).toContainText('122%')

  // 3 — UMRE: a real analysis of the same notes, facts and hypotheses labelled, no key set
  await panel.getByRole('button', { name: 'Bước tiếp →' }).click()
  await expect(panel).toContainText('không đặt và không suy đoán giọng chủ')
  await panel.getByRole('button', { name: 'Phân tích giai điệu (UMRE)' }).click()
  const findings = panel.getByTestId('ac-findings')
  await expect(findings).toBeVisible({ timeout: 30_000 })
  await expect(findings).toContainText('Dữ kiện (UMRE tính từ nốt)')
  await expect(findings).toContainText('melody.line@')
  await expect(findings).toContainText('10 nửa cung') // D4–C5, computed by UMRE

  // 4 — the comparison: a wrong pick is explained from the data at that step; the right one is graded by the puzzle
  await panel.getByRole('button', { name: 'Bước tiếp →' }).click()
  await panel.getByRole('button', { name: 'Nốt 5: Sol4' }).click()
  await panel.getByRole('button', { name: 'Chọn nốt 5' }).click()
  await expect(panel.locator('.ac-verdict')).toContainText('hai bên khớp hướng')
  await panel.getByRole('button', { name: 'Nốt 9: Đô5' }).click()
  await panel.getByRole('button', { name: 'Chọn nốt 9' }).click()
  await expect(panel).toContainText('Đúng theo dữ liệu')
  await expect(panel.locator('.ac-explain')).toContainText('neume không dòng kẻ chỉ ghi hướng')

  // consequences through the existing systems: evidence card, puzzle record, flags kept apart, a story beat
  await expect.poll(async () => (await save(page)).cards).toContain('ev:bt/so-huong')
  const s = await save(page)
  expect(s.puzzles['pz:bt/so-huong'].solved).toBe(true)
  for (const f of ['ac:ac:bt/so-huong:tried', 'ac:ac:bt/so-huong:done', 'ac:ac:bt/so-huong:correct', 'ac:ac:bt/so-huong:explained', 'ac:ac:bt/phan-tich-giai-dieu:done', 'ac:ac:bt/khao-sat-trang:done']) expect(s.flags).toContain(f)
  await expect.poll(async () => (await save(page)).flags).toContain('beat:bt:so-huong')

  // reload: the panel reopens on the same step, progress intact
  await page.reload()
  await page.getByRole('button', { name: /Bàn so bản chép/ }).click()
  await expect(panel.getByRole('button', { name: /So với neume cũ ✓/ })).toBeVisible({ timeout: 20_000 })
  await expect(panel).toContainText('Đúng theo dữ liệu')
})

test('UMRE không chạy được: báo rõ, không tạo kết quả thay, thử lại được', async ({ page }) => {
  test.slow()
  await page.route(/umre\.worker[^/]*\.js/, (r) => r.abort())
  await openWith(page, 'loc:bt/phong-chep', (s) => ({ ...s, inventory: [...(s.inventory as string[]), 'item:bt/manh-cu'] }))
  await page.getByRole('button', { name: /Bàn so bản chép/ }).click()
  const panel = page.getByRole('dialog', { name: /Bàn so bản chép/ })
  await panel.getByRole('button', { name: /Phân tích giai điệu/ }).click()
  await panel.getByRole('button', { name: 'Phân tích giai điệu (UMRE)' }).click()
  await expect(panel.getByRole('alert')).toContainText('Không chạy được UMRE', { timeout: 30_000 })
  await expect(panel.getByTestId('ac-findings')).toHaveCount(0)
  await expect(panel.getByRole('button', { name: 'Thử lại phân tích' })).toBeVisible()
  expect((await save(page)).flags).not.toContain('ac:ac:bt/phan-tich-giai-dieu:done')
})

test('tập ghi chép về Guido: xếp loại tư liệu theo chứng cứ có nguồn, giải thích và nguồn hiện sau khi trả lời', async ({ page }) => {
  // the librarian has told of Guido (the topic his dialogue remembers)
  await openWith(page, 'loc:bt/thu-vien', (s) => {
    const d = s.dialogue as { history: string[]; topics: Record<string, string[]> }
    return { ...s, dialogue: { ...d, topics: { ...d.topics, 'npc:bt/quan-thu': ['guido'] } } }
  })
  await page.getByRole('button', { name: /Tập ghi chép về thầy Guido/ }).click()
  const panel = page.getByRole('dialog', { name: /Tập ghi chép về thầy Guido/ })
  await expect(panel).toBeVisible({ timeout: 20_000 })
  for (const [row, label] of [['Micrologus', 'Nguồn sơ cấp'], ['Sigebert', 'Nguồn thứ cấp'], ['truyền miệng', 'Giai thoại'], ['Hình bàn tay', 'Hiện vật']])
    await panel.getByRole('combobox', { name: new RegExp(row) }).selectOption({ label })
  await panel.getByRole('button', { name: 'Kiểm tra' }).click()
  await expect(panel).toContainText('Đúng theo tiêu chí của câu đố')
  await expect(panel.locator('.ac-explain')).toContainText('Văn bản của chính Guido là nguồn sơ cấp')
  await expect(panel.locator('.st-refs')).toContainText('Lời kể của Sigebert')
})
