import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { useBack } from '../../hooks/useBack'
import { ArrowLeftIcon } from '../../components/icons'
import { playNow, playSequence } from '../theory/audio'
import { SightSinging } from './SightSinging'
import './solfege.css'

/* ---------- names and spelling ---------- */

const LETTERS = 'CDEFGAB'
const NATURAL = [0, 2, 4, 5, 7, 9, 11]
const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
type Names = 'solfa' | 'letter'
/** A written note: letter 0–6 (C–B), alteration −1/0/1, and its sounding pitch. */
type Note = { letter: number; alter: number; midi: number }

const ACC = { '-1': '♭', '0': '', '1': '♯' } as Record<string, string>
const letterName = (l: number, a: number, names: Names) => (names === 'solfa' ? SOLFA[l] : LETTERS[l]) + ACC[a]
const noteName = (n: Note, names: Names) => letterName(n.letter, n.alter, names)

/** The twelve answer keys: white keys spelled plainly, black keys both ways. */
const KEYS = Array.from({ length: 12 }, (_, pc) => {
  const white = NATURAL.indexOf(pc)
  if (white >= 0) return { pc, black: false, spell: [[white, 0]] as [number, number][] }
  const below = NATURAL.indexOf(pc - 1)
  const above = NATURAL.indexOf(pc + 1)
  return { pc, black: true, spell: [[below, 1], [above, -1]] as [number, number][] }
})
/** Horizontal place of each key on the drawn keyboard, in white-key widths. */
const KEY_X = [0, 0.64, 1, 1.68, 2, 3, 3.61, 4, 4.66, 5, 5.7, 6]

/** Spell a sounding pitch: naturals plainly, black keys with a sharp or a flat at random. */
function spell(midi: number, prefer?: 1 | -1): Note {
  const pc = ((midi % 12) + 12) % 12
  const k = KEYS[pc]
  const [letter, alter] = k.black ? k.spell[(prefer ?? (Math.random() < 0.5 ? 1 : -1)) === 1 ? 0 : 1] : k.spell[0]
  return { letter, alter, midi }
}
/** Diatonic step count from C0 — the vertical place of a note on the staff. */
const diatonic = (n: Note) => Math.floor((n.midi - n.alter) / 12 - 1) * 7 + n.letter

/* ---------- intervals ---------- */

const INTERVALS = [
  { semis: 1, num: 2, name: '2 thứ', short: '2t' },
  { semis: 2, num: 2, name: '2 trưởng', short: '2T' },
  { semis: 3, num: 3, name: '3 thứ', short: '3t' },
  { semis: 4, num: 3, name: '3 trưởng', short: '3T' },
  { semis: 5, num: 4, name: '4 đúng', short: '4Đ' },
  { semis: 6, num: 4, name: '4 tăng / 5 giảm', short: 'Tritone' },
  { semis: 7, num: 5, name: '5 đúng', short: '5Đ' },
  { semis: 8, num: 6, name: '6 thứ', short: '6t' },
  { semis: 9, num: 6, name: '6 trưởng', short: '6T' },
  { semis: 10, num: 7, name: '7 thứ', short: '7t' },
  { semis: 11, num: 7, name: '7 trưởng', short: '7T' },
  { semis: 12, num: 8, name: '8 đúng', short: '8Đ' },
]

/** Two written notes a given number of semitones apart, spelled as that interval (the tritone as 4 tăng or 5 giảm). */
function intervalPair(semis: number, dir: 'up' | 'down', lo: number, hi: number): [Note, Note] {
  const num = semis === 6 ? (Math.random() < 0.5 ? 4 : 5) : INTERVALS[semis - 1].num
  for (let tries = 0; tries < 60; tries++) {
    const bottomMidi = lo + Math.floor(Math.random() * (hi - lo - semis + 1))
    const bottom = spell(bottomMidi)
    const steps = bottom.letter + num - 1
    const base = Math.floor((bottomMidi - bottom.alter) / 12) * 12
    const topMidi = bottomMidi + semis
    const alter = topMidi - (base + NATURAL[steps % 7] + 12 * Math.floor(steps / 7))
    if (Math.abs(alter) > 1) continue
    const top: Note = { letter: steps % 7, alter, midi: topMidi }
    return dir === 'up' ? [bottom, top] : [top, bottom]
  }
  const b = spell(lo, 1)
  return [b, spell(lo + semis, 1)]
}

