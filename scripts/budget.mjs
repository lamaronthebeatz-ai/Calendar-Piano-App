/**
 * Size budget, run after `vite build`: fails when what every visit pays for grows past a line. The limits leave
 * room for normal growth; crossing one means something heavy slipped into the startup path (see docs/roadmap.md,
 * stage 1). Sizes are gzip, as served.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'

const DIST = 'dist'
const KB = 1024
const gz = (file) => gzipSync(readFileSync(join(DIST, file))).length
const html = readFileSync(join(DIST, 'index.html'), 'utf8')

// JS loaded before the first screen: the entry script and everything index.html preloads with it
const startup = [...html.matchAll(/(?:src|href)="\.?\/?(assets\/[^"]+\.js)"/g)].map((m) => m[1])
const index = readdirSync(join(DIST, 'content')).find((f) => /^index\.\w+\.json$/.test(f))
const shards = readdirSync(join(DIST, 'content/search'))
// precache: every file the service worker lists
const sw = readFileSync(join(DIST, 'sw.js'), 'utf8')
const precached = [...new Set([...sw.matchAll(/url:"([^"]+)"/g)].map((m) => m[1]))]

const rows = [
  ['JS khởi động (gzip)', startup.reduce((n, f) => n + gz(f), 0), 600 * KB],
  ['Chỉ mục thư viện (gzip)', gz(`content/${index}`), 600 * KB],
  ['Mảnh tìm kiếm lớn nhất (gzip)', Math.max(...shards.map((f) => gz(`content/search/${f}`))), 80 * KB],
  ['Precache (thô)', precached.reduce((n, f) => n + statSync(join(DIST, f)).size, 0), 15 * KB * KB],
]

let failed = false
for (const [label, size, limit] of rows) {
  const over = size > limit
  failed ||= over
  console.log(`${over ? '✗' : '✓'} ${label}: ${(size / KB).toFixed(0)} KB / ${(limit / KB).toFixed(0)} KB`)
}
if (!startup.length || !index || !precached.length) {
  console.error('Không đọc được kết quả build (index.html, content/index, sw.js)')
  failed = true
}
process.exit(failed ? 1 : 0)
