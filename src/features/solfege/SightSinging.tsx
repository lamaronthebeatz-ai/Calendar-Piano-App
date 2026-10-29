import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { playNow, playSequence, type Step } from '../theory/audio'
import { loadSheets, sheetUrl, type SheetSystem } from '../theory/sheets'

/**
 * Chromatic sight-singing: exercises written by scripts/solfege/gen.py (engraved in music/ex/sightsing.txt, pitches
 * in sightsing.json). Read the page, sing, then press play to check — or, for absolute pitch, sing the first note
 * from memory before asking for it.
 */
type Melody = { id: string; notes: [number, number, number][] }
type Groups = { id: string; groups: [number, number][][] }
type Data = { g: Record<string, Groups[]>; m: Record<string, Melody[]> }
type Kind = 'm' | 'g'

let data: Promise<Data> | null = null
const loadData = () => (data ??= import('./sightsing.json').then((m) => m.default as unknown as Data))

const LEVEL_TEXT = {
  1: 'Quãng 2 – quãng 6, tầm Rê 4 – Fa 5',
  2: 'Thêm tritone, quãng 7; tầm Đô 4 – Sol 5',
  3: 'Thêm quãng 8, quãng 9 thứ; tầm Si 3 – La 5',
} as const
const TEMPI = { slow: 60, mid: 76, fast: 96 } as const

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}
function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage is optional */
  }
}

type Prefs = { kind: Kind; level: 1 | 2 | 3; tempo: keyof typeof TEMPI; pos: Record<string, number> }

