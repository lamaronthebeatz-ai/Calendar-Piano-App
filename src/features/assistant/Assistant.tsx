import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { SparkleIcon, XIcon } from '../../components/icons'
import type { Answer } from './engine'
import { closeAssistant, openAssistant, takeQuestion, useAssistant } from './store'
import './assistant.css'

interface Msg {
  id: number
  role: 'user' | 'bot'
  text?: string
  answer?: Answer
}

const STARTERS = ['Tritone sub là gì?', 'ii–V–I của E♭', 'Neuhaus nói gì về rubato?', 'So sánh Fux và Taneev', 'Quãng từ C đến A♭', 'Hình thức sonata gồm những phần nào?', 'Cách luyện quãng tám', 'Hợp âm trong giọng D thứ']
const HISTORY = 'assistant:history'
export const JUMP_KEY = 'assist-jump'

let worker: Worker | null = null
const getWorker = () => (worker ??= new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' }))

/** Floating button + chat panel: an offline assistant that answers from the library, citing the passages it used. */
export function Assistant() {
  const { open } = useAssistant()
  const { pathname } = useLocation()
  // The reader covers the app; the private pages have nothing to ask about.
  const hidden = /^\/curriculum\/[^/]+\/(?!tong-quan)/.test(pathname) && pathname.split('/').length > 3
  return (
    <>
      {!hidden && !open && (
        <button onClick={() => openAssistant()} className="as-fab" aria-label="Hỏi trợ lý lý thuyết" title="Hỏi trợ lý lý thuyết">
          <SparkleIcon width={22} height={22} />
        </button>
      )}
      {open && createPortal(<Panel context={/^\/theory\/([^/]+)/.exec(pathname)?.[1]} />, document.body)}
    </>
  )
}

function Panel({ context }: { context?: string }) {
  const navigate = useNavigate()
  const [msgs, setMsgs] = useState<Msg[]>(() => {
    try {
      return JSON.parse(sessionStorage.getItem(HISTORY) ?? '[]')
    } catch {
      return []
    }
  })
  const [q, setQ] = useState('')
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState<number | null>(null)
  const [count, setCount] = useState(0)
  const [closing, setClosing] = useState(false)
  const list = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLTextAreaElement>(null)
  const seq = useRef(Date.now())

  useEffect(() => {
    try {
      sessionStorage.setItem(HISTORY, JSON.stringify(msgs.slice(-30)))
    } catch {
      /* history is a convenience */
    }
    requestAnimationFrame(() => list.current?.scrollTo({ top: list.current.scrollHeight, behavior: 'smooth' }))
  }, [msgs])

  useEffect(() => {
    const w = getWorker()
    const onMsg = (e: MessageEvent) => {
      const m = e.data
      if (m.type === 'progress') setProgress(m.done / m.total)
      if (m.type === 'ready') {
        setProgress(null)
        setCount(m.articles)
      }
      if (m.type === 'answer') {
        setProgress(null)
        setCount(m.articles)
        setBusy(false)
        setMsgs((ms) => [...ms, { id: m.id, role: 'bot', answer: m.answer }])
      }
    }
    w.addEventListener('message', onMsg)
    w.postMessage({ type: 'warm' })
    const pending = takeQuestion()
    if (pending) ask(pending)
    input.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    addEventListener('keydown', onKey)
    return () => {
      w.removeEventListener('message', onMsg)
      removeEventListener('keydown', onKey)
    }
    // Runs once per opening; ask/close only use refs and setters.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ask = (text: string) => {
    const t = text.trim()
    if (!t || busy) return
    const id = ++seq.current
    setMsgs((ms) => [...ms, { id, role: 'user', text: t }])
    setQ('')
    setBusy(true)
    getWorker().postMessage({ type: 'ask', id: id + 0.5, q: t, context })
  }
  const close = () => {
    setClosing(true)
    setTimeout(closeAssistant, 220)
  }
  const open = (slug: string, sec: number) => {
    sessionStorage.setItem(JUMP_KEY, JSON.stringify({ slug, sec }))
    navigate(`/theory/${slug}`)
    if (matchMedia('(max-width: 768px)').matches) close()
  }

  return (
    <div className={clsx('as-root', closing && 'is-closing')}>
      <div className="as-scrim" onClick={close} />
      <section className="as-panel" role="dialog" aria-label="Trợ lý lý thuyết">
        <header className="as-head">
          <span className="as-orb" aria-hidden>
            <SparkleIcon width={18} height={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[17px] font-semibold leading-tight text-[var(--color-ink)]">Trợ lý lý thuyết</p>
            <p className="truncate text-[11.5px] text-[var(--color-ink-faint)]">
              {progress !== null ? `Đang lập chỉ mục thư viện… ${Math.round(progress * 100)}%` : `Tìm trong ${count ? count.toLocaleString('vi-VN') : '…'} bài · không cần mạng · luôn ghi nguồn`}
            </p>
          </div>
          {msgs.length > 0 && (
            <button onClick={() => setMsgs([])} className="as-ghost" title="Cuộc trò chuyện mới">
              Mới
            </button>
          )}
          <button onClick={close} className="as-icon" aria-label="Đóng">
            <XIcon width={18} height={18} />
          </button>
        </header>

        <div ref={list} className="as-list">
          {msgs.length === 0 && (
            <div className="as-empty">
              <p className="font-display text-[22px] font-semibold text-[var(--color-ink)]">Hỏi gì về lý thuyết?</p>
              <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
                Trợ lý đọc toàn bộ thư viện, trích đúng đoạn trả lời và dẫn tới bài gốc. Câu hỏi tính toán (hợp âm, ii–V–I, quãng, âm giai…) được tính chính xác.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {STARTERS.map((s, i) => (
                  <button key={s} onClick={() => ask(s)} className="as-chip" style={{ '--i': i } as CSSProperties}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {msgs.map((m) => (m.role === 'user' ? <p key={m.id} className="as-user">{m.text}</p> : <Reply key={m.id} a={m.answer!} onOpen={open} onAsk={ask} onTool={() => (navigate('/tools'), close())} />))}
          {busy && (
            <div className="as-typing" aria-label="Đang tìm">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <form
          className="as-form"
          onSubmit={(e) => {
            e.preventDefault()
            ask(q)
          }}
        >
          <textarea
            ref={input}
            value={q}
            rows={1}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                ask(q)
              }
            }}
            placeholder={context ? 'Hỏi về bài này hoặc bất kỳ chủ đề nào…' : 'Ví dụ: Cadence plagal là gì?'}
            className="as-input"
          />
          <button type="submit" disabled={!q.trim() || busy} className="as-send" aria-label="Gửi">
            ↑
          </button>
        </form>
      </section>
    </div>
  )
}

/** Bold markers in computed leads. */
const rich = (s: string): ReactNode[] => s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))

function Reply({ a, onOpen, onAsk, onTool }: { a: Answer; onOpen: (slug: string, sec: number) => void; onAsk: (q: string) => void; onTool: () => void }) {
  if (a.kind === 'none')
    return (
      <div className="as-bot">
        <p className="text-[14px] text-[var(--color-ink-muted)]">Thư viện chưa có đoạn nào khớp câu hỏi này. Thử diễn đạt khác, dùng thuật ngữ (vd. "cadence", "đối âm kép"), hoặc hỏi ngắn hơn.</p>
      </div>
    )
  // Number the sources in the order the sentences cite them.
  const cited: string[] = []
  const ref = (slug: string, sec: number) => {
    const k = `${slug}#${sec}`
    if (!cited.includes(k)) cited.push(k)
    return cited.indexOf(k) + 1
  }
  const sentences = a.sentences.map((s) => ({ ...s, n: ref(s.slug, s.sec) }))
  const sources = [...a.sources].sort((x, y) => {
    const ix = cited.indexOf(`${x.slug}#${x.sec}`)
    const iy = cited.indexOf(`${y.slug}#${y.sec}`)
    return (ix < 0 ? 99 : ix) - (iy < 0 ? 99 : iy)
  })
  let step = 0
  return (
    <div className="as-bot">
      {a.lead && (
        <p className="as-lead" style={{ '--i': step++ } as CSSProperties}>
          {rich(a.lead)}
        </p>
      )}
      {a.table && a.table.length > 0 && (
        <div className="as-table" style={{ '--i': step++ } as CSSProperties}>
          {a.table.map(([k, v], i) => (
            <div key={i}>
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      )}
      {a.tool && (
        <button onClick={onTool} className="as-tool" style={{ '--i': step++ } as CSSProperties}>
          ♫ Mở trong Bảng tính
        </button>
      )}
      {sentences.length > 0 && (
        <div className="space-y-1.5">
          {a.kind === 'compute' && <p className="as-label">Trong thư viện</p>}
          {sentences.map((s, i) => (
            <p key={i} className="as-sent" style={{ '--i': step++ } as CSSProperties}>
              {s.text}
              <button onClick={() => onOpen(s.slug, s.sec)} className="as-cite" title={s.title}>
                {s.n}
              </button>
            </p>
          ))}
        </div>
      )}
      {sources.length > 0 && (
        <div className="as-sources" style={{ '--i': step++ } as CSSProperties}>
          <p className="as-label">Nguồn</p>
          {sources.slice(0, 5).map((s) => {
            const n = cited.indexOf(`${s.slug}#${s.sec}`) + 1
            return (
              <button key={`${s.slug}#${s.sec}`} onClick={() => onOpen(s.slug, s.sec)} className="as-source">
                {n > 0 && <span className="as-num">{n}</span>}
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium text-[var(--color-ink)]">{s.title}</span>
                  {s.heading && <span className="block truncate text-[11.5px] text-[var(--color-ink-faint)]">§ {s.heading}</span>}
                </span>
                <span aria-hidden className="text-[var(--color-ink-faint)]">→</span>
              </button>
            )
          })}
        </div>
      )}
      {a.suggestions.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1" style={{ '--i': step++ } as CSSProperties}>
          {a.suggestions.map((s) => (
            <button key={s} onClick={() => onAsk(s)} className="as-chip is-small">
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