/* ---------- stored settings and scores ---------- */

type Tally = Record<string, [number, number]>
type Stats = { note: Tally; interval: Tally; best: { note: number; interval: number } }
const EMPTY: Stats = { note: {}, interval: {}, best: { note: 0, interval: 0 } }

function useStored<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? { ...initial, ...JSON.parse(raw) } : initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage is optional */
    }
  }, [key, value])
  return [value, setValue] as const
}

const pct = (r: number, t: number) => (t ? Math.round((r / t) * 100) : 0)

/* ---------- the staff ---------- */

const GAP = 14
const CLEF = {
  treble: { base: 30, glyph: '𝄞', size: 82, dy: 13 },
  bass: { base: 18, glyph: '𝄢', size: 53, dy: -18 },
}
type Clef = keyof typeof CLEF
const MUSIC_FONT = "'Noto Music', 'Segoe UI Symbol', 'Apple Symbols', serif"

/** One or two whole notes on a large staff; `harmonic` stacks two notes in one column. */
function BigStaff({ clef, notes, harmonic, hidden, state }: { clef: Clef; notes: Note[]; harmonic?: boolean; hidden?: boolean; state?: 'ok' | 'bad' | null }) {
  const c = CLEF[clef]
  const bottom = 128
  const W = 300
  const yOf = (p: number) => bottom - (p * GAP) / 2
  const cols = harmonic ? [notes] : notes.map((n) => [n])
  const xs = cols.length === 1 ? [190] : [160, 236]
  return (
    <svg viewBox={`0 0 ${W} 200`} className={clsx('sf-staff', state && `is-${state}`)} role="img" aria-label={hidden ? 'Khuông nhạc (ẩn nốt)' : 'Khuông nhạc'}>
      {[0, 2, 4, 6, 8].map((p) => (
        <line key={p} x1={8} x2={W - 8} y1={yOf(p)} y2={yOf(p)} className="sf-line" />
      ))}
      <text x={18} y={bottom + c.dy} fontSize={c.size} fontFamily={MUSIC_FONT} className="sf-clef">
        {c.glyph}
      </text>
      {!hidden &&
        cols.map((col, ci) => {
          const ps = col.map((n) => diatonic(n) - c.base)
          const sorted = [...ps].sort((a, b) => a - b)
          const second = sorted.length === 2 && sorted[1] - sorted[0] === 1
          const ledgers: number[] = []
          for (let p = -2; p >= Math.min(...ps); p -= 2) ledgers.push(p)
          for (let p = 10; p <= Math.max(...ps); p += 2) ledgers.push(p)
          return (
            <g key={`${ci}-${col.map((n) => n.midi).join()}`} className="sf-col" style={{ animationDelay: `${ci * 90}ms` }}>
              {ledgers.map((p) => (
                <line key={p} x1={xs[ci] - 17} x2={xs[ci] + 17 + (second ? 18 : 0)} y1={yOf(p)} y2={yOf(p)} className="sf-line" />
              ))}
              {col.map((n, j) => {
                const p = ps[j]
                const shift = second && p === sorted[1] ? 18 : 0
                const x = xs[ci] + shift
                return (
                  <g key={j}>
                    <ellipse cx={x} cy={yOf(p)} rx={9.5} ry={6.8} transform={`rotate(-20 ${x} ${yOf(p)})`} className="sf-head" />
                    {n.alter !== 0 && (
                      <text x={xs[ci] - 30 - (col.length === 2 && j === 1 && col[0].alter && Math.abs(ps[0] - ps[1]) < 6 ? 14 : 0)} y={yOf(p) + 7} fontSize={22} className="sf-acc">
                        {ACC[n.alter]}
                      </text>
                    )}
                  </g>
                )
              })}
            </g>
          )
        })}
      {hidden && (
        <text x={196} y={yOf(4) + 16} textAnchor="middle" fontSize={46} className="sf-q">
          ?
        </text>
      )}
    </svg>
  )
}

