import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Avatar } from '../../components/Badge'
import { BookIcon, ClockIcon, GraduationIcon, LockIcon, MoonIcon, PlusIcon, SearchIcon, ShuffleIcon, SparkleIcon, UsersIcon } from '../../components/icons'
import { usePrivateUnlocked } from '../../components/privateLock'
import { useUIStore } from '../../store/uiStore'
import { useSettings, useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import { applyThemeToDocument, updateSettings } from '../../services/settingsService'
import { navItems } from '../../layout/navItems'
import { WEEKDAY_NAMES } from '../../utils/date'
import { formatTimeRange } from '../../utils/time'
import { LEVEL_LABELS } from '../../utils/labels'
import { fold, matches, score } from './fold'
import { pushRecent, recentPaths } from './recent'
import { openAssistant } from '../assistant/store'
import { openDonate } from '../donate/store'
import { canAnimate, useFlip } from '../../components/motion'
import '../../components/motion-ui.css'

// Results that were not there a keystroke ago fade up in a quick cascade.
const enterItem = (el: HTMLElement, n: number) => {
  if (!canAnimate()) return
  el.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], {
    duration: 240,
    delay: Math.min(n, 10) * 16,
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    fill: 'backwards',
  })
}

type Index = typeof import('./paletteIndex')

interface Item {
  id: string
  group: string
  title: string
  hint?: string
  icon: ReactNode
  hue?: number
  run: () => void
}

const KIND_LABEL = { article: 'Bài', book: 'Sách', chapter: 'Chương', category: 'Mục' } as const

/** The command palette: one box for pages, actions, the library, the bookshelf and (when unlocked) students and lessons. */
export function SearchOverlay() {
  const open = useUIStore((s) => s.searchOpen)
  const setOpen = useUIStore((s) => s.setSearchOpen)
  const { pathname } = useLocation()

  // Remember what was read, from wherever it was opened.
  useEffect(() => {
    pushRecent(pathname)
  }, [pathname])

  // ⌘K / Ctrl+K from anywhere, even inside a text field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(!useUIStore.getState().searchOpen)
      }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [setOpen])

  return open ? createPortal(<Palette onClose={() => setOpen(false)} />, document.body) : null
}

