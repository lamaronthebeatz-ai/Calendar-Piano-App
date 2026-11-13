// Paged.js in headless Chromium → PDF. node scripts/essay/render.cjs <essay.html> <out.pdf>
const { chromium } = require('playwright')
const path = require('path')
;(async () => {
  const [html, pdf] = process.argv.slice(2).map((p) => path.resolve(p))
  const b = await chromium.launch()
  const p = await b.newPage()
  p.on('pageerror', (e) => console.log('ERR', e.message))
  await p.goto('file://' + html)
  await p.waitForFunction(() => window.__paged === true, null, { timeout: 180000 })
  console.log('pages', await p.locator('.pagedjs_page').count())
  await p.pdf({ path: pdf, preferCSSPageSize: true, printBackground: true })
  await b.close()
})()