/* ---------- shared bits ---------- */

function Seg<T extends string>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="sf-seg" role="radiogroup" aria-label={label}>
      {options.map(([v, text]) => (
        <button key={v} role="radio" aria-checked={value === v} className={clsx(value === v && 'is-on')} onClick={() => onChange(v)}>
          {text}
        </button>
      ))}
    </div>
  )
}

function Score({ right, total, streak, best, onReset }: { right: number; total: number; streak: number; best: number; onReset: () => void }) {
  return (
    <div className="sf-score">
      <div>
        <b>{right}</b>
        <span>/ {total} đúng</span>
      </div>
      <div>
        <b>{pct(right, total)}%</b>
        <span>chính xác</span>
      </div>
      <div className={clsx(streak >= 5 && 'is-hot')}>
        <b>{streak}</b>
        <span>chuỗi · kỷ lục {best}</span>
      </div>
      <button onClick={onReset} className="sf-reset" title="Xoá điểm của phần này">
        Làm lại
      </button>
    </div>
  )
}

/** Accuracy per answer as a row of small cells (warm = often missed). */
function Heat({ items }: { items: { key: string; label: string; r: number; t: number }[] }) {
  return (
    <div className="sf-heat">
      {items.map((it) => {
        const p = it.t ? it.r / it.t : -1
        return (
          <div key={it.key} className="sf-heat-cell" title={it.t ? `${it.label}: ${it.r}/${it.t}` : `${it.label}: chưa có`} style={{ ['--p' as string]: p < 0 ? 0 : p, opacity: p < 0 ? 0.35 : 1 }}>
            <span>{it.label}</span>
            <b>{it.t ? `${Math.round(p * 100)}%` : '–'}</b>
          </div>
        )
      })}
    </div>
  )
}

type Feedback = { ok: boolean; picked: number } | null

/* ---------- note trainer ---------- */

type NoteSettings = { mode: 'listen' | 'read' | 'both'; clef: Clef; accidentals: boolean; reference: boolean; auto: boolean }
const RANGE = { treble: [60, 84], bass: [40, 64] } as const

/** A random note in the clef's range, not the same pitch class as the last one. */
function makeNote(s: NoteSettings, prev?: Note): Note {
  const [lo, hi] = RANGE[s.clef]
  for (;;) {
    const midi = lo + Math.floor(Math.random() * (hi - lo + 1))
    if (!s.accidentals && KEYS[midi % 12].black) continue
    if (prev && midi % 12 === prev.midi % 12) continue
    return spell(midi)
  }
}