export function SightSinging() {
  const [prefs, setPrefsRaw] = useState<Prefs>(() => ({ kind: 'm', level: 1, tempo: 'mid', pos: {}, ...load<Partial<Prefs>>('solfege:sing', {}) }))
  const setPrefs = (p: Partial<Prefs>) =>
    setPrefsRaw((old) => {
      const next = { ...old, ...p }
      save('solfege:sing', next)
      return next
    })
  const [done, setDoneRaw] = useState<string[]>(() => load('solfege:sung', []))
  const [all, setAll] = useState<Data>()
  const [sheets, setSheets] = useState<Record<string, SheetSystem[]>>()
  const [playing, setPlaying] = useState<string | null>(null)
  const stop = useRef<() => void>(() => {})

  useEffect(() => {
    let live = true
    Promise.all([loadData(), loadSheets()]).then(([d, m]) => {
      if (!live) return
      setAll(d)
      setSheets(m.ex)
    })
    return () => {
      live = false
      stop.current()
    }
  }, [])

  const listKey = `${prefs.kind}${prefs.level}`
  const list = (all?.[prefs.kind][prefs.level] ?? []) as (Melody | Groups)[]
  const index = Math.min(prefs.pos[listKey] ?? 0, Math.max(0, list.length - 1))
  const ex = list[index]
  const systems = ex && sheets?.[ex.id]
  const isDone = ex && done.includes(ex.id)

  const go = (i: number) => {
    stop.current()
    setPlaying(null)
    setPrefs({ pos: { ...prefs.pos, [listKey]: (i + list.length) % list.length } })
  }
  const toggleDone = () => {
    if (!ex) return
    const next = isDone ? done.filter((x) => x !== ex.id) : [...done, ex.id]
    setDoneRaw(next)
    save('solfege:sung', next)
  }

  /** Steps for the whole exercise; groups may be played backwards (each group read from its last note). */
  const steps = (backwards = false): Step[] => {
    if (!ex) return []
    const e = 30 / TEMPI[prefs.tempo]
    const out: Step[] = []
    let t = 0
    if ('notes' in ex)
      for (const [m, d, ferm] of ex.notes) {
        const len = d * e * (ferm ? 2 : 1)
        out.push({ at: t, dur: len * 0.92, midis: [m] })
        t += len + (ferm ? e : 0)
      }
    else
      for (const g of ex.groups) {
        const seq = backwards ? [...g].reverse() : g
        for (const [m, d] of seq) {
          out.push({ at: t, dur: d * e * 0.92, midis: [m] })
          t += d * e
        }
        t += 2 * e
      }
    return out
  }
  const run = (name: string, s: Step[]) => {
    if (playing === name) {
      stop.current()
      setPlaying(null)
      return
    }
    setPlaying(name)
    stop.current = playSequence(s, { onEnd: () => setPlaying((p) => (p === name ? null : p)) })
  }
  const firstNote = () => {
    if (!ex) return
    stop.current()
    setPlaying(null)
    playNow(['notes' in ex ? ex.notes[0][0] : ex.groups[0][0][0]], 1.6)
  }

  const doneHere = list.filter((x) => done.includes(x.id)).length

  return (
    <section className="sf-panel">
      <div className="sf-settings">
        <div className="sf-seg" role="radiogroup" aria-label="Dạng bài">
          {(
            [
              ['m', 'Bài xướng âm'],
              ['g', 'Nhóm 5 nốt'],
            ] as const
          ).map(([v, t]) => (
            <button key={v} role="radio" aria-checked={prefs.kind === v} className={clsx(prefs.kind === v && 'is-on')} onClick={() => (stop.current(), setPlaying(null), setPrefs({ kind: v }))}>
              {t}
            </button>
          ))}
        </div>
        <div className="sf-seg" role="radiogroup" aria-label="Cấp độ">
          {([1, 2, 3] as const).map((l) => (
            <button key={l} role="radio" aria-checked={prefs.level === l} className={clsx(prefs.level === l && 'is-on')} onClick={() => (stop.current(), setPlaying(null), setPrefs({ level: l }))}>
              Cấp {l}
            </button>
          ))}
        </div>
        <div className="sf-seg" role="radiogroup" aria-label="Nhịp độ">
          {(
            [
              ['slow', '♩ = 60'],
              ['mid', '76'],
              ['fast', '96'],
            ] as const
          ).map(([v, t]) => (
            <button key={v} role="radio" aria-checked={prefs.tempo === v} className={clsx(prefs.tempo === v && 'is-on')} onClick={() => setPrefs({ tempo: v })}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <p className="sf-level-note">
        {LEVEL_TEXT[prefs.level]} · {prefs.kind === 'g' ? 'mỗi nhóm đọc hai lần: xuôi, rồi ngược' : 'câu kết bằng dấu ngân'}
      </p>

      <div className={clsx('sf-stage sf-sing', isDone && 'is-ok')}>
        <div className="sf-sing-head">
          <button className="sf-nav" onClick={() => go(index - 1)} aria-label="Bài trước">
            ←
          </button>
          <div className="sf-sing-title">
            <b>
              Bài {index + 1}
              <span> / {list.length || '…'}</span>
            </b>
            <span>
              {prefs.kind === 'g' ? 'Nhóm 5 nốt' : 'Xướng âm cromatic'} · Cấp {prefs.level} · đã đọc {doneHere}/{list.length}
            </span>
          </div>
          <button className="sf-nav" onClick={() => go(index + 1)} aria-label="Bài sau">
            →
          </button>
        </div>
        <div className="sf-sheet">
          {systems
            ? systems.map(([f, w, h]) => <img key={f} src={sheetUrl('ex', f)} width={w} height={h} alt={`Bài ${index + 1}`} className="sf-sheet-img" />)
            : <div className="sf-sheet-wait">Đang tải bài…</div>}
        </div>
        <div className="sf-actions sf-sing-actions">
          <button className="sf-btn" onClick={firstNote} title="Hát nốt đầu trước, rồi bấm để kiểm tra">
            ♪ Nốt đầu
          </button>
          <button className={clsx('sf-btn', playing === 'fwd' && 'sf-btn-main')} onClick={() => run('fwd', steps())}>
            {playing === 'fwd' ? '■ Dừng' : prefs.kind === 'g' ? '▶ Nghe xuôi' : '▶ Nghe cả bài'}
          </button>
          {prefs.kind === 'g' && (
            <button className={clsx('sf-btn', playing === 'back' && 'sf-btn-main')} onClick={() => run('back', steps(true))}>
              {playing === 'back' ? '■ Dừng' : '◀ Nghe ngược'}
            </button>
          )}
          <button className="sf-btn" onClick={() => playNow([69], 1.4)} title="Nốt La 4 (440 Hz) làm mốc (bỏ qua nếu luyện cao độ tuyệt đối)">
            La mốc
          </button>
        </div>
        <div className="sf-actions">
          <button className={clsx('sf-btn', isDone && 'sf-btn-done')} onClick={toggleDone}>
            {isDone ? '✓ Đã đọc' : 'Đánh dấu đã đọc'}
          </button>
          <button className="sf-btn" onClick={() => go(Math.floor(Math.random() * list.length))}>
            Bài ngẫu nhiên
          </button>
        </div>
        <PitchKeyboard />
      </div>

      <div className="sf-howto">
        <h3>Cách luyện</h3>
        <ol>
          <li>
            <b>Cao độ tuyệt đối:</b> không nghe nốt mốc. Nhìn nốt đầu, hát nó từ trí nhớ, rồi bấm <i>Nốt đầu</i> để so. Lệch thì hát lại cho tới khi khớp mới đọc tiếp.
          </li>
          <li>Đọc tên nốt đúng cao độ, đều nhịp, không dừng giữa câu; nghỉ ở dấu ngân.</li>
          <li>Đọc xong cả bài mới bấm <i>Nghe</i> để kiểm tra; chỗ sai đánh dấu bằng bút chì rồi đọc lại riêng đoạn đó.</li>
          <li>Với nhóm 5 nốt: đọc xuôi, rồi đọc ngược từ nốt cuối — <i>Nghe ngược</i> để kiểm tra lượt thứ hai.</li>
          <li>Giọng nam đọc thấp một quãng 8 so với khuông khoá Sol — tên nốt vẫn giữ nguyên.</li>
        </ol>
        <p>
          Các bài do chương trình soạn theo luật: không lặp lại một nốt trong sáu nốt gần nhất (để đi qua đủ 12 nốt), quãng không vượt giới hạn của cấp, hai bước nhảy cùng chiều không quá quãng 8, mỗi quãng ghi bằng tên đơn giản nhất của nó.
        </p>
      </div>
    </section>
  )
}

/* ---------- a keyboard to check a pitch while reading ---------- */

const KB_LO = 57 // A3
const KB_HI = 83 // B5 — the exercises stay within Si 3 – La 5
const SOLFA = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
const WHITE_PC = [0, 2, 4, 5, 7, 9, 11]
const KB_WHITES = Array.from({ length: KB_HI - KB_LO + 1 }, (_, i) => KB_LO + i).filter((m) => WHITE_PC.includes(m % 12))
const KB_BLACKS = Array.from({ length: KB_HI - KB_LO + 1 }, (_, i) => KB_LO + i).filter((m) => !WHITE_PC.includes(m % 12))
const octaveOf = (m: number) => Math.floor(m / 12) - 1

/** Two octaves and a third of piano keys (A3 – B5): tap a key to hear that pitch; C keys are labelled with their octave. */
function PitchKeyboard() {
  const [down, setDown] = useState<number | null>(null)
  const box = useRef<HTMLDivElement>(null)
  // start scrolled so that middle C sits near the left edge on a narrow screen
  useLayoutEffect(() => {
    const el = box.current
    const c4 = el?.querySelector<HTMLElement>('[data-midi="60"]')
    if (el && c4 && el.scrollWidth > el.clientWidth) el.scrollLeft = c4.offsetLeft - 8
  }, [])
  const press = (m: number) => {
    playNow([m], 1.6)
    setDown(m)
    window.setTimeout(() => setDown((d) => (d === m ? null : d)), 220)
  }
  return (
    <div className="sf-kb-wrap">
      <p className="sf-kb-title">Đàn kiểm tra cao độ · chạm phím để nghe</p>
      <div ref={box} className="sf-kb-scroll">
        <div className="sf-kb" style={{ ['--n' as string]: KB_WHITES.length }}>
          {KB_WHITES.map((m, i) => (
            <button
              key={m}
              data-midi={m}
              onPointerDown={(e) => (e.preventDefault(), press(m))}
              className={clsx('sf-kb-w', down === m && 'is-down', m === 69 && 'is-a4')}
              style={{ ['--i' as string]: i }}
              aria-label={`${SOLFA[WHITE_PC.indexOf(m % 12)]} ${octaveOf(m)}`}
            >
              <span>{m % 12 === 0 || m === 69 ? `${SOLFA[WHITE_PC.indexOf(m % 12)]}${octaveOf(m)}` : SOLFA[WHITE_PC.indexOf(m % 12)]}</span>
            </button>
          ))}
          {KB_BLACKS.map((m) => {
            const left = KB_WHITES.indexOf(m - 1) + 1
            return (
              <button
                key={m}
                onPointerDown={(e) => (e.preventDefault(), press(m))}
                className={clsx('sf-kb-b', down === m && 'is-down')}
                style={{ ['--i' as string]: left }}
                aria-label={`${SOLFA[WHITE_PC.indexOf((m - 1) % 12)]} thăng ${octaveOf(m)}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
