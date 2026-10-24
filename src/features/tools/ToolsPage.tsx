import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import clsx from 'clsx'
import { ScrollArea } from '../../components/ScrollArea'
import { useBack } from '../../hooks/useBack'
import { ArrowLeftIcon } from '../../components/icons'
import { CircleOfFifths } from '../theory/diagrams'
import { playNow, playSequence } from '../theory/audio'
import {
  borrowed, chordMidis, chordNotes, diatonic, identify, interval, jazz, KEYS, midis, name, parse, pc, QUALITIES, SCALES, scaleNotes, secondary, symbol, tempoName, transpose, up,
  type Chord, type Note,
} from './harmony'
import './tools.css'

const SECTIONS = [
  ['vong', 'Vòng quãng năm'],
  ['giong', 'Hợp âm trong giọng'],
  ['jazz', 'Jazz'],
  ['hop-am', 'Xây hợp âm'],
  ['nhan-dien', 'Nhận diện'],
  ['am-giai', 'Âm giai'],
  ['quang', 'Quãng'],
  ['dich', 'Dịch giọng'],
  ['nhip', 'Máy đếm nhịp'],
] as const

const FN_LABEL = { T: 'Chủ', S: 'Hạ át', D: 'Át' } as const

/** Calculators: circle of fifths, chords of a key, jazz progressions, chord builder and finder, scales, intervals, transposer, metronome. */
export function ToolsPage() {
  const back = useBack('/theory')
  const [k, setK] = useState(() => {
    const v = Number(localStorage.getItem('tools:key'))
    return Number.isInteger(v) && v >= 0 && v < 12 ? v : 0
  })
  const tonic = KEYS[k]
  useEffect(() => {
    try {
      localStorage.setItem('tools:key', String(k))
    } catch {
      /* remembering the key is optional */
    }
  }, [k])

  const go = (id: string) => document.getElementById(`tool-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <ScrollArea className="relative h-full overflow-x-hidden overflow-y-auto pb-28 lg:pb-10">
      <div className="glass sticky top-0 z-20 border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-4 lg:px-8">
          <button onClick={back} aria-label="Quay lại" className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-sunken)]">
            <ArrowLeftIcon width={18} height={18} />
          </button>
          <h1 className="min-w-0 flex-1 truncate font-display text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">Bảng tính</h1>
          <span className="tl-keybadge" key={k}>
            Tone <b>{name(tonic)}</b>
          </span>
        </div>
        <KeyBar value={k} onChange={setK} />
      </div>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-6 lg:px-8">
        <header className="tl-hero">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Công cụ nhạc lý</p>
          <h2 className="mt-2 font-display text-[30px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">
            Chọn một tone, <span className="text-gold-gradient italic">mọi bảng tính đi theo</span>
          </h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--color-ink-muted)]">Xoay vòng quãng năm hoặc chạm tone ở thanh trên; chạm bất kỳ hợp âm nào để nghe.</p>
          <nav className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0">
            {SECTIONS.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="tl-pill">
                {label}
              </button>
            ))}
          </nav>
        </header>

        <Section id="vong" title="Vòng quãng năm" hint="Xoay bằng tay; giọng ở đỉnh là tone chủ">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,340px)_1fr]">
            <div className="mx-auto w-full max-w-[340px]">
              <CircleOfFifths value={k} onSelect={setK} />
            </div>
            <KeyFacts k={k} />
          </div>
        </Section>

        <Section id="giong" title="Hợp âm trong giọng" hint="Hợp âm dựng trên từng bậc của âm giai">
          <DiatonicTool tonic={tonic} />
        </Section>

        <Section id="jazz" title="Hợp âm jazz" hint={`Theo tone ${name(tonic)}`}>
          <JazzTool tonic={tonic} />
        </Section>

        <Section id="hop-am" title="Xây hợp âm" hint="Chọn nốt gốc và loại hợp âm">
          <ChordBuilder tonic={tonic} />
        </Section>

        <Section id="nhan-dien" title="Nhận diện hợp âm" hint="Chạm các phím để đánh dấu nốt">
          <ChordFinder />
        </Section>

        <Section id="am-giai" title="Âm giai" hint={`Từ ${name(tonic)}`}>
          <ScaleTool tonic={tonic} />
        </Section>

        <Section id="quang" title="Quãng" hint="Tên quãng giữa hai nốt">
          <IntervalTool tonic={tonic} />
        </Section>

        <Section id="dich" title="Dịch giọng" hint="Chuyển một vòng hợp âm sang tone khác">
          <Transposer tonic={tonic} />
        </Section>

        <Section id="nhip" title="Máy đếm nhịp" hint="Gõ để đo nhịp độ">
          <Metronome />
        </Section>
      </div>
    </ScrollArea>
  )
}

/* ------------------------------------------------------------------ shell */

function KeyBar({ value, onChange }: { value: number; onChange: (k: number) => void }) {
  const row = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState<CSSProperties>({})
  useEffect(() => {
    const el = row.current?.children[value + 1] as HTMLElement | undefined
    if (!el) return
    setPill({ transform: `translateX(${el.offsetLeft}px)`, width: el.offsetWidth })
    el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [value])
  return (
    <div ref={row} className="no-scrollbar relative mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-2 lg:px-8" role="tablist" aria-label="Tone chủ">
      <span aria-hidden className="tl-keypill" style={pill} />
      {KEYS.map((n, i) => (
        <button key={i} role="tab" aria-selected={i === value} onClick={() => onChange(i)} className={clsx('tl-key', i === value && 'is-on')}>
          {name(n)}
        </button>
      ))}
    </div>
  )
}

function Section({ id, title, hint, children }: { id: string; title: string; hint: string; children: ReactNode }) {
  return (
    <section id={`tool-${id}`} data-reveal className="scroll-mt-32 space-y-4">
      <div className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-2">
        <h3 className="font-display text-[22px] font-semibold tracking-tight text-[var(--color-ink)]">{title}</h3>
        <span className="text-right text-[12px] text-[var(--color-ink-faint)]">{hint}</span>
      </div>
      {children}
    </section>
  )
}

function Seg<T extends string>({ value, options, onChange }: { value: T; options: [T, string][]; onChange: (v: T) => void }) {
  return (
    <div className="tl-seg">
      {options.map(([v, l]) => (
        <button key={v} onClick={() => onChange(v)} className={clsx(v === value && 'is-on')}>
          {l}
        </button>
      ))}
    </div>
  )
}

/** One chord, tap to hear it. */
function ChordCard({ chord, i = 0, big, active }: { chord: Chord; i?: number; big?: boolean; active?: boolean }) {
  const [on, setOn] = useState(0)
  const play = () => {
    playNow(chordMidis(chord), 1.6, 0.02)
    setOn((n) => n + 1)
  }
  return (
    <button onClick={play} className={clsx('tl-chord', big && 'is-big', active && 'is-active', chord.fn && `fn-${chord.fn}`)} style={{ '--i': i } as CSSProperties}>
      {on > 0 && <span key={on} aria-hidden className="tl-ripple" />}
      {chord.role && <span className="tl-role">{chord.role}</span>}
      <span className="tl-sym">{symbol(chord)}</span>
      <span className="tl-notes">{chordNotes(chord).map(name).join(' · ')}</span>
      {chord.fn && <span className="tl-fn">{FN_LABEL[chord.fn]}</span>}
    </button>
  )
}

/** Play chords one after another, lighting the one that sounds. */
function usePlayer() {
  const [at, setAt] = useState(-1)
  const stop = useRef<() => void>(() => {})
  useEffect(() => () => stop.current(), [])
  const play = (chords: Chord[], gap = 1.05) => {
    stop.current()
    stop.current = playSequence(
      chords.map((c, i) => ({ at: i * gap, dur: gap * 1.15, midis: chordMidis(c) })),
      { onStep: setAt, onEnd: () => setAt(-1) },
    )
  }
  return { at, play }
}

function PlayAll({ onClick, label = 'Nghe cả vòng' }: { onClick: () => void; label?: string }) {
  return (
    <button onClick={onClick} className="tl-play">
      <span aria-hidden>▶</span> {label}
    </button>
  )
}

/* ------------------------------------------------------------- the tools */

function KeyFacts({ k }: { k: number }) {
  const T = KEYS[k]
  const rel = up(T, [5, 9])
  const sig = k === 0 ? 'Không có dấu hoá' : k <= 6 ? `${k} dấu thăng` : `${12 - k} dấu giáng`
  const facts: [string, string][] = [
    ['Giọng trưởng', `${name(T)} trưởng`],
    ['Giọng thứ song song', `${name(rel)} thứ`],
    ['Hoá biểu', k === 6 ? '6♯ (F♯) / 6♭ (G♭)' : sig],
    ['Giọng gần (hạ át · át)', `${name(KEYS[(k + 11) % 12])} · ${name(KEYS[(k + 1) % 12])}`],
    ['Âm giai', scaleNotes(T, SCALES[0]).map(name).join(' ')],
  ]
  return (
    <dl className="grid gap-2" key={k}>
      {facts.map(([a, b], i) => (
        <div key={a} className="tl-fact" style={{ '--i': i } as CSSProperties}>
          <dt>{a}</dt>
          <dd>{b}</dd>
        </div>
      ))}
    </dl>
  )
}

function DiatonicTool({ tonic }: { tonic: Note }) {
  const [scale, setScale] = useState('major')
  const [sev, setSev] = useState<'3' | '7'>('7')
  const s = SCALES.find((x) => x.id === scale)!
  const chords = useMemo(() => diatonic(tonic, s, sev === '7'), [tonic, s, sev])
  const { at, play } = usePlayer()
  const seven = SCALES.filter((x) => x.ivs.length === 7)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <select value={scale} onChange={(e) => setScale(e.target.value)} className="tl-select">
          {seven.map((x) => (
            <option key={x.id} value={x.id}>{name(tonic)} {x.label}</option>
          ))}
        </select>
        <Seg value={sev} onChange={setSev} options={[['3', 'Ba nốt'], ['7', 'Hợp âm bảy']]} />
        <span className="flex-1" />
        <PlayAll onClick={() => play([...chords, chords[0]], 0.9)} label="Nghe các bậc" />
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7" key={`${name(tonic)}${scale}${sev}`}>
        {chords.map((c, i) => (
          <ChordCard key={i} chord={c} i={i} active={at === i || (at === 7 && i === 0)} />
        ))}
      </div>
      <p className="text-[12.5px] text-[var(--color-ink-faint)]">Màu viền: <b className="text-[var(--tl-T)]">Chủ</b> · <b className="text-[var(--tl-S)]">Hạ át</b> · <b className="text-[var(--tl-D)]">Át</b> (chức năng theo giọng trưởng – thứ cổ điển).</p>
    </div>
  )
}

function JazzTool({ tonic }: { tonic: Note }) {
  const progs = useMemo(() => jazz(tonic), [tonic])
  const sec = useMemo(() => secondary(tonic), [tonic])
  const bor = useMemo(() => borrowed(tonic), [tonic])
  const [playing, setPlaying] = useState(-1)
  const { at, play } = usePlayer()
  return (
    <div className="space-y-6" key={name(tonic)}>
      <div className="grid gap-3 md:grid-cols-2">
        {progs.map((p, n) => (
          <div key={p.title} className="tl-prog" style={{ '--i': n } as CSSProperties}>
            <div className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                <p className="font-display text-[16.5px] font-semibold text-[var(--color-ink)]">{p.title}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-[var(--color-ink-muted)]">{p.note}</p>
              </div>
              <button
                onClick={() => {
                  setPlaying(n)
                  play(p.chords)
                }}
                className="tl-playmini"
                aria-label={`Nghe ${p.title}`}
              >
                ▶
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.chords.map((c, i) => (
                <ChordCard key={i} chord={c} i={i} active={playing === n && at === i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Át phụ, thay thế tritone và ii liên quan</p>
        <div className="tl-table">
          <div className="tl-row is-head">
            <span>Đích</span>
            <span>ii liên quan</span>
            <span>V7 phụ</span>
            <span>subV</span>
          </div>
          {sec.map((r, i) => (
            <div key={i} className="tl-row" style={{ '--i': i } as CSSProperties}>
              <ChordCard chord={r.target} />
              <ChordCard chord={r.ii} />
              <ChordCard chord={r.dom} />
              <ChordCard chord={r.sub} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-display text-[17px] font-semibold text-[var(--color-ink)]">Mượn từ giọng thứ cùng tên</p>
        <div className="flex flex-wrap gap-2">
          {bor.map((c, i) => (
            <ChordCard key={i} chord={c} i={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Keyboard({ lit, onKey, from = 60, octaves = 2 }: { lit: Set<number>; onKey?: (m: number) => void; from?: number; octaves?: number }) {
  const whites = [0, 2, 4, 5, 7, 9, 11]
  const keys = Array.from({ length: octaves * 12 }, (_, i) => from + i)
  const W = keys.filter((m) => whites.includes(m % 12))
  return (
    <div className="tl-kbd" style={{ '--w': W.length } as CSSProperties}>
      {W.map((m) => (
        <button key={m} onPointerDown={() => onKey?.(m)} className={clsx('tl-white', lit.has(m) && 'is-lit')} aria-label={`Phím ${m}`} />
      ))}
      {keys
        .filter((m) => !whites.includes(m % 12))
        .map((m) => {
          const left = W.filter((w) => w < m).length
          return <button key={m} onPointerDown={() => onKey?.(m)} className={clsx('tl-black', lit.has(m) && 'is-lit')} style={{ '--x': left } as CSSProperties} aria-label={`Phím ${m}`} />
        })}
    </div>
  )
}

function ChordBuilder({ tonic }: { tonic: Note }) {
  const [root, setRoot] = useState<string | null>(null)
  const [q, setQ] = useState('maj7')
  const r = root ? parse(root)! : tonic
  const chord: Chord = { root: r, q }
  const notes = chordNotes(chord)
  const ms = chordMidis(chord)
  const quality = QUALITIES.find((x) => x.id === q)!
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {KEYS.map((n) => (
            <button key={name(n)} onClick={() => setRoot(name(n))} className={clsx('tl-key is-small', pc(n) === pc(r) && 'is-on')}>
              {name(n)}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {QUALITIES.map((x) => (
            <button key={x.id} onClick={() => setQ(x.id)} className={clsx('tl-qual', x.id === q && 'is-on')} title={x.label}>
              {name(r)}
              {x.id || <span className="opacity-60">maj</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="tl-result" key={symbol(chord)}>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-display text-[40px] font-semibold leading-none text-[var(--color-ink)]">{symbol(chord)}</p>
            <p className="mt-1 text-[13px] text-[var(--color-ink-muted)]">{name(r)} {quality.label}</p>
          </div>
          <button onClick={() => playNow(ms, 1.8, 0.03)} className="tl-play">
            ▶ Nghe
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {notes.map((n, i) => (
            <span key={i} className="tl-note" style={{ '--i': i } as CSSProperties}>
              {name(n)}
              <small>{['1', ...quality.ivs.slice(1).map((iv) => interval(r, up(r, iv)).name)][i]}</small>
            </span>
          ))}
        </div>
        <div className="mt-4">
          <Keyboard lit={new Set(ms)} from={ms[0] - (ms[0] % 12)} octaves={ms[ms.length - 1] - ms[0] > 14 ? 3 : 2} onKey={(m) => playNow([m], 1)} />
        </div>
      </div>
    </div>
  )
}

function ChordFinder() {
  const [lit, setLit] = useState<Set<number>>(new Set([60, 64, 67, 71]))
  const toggle = (m: number) => {
    playNow([m], 0.9)
    setLit((s) => {
      const n = new Set(s)
      if (n.has(m)) n.delete(m)
      else n.add(m)
      return n
    })
  }
  const found = useMemo(() => identify([...lit]), [lit])
  const bass = Math.min(...lit)
  return (
    <div className="space-y-3">
      <Keyboard lit={lit} onKey={toggle} />
      <div className="flex flex-wrap items-center gap-2">
        {found.length ? (
          found.map((c, i) => (
            <span key={symbol(c)} className={clsx('tl-found', i === 0 && 'is-main')} style={{ '--i': i } as CSSProperties}>
              {symbol(c)}
              {lit.size && pc(c.root) !== bass % 12 ? <small>/{name(KEYS.find((k) => pc(k) === bass % 12) ?? c.root)}</small> : null}
            </span>
          ))
        ) : (
          <span className="text-[13px] text-[var(--color-ink-faint)]">{lit.size < 2 ? 'Chọn ít nhất hai nốt.' : 'Chưa nhận ra hợp âm quen thuộc.'}</span>
        )}
        <span className="flex-1" />
        <button onClick={() => playNow([...lit].sort((a, b) => a - b), 1.6, 0.03)} className="tl-play" disabled={!lit.size}>
          ▶ Nghe
        </button>
        <button onClick={() => setLit(new Set())} className="tl-pill">Xoá</button>
      </div>
    </div>
  )
}

function ScaleTool({ tonic }: { tonic: Note }) {
  const [id, setId] = useState('major')
  const s = SCALES.find((x) => x.id === id)!
  const notes = scaleNotes(tonic, s)
  const ms = midis(tonic, [...s.ivs, [7, 12]])
  const [at, setAt] = useState(-1)
  const play = () =>
    playSequence(
      ms.map((m, i) => ({ at: i * 0.32, dur: 0.5, midis: [m] })),
      { onStep: setAt, onEnd: () => setAt(-1) },
    )
  const steps = ms.slice(1).map((m, i) => m - ms[i])
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <select value={id} onChange={(e) => setId(e.target.value)} className="tl-select">
          {SCALES.map((x) => (
            <option key={x.id} value={x.id}>{x.label}</option>
          ))}
        </select>
        <span className="flex-1" />
        <PlayAll onClick={play} label="Nghe âm giai" />
      </div>
      <div className="flex flex-wrap gap-2" key={`${name(tonic)}${id}`}>
        {[...notes, tonic].map((n, i) => (
          <span key={i} className={clsx('tl-note is-lg', at === i && 'is-active')} style={{ '--i': i } as CSSProperties}>
            {name(n)}
            {i < steps.length && <small>{steps[i] === 1 ? 'nửa' : steps[i] === 2 ? 'nguyên' : `${steps[i]} nửa`}</small>}
          </span>
        ))}
      </div>
      <Keyboard lit={new Set(ms)} from={ms[0] - (ms[0] % 12)} />
    </div>
  )
}

const ALL_NOTES = ['C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G♯', 'A♭', 'A', 'A♯', 'B♭', 'B']
function IntervalTool({ tonic }: { tonic: Note }) {
  const [a, setA] = useState<string | null>(null)
  const [b, setB] = useState('G')
  const na = a ? parse(a)! : tonic
  const nb = parse(b)!
  const iv = interval(na, nb)
  const inv = interval(nb, na)
  const m1 = midis(na, [[0, 0]])[0]
  return (
    <div className="flex flex-wrap items-center gap-3">
      <select value={name(na)} onChange={(e) => setA(e.target.value)} className="tl-select">
        {ALL_NOTES.map((n) => <option key={n}>{n}</option>)}
      </select>
      <span className="text-[var(--color-ink-faint)]">→</span>
      <select value={b} onChange={(e) => setB(e.target.value)} className="tl-select">
        {ALL_NOTES.map((n) => <option key={n}>{n}</option>)}
      </select>
      <div className="tl-result flex-1" key={`${name(na)}${b}`}>
        <p className="font-display text-[26px] font-semibold text-[var(--color-ink)]">Quãng {iv.name}</p>
        <p className="text-[13px] text-[var(--color-ink-muted)]">{iv.semis} nửa cung · đảo lại: quãng {inv.name}</p>
      </div>
      <button onClick={() => playSequence([{ at: 0, dur: 0.7, midis: [m1] }, { at: 0.6, dur: 0.9, midis: [m1 + iv.semis] }, { at: 1.4, dur: 1.2, midis: [m1, m1 + iv.semis] }], {})} className="tl-play">
        ▶ Nghe
      </button>
    </div>
  )
}

function Transposer({ tonic }: { tonic: Note }) {
  const [text, setText] = useState('Cmaj7 Am7 | Dm7 G7 | Em7 A7 | Dm7 G7 | C')
  const [to, setTo] = useState(5)
  const target = KEYS[to]
  const from = tonic
  const out = transpose(text, from, target)
  return (
    <div className="space-y-3">
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} className="tl-input" placeholder="Gõ vòng hợp âm, ví dụ: C Am F G7" />
      <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--color-ink-muted)]">
        Từ tone <b className="text-[var(--color-ink)]">{name(from)}</b> sang
        <select value={to} onChange={(e) => setTo(Number(e.target.value))} className="tl-select">
          {KEYS.map((n, i) => (
            <option key={i} value={i}>{name(n)}</option>
          ))}
        </select>
        <span className="flex-1" />
        <button onClick={() => void navigator.clipboard?.writeText(out)} className="tl-pill">Sao chép</button>
      </div>
      <p className="tl-result font-display text-[20px] leading-relaxed text-[var(--color-ink)]" key={out}>{out}</p>
      <p className="text-[12px] text-[var(--color-ink-faint)]">Tone gốc là tone đang chọn ở thanh trên.</p>
    </div>
  )
}

function Metronome() {
  const [bpm, setBpm] = useState(92)
  const [beats, setBeats] = useState(4)
  const [run, setRun] = useState(false)
  const [beat, setBeat] = useState(-1)
  const taps = useRef<number[]>([])
  useEffect(() => {
    if (!run) return
    let i = 0
    const tick = () => {
      const b = i % beats
      playSequence([{ at: 0, dur: 0.05, tick: b === 0 ? 'accent' : 'beat' }], {})
      setBeat(b)
      i++
    }
    tick()
    const id = setInterval(tick, 60000 / bpm)
    return () => {
      clearInterval(id)
      setBeat(-1)
    }
  }, [run, bpm, beats])
  const tap = () => {
    const now = performance.now()
    taps.current = [...taps.current.filter((t) => now - t < 2500), now].slice(-6)
    const t = taps.current
    if (t.length >= 2) setBpm(Math.max(30, Math.min(240, Math.round(60000 / ((t[t.length - 1] - t[0]) / (t.length - 1))))))
  }
  return (
    <div className="tl-result grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
      <div className="text-center">
        <p className="font-display text-[56px] font-semibold leading-none tabular-nums text-[var(--color-ink)]">{bpm}</p>
        <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-[var(--color-gold)]">{tempoName(bpm)}</p>
      </div>
      <div className="space-y-3">
        <div className="flex justify-center gap-2 sm:justify-start">
          {Array.from({ length: beats }, (_, i) => (
            <span key={i} className={clsx('tl-beat', i === 0 && 'is-accent', beat === i && 'is-on')} />
          ))}
        </div>
        <input type="range" min={30} max={240} value={bpm} onChange={(e) => setBpm(Number(e.target.value))} className="w-full accent-[var(--color-gold)]" aria-label="Nhịp độ" />
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setRun((r) => !r)} className="tl-play">{run ? '■ Dừng' : '▶ Chạy'}</button>
          <button onClick={tap} className="tl-pill">Gõ nhịp</button>
          <Seg value={String(beats) as '2' | '3' | '4' | '6'} onChange={(v) => setBeats(Number(v))} options={[['2', '2/4'], ['3', '3/4'], ['4', '4/4'], ['6', '6/8']]} />
        </div>
      </div>
    </div>
  )
}
