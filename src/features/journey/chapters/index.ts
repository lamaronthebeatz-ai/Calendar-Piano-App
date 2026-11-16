import type { Chapter } from '../types'
import { baroque } from './baroque'
import { coDien } from './co-dien'
import { langMan } from './lang-man'
import { quocGia } from './quoc-gia'
import { phucHung } from './phuc-hung'
import { trungCo } from './trung-co'
import { vnCoDai } from './vn-co-dai'
import { vnNguyen } from './vn-nguyen'
import { vnPhapThuoc } from './vn-phap-thuoc'
import { vnKhangChien } from './vn-khang-chien'
import { vnHaiMien } from './vn-hai-mien'
import { vnSau1975 } from './vn-sau-1975'

/** The world journey's chapters, in the order of history. A new era is one more file here. */
export const CHAPTERS: Chapter[] = [trungCo, phucHung, baroque, coDien, langMan, quocGia]

/** The Vietnamese journey: played on its own, its own chapters and its own first chapter open from the start. */
export const VN_CHAPTERS: Chapter[] = [vnCoDai, vnNguyen, vnPhapThuoc, vnKhangChien, vnHaiMien, vnSau1975]

export interface Track {
  id: 'the-gioi' | 'viet-nam'
  title: string
  chapters: Chapter[]
}
export const TRACKS: Track[] = [
  { id: 'the-gioi', title: 'Hành trình thế giới', chapters: CHAPTERS },
  { id: 'viet-nam', title: 'Hành trình Việt Nam', chapters: VN_CHAPTERS },
]
export const ALL_CHAPTERS: Chapter[] = TRACKS.flatMap((t) => t.chapters)
/** The journey a chapter belongs to (the world one for an unknown id). */
export const trackOf = (chapterId: string) => TRACKS.find((t) => t.chapters.some((c) => c.id === chapterId)) ?? TRACKS[0]
