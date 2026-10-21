/** A lesson is an article of the theory library plus what to do with it at this point of the course. */
export interface Lesson {
  slug: string
  /** What to focus on in the article at this stage (the article may go further than the lesson). */
  focus?: string
}

export interface Unit {
  title: string
  /** What the learner can do after the unit. */
  goal: string
  lessons: Lesson[]
  /** Hands-on work at the piano for the unit. */
  practice: string[]
}

/** A piece to learn at a level. `slug` links to an analysis in the library when there is one. */
export interface Piece {
  title: string
  composer: string
  /** Where the grade or difficulty comes from, or what the piece trains. */
  note?: string
  slug?: string
}

/** What the matching graded exam asks for, so the level can double as exam preparation. */
export interface ExamSpec {
  scales: string
  sightReading: string
  aural: string
  theory: string
}

export interface Level {
  title: string
  subtitle: string
  /** The ABRSM grade (or other benchmark) the level corresponds to, e.g. "ABRSM Grade 3". */
  grade: string
  /** Suggested study time in months, as a range. */
  months: [number, number]
  pieces: Piece[]
  exam?: ExamSpec
  units: Unit[]
  /** Self-check before moving on. */
  checkpoint: string[]
}

export interface Curriculum {
  id: string
  title: string
  subtitle: string
  author: string
  audience: string
  /** Hue for the cover and accents. */
  hue: number
  glyph: string
  intro: string
  /** The design principles, each tied to a reason. */
  principles: { title: string; text: string }[]
  /** How a lesson week is organised. */
  routine: string[]
  levels: Level[]
  /** Article that compares and evaluates the world's method books. */
  review: string
  /** Where the curriculum ends, e.g. "ABRSM Grade 5". */
  goal: string
  /** Optional extra track after the graded levels (e.g. accompaniment). */
  tracks?: { title: string; subtitle: string; levels: Level[] }[]
}

/** A chapter of a book: a library article, with what to focus on when reading it in this book. */
export interface Chapter {
  slug: string
  focus?: string
}

export interface Part {
  title: string
  /** Opening text of the part: what it covers and why it comes here. */
  intro: string
  chapters: Chapter[]
  /** Exercises to do after the part. */
  exercises: string[]
}

/** A book compiled from library articles, read in the book reader. */
export interface Book {
  id: string
  title: string
  /** e.g. "Quyển 1". */
  volume: string
  subtitle: string
  author: string
  audience: string
  hue: number
  glyph: string
  /** Preface: paragraphs separated by blank lines (library markup). */
  preface: string
  parts: Part[]
}
