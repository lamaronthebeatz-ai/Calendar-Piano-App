import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import clsx from 'clsx'
import { useBack } from '../../hooks/useBack'
import { ArrowLeftIcon } from '../../components/icons'
import { IS_ANDROID } from '../../lib/device'
import {
  ALL_KEYS, guessChord, keyFromChord, keyName, nextWays, read, readFrame, sameChord, spell, takes,
  type Chord, type Key, type Style, type Way,
} from './detect'
import { AnalyzePanel } from './AnalyzePanel'
import './chord-ear.css'

type Shown = { id: number; chord: Chord; key: Key; ways: Way[]; fresh: boolean }
type Flight = { text: string; label: string; dx: number; dy: number; s: number }

const STABLE = 3 // frames (~0.3 s) a reading must hold before it counts
// branch tree geometry (px): one leaf row and the gap under it; the curves live in a BRANCH_W-wide strip
const ROW = 50
const GAP = 7
const BRANCH_W = 46
const branchPath = (i: number, n: number) => {
  const h = n * (ROW + GAP) - GAP
  const y = i * (ROW + GAP) + ROW / 2
  return `M0 ${h / 2} C ${BRANCH_W * 0.55} ${h / 2}, ${BRANCH_W * 0.45} ${y}, ${BRANCH_W} ${y}`
}
const KEY_W = [0, 0.6, 1, 1.6, 2, 3, 3.6, 4, 4.6, 5, 5.6, 6]
const BLACK = [1, 3, 6, 8, 10]

function MicIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
    </svg>
  )
}

