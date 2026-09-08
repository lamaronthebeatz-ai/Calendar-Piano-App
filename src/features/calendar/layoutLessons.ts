import type { TimetableSlot } from '../../types'
import { timeToMinutes } from '../../utils/time'

export interface PositionedSlot {
  slot: TimetableSlot
  columnIndex: number
  columnCount: number
}

/** Assigns overlapping slots to side-by-side columns (interval graph coloring). */
export function layoutSlotsForDay(slots: TimetableSlot[]): PositionedSlot[] {
  const sorted = [...slots].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))

  const result: PositionedSlot[] = []
  let cluster: { slot: TimetableSlot; col: number }[] = []
  let clusterEnd = -Infinity
  const columnEndTimes: number[] = []

  const flushCluster = () => {
    if (cluster.length === 0) return
    const columnCount = Math.max(...cluster.map((c) => c.col)) + 1
    for (const item of cluster) {
      result.push({ slot: item.slot, columnIndex: item.col, columnCount })
    }
    cluster = []
    columnEndTimes.length = 0
    clusterEnd = -Infinity
  }

  for (const slot of sorted) {
    const start = timeToMinutes(slot.startTime)
    const end = timeToMinutes(slot.endTime)

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

    cluster.push({ slot, col: assignedCol })
    clusterEnd = Math.max(clusterEnd, end)
  }
  flushCluster()

  return result
}
