import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('đồ thị: nhà soạn nhạc → tác phẩm → tác giả, thể loại; phương pháp phân tích → khái niệm nền', async ({ page }) => {
  await page.goto('/#/graph?id=a:wolfgang-amadeus-mozart')
  const works = page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Sáng tác/ }) })
  await expect(works).toBeVisible({ timeout: 20_000 })
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Thuộc thời kỳ/ }) })).toContainText('Cổ điển')
  // a person's page links back and forth with the articles that mention them (from the article's own text)
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Được nhắc trong bài/ }) })).toBeVisible()

  await page.goto('/#/graph?id=w:Q991701')
  await expect(page.locator('.kg-dl')).toContainText('Wikidata', { timeout: 20_000 })
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Tác giả/ }) })).toContainText('Mozart')
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Thể loại/ }) }).locator('.kg-prov')).toHaveText('Máy tính')

  await page.goto('/#/graph?id=m:giong')
  await expect(page.locator('.kg-dl')).toContainText('Krumhansl')
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Khái niệm nền/ }) })).toContainText(/Chuyển giọng/i)
})

test('nguồn của tôi → luận điểm → bằng chứng có trang; còn sau khi tải lại', async ({ page }) => {
  await page.goto('/#/sources/cua-toi')
  await page.getByRole('button', { name: '+ Thêm tài liệu' }).click()
  const form = page.getByRole('form', { name: 'Tài liệu' })
  await form.getByLabel('Tên tài liệu *').fill('Tài liệu kiểm thử')
  await form.getByLabel('ISBN').fill('978-0-00-000000-1')
  await expect(form).toContainText('số kiểm không khớp')
  await expect(form.getByRole('button', { name: 'Lưu' })).toBeDisabled()
  await form.getByLabel('ISBN').fill('')
  // marked as checked without saying where: refused
  await form.getByLabel('Kiểm chứng').selectOption('record')
  await expect(form).toContainText('ghi đối chiếu ở đâu')
  await form.getByLabel('Đối chiếu ở đâu').fill('danh mục thư viện (kiểm thử)')
  await form.getByRole('button', { name: 'Lưu' }).click()
  const card = page.getByTestId('my-source')
  await expect(card).toContainText('Tài liệu kiểm thử')
  await expect(card).toContainText('Đã đối chiếu thư mục')
  await card.getByLabel('Trang').fill('12')
  await card.getByLabel('Câu trích').fill('một câu trích ngắn')
  await card.getByRole('button', { name: 'Thêm' }).click()
  await expect(card).toContainText('tr. 12')

  await page.goto('/#/research')
  await page.getByPlaceholder(/Tên đề tài mới/).fill('Đề tài kiểm thử')
  await page.getByRole('button', { name: 'Tạo' }).click()
  await page.getByRole('button', { name: /^Luận điểm/ }).click()
  await page.getByLabel('Luận điểm mới').fill('Một luận điểm cần nguồn')
  await page.getByLabel(/Bàn về/).fill('hình thức sonata')
  await page.getByRole('button', { name: 'Thêm luận điểm' }).click()
  const claim = page.getByTestId('claim')
  await expect(claim).toContainText('chưa có nguồn')
  await expect(page.getByTestId('claims-summary')).toContainText('1 luận điểm chưa có nguồn')

  await claim.getByRole('button', { name: '+ Bằng chứng' }).click()
  const ev = claim.getByRole('form', { name: 'Bằng chứng' })
  await ev.getByLabel('Trang', { exact: true }).fill('12')
  await ev.getByLabel(/Câu trích/).fill('một câu trích ngắn')
  await ev.getByRole('button', { name: 'Lưu bằng chứng' }).click()
  await expect(claim).toContainText('Tài liệu kiểm thử')
  await expect(claim).toContainText('tr. 12')
  await expect(page.getByTestId('claims-summary')).toContainText('có bằng chứng ủng hộ')

  // IndexedDB keeps it all
  await page.reload()
  await page.getByRole('button', { name: /^Luận điểm/ }).click()
  await expect(page.getByTestId('claim')).toContainText('Tài liệu kiểm thử')

  // the claim on the graph: its project, what it is about, its evidence
  await page.getByTestId('claim').getByRole('link', { name: 'Đồ thị luận điểm' }).click()
  await expect(page.locator('.kg-chain')).toContainText('Một luận điểm cần nguồn')
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Bàn về/ }) })).toContainText(/sonata/i)
  await expect(page.locator('.kg-group', { has: page.getByRole('heading', { name: /^Thuộc đề tài/ }) })).toContainText('Đề tài kiểm thử')
})

test('kho mã hoá mở: tài liệu trong IndexedDB là bản mã, tải lại vẫn đọc được', async ({ page }) => {
  // a vault key as the lock screen would leave it in the session (random, not derived from any code)
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('app:vault')) sessionStorage.setItem('app:vault', btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))))
  })
  await page.goto('/#/sources/cua-toi')
  await page.getByRole('button', { name: '+ Thêm tài liệu' }).click()
  const form = page.getByRole('form', { name: 'Tài liệu' })
  await form.getByLabel('Tên tài liệu *').fill('Tài liệu niêm phong')
  await form.getByRole('button', { name: 'Lưu' }).click()
  await expect(page.getByTestId('my-source')).toContainText('Tài liệu niêm phong')
  const rows = () =>
    page.evaluate(
      () =>
        new Promise<string[]>((ok) => {
          const r = indexedDB.open('musicology-knowledge')
          r.onsuccess = () => {
            const g = r.result.transaction('rows').objectStore('rows').getAll()
            g.onsuccess = () => ok((g.result as { data: string }[]).map((x) => x.data.slice(0, 5)))
          }
        }),
    )
  await expect.poll(rows).toEqual(['enc1:'])
  await page.reload()
  await expect(page.getByTestId('my-source')).toContainText('Tài liệu niêm phong')
})
