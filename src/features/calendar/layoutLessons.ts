import type { Lesson } from '../../types'
import { timeToMinutes } from '../../utils/time'

export interface PositionedLesson {
  lesson: Lesson
  columnIndex: number
  columnCount: number
}

/** Assigns overlapping lessons to side-by-side columns (interval graph coloring). */
export function layoutLessonsForDay(lessons: Lesson[]): PositionedLesson[] {
  const visible = lessons.filter((l) => l.status !== 'cancelled')
  const sorted = [...visible].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))

  const result: PositionedLesson[] = []
  let cluster: { lesson: Lesson; col: number }[] = []
  let clusterEnd = -Infinity
  const columnEndTimes: number[] = []

  const flushCluster = () => {
    if (cluster.length === 0) return
    const columnCount = Math.max(...cluster.map((c) => c.col)) + 1
    for (const item of cluster) {
      result.push({ lesson: item.lesson, columnIndex: item.col, columnCount })
    }
    cluster = []
    columnEndTimes.length = 0
    clusterEnd = -Infinity
  }

  for (const lesson of sorted) {
    const start = timeToMinutes(lesson.startTime)
    const end = timeToMinutes(lesson.endTime)

    if (start >= clusterEnd) {
      flushCluster()
    }

    let assignedCol = -1
    for (let i = 0; i < columnEndTimes.length; i++) {
      if (columnEndTimes[i] <= start) {
        assignedCol = i
        break
      }
    }
    if (assignedCol === -1) {
      assignedCol = columnEndTimes.length
      columnEndTimes.push(end)
    } else {
      columnEndTimes[assignedCol] = end
    }

    cluster.push({ lesson, col: assignedCol })
    clusterEnd = Math.max(clusterEnd, end)
  }
  flushCluster()

  return result
}
