import type { Chapter } from '../types'
import { phucHung } from './phuc-hung'
import { trungCo } from './trung-co'

/** The chapters, in the order of history. A new era is one more file here. */
export const CHAPTERS: Chapter[] = [trungCo, phucHung]
