/** One multiple-choice question: the right answer, three wrong ones, and the article that teaches it. */
export interface QuizQuestion {
  q: string
  a: string
  w: [string, string, string]
  slug: string
}
