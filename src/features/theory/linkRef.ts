import { createContext } from 'react'

/**
 * Optional cross-reference for wiki links, e.g. a book returns "Bài 12" for a slug it contains, shown
 * after the link the way a printed book writes "(xem Bài 12)".
 */
export const LinkRefContext = createContext<((slug: string) => string | undefined) | null>(null)
