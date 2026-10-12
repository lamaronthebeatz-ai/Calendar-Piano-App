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

export interface Level {
  title: string
  subtitle: string
  /** Rough duration, e.g. "3 – 4 tháng". */
  duration: string
  /** Repertoire to play during the level (titles, not links). */
  repertoire: string[]
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
}
