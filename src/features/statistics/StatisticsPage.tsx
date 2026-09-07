import { useMemo, type ReactNode } from 'react'
import { useLessons, useSettings, useStudents } from '../../hooks/useLiveData'
import { addDays, addWeeks, endOfMonth, endOfWeek, startOfMonth, startOfWeek, toDateKey } from '../../utils/date'
import { format } from 'date-fns'
import { computeOverallStats, lessonsByDay, studentsByLessonCount } from '../../services/statistics'
import { BarChart, HorizontalBarChart } from './charts'
import { EmptyState } from '../../components/EmptyState'
import { ChartIcon } from '../../components/icons'

export function StatisticsPage() {
  const lessons = useLessons() ?? []
  const students = useStudents() ?? []
  const settings = useSettings()

  const today = new Date()
  const weekStartsOn = settings.firstDayOfWeek

  const weekRange = useMemo((): [string, string] => {
    const start = startOfWeek(today, { weekStartsOn })
    const end = endOfWeek(today, { weekStartsOn })
    return [toDateKey(start), toDateKey(end)]
  }, [weekStartsOn])

  const monthRange = useMemo((): [string, string] => [toDateKey(startOfMonth(today)), toDateKey(endOfMonth(today))], [])

  const overall = useMemo(() => computeOverallStats(lessons, students, weekRange, monthRange), [lessons, students, weekRange, monthRange])

  const last7Days = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(today, i - 6)), [])
  const lessonsPerDayData = useMemo(() => {
    const keys = last7Days.map(toDateKey)
    const counts = lessonsByDay(lessons, keys)
    return last7Days.map((d, i) => ({ label: format(d, 'EEE'), value: counts[i] }))
  }, [lessons, last7Days])

  const last8Weeks = useMemo(() => Array.from({ length: 8 }, (_, i) => addWeeks(today, i - 7)), [])
  const hoursPerWeekData = useMemo(() => {
    return last8Weeks.map((weekAnchor) => {
      const start = toDateKey(startOfWeek(weekAnchor, { weekStartsOn }))
      const end = toDateKey(endOfWeek(weekAnchor, { weekStartsOn }))
      const minutes = lessons
        .filter((l) => l.date >= start && l.date <= end && l.status !== 'cancelled')
        .reduce((sum, l) => sum + l.duration, 0)
      return { label: format(weekAnchor, 'MMM d'), value: Math.round((minutes / 60) * 10) / 10 }
    })
  }, [lessons, last8Weeks, weekStartsOn])

  const topStudents = useMemo(
    () => studentsByLessonCount(lessons, students, 6).map((e) => ({ label: e.student.nickname || e.student.name, value: e.count })),
    [lessons, students],
  )

  const hasAnyLessons = lessons.length > 0

  return (
    <div className="h-full overflow-y-auto pb-24 lg:pb-6">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">Statistics</h1>
      </div>

      {!hasAnyLessons ? (
        <EmptyState icon={<ChartIcon width={30} height={30} />} title="No data yet" description="Statistics will appear once you start scheduling lessons." />
      ) : (
        <div className="space-y-6 px-4 py-5 lg:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Tile label="Lessons this week" value={String(overall.lessonsThisWeek)} />
            <Tile label="Lessons this month" value={String(overall.lessonsThisMonth)} />
            <Tile label="Teaching hours (mo)" value={`${overall.teachingHoursThisMonth}h`} />
            <Tile label="Active students" value={String(overall.activeStudents)} />
            <Tile label="Completion rate" value={`${overall.completionRate}%`} />
            <Tile label="Cancellation rate" value={`${overall.cancellationRate}%`} />
            <Tile label="No-show rate" value={`${overall.noShowRate}%`} />
          </div>

          <ChartCard title="Lessons per day" subtitle="Last 7 days">
            <BarChart data={lessonsPerDayData} />
          </ChartCard>

          <ChartCard title="Teaching hours per week" subtitle="Last 8 weeks">
            <BarChart data={hoursPerWeekData} valueSuffix="h" />
          </ChartCard>

          {topStudents.length > 0 && (
            <ChartCard title="Students by lesson count" subtitle="All time">
              <HorizontalBarChart data={topStudents} />
            </ChartCard>
          )}
        </div>
      )}
    </div>
  )
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] p-3.5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-ink-faint)]">{label}</p>
      <p className="mt-0.5 truncate text-[19px] font-semibold text-[var(--color-ink)]">{value}</p>
    </div>
  )
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] p-4">
      <div className="mb-4">
        <p className="text-[14px] font-semibold text-[var(--color-ink)]">{title}</p>
        {subtitle && <p className="text-[12px] text-[var(--color-ink-faint)]">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}
