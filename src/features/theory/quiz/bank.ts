import { GENERATED } from './generated'
import { LIBRARY } from './library'
import type { QuizQuestion } from './types'

const asked = new Set(LIBRARY.map((x) => x.q.toLowerCase()))

/** Every quiz question: facts taken from the library's articles, plus rule-based questions computed from theory. */
export const QUESTIONS: QuizQuestion[] = [...LIBRARY, ...GENERATED.filter((x) => !asked.has(x.q.toLowerCase()))]