function NoteTrainer({ names, stats, setStats }: { names: Names; stats: Stats; setStats: (f: (s: Stats) => Stats) => void }) {
  const [s, setS] = useStored<NoteSettings>('solfege:note', { mode: 'both', clef: 'treble', accidentals: true, reference: false, auto: true })
  const make = useCallback((prev?: Note, st: NoteSettings = s) => makeNote(st, prev), [s])
  const [q, setQ] = useState<Note>(() => make())
  const [fb, setFb] = useState<Feedback>(null)
  const [streak, setStreak] = useState(0)
  const timer = useRef(0)

  const play = useCallback(
    (n: Note) => {
      if (s.mode === 'read') return
      if (s.reference) playSequence([{ at: 0, dur: 0.7, midis: [60] }, { at: 0.9, dur: 1.4, midis: [n.midi] }], {})
      else playNow([n.midi], 1.4)
    },
    [s.mode, s.reference],
  )
  const next = useCallback(() => {
    clearTimeout(timer.current)
    const n = make(q)
    setQ(n)
    setFb(null)
    play(n)
  }, [make, play, q])
  // A change of clef or of the pool of notes asks a new question.
  const update = (patch: Partial<NoteSettings>) => {
    const st = { ...s, ...patch }
    setS(st)
    if (patch.clef !== undefined || patch.accidentals !== undefined) {
      clearTimeout(timer.current)
      setQ(makeNote(st))
      setFb(null)
    }
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  const answer = (pc: number) => {
    if (fb) return
    const ok = pc === q.midi % 12
    // the pressed key sounds in the question's octave
    const near = q.midi - (q.midi % 12) + pc
    playNow([near - q.midi > 6 ? near - 12 : q.midi - near > 6 ? near + 12 : near], 0.9)
    setFb({ ok, picked: pc })
    const key = String(q.midi % 12)
    const nextStreak = ok ? streak + 1 : 0
    setStreak(nextStreak)
    setStats((st) => {
      const [r, t] = st.note[key] ?? [0, 0]
      return { ...st, note: { ...st.note, [key]: [r + (ok ? 1 : 0), t + 1] }, best: { ...st.best, note: Math.max(st.best.note, nextStreak) } }
    })
    if (ok && s.auto) timer.current = window.setTimeout(next, 1100)
  }

  // Keyboard: space replays, enter goes on.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest('input, textarea, select')) return
      if (e.key === ' ') {
        e.preventDefault()
        play(q)
      } else if (e.key === 'Enter' && fb) next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [play, q, fb, next])

  const totals = Object.values(stats.note).reduce(([r, t], [a, b]) => [r + a, t + b], [0, 0])
  const hide = s.mode === 'listen' && !fb

  return (
    <section className="sf-panel">
      <div className="sf-settings">
        <Seg label="Chế độ" value={s.mode} onChange={(mode) => update({ mode })} options={[['both', 'Nghe + nhìn'], ['listen', 'Chỉ nghe'], ['read', 'Chỉ nhìn']]} />
        <Seg label="Khoá" value={s.clef} onChange={(clef) => update({ clef })} options={[['treble', 'Khoá Sol'], ['bass', 'Khoá Fa']]} />
        <label className="sf-check"><input type="checkbox" checked={s.accidentals} onChange={(e) => update({ accidentals: e.target.checked })} /> Có phím đen</label>
        {s.mode !== 'read' && <label className="sf-check"><input type="checkbox" checked={s.reference} onChange={(e) => setS({ ...s, reference: e.target.checked })} /> Nghe Đô làm mốc</label>}
        <label className="sf-check"><input type="checkbox" checked={s.auto} onChange={(e) => setS({ ...s, auto: e.target.checked })} /> Tự sang câu mới</label>
      </div>

      <div className={clsx('sf-stage', fb && (fb.ok ? 'is-ok' : 'is-bad'))}>
        <BigStaff clef={s.clef} notes={[q]} hidden={hide} state={fb ? (fb.ok ? 'ok' : 'bad') : null} />
        <div className="sf-verdict" aria-live="polite">
          {fb ? (
            <>
              <span className="sf-verdict-mark">{fb.ok ? 'Đúng' : 'Chưa đúng'}</span>
              <span className="sf-verdict-name">{noteName(q, names)}</span>
            </>
          ) : (
            <span className="sf-verdict-hint">{s.mode === 'read' ? 'Nốt nào trên khuông?' : s.mode === 'listen' ? 'Nghe và đoán nốt' : 'Nhìn, nghe, rồi chọn nốt'}</span>
          )}
        </div>
        <div className="sf-actions">
          {s.mode !== 'read' && (
            <button className="sf-btn" onClick={() => play(q)}>
              ▶ Nghe lại <kbd>Space</kbd>
            </button>
          )}
          <button className={clsx('sf-btn', fb && 'sf-btn-main')} onClick={next}>
            {fb ? 'Câu tiếp' : 'Bỏ qua'} → {fb && <kbd>Enter</kbd>}
          </button>
        </div>
      </div>

      <div className="sf-keys" role="group" aria-label="Chọn nốt">
        {KEYS.map((k) => {
          const isAnswer = fb && k.pc === q.midi % 12
          const isWrong = fb && !fb.ok && k.pc === fb.picked
          return (
            <button
              key={k.pc}
              onClick={() => answer(k.pc)}
              className={clsx('sf-key', k.black ? 'is-black' : 'is-white', isAnswer && 'is-answer', isWrong && 'is-wrong')}
              style={{ ['--x' as string]: KEY_X[k.pc] }}
              aria-label={k.spell.map(([l, a]) => letterName(l, a, names)).join(' / ')}
            >
              {k.spell.map(([l, a]) => (
                <span key={a}>{letterName(l, a, names)}</span>
              ))}
            </button>
          )
        })}
      </div>

      <Score right={totals[0]} total={totals[1]} streak={streak} best={stats.best.note} onReset={() => setStats((st) => ({ ...st, note: {}, best: { ...st.best, note: 0 } }))} />
      <Heat items={KEYS.map((k) => ({ key: String(k.pc), label: letterName(k.spell[0][0], k.spell[0][1], names), r: stats.note[k.pc]?.[0] ?? 0, t: stats.note[k.pc]?.[1] ?? 0 }))} />
    </section>
  )
}

