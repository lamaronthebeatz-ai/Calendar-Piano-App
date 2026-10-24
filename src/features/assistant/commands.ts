/**
 * Reads a Vietnamese command ("dời buổi của Minh sang thứ 5 lúc 18h", "đi đến hoà âm") into an action.
 * Text is folded (lower case, no accents) with indices kept, so names can be cut out of the original text.
 */
import type { DayOfWeek, LessonLocation, LessonType, Student, TimetableSlot } from '../../types'
import { fold } from '../search/fold'

export type Command =
  | { kind: 'create-student'; name: string }
  | { kind: 'create-lesson'; student?: Student; candidates: Student[]; day?: DayOfWeek; start?: string; minutes?: number; location?: LessonLocation; type?: LessonType }
  | { kind: 'move'; slots: TimetableSlot[]; day?: DayOfWeek; start?: string; who?: Student }
  | { kind: 'delete'; slots: TimetableSlot[]; who?: Student }
  | { kind: 'edit-lesson'; slots: TimetableSlot[]; who?: Student }
  | { kind: 'edit-student'; who?: Student; candidates: Student[] }
  | { kind: 'profile'; who?: Student; candidates: Student[] }
  | { kind: 'view'; day?: DayOfWeek; next?: boolean; who?: Student }
  | { kind: 'theme'; theme: 'light' | 'dark' | 'system' }
  | { kind: 'backup' }
  | { kind: 'tour' }
  | { kind: 'lock' }
  | { kind: 'go'; query: string }

/* ------------------------------------------------------------ pieces */

const DAYS: [RegExp, DayOfWeek][] = [
  [/\b(thu\s*hai|thu\s*2|t2)\b/, 1], [/\b(thu\s*ba|thu\s*3|t3)\b/, 2], [/\b(thu\s*tu|thu\s*4|t4)\b/, 3], [/\b(thu\s*nam|thu\s*5|t5)\b/, 4],
  [/\b(thu\s*sau|thu\s*6|t6)\b/, 5], [/\b(thu\s*bay|thu\s*7|t7)\b/, 6], [/\b(chu\s*nhat|cn)\b/, 0],
]
const today = () => new Date().getDay() as DayOfWeek

/** Every weekday named in the text, in order of appearance. */
export function daysIn(f: string): { day: DayOfWeek; at: number }[] {
  const out: { day: DayOfWeek; at: number }[] = []
  for (const [re, day] of DAYS) for (const m of f.matchAll(new RegExp(re.source, 'g'))) out.push({ day, at: m.index! })
  for (const m of f.matchAll(/\bhom nay\b/g)) out.push({ day: today(), at: m.index! })
  for (const m of f.matchAll(/\bngay mai\b/g)) out.push({ day: ((today() + 1) % 7) as DayOfWeek, at: m.index! })
  return out.sort((a, b) => a.at - b.at)
}

/** Times like "17h", "5h30 chiều", "17:45", "9 giờ tối". */
export function timesIn(f: string): { time: string; at: number }[] {
  const out: { time: string; at: number }[] = []
  for (const m of f.matchAll(/\b(\d{1,2})\s*(?:h|:|g|gio)\s*(\d{2})?(?:\s*(?:phut))?\s*(sang|trua|chieu|toi|dem)?\b/g)) {
    let h = Number(m[1])
    const min = Number(m[2] ?? 0)
    const part = m[3]
    if ((part === 'chieu' || part === 'toi') && h < 12) h += 12
    if (part === 'trua' && h < 11) h += 12
    // "5h" with no part of day: lessons run in the afternoon and evening, so 1–7 means pm.
    if (!part && h >= 1 && h <= 7) h += 12
    if (h > 23 || min > 59) continue
    out.push({ time: `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`, at: m.index! })
  }
  return out
}

function minutesIn(f: string) {
  const m = /\b(\d{2,3})\s*phut\b/.exec(f) ?? /\b(\d(?:[.,]5)?)\s*(?:tieng|gio dong ho)\b/.exec(f)
  if (!m) return undefined
  const v = Number(m[1].replace(',', '.'))
  return /phut/.test(m[0]) ? v : Math.round(v * 60)
}
const locationIn = (f: string): LessonLocation | undefined =>
  /\bstudio\b|phong hoc/.test(f) ? 'Studio' : /tai nha|o nha|den nha/.test(f) ? 'Home' : /online|truc tuyen|zoom|goi video/.test(f) ? 'Online' : undefined
const typeIn = (f: string): LessonType | undefined =>
  /hoc thu/.test(f) ? 'Trial Lesson' : /hoc bu|day bu/.test(f) ? 'Makeup Lesson' : /piano.*ly thuyet|ly thuyet.*piano/.test(f) ? 'Piano + Theory' : /ly thuyet|nhac ly/.test(f) ? 'Theory' : undefined

