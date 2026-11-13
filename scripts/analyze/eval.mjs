// Accuracy of the analysis engine against expert Roman-numeral analyses (music21 corpus: Bach chorales by
// Tymoczko et al.). Ground truth is made by scripts/analyze/export_gt.py into a folder outside the repo.
// node scripts/analyze/eval.mjs <folder with gt.json> [--verbose] [--opts '{"changeCost":0.3}']
import { createServer } from 'vite'
import { Window } from 'happy-dom'
import fs from 'node:fs'
import path from 'node:path'

const dir = process.argv[2]
const verbose = process.argv.includes('--verbose')
const only = process.argv.includes("--sec") ? "SEC" : process.argv.includes("--key") ? "KEY" : process.argv.includes("--chord") ? "CH" : ""
const optArg = process.argv.indexOf('--opts')
const opts = optArg > 0 ? JSON.parse(process.argv[optArg + 1]) : {}
globalThis.DOMParser = new Window().DOMParser
const server = await createServer({ configFile: false, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', optimizeDeps: { noDiscovery: true } })
const { fromMusicXml } = await server.ssrLoadModule('/src/features/compose/exchange.ts')
const { analyze } = await server.ssrLoadModule('/src/features/analyze/engine/index.ts')
await server.close()

const gt = JSON.parse(fs.readFileSync(path.join(dir, 'gt.json'), 'utf8'))
const tot = { pts: 0, root: 0, pcs: 0, key: 0, inv: 0, func: 0, secGt: 0, secHit: 0 }
const confusion = new Map()
for (const piece of gt) {
  const score = fromMusicXml(fs.readFileSync(path.join(dir, path.basename(piece.score)), 'utf8'))
  const a = analyze(score, opts)
  const bars = a.score.bars
  // a score that is not the piece analysed (the corpus has the whole cantata movement): skip
  if (bars.length > 2 * Math.max(...piece.rn.map((r) => r.m)) + 4) { if (verbose) console.log(`  (${piece.name}: score has ${bars.length} bars, analysis ${Math.max(...piece.rn.map((r) => r.m))} — skipped)`); continue }
  const den = Number(piece.time.split('/')[1])
  const beatT = 960 / den
  // some corpus scores are transposed against the edition that was analysed, or number their bars differently:
  // find the transposition and bar offset (±1) that line the roots up best
  const place = (off) => piece.rn.map((r) => ({ ...r, t: bars[r.m - piece.first + off] ? bars[r.m - piece.first + off].start + (r.beat - 1) * beatT : NaN })).filter((r) => !isNaN(r.t))
  const at = (t) => a.harmony.find((h) => h.chord.start <= t && h.chord.end > t)
  let best = { hits: -1, off: 0, shift: 0 }
  for (const off of [0, -1, 1]) {
    const rs = place(off)
    for (let d = 0; d < 12; d++) {
      let hits = 0
      for (const r of rs) { const h = at(r.t); if (h && h.chord.root === (r.rootPc + d) % 12) hits++ }
      if (hits > best.hits + (off || d ? 3 : 0)) best = { hits, off, shift: d }
    }
  }
  const rows = place(best.off)
  const shift = best.shift
  if (shift) for (const r of rows) { r.rootPc = (r.rootPc + shift) % 12; r.bassPc = (r.bassPc + shift) % 12; r.tonicPc = (r.tonicPc + shift) % 12; r.pcs = r.pcs.map((x) => (x + shift) % 12).sort((x, y) => x - y) }
  if ((shift || best.off) && verbose) console.log(`  (${piece.name}: aligned by ${shift} semitones, ${best.off} bars)`)
  const p = { pts: 0, root: 0, pcs: 0, key: 0, inv: 0, func: 0 }
  for (let t = rows[0].t; t < a.score.end; t += 120) {
    let g = null
    for (const r of rows) if (r.t <= t) g = r
    const c = a.harmony.find((h) => h.chord.start <= t && h.chord.end > t)
    if (!g || !c) continue
    p.pts++
    const rootOk = c.chord.root === g.rootPc
    const ours = new Set(c.pcs)
    const pcsOk = ours.size === g.pcs.length && g.pcs.every((x) => ours.has(x))
    const keyOk = (c.key.tonicPc === g.tonicPc && c.key.minor === g.minor)
    const invOk = c.chord.inversion === g.inversion
    if (rootOk) p.root++
    if (pcsOk) p.pcs++
    if (keyOk) p.key++
    if (rootOk && invOk) p.inv++
    if (rootOk && keyOk && invOk) p.func++
    if (g.secondary) { tot.secGt++; if (c.reading.of !== undefined) tot.secHit++ }
    if (!keyOk && verbose) { const k = `KEY ${g.key} → ${c.key.name}`; confusion.set(k, (confusion.get(k) ?? 0) + 1) }
    if (g.secondary && c.reading.of === undefined && verbose) { const k = `SEC ${g.figure}(${g.key}) → ${c.reading.rn}(${c.key.name})`; confusion.set(k, (confusion.get(k) ?? 0) + 1) }
    if (!pcsOk && verbose) {
      const k = `CH ${g.figure}(${g.key}) → ${c.reading.rn}(${c.key.name})`
      confusion.set(k, (confusion.get(k) ?? 0) + 1)
    }
  }
  for (const k of Object.keys(p)) tot[k] += p[k]
  if (verbose) console.log(`${piece.name.padEnd(20)} root ${(100 * p.root / p.pts).toFixed(0)}% chord ${(100 * p.pcs / p.pts).toFixed(0)}% key ${(100 * p.key / p.pts).toFixed(0)}% full ${(100 * p.func / p.pts).toFixed(0)}%`)
}
const pct = (x) => (100 * x / tot.pts).toFixed(1) + '%'
console.log(`points ${tot.pts} | root ${pct(tot.root)} | chord (exact tones) ${pct(tot.pcs)} | key ${pct(tot.key)} | root+inversion ${pct(tot.inv)} | root+inv+key ${pct(tot.func)} | applied found ${tot.secHit}/${tot.secGt}`)
if (verbose) console.log([...confusion].filter(([k]) => !only || k.startsWith(only)).sort((a, b) => b[1] - a[1]).slice(0, 30).map(([k, v]) => `${v}\t${k}`).join('\n'))
