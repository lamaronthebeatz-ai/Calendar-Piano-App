import { useMemo, type ReactNode } from 'react'
import { useSettings, useStudents, useTimetableSlots } from '../../hooks/useLiveData'
import { computeOverallStats, hoursByDayOfWeek, lessonsByDayOfWeek, studentsBySlotCount } from '../../services/statistics'
import { getWeekdayOrder, WEEKDAY_SHORT } from '../../utils/date'
import { formatCurrency } from '../../utils/format'
import { BarChart, HorizontalBarChart } from './charts'
import { EmptyState } from '../../components/EmptyState'
import { ChartIcon } from '../../components/icons'

export function StatisticsPage() {
  const slots = useTimetableSlots() ?? []
  const students = useStudents() ?? []
  const settings = useSettings()

  const weekdays = useMemo(() => getWeekdayOrder(settings.firstDayOfWeek), [settings.firstDayOfWeek])

  const overall = useMemo(() => computeOverallStats(slots, students), [slots, students])

  const lessonsPerDayData = useMemo(() => {
    const counts = lessonsByDayOfWeek(slots, weekdays)
    return weekdays.map((day, i) => ({ label: WEEKDAY_SHORT[day], value: counts[i] }))
  }, [slots, weekdays])

  const hoursPerDayData = useMemo(() => {
    const hours = hoursByDayOfWeek(slots, weekdays)
    return weekdays.map((day, i) => ({ label: WEEKDAY_SHORT[day], value: hours[i] }))
  }, [slots, weekdays])

  const topStudents = useMemo(
    () => studentsBySlotCount(slots, students, 6).map((e) => ({ label: e.student.nickname || e.student.name, value: e.count })),
    [slots, students],
  )

  const activeStudents = students.filter((s) => s.status === 'active').length
  const hasAnySlots = slots.length > 0

  return (
    <div className="h-full overflow-y-auto pb-24 lg:pb-6">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 lg:px-6">
        <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">Statistics</h1>
      </div>

      {!hasAnySlots ? (
        <EmptyState icon={<ChartIcon width={30} height={30} />} title="No data yet" description="Statistics will appear once you build out your weekly timetable." />
      ) : (
        <div className="space-y-6 px-4 py-5 lg:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Tile label="Lessons per week" value={String(overall.lessonCount)} />
            <Tile label="Teaching hours / week" value={`${overall.teachingHoursPerWeek}h`} />
            <Tile label="Students" value={String(overall.studentCount)} />
            <Tile label="Active students" value={String(activeStudents)} />
            {overall.estimatedWeeklyIncome > 0 && (
              <Tile label="Est. income / week" value={formatCurrency(overall.estimatedWeeklyIncome, settings.currency)} />
            )}
          </div>

          <ChartCard title="Lessons by day of week">
            <BarChart data={lessonsPerDayData} />
          </ChartCard>

          <ChartCard title="Teaching hours by day of week">
            <BarChart data={hoursPerDayData} valueSuffix="h" />
          </ChartCard>

          {topStudents.length > 0 && (
            <ChartCard title="Students by weekly lesson count">
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

function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] p-4">
      <p className="mb-4 text-[14px] font-semibold text-[var(--color-ink)]">{title}</p>
      {children}
    </div>
  )
}
