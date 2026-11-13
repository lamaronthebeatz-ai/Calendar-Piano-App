// Print the chords the engine reads, one per line: node scripts/analyze/chords.mjs <file.musicxml> [count]
import { createServer } from 'vite'
import { Window } from 'happy-dom'
import fs from 'node:fs'
globalThis.DOMParser = new Window().DOMParser
const server = await createServer({ configFile: false, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', optimizeDeps: { noDiscovery: true } })
const { fromMusicXml } = await server.ssrLoadModule('/src/features/compose/exchange.ts')
const { analyze } = await server.ssrLoadModule('/src/features/analyze/engine/index.ts')
const { chordSymbol } = await server.ssrLoadModule('/src/features/analyze/engine/symbols.ts')
await server.close()
const a = analyze(fromMusicXml(fs.readFileSync(process.argv[2], 'utf8')))
const n = +(process.argv[3] ?? 20)
for (const h of a.harmony.slice(0, n)) console.log(`${(h.chord.start / 960).toFixed(2).padStart(6)} ${chordSymbol(h.chord).padEnd(8)} ${h.reading.ru.padEnd(8)} ${h.reading.rn.padEnd(8)} ${h.key.name} fit ${h.chord.fit.toFixed(2)}`)