/* ---------- interval trainer ---------- */

type IntervalSettings = { mode: 'listen' | 'read' | 'both'; kind: 'up' | 'down' | 'harmonic'; pool: number[]; auto: boolean }
const poolOf = (s: IntervalSettings) => (s.pool.length ? s.pool : [7])

/** A random interval from the pool (not the last one again), as two notes between A3 and A5. */
function makeInterval(s: IntervalSettings, prev?: number) {
  const pool = poolOf(s)
  let semis = pool[Math.floor(Math.random() * pool.length)]
  if (pool.length > 1) while (semis === prev) semis = pool[Math.floor(Math.random() * pool.length)]
  return { semis, notes: intervalPair(semis, s.kind === 'down' ? 'down' : 'up', 57, 81) }
}

function IntervalTrainer({ names, stats, setStats }: { names: Names; stats: Stats; setStats: (f: (s: Stats) => Stats) => void }) {
  const [s, setS] = useStored<IntervalSettings>('solfege:interval', { mode: 'both', kind: 'up', pool: INTERVALS.map((i) => i.semis), auto: true })
  const make = useCallback((prev?: number, st: IntervalSettings = s) => makeInterval(st, prev), [s])
  const [q, setQ] = useState(() => make())
  const [fb, setFb] = useState<Feedback>(null)
  const [streak, setStreak] = useState(0)
  const timer = useRef(0)

  const play = useCallback(
    (x: typeof q) => {
      if (s.mode === 'read') return
      const [a, b] = x.notes
      if (s.kind === 'harmonic') playNow([a.midi, b.midi], 1.6)
      else playSequence([{ at: 0, dur: 0.8, midis: [a.midi] }, { at: 0.85, dur: 1.4, midis: [b.midi] }], {})
    },
    [s.mode, s.kind],
  )
  const next = useCallback(() => {
    clearTimeout(timer.current)
    const n = make(q.semis)
    setQ(n)
    setFb(null)
    play(n)
  }, [make, play, q.semis])
  // A change of direction or of the pool asks a new question.
  const update = (patch: Partial<IntervalSettings>) => {
    const st = { ...s, ...patch }
    setS(st)
    if (patch.kind !== undefined || patch.pool !== undefined) {
      clearTimeout(timer.current)
      setQ(makeInterval(st))
      setFb(null)
    }
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  const answer = (semis: number) => {
    if (fb) return
    const ok = semis === q.semis
    setFb({ ok, picked: semis })
    if (!ok) play(q)
    const key = String(q.semis)
    const nextStreak = ok ? streak + 1 : 0
    setStreak(nextStreak)
    setStats((st) => {
      const [r, t] = st.interval[key] ?? [0, 0]
      return { ...st, interval: { ...st.interval, [key]: [r + (ok ? 1 : 0), t + 1] }, best: { ...st.best, interval: Math.max(st.best.interval, nextStreak) } }
    })
    if (ok && s.auto) timer.current = window.setTimeout(next, 1300)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest('input, textarea, select')) return
      if (e.key === ' ') {
        e.preventDefault()
        play(q)
      } else if (e.key === 'Enter' && fb) next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [play, q, fb, next])

  const togglePool = (semis: number) => update({ pool: s.pool.includes(semis) ? s.pool.filter((x) => x !== semis) : [...s.pool, semis].sort((a, b) => a - b) })
  const totals = Object.values(stats.interval).reduce(([r, t], [a, b]) => [r + a, t + b], [0, 0])
  const hide = s.mode === 'listen' && !fb
  const info = INTERVALS[q.semis - 1]
  const spelled = q.semis === 6 ? (Math.abs(diatonic(q.notes[1]) - diatonic(q.notes[0])) === 3 ? '4 tăng' : '5 giảm') : info.name
  // keep clef simple: low pairs read in bass clef
  const clef: Clef = Math.max(q.notes[0].midi, q.notes[1].midi) < 60 ? 'bass' : 'treble'

  return (
    <section className="sf-panel">
      <div className="sf-settings">
        <Seg label="Chế độ" value={s.mode} onChange={(mode) => update({ mode })} options={[['both', 'Nghe + nhìn'], ['listen', 'Chỉ nghe'], ['read', 'Chỉ nhìn']]} />
        <Seg label="Kiểu quãng" value={s.kind} onChange={(kind) => update({ kind })} options={[['up', 'Đi lên'], ['down', 'Đi xuống'], ['harmonic', 'Hoà âm']]} />
        <label className="sf-check"><input type="checkbox" checked={s.auto} onChange={(e) => setS({ ...s, auto: e.target.checked })} /> Tự sang câu mới</label>
      </div>
      <div className="sf-pool" aria-label="Các quãng được hỏi">
        <span>Hỏi các quãng:</span>
        {INTERVALS.map((i) => (
          <button key={i.semis} className={clsx('sf-chip', s.pool.includes(i.semis) && 'is-on')} onClick={() => togglePool(i.semis)}>
            {i.short}
          </button>
        ))}
      </div>

      <div className={clsx('sf-stage', fb && (fb.ok ? 'is-ok' : 'is-bad'))}>
        <BigStaff clef={clef} notes={q.notes} harmonic={s.kind === 'harmonic'} hidden={hide} state={fb ? (fb.ok ? 'ok' : 'bad') : null} />
        <div className="sf-verdict" aria-live="polite">
          {fb ? (
            <>
              <span className="sf-verdict-mark">{fb.ok ? 'Đúng' : 'Chưa đúng'}</span>
              <span className="sf-verdict-name">Quãng {spelled}</span>
              <span className="sf-verdict-sub">
                {noteName(q.notes[0], names)} → {noteName(q.notes[1], names)} · {q.semis} nửa cung
              </span>
            </>
          ) : (
            <span className="sf-verdict-hint">{s.mode === 'read' ? 'Hai nốt cách nhau quãng mấy?' : 'Nghe hai nốt và đoán quãng'}</span>
          )}
        </div>
        <div className="sf-actions">
          {s.mode !== 'read' && (
            <button className="sf-btn" onClick={() => play(q)}>
              ▶ Nghe lại <kbd>Space</kbd>
            </button>
          )}
          <button className={clsx('sf-btn', fb && 'sf-btn-main')} onClick={next}>
            {fb ? 'Câu tiếp' : 'Bỏ qua'} → {fb && <kbd>Enter</kbd>}
          </button>
        </div>
      </div>

      <div className="sf-intervals" role="group" aria-label="Chọn quãng">
        {INTERVALS.map((i) => (
          <button
            key={i.semis}
            disabled={!poolOf(s).includes(i.semis)}
            onClick={() => answer(i.semis)}
            className={clsx('sf-ivl', fb && i.semis === q.semis && 'is-answer', fb && !fb.ok && i.semis === fb.picked && 'is-wrong')}
          >
            <b>{i.name}</b>
            <span>{i.semis} nửa cung</span>
          </button>
        ))}
      </div>

      <Score right={totals[0]} total={totals[1]} streak={streak} best={stats.best.interval} onReset={() => setStats((st) => ({ ...st, interval: {}, best: { ...st.best, interval: 0 } }))} />
      <Heat items={INTERVALS.map((i) => ({ key: String(i.semis), label: i.short, r: stats.interval[i.semis]?.[0] ?? 0, t: stats.interval[i.semis]?.[1] ?? 0 }))} />
    </section>
  )
}