function Palette({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const openDetail = useUIStore((s) => s.openDetail)
  const openCreateLesson = useUIStore((s) => s.openCreateLesson)
  const openCreateStudent = useUIStore((s) => s.openCreateStudent)
  const settings = useSettings()
  const students = useStudents()
  const slots = useTimetableSlots()
  const privateOpen = usePrivateUnlocked()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [index, setIndex] = useState<Index | null>(null)
  const [closing, setClosing] = useState(false)
  const list = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let live = true
    import('./paletteIndex').then((m) => live && setIndex(m))
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      live = false
      document.body.style.overflow = prev
    }
  }, [])

  const close = () => {
    if (closing) return
    setClosing(true)
    setTimeout(onClose, 160)
  }
  const go = (path: string) => {
    close()
    navigate(path)
  }

  const items = useMemo<Item[]>(() => {
    const tokens = fold(query).split(/\s+/).filter(Boolean)
    const out: Item[] = []
    const pages: Item[] = [
      ...navItems.map((n) => ({ id: `nav${n.to}`, group: 'Đi tới', title: n.label, icon: <n.icon width={16} height={16} />, run: () => go(n.to) })),
      { id: 'nav/tools', group: 'Đi tới', title: 'Bảng tính nhạc lý', hint: 'Vòng quãng năm, hợp âm, jazz, âm giai, dịch giọng, nhịp', icon: <span className="text-[15px]">♫</span>, run: () => go('/tools') },
    ]
    const cycle = settings.theme === 'dark' ? 'light' : settings.theme === 'light' ? 'system' : 'dark'
    const actions: Item[] = [
      ...(privateOpen
        ? [
            { id: 'act-lesson', group: 'Thao tác', title: 'Thêm buổi học', hint: 'N', icon: <PlusIcon width={16} height={16} />, run: () => (close(), navigate('/'), openCreateLesson()) },
            { id: 'act-student', group: 'Thao tác', title: 'Thêm học viên', icon: <UsersIcon width={16} height={16} />, run: () => (close(), navigate('/students'), openCreateStudent()) },
          ]
        : []),
      {
        id: 'act-theme',
        group: 'Thao tác',
        title: `Giao diện: ${cycle === 'dark' ? 'tối' : cycle === 'light' ? 'sáng' : 'theo hệ thống'}`,
        icon: <MoonIcon width={16} height={16} />,
        run: () => {
          void updateSettings({ theme: cycle })
          applyThemeToDocument(cycle)
        },
      },
      { id: 'act-donate', group: 'Thao tác', title: 'Ủng hộ Lamar', hint: 'Mời một ly cà phê ☕', icon: <span className="text-[15px]">☕</span>, run: () => (close(), openDonate()) },
      ...(index ? [{ id: 'act-random', group: 'Thao tác', title: 'Mở một bài ngẫu nhiên', hint: 'Thư viện', icon: <ShuffleIcon width={16} height={16} />, run: () => go(index.randomArticle().path) }] : []),
    ]

    if (!tokens.length) {
      if (index) {
        for (const p of recentPaths()) {
          const e = index.byPath.get(p)
          if (e) out.push({ id: `recent${p}`, group: 'Đọc gần đây', title: e.title, hint: e.hint, hue: e.hue, icon: <ClockIcon width={16} height={16} />, run: () => go(p) })
        }
      }
      return [...out, ...actions, ...pages]
    }

    const hit = (title: string) => score(tokens, fold(title), '', '') > 0
    // A phrase of two words or more can go to the command assistant.
    if (tokens.length >= 2 || query.includes('?'))
      out.push({ id: 'ask', group: 'Trợ lý', title: `Ra lệnh: ${query.trim()}`, hint: 'Trợ lý lệnh — lịch, học viên, dịch chuyển', icon: <SparkleIcon width={16} height={16} />, run: () => (close(), openAssistant(query.trim())) })
    out.push(...pages.filter((p) => hit(p.title)), ...actions.filter((a) => hit(a.title)))

    if (privateOpen) {
      const byId = new Map(students.map((s) => [s.id, s]))
      for (const s of students) {
        if (score(tokens, fold(`${s.name} ${s.nickname ?? ''}`), fold(s.phone ?? ''), fold(s.notes ?? '')) > 0)
          out.push({ id: `st${s.id}`, group: 'Học viên', title: s.name, hint: LEVEL_LABELS[s.level], icon: <Avatar name={s.nickname || s.name} size={22} />, run: () => go(`/students/${s.id}`) })
      }
      const lessons = slots
        .filter((s) => {
          const st = byId.get(s.studentId)
          return score(tokens, fold(`${st?.nickname ?? ''} ${st?.name ?? ''} ${WEEKDAY_NAMES[s.dayOfWeek]}`), fold(`${s.location} ${s.type}`), fold(s.note ?? '')) > 0
        })
        .sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
        .slice(0, 8)
      for (const s of lessons) {
        const st = byId.get(s.studentId)
        out.push({
          id: `sl${s.id}`,
          group: 'Buổi học',
          title: st?.nickname || st?.name || '?',
          hint: `${WEEKDAY_NAMES[s.dayOfWeek]} · ${formatTimeRange(s.startTime, s.endTime)}`,
          icon: <ClockIcon width={16} height={16} />,
          run: () => (close(), navigate('/'), openDetail(s)),
        })
      }
    }

    if (index) {
      const ranked = (list: Index['INDEX']['articles'], n: number) =>
        list
          .map((e) => [score(tokens, e.t, e.a, e.s), e] as const)
          .filter(([s]) => s > 0)
          .sort((x, y) => y[0] - x[0])
          .slice(0, n)
          .map(([, e]) => e)
      const icon = (k: keyof typeof KIND_LABEL) => (k === 'article' ? <BookIcon width={16} height={16} /> : <GraduationIcon width={16} height={16} />)
      for (const e of ranked(index.INDEX.books, 5)) out.push({ id: e.path, group: 'Tủ sách', title: e.title, hint: e.hint, hue: e.hue, icon: icon(e.kind), run: () => go(e.path) })
      for (const e of ranked(index.INDEX.articles, 40)) out.push({ id: e.path, group: 'Thư viện', title: e.title, hint: e.hint, hue: e.hue, icon: icon(e.kind), run: () => go(e.path) })
      for (const e of ranked(index.INDEX.chapters, 8)) out.push({ id: e.path, group: 'Chương sách', title: e.title, hint: `${KIND_LABEL[e.kind]} · ${e.hint}`, hue: e.hue, icon: icon(e.kind), run: () => go(e.path) })
    }
    return out
    // go/close are recreated each render but only read state that the listed deps cover.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, index, students, slots, privateOpen, settings.theme])

  const tokens = useMemo(() => fold(query).split(/\s+/).filter(Boolean), [query])
  const current = Math.min(active, Math.max(0, items.length - 1))
  const order = useMemo(() => items.map((it) => it.id).join('\n'), [items])
  useFlip(list, order, enterItem)

  useLayoutEffect(() => {
    list.current?.querySelector(`[data-i="${current}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [current])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const d = e.key === 'ArrowDown' ? 1 : -1
      setActive((current + d + items.length) % Math.max(1, items.length))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      items[current]?.run()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      close()
    }
  }

  let lastGroup = ''
  return (
    <div className={clsx('palette fixed inset-0 z-[70] flex items-start justify-center px-3 pt-[max(12px,10vh)]', closing && 'is-closing')} onKeyDown={onKey}>
      <div className="palette-backdrop absolute inset-0" onClick={close} />
      <div role="dialog" aria-label="Tìm kiếm" className="palette-panel relative flex max-h-[min(640px,80dvh)] w-full max-w-[640px] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-float)]">
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4">
          <SearchIcon width={18} height={18} className="shrink-0 text-[var(--color-ink-faint)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            placeholder="Tìm bài, sách, trang, thao tác…"
            aria-label="Tìm kiếm"
            className="h-14 min-w-0 flex-1 bg-transparent text-[16px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-faint)]"
          />
          {!index && <span className="palette-spinner" aria-label="Đang tải thư viện" />}
          <kbd className="hidden rounded-md border border-[var(--color-border)] px-1.5 py-0.5 text-[10.5px] text-[var(--color-ink-faint)] sm:block">Esc</kbd>
        </div>

        <div ref={list} className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain p-2">
          {items.length === 0 && (
            <div className="px-4 py-12 text-center">
              <p className="text-[14px] font-medium text-[var(--color-ink)]">Không có kết quả</p>
              <p className="mt-1 text-[12.5px] text-[var(--color-ink-muted)]">Thử từ khác — tìm không cần dấu, ví dụ "hoa am", "sonata", "chopin".</p>
            </div>
          )}
          {items.map((it, i) => {
            const head = it.group !== lastGroup ? (lastGroup = it.group) : null
            return (
              <div key={it.id} data-flip={it.id}>
                {head && <p className="palette-head px-3 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-faint)] first:pt-1">{head}</p>}
                <button
                  data-i={i}
                  onMouseMove={() => i !== current && setActive(i)}
                  onClick={it.run}
                  className={clsx('palette-item flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left', i === current && 'is-active')}
                  style={it.hue != null ? ({ '--hue': it.hue } as React.CSSProperties) : undefined}
                >
                  <span className={clsx('palette-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg', it.hue != null && 'is-tinted')}>{it.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] text-[var(--color-ink)]">
                      <Highlight text={it.title} tokens={tokens} />
                    </span>
                    {it.hint && <span className="block truncate text-[12px] text-[var(--color-ink-muted)]">{it.hint}</span>}
                  </span>
                  <span className="palette-enter text-[11px] text-[var(--color-ink-faint)]">↵</span>
                </button>
              </div>
            )
          })}
          {!privateOpen && query.trim() && (
            <p className="flex items-center gap-2 px-3 py-3 text-[12px] text-[var(--color-ink-faint)]">
              <LockIcon width={13} height={13} /> Học viên và buổi học đang khoá — mở bằng mã riêng để tìm cả trong lịch dạy.
            </p>
          )}
        </div>

        <div className="hidden items-center gap-4 border-t border-[var(--color-border)] px-4 py-2 text-[11px] text-[var(--color-ink-faint)] sm:flex">
          <span><kbd className="palette-kbd">↑</kbd><kbd className="palette-kbd">↓</kbd> chọn</span>
          <span><kbd className="palette-kbd">↵</kbd> mở</span>
          <span><kbd className="palette-kbd">⌘K</kbd> bật / tắt</span>
          {index && <span className="ml-auto">{index.INDEX.articles.length.toLocaleString('vi-VN')} bài · tìm không cần dấu</span>}
        </div>
      </div>
    </div>
  )
}

function Highlight({ text, tokens }: { text: string; tokens: string[] }) {
  if (!tokens.length) return <>{text}</>
  const parts: ReactNode[] = []
  let at = 0
  for (const [a, b] of matches(text, tokens)) {
    if (a > at) parts.push(text.slice(at, a))
    parts.push(<mark key={a} className="palette-mark">{text.slice(a, b)}</mark>)
    at = b
  }
  parts.push(text.slice(at))
  return <>{parts}</>
}
