import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { ALL_KEYS, keyName, read, spell, type Key, type Style } from './detect'
import { estimateKey, segment, steps, type Note, type Step } from './segment'

const MAX_REC = 60 // seconds
const MAX_FILE = 180

type Take = { notes: Note[]; dur: number; url: string }
type Result = Take & { steps: Step[]; key: Key }

/** Analysis mode: record (or pick a file), transcribe every note, then read the chords and the ways between them. */
export function AnalyzePanel({ fixedKey, style }: { fixedKey: number; style: Style }) {
  const [phase, setPhase] = useState<'idle' | 'rec' | 'loading' | 'working' | 'done' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  const [progress, setProgress] = useState(0)
  const [secs, setSecs] = useState(0)
  const [take, setTake] = useState<Take | null>(null)
  const [now, setNow] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const rec = useRef<{ mr: MediaRecorder; stream: MediaStream; timer: number } | null>(null)
  const player = useRef<HTMLAudioElement | null>(null)
  const strip = useRef<HTMLDivElement>(null)

  const run = useCallback(
    async (blob: Blob) => {
      try {
        setPhase('loading')
        setProgress(0)
        const ctx = new AudioContext()
        let buf = await ctx.decodeAudioData(await blob.arrayBuffer())
        void ctx.close()
        if (buf.duration > MAX_FILE) {
          const cut = new AudioBuffer({ length: Math.floor(MAX_FILE * buf.sampleRate), numberOfChannels: 1, sampleRate: buf.sampleRate })
          cut.copyToChannel(buf.getChannelData(0).slice(0, cut.length), 0)
          buf = cut
        }
        const { transcribe } = await import('./transcribe')
        setPhase('working')
        const notes = await transcribe(buf, (p) => setProgress(p))
        player.current?.pause()
        player.current = null
        setTake((old) => {
          if (old) URL.revokeObjectURL(old.url)
          return { notes, dur: buf.duration, url: URL.createObjectURL(blob) }
        })
        setPhase('done')
      } catch (e) {
        setMsg((e as Error)?.message || 'Không phân tích được bản thu này.')
        setPhase('error')
      }
    },
    [],
  )

  const stopRec = useCallback(() => {
    const r = rec.current
    if (!r) return
    window.clearInterval(r.timer)
    if (r.mr.state !== 'inactive') r.mr.stop()
    r.stream.getTracks().forEach((t) => t.stop())
    rec.current = null
  }, [])

  const record = useCallback(async () => {
    if (rec.current) return stopRec()
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } })
      const mr = new MediaRecorder(stream)
      const parts: Blob[] = []
      mr.ondataavailable = (e) => parts.push(e.data)
      mr.onstop = () => void run(new Blob(parts, { type: mr.mimeType }))
      mr.start()
      const t0 = Date.now()
      const timer = window.setInterval(() => {
        const s = (Date.now() - t0) / 1000
        setSecs(s)
        if (s >= MAX_REC) stopRec()
      }, 200)
      rec.current = { mr, stream, timer }
      setSecs(0)
      setPhase('rec')
    } catch (e) {
      setMsg((e as Error)?.name === 'NotAllowedError' ? 'Trình duyệt chưa cho dùng micro.' : 'Không mở được micro.')
      setPhase('error')
    }
  }, [run, stopRec])

  useEffect(() => () => stopRec(), [stopRec])
  useEffect(
    () => () => {
      player.current?.pause()
    },
    [],
  )

  // the names follow the style and the chosen key without transcribing again
  const res: Result | null = useMemo(() => {
    if (!take) return null
    const key = fixedKey >= 0 ? ALL_KEYS[fixedKey] : estimateKey(take.notes)
    return { ...take, key, steps: steps(segment(take.notes), key, style) }
  }, [take, fixedKey, style])

  const play = () => {
    if (!res) return
    if (playing) {
      player.current?.pause()
      return
    }
    if (!player.current) {
      const el = new Audio(res.url)
      el.addEventListener('ended', () => {
        setPlaying(false)
        setNow(-1)
      })
      el.addEventListener('pause', () => setPlaying(false))
      player.current = el
    }
    void player.current.play()
    setPlaying(true)
    const tick = () => {
      if (!player.current || player.current.paused) return
      setNow(player.current.currentTime)
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  const active = res && now >= 0 ? res.steps.findIndex((s) => now >= s.t && now < s.end) : -1
  useEffect(() => {
    const el = strip.current?.children[active] as HTMLElement | undefined
    if (el) {
      el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
    }
  }, [active])

  const busy = phase === 'loading' || phase === 'working'
  const lo = res ? Math.min(...res.notes.map((n) => n.m), 48) - 2 : 0
  const hi = res ? Math.max(...res.notes.map((n) => n.m), 72) + 2 : 0

  return (
    <div className="ce-an">
      <p className="ce-an-intro">
        Thu một đoạn đàn (tối đa {MAX_REC} giây) hoặc chọn file âm thanh. Máy chép lại từng nốt bằng mô hình Basic Pitch chạy ngay trên máy bạn, rồi đọc hợp âm, chức năng và hướng đi — chính xác hơn chế độ nghe liền với hợp âm dày, nhưng không thời gian thực.
      </p>
      <div className="ce-an-actions">
        <button className={clsx('ce-an-rec', phase === 'rec' && 'is-on')} onClick={record} disabled={busy}>
          <span aria-hidden className="ce-an-dot" />
          {phase === 'rec' ? `Dừng · ${Math.floor(secs)}s` : 'Thu đoạn đàn'}
        </button>
        <label className={clsx('ce-an-file', busy && 'is-off')}>
          Chọn file âm thanh
          <input
            type="file"
            accept="audio/*"
            disabled={busy}
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void run(f)
              e.target.value = ''
            }}
          />
        </label>
      </div>

      {busy && (
        <div className="ce-an-progress" role="status">
          <span style={{ transform: `scaleX(${phase === 'loading' ? 0.04 : Math.max(0.04, progress)})` }} />
          <p>{phase === 'loading' ? 'Đang tải mô hình (lần đầu khoảng 2 MB)…' : `Đang chép nốt… ${Math.round(progress * 100)}%`}</p>
        </div>
      )}
      {phase === 'error' && <p className="ce-an-error">{msg}</p>}

      {res && phase === 'done' && (
        <>
          <p className="ce-eyebrow ce-an-key">
            {keyName(res.key)} · {fixedKey >= 0 ? 'chọn' : 'đoán từ cả đoạn'} · {res.notes.length} nốt · {res.steps.length} hợp âm
          </p>
          {res.steps.length === 0 && <p className="ce-an-error">Không nghe ra nốt nào — thử thu gần đàn hơn.</p>}

          <div ref={strip} className="ce-an-strip" role="list">
            {res.steps.map((s, i) => {
              const sp = s.chord ? spell(s.chord, res.key) : null
              const rd = s.chord ? read(s.chord, res.key) : null
              return (
                <div key={i} role="listitem" className={clsx('ce-an-step', i === active && 'is-now', !s.chord && 'is-unsure')}>
                  {i > 0 && <span className={clsx('ce-an-link', s.way && 'is-way')}>{s.way ?? (s.chord ? 'chuỗi mới' : '')}</span>}
                  <div className="ce-an-card">
                    <b>{sp?.letter ?? '?'}</b>
                    <i>{rd ? rd.label : 'chưa chắc'}</i>
                    {rd && <em>{rd.jazz}</em>}
                    <small>{s.t.toFixed(1)}s</small>
                  </div>
                </div>
              )
            })}
          </div>

          {res.notes.length > 0 && (
            <svg className="ce-an-roll" viewBox={`0 0 ${res.dur * 40} ${(hi - lo) * 3}`} preserveAspectRatio="none" aria-label="Các nốt đã chép">
              {res.steps.map((s, i) => (
                <rect key={'s' + i} x={s.t * 40} y={0} width={(s.end - s.t) * 40} height={(hi - lo) * 3} className={clsx('seg', i % 2 && 'odd', i === active && 'now')} />
              ))}
              {res.notes.map((n, i) => (
                <rect key={i} x={n.t * 40} y={(hi - n.m) * 3} width={Math.max(1.5, n.d * 40)} height={2.6} rx={1} className="note" style={{ opacity: 0.35 + n.a * 0.65 }} />
              ))}
              {now >= 0 && <line x1={now * 40} x2={now * 40} y1={0} y2={(hi - lo) * 3} className="head" />}
            </svg>
          )}

          <div className="ce-an-actions">
            <button className="ce-an-play" onClick={play}>{playing ? 'Dừng nghe lại' : 'Nghe lại và theo dõi'}</button>
          </div>
        </>
      )}
    </div>
  )
}