/* ---------- page ---------- */

/** Solfège: guess a note (twelve keys) or the interval between two notes, by ear, by eye, or both. */
export function SolfegePage() {
  const back = useBack('/theory')
  const [tab, setTab] = useStored<{ v: 'note' | 'interval' | 'sing' }>('solfege:tab', { v: 'note' })
  const [names, setNames] = useStored<{ v: Names }>('solfege:names', { v: 'solfa' })
  const [stats, setStatsRaw] = useStored<Stats>('solfege:stats', EMPTY)
  const setStats = useCallback((f: (s: Stats) => Stats) => setStatsRaw((s) => f({ ...EMPTY, ...s })), [setStatsRaw])
  const n = names.v
  const intro = useMemo(
    () =>
      tab.v === 'note'
        ? 'Một nốt ngẫu nhiên hiện trên khuông và vang lên — chọn đúng phím trong 12 phím. Phím đen ghi cả hai tên (Đô♯ / Rê♭).'
        : tab.v === 'interval'
          ? 'Hai nốt ngẫu nhiên — đi lên, đi xuống hoặc vang cùng lúc. Đoán khoảng cách giữa chúng, từ quãng 2 thứ tới quãng 8.'
          : '540 bài đọc cromatic nhảy quãng, không giọng — ngang các bài xướng âm bậc đại học. Đọc, rồi bấm nghe để biết mình đúng chưa.',
    [tab.v],
  )

  return (
    <ScrollArea className="relative h-full overflow-x-hidden overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-2 px-4 lg:px-8">
          <button onClick={back} aria-label="Quay lại" className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]">
            <ArrowLeftIcon width={18} height={18} />
          </button>
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">Solfège</h1>
          <Seg label="Tên nốt" value={n} onChange={(v) => setNames({ v })} options={[['solfa', 'Đô Rê Mi'], ['letter', 'C D E']]} />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
        <header className="sf-hero">
          <p className="sf-eyebrow">Luyện tai · Đọc nốt</p>
          <h2>Solfège</h2>
          <p>{intro}</p>
          <div className="sf-tabs" role="tablist">
            <button role="tab" aria-selected={tab.v === 'note'} className={clsx(tab.v === 'note' && 'is-on')} onClick={() => setTab({ v: 'note' })}>
              <span aria-hidden>♩</span> Đoán nốt
            </button>
            <button role="tab" aria-selected={tab.v === 'interval'} className={clsx(tab.v === 'interval' && 'is-on')} onClick={() => setTab({ v: 'interval' })}>
              <span aria-hidden>♫</span> Đoán quãng
            </button>
            <button role="tab" aria-selected={tab.v === 'sing'} className={clsx(tab.v === 'sing' && 'is-on')} onClick={() => setTab({ v: 'sing' })}>
              <span aria-hidden>𝄞</span> Xướng âm
            </button>
          </div>
        </header>
        {tab.v === 'note' ? <NoteTrainer key="note" names={n} stats={stats} setStats={setStats} /> : tab.v === 'interval' ? <IntervalTrainer key="interval" names={n} stats={stats} setStats={setStats} /> : <SightSinging key="sing" />}
        <p className="sf-foot">
          {tab.v !== 'sing' && <>Phím tắt: <kbd>Space</kbd> nghe lại · <kbd>Enter</kbd> câu tiếp. </>}Điểm và tiến độ lưu trên máy này. Âm thanh tổng hợp trong trình duyệt — trên điện thoại, tắt chế độ im lặng để nghe.
        </p>
      </div>
    </ScrollArea>
  )
}