export const addMinutes = (t: string, m: number) => {
  const [h, mm] = t.split(':').map(Number)
  const total = Math.min(23 * 60 + 59, h * 60 + mm + m)
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`
}

/** Students the text names: by full name, nickname, or the given name (the last word) alone. */
export function studentsIn(f: string, students: Student[]): Student[] {
  const hits: { s: Student; len: number }[] = []
  const has = (k: string) => k.length >= 2 && new RegExp(`(^|[^a-z0-9])${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^a-z0-9])`).test(f)
  for (const s of students) {
    const words = fold(s.name).trim().split(/\s+/)
    // The full name, the nickname, or the last two or more words ("Minh Anh" for "Nguyễn Minh Anh") count as naming them.
    const keys = [fold(s.nickname ?? '').trim(), ...words.map((_, i) => words.slice(i).join(' ')).filter((k) => k.includes(' '))].filter(Boolean)
    const full = keys.filter(has).sort((a, b) => b.length - a.length)[0]
    const given = words[words.length - 1] ?? ''
    if (full) hits.push({ s, len: full.length + 100 })
    else if (given.length >= 3 && has(given)) hits.push({ s, len: given.length })
  }
  hits.sort((a, b) => b.len - a.len)
  // A full-name match beats given-name matches of others.
  return hits[0]?.len > 100 ? hits.filter((h) => h.len > 100).map((h) => h.s) : hits.map((h) => h.s)
}

/* ------------------------------------------------------------ parse */

const PRIVATE = new Set(['create-student', 'create-lesson', 'move', 'delete', 'edit-lesson', 'edit-student', 'profile', 'view'])
export const needsUnlock = (c: Command) => PRIVATE.has(c.kind)

export function parse(text: string, students: Student[], slots: TimetableSlot[]): Command {
  const f = fold(text)
  const lesson = /\b(buoi|lich|tiet|lop)\b/.test(f)
  const learner = /\b(hoc vien|hoc sinh|hoc tro)\b/.test(f)
  const who = studentsIn(f, students)
  const days = daysIn(f)
  const times = timesIn(f)
  const slotsOf = (s?: Student, day?: DayOfWeek) => slots.filter((x) => (!s || x.studentId === s.id) && (day === undefined || x.dayOfWeek === day)).sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))

  // Utilities first: they are short and unambiguous.
  if (/\b(giao dien|che do|theme|nen)\b/.test(f) && /\b(toi|dem|dark)\b/.test(f)) return { kind: 'theme', theme: 'dark' }
  if (/\b(giao dien|che do|theme|nen)\b/.test(f) && /\b(sang|light)\b/.test(f)) return { kind: 'theme', theme: 'light' }
  if (/\b(giao dien|che do|theme)\b/.test(f) && /he thong|tu dong|auto/.test(f)) return { kind: 'theme', theme: 'system' }
  if (/sao luu|xuat du lieu|backup/.test(f)) return { kind: 'backup' }
  if (/huong dan|tour|cach dung/.test(f)) return { kind: 'tour' }
  if (/^(khoa|lock)\b|khoa (lai|lich|hoc vien)/.test(f)) return { kind: 'lock' }

  const verb = (re: RegExp) => re.test(f)
  if (verb(/\b(tao|them|moi|nhap)\b/) && learner && !lesson) {
    // The name is whatever follows "học viên (mới) (tên)".
    const m = /\b(?:hoc vien|hoc sinh|hoc tro)\b(?:\s+moi)?(?:\s+(?:ten|la))?\s*[:,-]?\s*/.exec(f)
    const name = m ? text.slice(m.index + m[0].length).trim() : ''
    return { kind: 'create-student', name: name.replace(/^["'“]|["'”]$/g, '') }
  }
  if (verb(/\b(tao|them|xep|dat|len lich|moi)\b/) && lesson) {
    return { kind: 'create-lesson', student: who.length === 1 ? who[0] : undefined, candidates: who, day: days[0]?.day, start: times[0]?.time, minutes: minutesIn(f), location: locationIn(f), type: typeIn(f) }
  }
  if (verb(/\b(doi|di chuyen|chuyen|dich|lui|day len|doi lich|doi gio|move)\b/) && (lesson || who.length)) {
    // "từ thứ 3 sang thứ 5": the day before "sang/qua/đến" is where it is now, the one after is where it goes.
    const cut = f.search(/\b(sang|qua|den|toi|thanh|vao luc|vao)\b/)
    const from = days.find((d) => cut < 0 || d.at < cut)
    const to = days.find((d) => cut >= 0 && d.at > cut) ?? (cut < 0 ? undefined : undefined)
    const at = times.find((t) => cut < 0 || t.at > cut) ?? (days.length <= 1 && cut < 0 ? times[0] : undefined)
    const s = who[0]
    const fromDay = to ? from?.day : days.length >= 2 ? days[0].day : undefined
    const toDay = to?.day ?? (days.length === 1 && cut >= 0 ? days[0].day : undefined)
    return { kind: 'move', slots: slotsOf(s, fromDay), day: toDay, start: at?.time, who: s }
  }
  if (verb(/\b(xoa|huy|bo|delete)\b/) && (lesson || who.length) && !learner) return { kind: 'delete', slots: slotsOf(who[0], days[0]?.day), who: who[0] }
  if (verb(/\b(sua|chinh|cap nhat)\b/) && learner) return { kind: 'edit-student', who: who.length === 1 ? who[0] : undefined, candidates: who }
  if (verb(/\b(sua|chinh|cap nhat)\b/) && (lesson || who.length)) return { kind: 'edit-lesson', slots: slotsOf(who[0], days[0]?.day), who: who[0] }
  if (/ho so|thong tin/.test(f) && who.length) return { kind: 'profile', who: who.length === 1 ? who[0] : undefined, candidates: who }
  if ((lesson || /\bday ai\b|\bhoc gi\b/.test(f)) && (days.length || /tiep theo|sap toi|ke tiep|ke den/.test(f) || who.length) && !verb(/\b(di den|mo|toi|vao)\b/))
    return { kind: 'view', day: days[0]?.day, next: /tiep theo|sap toi|ke tiep|ke den/.test(f), who: who[0] }
  // fold keeps indices, so the verb found in the folded text can be cut from the original.
  const lead = /^\s*(di den|di toi|bay den|bay toi|chuyen den|teleport|den|toi|mo|vao|qua|sang|xem)\s+/.exec(f)
  return { kind: 'go', query: lead ? text.slice(lead[0].length) : text }
}