export function ChordEarPage() {
  const back = useBack('/theory')
  const [status, setStatus] = useState<'idle' | 'asking' | 'on' | 'denied' | 'error'>('idle')
  const [fixedKey, setFixedKey] = useState<number>(-1) // index in ALL_KEYS, −1 = guess
  const [style, setStyle] = useState<Style>(() => {
    try {
      return (localStorage.getItem('chord-ear:style') as Style) || 'both'
    } catch {
      return 'both'
    }
  })
  const [shown, setShown] = useState<Shown | null>(null)
  const [hit, setHit] = useState<number | null>(null)
  const [caption, setCaption] = useState('')
  const [history, setHistory] = useState<{ id: number; letter: string; label: string }[]>([])
  const [live, setLive] = useState<{ pcs: number[]; bass: number | null; level: number; unsure: boolean }>({ pcs: [], bass: null, level: 0, unsure: false })
  const [flight, setFlight] = useState<Flight | null>(null)
  const [mode, setMode] = useState<'live' | 'analyze'>('live')

  const audio = useRef<{ ctx: AudioContext; stream: MediaStream; timer: number } | null>(null)
  const shownRef = useRef<Shown | null>(null)
  const fixedRef = useRef(fixedKey)
  const styleRef = useRef(style)
  const busy = useRef(false)
  const nameRef = useRef<HTMLDivElement>(null)
  const wayRefs = useRef<(HTMLDivElement | null)[]>([])
  const nextId = useRef(1)

  useEffect(() => {
    fixedRef.current = fixedKey
  }, [fixedKey])
  useEffect(() => {
    styleRef.current = style
    try {
      localStorage.setItem('chord-ear:style', style)
    } catch {
      /* private mode: the choice just isn't remembered */
    }
    // the ways on screen follow the style at once
    const cur = shownRef.current
    if (cur) {
      const next = { ...cur, ways: nextWays(cur.chord, cur.key, style) }
      shownRef.current = next
      setShown(next)
    }
  }, [style])

  const show = useCallback((s: Shown) => {
    shownRef.current = s
    setShown(s)
    const sp = spell(s.chord, s.key)
    setHistory((h) => [...h.slice(-11), { id: s.id, letter: sp.letter, label: read(s.chord, s.key).label }])
  }, [])

  /** A chord has held long enough: follow one of the ways, or start a new chain. */
  const commit = useCallback(
    (ch: Chord) => {
      const cur = shownRef.current
      if (busy.current || (cur && sameChord(cur.chord, ch))) return
      const fixed = fixedRef.current >= 0 ? ALL_KEYS[fixedRef.current] : null
      if (cur) {
        const exact = cur.ways.findIndex((w) => takes(w, ch, cur.key) && w.q === ch.q)
        const i = exact >= 0 ? exact : cur.ways.findIndex((w) => takes(w, ch, cur.key))
        if (i >= 0) {
          const w = cur.ways[i]
          busy.current = true
          setHit(i)
          setCaption(`Hướng đi: ${w.note}`)
          // the spark runs along the branch first (≈0.45 s), then the chord flies to the centre
          window.setTimeout(() => {
            const card = wayRefs.current[i]?.getBoundingClientRect()
            const name = nameRef.current?.getBoundingClientRect()
            if (card && name) {
              setFlight({ text: spell(ch, cur.key).letter, label: w.title, dx: card.left + card.width / 2 - (name.left + name.width / 2), dy: card.top + card.height / 2 - (name.top + name.height / 2), s: 0.3 })
            }
          }, 480)
          // the swap never waits on the animation: content changes on a timer
          window.setTimeout(() => {
            const key = fixed ?? cur.key
            show({ id: nextId.current++, chord: ch, key, ways: nextWays(ch, key, styleRef.current), fresh: false })
            setHit(null)
            setFlight(null)
            busy.current = false
          }, 1150)
          return
        }
      }
      const key = fixed ?? (cur && read(ch, cur.key).inKey ? cur.key : keyFromChord(ch, styleRef.current))
      setCaption(cur ? 'Không theo hướng nào — bắt đầu chuỗi mới' : '')
      show({ id: nextId.current++, chord: ch, key, ways: nextWays(ch, key, styleRef.current), fresh: true })
    },
    [show],
  )

  const stop = useCallback(() => {
    const a = audio.current
    if (!a) return
    window.clearInterval(a.timer)
    a.stream.getTracks().forEach((t) => t.stop())
    void a.ctx.close()
    audio.current = null
    setStatus('idle')
    setLive({ pcs: [], bass: null, level: 0, unsure: false })
  }, [])

  const start = useCallback(async () => {
    if (audio.current) return stop()
    setStatus('asking')
    try {
      // the context is made inside the tap so iOS lets it run
      const ctx = new AudioContext()
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } })
      await ctx.resume()
      const an = ctx.createAnalyser()
      an.fftSize = IS_ANDROID ? 8192 : 16384
      an.smoothingTimeConstant = 0.55
      ctx.createMediaStreamSource(stream).connect(an)
      const spec = new Float32Array(an.frequencyBinCount)
      const wave = new Float32Array(2048)
      let cand: Chord | null = null
      let streak = 0
      let doubt = 0
      const timer = window.setInterval(() => {
        an.getFloatTimeDomainData(wave)
        let sum = 0
        for (let i = 0; i < wave.length; i++) sum += wave[i] * wave[i]
        const rms = Math.sqrt(sum / wave.length)
        if (rms < 0.004) {
          cand = null
          streak = 0
          setLive((l) => (l.level === 0 && !l.pcs.length ? l : { pcs: [], bass: null, level: 0, unsure: false }))
          return
        }
        an.getFloatFrequencyData(spec)
        const f = readFrame(spec, ctx.sampleRate, rms)
        const g = guessChord(f)
        doubt = g.sure ? 0 : doubt + 1
        setLive({ pcs: [...new Set(f.notes.map((n) => n.m % 12))], bass: f.bass, level: Math.min(1, rms * 12), unsure: doubt > 6 })
        if (!g.sure || !g.chord) {
          streak = 0
          return
        }
        streak = sameChord(cand, g.chord) ? streak + 1 : 1
        cand = g.chord
        if (streak === STABLE) commit(g.chord)
      }, 90)
      audio.current = { ctx, stream, timer }
      setStatus('on')
    } catch (e) {
      setStatus((e as Error)?.name === 'NotAllowedError' ? 'denied' : 'error')
    }
  }, [commit, stop])

  useEffect(() => () => stop(), [stop])

  const reset = () => {
    shownRef.current = null
    setShown(null)
    setHistory([])
    setCaption('')
  }

  // the flying chord: from the way card to the centre, transform only
  const flyer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = flyer.current
    if (!flight || !el?.animate) return
    el.animate(
      [
        { transform: `translate(${flight.dx}px, ${flight.dy}px) scale(${flight.s})`, opacity: 0.9 },
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      ],
      { duration: 640, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' },
    )
  }, [flight])

  const sp = shown ? spell(shown.chord, shown.key) : null
  const rd = shown ? read(shown.chord, shown.key) : null

  return (
    <div className="ce-page">
      <div className="ce-top">
        <button onClick={back} aria-label="Quay lại" className="ce-icon-btn">
          <ArrowLeftIcon width={18} height={18} />
        </button>
        <h1>Nghe hợp âm</h1>
        <select className="ce-select" value={fixedKey} onChange={(e) => setFixedKey(Number(e.target.value))} aria-label="Giọng">
          <option value={-1}>Tự đoán giọng</option>
          {ALL_KEYS.map((k, i) => (
            <option key={i} value={i}>{keyName(k)}</option>
          ))}
        </select>
      </div>

      <div className="ce-stage">
        <div className="ce-style" role="radiogroup" aria-label="Hướng đi theo, hoặc phân tích bản thu">
          {(
            [
              ['classic', 'Cổ điển'],
              ['jazz', 'Jazz'],
              ['both', 'Cả hai'],
            ] as [Style, string][]
          ).map(([v, t]) => (
            <button
              key={v}
              role="radio"
              aria-checked={mode === 'live' && style === v}
              className={clsx(mode === 'live' && style === v && 'is-on')}
              onClick={() => {
                setStyle(v)
                setMode('live')
              }}
            >
              {t}
            </button>
          ))}
          <button
            role="radio"
            aria-checked={mode === 'analyze'}
            className={clsx('ce-style-an', mode === 'analyze' && 'is-on')}
            onClick={() => {
              stop()
              setMode('analyze')
            }}
          >
            Phân tích
          </button>
        </div>
        {mode === 'analyze' ? (
          <AnalyzePanel fixedKey={fixedKey} style={style} />
        ) : (
          <>
        <p className="ce-eyebrow">{shown ? `${keyName(shown.key)}${fixedKey < 0 ? ' · đoán' : ''}` : 'Đàn một hợp âm trên piano'}</p>

        <div className="ce-center">
          {shown && sp && rd ? (
            <div key={shown.id} ref={nameRef} className={clsx('ce-bulb', flight && 'is-leaving')}>
              <span aria-hidden className="ce-halo" />
              <div className="ce-name ce-lit" style={{ '--len': sp.letter.length } as CSSProperties}>
                <span className="off" aria-hidden>{sp.letter}</span>
                <span className="on">{sp.letter}</span>
              </div>
              <p className="ce-func">
                <b>{rd.label}</b>
                <span>{rd.role}</span>
                <em>{rd.jazz}</em>
              </p>
              <p className="ce-tones">{sp.tones.join(' · ')}</p>
            </div>
          ) : (
            <div className="ce-empty">
              <span className="ce-name ce-dim">{status === 'on' ? (live.unsure ? '?' : '…') : '♪'}</span>
              <p>{status === 'on' ? (live.unsure ? 'Chưa chắc — đàn rõ và giữ hợp âm lâu hơn một chút' : 'Đang nghe…') : 'Bấm micro, cho phép trình duyệt nghe, rồi đàn.'}</p>
            </div>
          )}
          {flight && (
            <div ref={flyer} className="ce-flyer" aria-hidden>
              <span style={{ '--len': flight.text.length } as CSSProperties}>{flight.text}</span>
            </div>
          )}
        </div>

        <div className="ce-controls">
        <div className="ce-keys" aria-label="Nốt đang nghe">
          {Array.from({ length: 12 }, (_, pc) => (
            <span
              key={pc}
              className={clsx('ce-key', BLACK.includes(pc) ? 'is-black' : 'is-white', live.pcs.includes(pc) && 'is-on', live.bass === pc && 'is-bass')}
              style={{ '--x': KEY_W[pc] } as CSSProperties}
            />
          ))}
        </div>

        <button onClick={start} className={clsx('ce-mic', status === 'on' && 'is-on')} aria-label={status === 'on' ? 'Dừng nghe' : 'Bắt đầu nghe'}>
          <span aria-hidden className="ce-ring" style={{ '--lv': live.level } as CSSProperties} />
          <MicIcon />
        </button>
        </div>
        <p className="ce-status">
          {status === 'on' && (shown && live.unsure ? 'Âm thanh chưa rõ hợp âm — không đoán, giữ hợp âm trước' : 'Đang nghe · âm thanh chỉ xử lý trên máy bạn')}
          {status === 'idle' && 'Chạm để nghe'}
          {status === 'asking' && 'Đang xin quyền dùng micro…'}
          {status === 'denied' && 'Trình duyệt chưa cho dùng micro — bật lại trong cài đặt trang.'}
          {status === 'error' && 'Không mở được micro trên thiết bị này.'}
        </p>
        <p className={clsx('ce-caption', caption && 'is-on')} aria-live="polite">{caption}</p>

        {shown && sp && rd && shown.ways.length > 0 && (
          <div key={shown.id} className={clsx('ce-tree', hit !== null && 'is-moving')} aria-label="Các hướng đi tiếp">
            <div className="ce-root">
              <b>{sp.letter}</b>
              <i>{rd.label}</i>
            </div>
            <div className="ce-branches" style={{ width: BRANCH_W, height: shown.ways.length * (ROW + GAP) - GAP }}>
              <svg width={BRANCH_W} height={shown.ways.length * (ROW + GAP) - GAP} aria-hidden>
                {shown.ways.map((_, i) => (
                  <path key={i} d={branchPath(i, shown.ways.length)} className={clsx('ce-limb', hit === i && 'is-hit')} style={{ '--i': i } as CSSProperties} />
                ))}
              </svg>
              {hit !== null && <span aria-hidden className="ce-spark" style={{ offsetPath: `path('${branchPath(hit, shown.ways.length)}')` } as CSSProperties} />}
            </div>
            <div className="ce-leaves" role="list">
              {shown.ways.map((w, i) => {
                const target = spell({ root: w.root, q: w.q, bass: w.bassFifth ? (shown.key.tonic + 7) % 12 : w.root }, shown.key).letter
                return (
                  <div
                    key={i}
                    role="listitem"
                    ref={(el) => {
                      wayRefs.current[i] = el
                    }}
                    className={clsx('ce-leaf', w.jazz && 'is-jazz', hit === i && 'is-hit', hit !== null && hit !== i && 'is-dim')}
                    style={{ '--i': i, height: ROW } as CSSProperties}
                  >
                    <span aria-hidden className="ce-way-lit" />
                    <b>{w.title}</b>
                    <i>{target}</i>
                    <small>
                      {w.jazz && <em>Jazz · </em>}
                      {w.note}
                    </small>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {shown && shown.ways.length === 0 && <p className="ce-noway">Hợp âm ngoài các công thức quen thuộc — hợp âm tiếp theo sẽ mở một chuỗi mới.</p>}
          </>
        )}

      </div>

      {mode === 'live' && history.length > 0 && (
        <div className="ce-history">
          <div className="ce-history-row">
            {history.map((h) => (
              <span key={h.id}>
                <b>{h.letter}</b>
                <i>{h.label}</i>
              </span>
            ))}
          </div>
          <button onClick={reset} className="ce-clear">Xoá chuỗi</button>
        </div>
      )}
      {mode === 'live' && <p className="ce-foot">
        Đoán theo phổ âm thanh: chắc nhất với hợp âm ba và hợp âm bảy đàn rõ trên piano. Hợp âm dày, cụm âm, tiếng ồn hay giọng hát sẽ khiến máy báo “chưa chắc” thay vì đoán bừa. Tên chức năng ghi theo hệ Nga – Xô viết của sách hoà âm trong thư viện; giọng tự đoán từ hợp âm đầu chuỗi, hoặc chọn giọng ở góc trên.
      </p>}
    </div>
  )
}
