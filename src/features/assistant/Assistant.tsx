import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { LockIcon, SparkleIcon, XIcon } from '../../components/icons'
import { lockPrivate, usePrivateUnlocked } from '../../components/privateLock'
import { useSettings, useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import { useUIStore } from '../../store/uiStore'
import { navItems } from '../../layout/navItems'
import { db } from '../../data/db'
import { applyThemeToDocument, updateSettings } from '../../services/settingsService'
import { checkConflicts, deleteSlot, moveSlot } from '../../services/timetableService'
import { downloadBackupFile, exportBackup } from '../../services/backup'
import { startTour } from '../onboarding/tour'
import { openDonate } from '../donate/store'
import { fold, score } from '../search/fold'
import { WEEKDAY_NAMES } from '../../utils/date'
import { formatTimeRange } from '../../utils/time'
import type { DayOfWeek, Student, TimetableSlot } from '../../types'
import { addMinutes, needsUnlock, parse, type Command } from './commands'
import { closeAssistant, openAssistant, takeQuestion, useAssistant } from './store'
import './assistant.css'

interface Dest {
  path: string
  title: string
  hint: string
  icon: ReactNode
}
type Reply =
  | { type: 'text'; text: string; tone?: 'ok' | 'warn' | 'lock'; action?: { label: string; run: () => void }; undo?: () => Promise<void> }
  | { type: 'options'; text: string; items: Dest[] }
  | { type: 'slots'; text: string; slots: TimetableSlot[]; mode: 'move' | 'delete' | 'edit' | 'view'; day?: DayOfWeek; start?: string }
  | { type: 'students'; text: string; students: Student[]; then: (s: Student) => void }
interface Msg {
  id: number
  user?: string
  reply?: Reply
}

const EXAMPLES: [string, string[]][] = [
  ['Học viên và lịch', ['Tạo học viên mới Nguyễn Minh Anh', 'Thêm buổi cho Minh Anh thứ 3 lúc 17h30, 60 phút', 'Dời buổi của Minh Anh sang thứ 5 lúc 18h', 'Xoá buổi thứ 7 của Minh Anh', 'Hôm nay dạy ai?', 'Buổi tiếp theo']],
  ['Dịch chuyển', ['Đi đến hoà âm', 'Mở sách Neuhaus', 'Vòng quãng năm', 'Sổ nghiên cứu', 'Cài đặt']],
  ['Tiện ích', ['Giao diện tối', 'Sao lưu dữ liệu', 'Hướng dẫn sử dụng', 'Khoá lịch']],
]
const PRIVATE_PATHS = new Set(['/', '/students'])

/** Floating button + panel: typed commands for students and lessons, and quick travel anywhere in the app. */
export function Assistant() {
  const { open } = useAssistant()
  const { pathname } = useLocation()
  // Not over the book reader, which covers the app.
  const inReader = /^\/curriculum\/[^/]+\/(?!tong-quan$|in$)[^/]+/.test(pathname)
  return (
    <>
      {!inReader && !open && (
        <button onClick={() => openAssistant()} className="as-fab" aria-label="Trợ lý lệnh" title="Trợ lý lệnh: ra lệnh hoặc nói nơi muốn đến">
          <SparkleIcon width={22} height={22} />
        </button>
      )}
      {open && createPortal(<Panel />, document.body)}
    </>
  )
}

function Panel() {
  const navigate = useNavigate()
  const students = useStudents()
  const slots = useTimetableSlots()
  const settings = useSettings()
  const unlocked = usePrivateUnlocked()
  const ui = useUIStore()
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [q, setQ] = useState('')
  const [closing, setClosing] = useState(false)
  const list = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLTextAreaElement>(null)
  const seq = useRef(0)
  const name = (id: string) => {
    const s = students.find((x) => x.id === id)
    return s?.nickname || s?.name || '?'
  }

  useEffect(() => {
    requestAnimationFrame(() => list.current?.scrollTo({ top: list.current.scrollHeight, behavior: 'smooth' }))
  }, [msgs])
  useEffect(() => {
    const pending = takeQuestion()
    if (pending) run(pending)
    input.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
    // Once per opening.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const close = () => {
    setClosing(true)
    setTimeout(closeAssistant, 220)
  }
  const say = (reply: Reply) => setMsgs((m) => [...m, { id: ++seq.current, reply }])
  const go = (path: string) => {
    navigate(path)
    close()
  }
  const lockedReply = () =>
    say({ type: 'text', tone: 'lock', text: 'Thời khoá biểu và học viên đang khoá. Mở khoá bằng mã riêng rồi ra lệnh lại.', action: { label: 'Mở khoá', run: () => go('/') } })

  /* ----------------------------------------------------- actions */

  const doMove = async (slot: TimetableSlot, day?: DayOfWeek, start?: string, force = false) => {
    const d = day ?? slot.dayOfWeek
    const st = start ?? slot.startTime
    const en = addMinutes(st, slot.duration)
    if (d === slot.dayOfWeek && st === slot.startTime) return say({ type: 'text', text: 'Buổi này đã ở đúng thời gian đó rồi.' })
    const clash = (await checkConflicts({ id: slot.id, dayOfWeek: d, startTime: st, endTime: en })).filter((c) => c.id !== slot.id)
    if (clash.length && !force) {
      return say({
        type: 'text',
        tone: 'warn',
        text: `Trùng giờ với ${clash.map((c) => `${name(c.studentId)} (${formatTimeRange(c.startTime, c.endTime)})`).join(', ')} vào ${WEEKDAY_NAMES[d]}.`,
        action: { label: 'Vẫn dời', run: () => void doMove(slot, day, start, true) },
      })
    }
    const before = { day: slot.dayOfWeek, start: slot.startTime, end: slot.endTime }
    await moveSlot(slot.id, d, st, en)
    ui.pushToast('Đã dời buổi học', 'success')
    say({
      type: 'text',
      tone: 'ok',
      text: `Đã dời buổi của ${name(slot.studentId)} sang ${WEEKDAY_NAMES[d]} ${formatTimeRange(st, en)}.`,
      undo: () => moveSlot(slot.id, before.day, before.start, before.end),
    })
  }
  const doDelete = async (slot: TimetableSlot) => {
    await deleteSlot(slot.id)
    ui.pushToast('Đã xoá buổi học', 'success')
    say({
      type: 'text',
      tone: 'ok',
      text: `Đã xoá buổi ${WEEKDAY_NAMES[slot.dayOfWeek]} ${formatTimeRange(slot.startTime, slot.endTime)} của ${name(slot.studentId)}.`,
      undo: async () => void (await db.timetableSlots.put(slot)),
    })
  }

  /* ----------------------------------------------------- travel */

  const destinations = async (query: string): Promise<Dest[]> => {
    // "sách …", "bài …", "mục …", "chương …", "trang …" say what kind of place; they are not part of its name.
    const KINDS: Record<string, string> = { sach: 'book', giao: 'book', bai: 'article', muc: 'category', chuong: 'chapter', trang: 'page', hoc: 'student' }
    const raw = fold(query).split(/[^a-z0-9#♯♭]+/).filter(Boolean)
    const want = raw[0] && KINDS[raw[0]] && raw.length > 1 ? KINDS[raw[0]] : null
    const tokens = (want ? raw.slice(raw[0] === 'giao' && raw[1] === 'trinh' ? 2 : raw[0] === 'hoc' && raw[1] === 'vien' ? 2 : 1) : raw).filter(Boolean)
    if (!tokens.length) return []
    const kindBonus = (k: string) => (want === k ? 80 : 0)
    const hit = (t: string, a = '', s = '') => score(tokens, fold(t), fold(a), fold(s))
    const out: (Dest & { v: number })[] = []
    const page = (path: string, title: string, hint: string, icon: ReactNode, extra = '') => {
      if (PRIVATE_PATHS.has(path) && !unlocked) return
      const v = hit(title, extra)
      if (v > 0) out.push({ path, title, hint, icon, v: v + 40 + kindBonus('page') })
    }
    for (const n of navItems) page(n.to, n.label, 'Trang', <n.icon width={16} height={16} />, n.to === '/' ? 'thời khoá biểu lịch dạy' : '')
    page('/tools', 'Bảng tính nhạc lý', 'Trang', <span>♫</span>, 'vòng quãng năm hợp âm jazz âm giai quãng dịch giọng máy đếm nhịp metronome ii-V-I tritone')
    page('/settings', 'Sao lưu & dữ liệu', 'Cài đặt', <span>⚙︎</span>, 'xuất nhập dữ liệu backup giao diện hồ sơ')
    if (unlocked)
      for (const s of students) {
        const v = hit(s.name, s.nickname ?? '')
        if (v > 0) out.push({ path: `/students/${s.id}`, title: s.name, hint: 'Hồ sơ học viên', icon: <span>👤</span>, v: v + 30 + kindBonus('student') })
      }
    const { INDEX } = await import('../search/paletteIndex')
    const add = (list: typeof INDEX.articles, hint: string, icon: string, bonus: number, n: number) =>
      list
        .map((e) => ({ e, v: score(tokens, e.t, e.a, e.s) }))
        .filter((x) => x.v > 0)
        .sort((a, b) => b.v - a.v)
        .slice(0, n)
        .forEach(({ e, v }) => out.push({ path: e.path, title: e.title, hint: e.kind === 'chapter' ? `Chương · ${e.hint}` : hint || e.hint, icon: <span>{icon}</span>, v: v + bonus + kindBonus(e.kind) }))
    add(INDEX.categories, 'Mục thư viện', '▦', 25, 3)
    add(INDEX.books, '', '📖', 20, 3)
    add(INDEX.articles, '', '¶', 0, 6)
    add(INDEX.chapters, '', '§', -10, 3)
    const seen = new Set<string>()
    return out
      .sort((a, b) => b.v - a.v)
      .filter((d) => !seen.has(d.path) && seen.add(d.path))
      .slice(0, 8)
  }

  /* ----------------------------------------------------- run */

  const run = async (text: string) => {
    const t = text.trim()
    if (!t) return
    setMsgs((m) => [...m, { id: ++seq.current, user: t }])
    setQ('')
    const cmd: Command = parse(t, unlocked ? students : [], unlocked ? slots : [])
    if (needsUnlock(cmd) && !unlocked) return lockedReply()
    switch (cmd.kind) {
      case 'create-student':
        ui.openCreateStudent(cmd.name || undefined)
        navigate('/students')
        return close()
      case 'create-lesson': {
        const pick = (s?: Student) => {
          const minutes = cmd.minutes ?? s?.defaultDuration ?? settings.defaultLessonDuration
          ui.openCreateLesson({ studentId: s?.id, dayOfWeek: cmd.day, startTime: cmd.start, endTime: cmd.start ? addMinutes(cmd.start, minutes) : undefined, location: cmd.location ?? s?.defaultLocation, type: cmd.type })
          navigate('/')
          close()
        }
        if (cmd.candidates.length > 1) return say({ type: 'students', text: 'Buổi học cho học viên nào?', students: cmd.candidates, then: pick })
        return pick(cmd.student)
      }
      case 'move':
        if (!cmd.slots.length) return say({ type: 'text', tone: 'warn', text: cmd.who ? `Không thấy buổi nào của ${cmd.who.name} khớp lệnh.` : 'Không thấy buổi học nào khớp. Thử ghi rõ tên học viên, ví dụ: "dời buổi của Minh Anh sang thứ 5 lúc 18h".' })
        if (cmd.day === undefined && !cmd.start) return say({ type: 'text', tone: 'warn', text: 'Dời sang ngày nào, mấy giờ? Ví dụ: "… sang thứ 5 lúc 18h".' })
        if (cmd.slots.length === 1) return doMove(cmd.slots[0], cmd.day, cmd.start)
        return say({ type: 'slots', mode: 'move', text: 'Dời buổi nào?', slots: cmd.slots, day: cmd.day, start: cmd.start })
      case 'delete':
        if (!cmd.slots.length) return say({ type: 'text', tone: 'warn', text: 'Không thấy buổi học nào khớp lệnh.' })
        return say({ type: 'slots', mode: 'delete', text: cmd.slots.length === 1 ? 'Xoá buổi này?' : 'Xoá buổi nào?', slots: cmd.slots })
      case 'edit-lesson':
        if (cmd.slots.length === 1) {
          ui.openEditLesson(cmd.slots[0].id)
          navigate('/')
          return close()
        }
        return say({ type: 'slots', mode: 'edit', text: cmd.slots.length ? 'Sửa buổi nào?' : 'Không thấy buổi học nào khớp lệnh.', slots: cmd.slots })
      case 'edit-student':
      case 'profile': {
        const then = (s: Student) => {
          if (cmd.kind === 'edit-student') ui.openEditStudent(s.id)
          go(`/students/${s.id}`)
        }
        if (cmd.who) return then(cmd.who)
        return say(cmd.candidates.length ? { type: 'students', text: 'Học viên nào?', students: cmd.candidates, then } : { type: 'text', tone: 'warn', text: 'Không thấy học viên nào có tên đó.' })
      }
      case 'view': {
        let list = [...slots].sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
        if (cmd.who) list = list.filter((s) => s.studentId === cmd.who!.id)
        if (cmd.next) {
          const now = new Date()
          const key = (s: TimetableSlot) => ((s.dayOfWeek - now.getDay() + 7) % 7) * 1440 + Number(s.startTime.slice(0, 2)) * 60 + Number(s.startTime.slice(3)) - (now.getHours() * 60 + now.getMinutes())
          list = list.filter((s) => key(s) >= 0).sort((a, b) => key(a) - key(b)).slice(0, 3)
        } else if (cmd.day !== undefined) list = list.filter((s) => s.dayOfWeek === cmd.day)
        const label = cmd.next ? 'Các buổi sắp tới' : cmd.day !== undefined ? `${WEEKDAY_NAMES[cmd.day]}` : cmd.who ? `Lịch của ${cmd.who.name}` : 'Lịch tuần'
        return say({ type: 'slots', mode: 'view', text: list.length ? `${label}: ${list.length} buổi.` : `${label}: không có buổi nào.`, slots: list })
      }
      case 'theme':
        await updateSettings({ theme: cmd.theme })
        applyThemeToDocument(cmd.theme)
        return say({ type: 'text', tone: 'ok', text: `Đã chuyển giao diện ${cmd.theme === 'dark' ? 'tối' : cmd.theme === 'light' ? 'sáng' : 'theo hệ thống'}.` })
      case 'backup': {
        const outcome = await downloadBackupFile(await exportBackup())
        return say({ type: 'text', tone: outcome === 'saved' ? 'ok' : 'warn', text: outcome === 'saved' ? 'Đã xuất tệp sao lưu (lịch, học viên, ghi chú).' : 'Chưa lưu được tệp sao lưu — thử trong Cài đặt.', action: { label: 'Mở Cài đặt', run: () => go('/settings') } })
      }
      case 'tour':
        close()
        return setTimeout(startTour, 260)
      case 'donate':
        close()
        return setTimeout(openDonate, 240)
      case 'lock':
        lockPrivate()
        return say({ type: 'text', tone: 'lock', text: 'Đã khoá thời khoá biểu và học viên.' })
      case 'go': {
        const items = await destinations(cmd.query)
        if (!items.length) return say({ type: 'text', tone: 'warn', text: `Không tìm thấy nơi nào khớp "${cmd.query}". Thử tên trang, mục, sách hay bài (ví dụ "hoà âm", "Neuhaus", "cài đặt").` })
        return say({ type: 'options', text: 'Chọn nơi đến:', items })
      }
    }
  }

  const undo = async (m: Msg) => {
    if (m.reply?.type !== 'text' || !m.reply.undo) return
    await m.reply.undo()
    setMsgs((ms) => ms.map((x) => (x.id === m.id && x.reply?.type === 'text' ? { ...x, reply: { ...x.reply, undo: undefined, text: `${x.reply.text} (đã hoàn tác)` } } : x)))
    ui.pushToast('Đã hoàn tác', 'success')
  }

  const slotLine = (s: TimetableSlot) => `${name(s.studentId)} · ${WEEKDAY_NAMES[s.dayOfWeek]} ${formatTimeRange(s.startTime, s.endTime)}`

  return (
    <div className={clsx('as-root', closing && 'is-closing')}>
      <div className="as-scrim" onClick={close} />
      <section className="as-panel" role="dialog" aria-label="Trợ lý lệnh">
        <header className="as-head">
          <span className="as-orb" aria-hidden>
            <SparkleIcon width={18} height={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[17px] font-semibold leading-tight text-[var(--color-ink)]">Trợ lý lệnh</p>
            <p className="flex items-center gap-1 truncate text-[11.5px] text-[var(--color-ink-faint)]">
              {unlocked ? 'Ra lệnh cho lịch, học viên · nói nơi muốn đến' : (
                <>
                  <LockIcon width={11} height={11} /> Lịch và học viên đang khoá · vẫn dịch chuyển được
                </>
              )}
            </p>
          </div>
          {msgs.length > 0 && (
            <button onClick={() => setMsgs([])} className="as-ghost">
              Xoá
            </button>
          )}
          <button onClick={close} className="as-icon" aria-label="Đóng">
            <XIcon width={18} height={18} />
          </button>
        </header>

        <div ref={list} className="as-list">
          {msgs.length === 0 && (
            <div className="as-empty space-y-4">
              {EXAMPLES.map(([group, items], g) => (
                <div key={group}>
                  <p className="as-label mb-2 flex items-center gap-1">
                    {group}
                    {g === 0 && !unlocked && <LockIcon width={11} height={11} />}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s, i) => (
                      <button key={s} onClick={() => run(s)} className={clsx('as-chip', g === 0 && !unlocked && 'is-locked')} style={{ '--i': i + g * 3 } as CSSProperties}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {msgs.map((m) =>
            m.user ? (
              <p key={m.id} className="as-user">{m.user}</p>
            ) : (
              <div key={m.id} className={clsx('as-bot', m.reply?.type === 'text' && m.reply.tone && `is-${m.reply.tone}`)}>
                {m.reply?.type === 'text' && (
                  <>
                    <p className="as-lead">
                      {m.reply.tone === 'lock' && <LockIcon width={14} height={14} className="mr-1 inline" />}
                      {m.reply.text}
                    </p>
                    {(m.reply.action || m.reply.undo) && (
                      <div className="flex flex-wrap gap-2">
                        {m.reply.action && <button onClick={m.reply.action.run} className="as-tool">{m.reply.action.label}</button>}
                        {m.reply.undo && <button onClick={() => void undo(m)} className="as-tool">↶ Hoàn tác</button>}
                      </div>
                    )}
                  </>
                )}
                {m.reply?.type === 'options' && (
                  <>
                    <p className="as-label">{m.reply.text}</p>
                    <div className="as-dests">
                      {m.reply.items.map((d, i) => (
                        <button key={d.path} onClick={() => go(d.path)} className={clsx('as-dest', i === 0 && 'is-first')} style={{ '--i': i } as CSSProperties}>
                          <span className="as-dest-icon">{d.icon}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[13.5px] font-medium text-[var(--color-ink)]">{d.title}</span>
                            <span className="block truncate text-[11.5px] text-[var(--color-ink-faint)]">{d.hint}</span>
                          </span>
                          <span aria-hidden className="as-warp">↗</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {m.reply?.type === 'slots' && (
                  <>
                    <p className="as-lead">{m.reply.text}</p>
                    <div className="as-dests">
                      {m.reply.slots.map((s, i) => {
                        const r = m.reply as Extract<Reply, { type: 'slots' }>
                        const act =
                          r.mode === 'move' ? { label: 'Dời', run: () => void doMove(s, r.day, r.start) }
                          : r.mode === 'delete' ? { label: 'Xoá', run: () => void doDelete(s) }
                          : r.mode === 'edit' ? { label: 'Sửa', run: () => (ui.openEditLesson(s.id), go('/')) }
                          : { label: 'Mở', run: () => (ui.openDetail(s), go('/')) }
                        return (
                          <div key={s.id} className="as-dest" style={{ '--i': i } as CSSProperties}>
                            <span className="min-w-0 flex-1 text-[13.5px] text-[var(--color-ink)]">{slotLine(s)}</span>
                            <button onClick={act.run} className={clsx('as-tool', r.mode === 'delete' && 'is-danger')}>{act.label}</button>
                          </div>
                        )
                      })}
                    </div>
                  </>
                )}
                {m.reply?.type === 'students' && (
                  <>
                    <p className="as-lead">{m.reply.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {m.reply.students.map((s) => (
                        <button key={s.id} onClick={() => (m.reply as Extract<Reply, { type: 'students' }>).then(s)} className="as-chip">
                          {s.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ),
          )}
        </div>

        <form
          className="as-form"
          onSubmit={(e) => {
            e.preventDefault()
            void run(q)
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
                void run(q)
              }
            }}
            placeholder="Ví dụ: dời buổi của Minh sang thứ 5 lúc 18h · đi đến hoà âm"
            className="as-input"
          />
          <button type="submit" disabled={!q.trim()} className="as-send" aria-label="Gửi">
            ↑
          </button>
        </form>
      </section>
    </div>
  )
}
