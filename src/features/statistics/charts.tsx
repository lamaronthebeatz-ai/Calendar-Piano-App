interface BarChartProps {
  data: Array<{ label: string; value: number }>
  valueSuffix?: string
  height?: number
}

export function BarChart({ data, valueSuffix = '', height = 140 }: BarChartProps) {
  const max = Math.max(1, ...data.map((d) => d.value))
  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {data.map((d) => {
        const barHeight = Math.max((d.value / max) * (height - 28), d.value > 0 ? 4 : 0)
        return (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-1.5">
            <span className="text-[10.5px] font-medium text-[var(--color-ink-muted)]">
              {d.value > 0 ? `${d.value}${valueSuffix}` : ''}
            </span>
            <div className="flex w-full flex-1 items-end">
              <div
                className="w-full rounded-md bg-[var(--color-accent)] transition-all"
                style={{ height: barHeight, opacity: d.value > 0 ? 1 : 0.15, minHeight: d.value > 0 ? 4 : 2 }}
              />
            </div>
            <span className="text-[10.5px] text-[var(--color-ink-faint)]">{d.label}</span>
          </div>
        )
      })}
    </div>
  )
}

interface HorizontalBarChartProps {
  data: Array<{ label: string; value: number }>
}

export function HorizontalBarChart({ data }: HorizontalBarChartProps) {
  const max = Math.max(1, ...data.map((d) => d.value))
  return (
    <div className="space-y-2.5">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-24 shrink-0 truncate text-[12.5px] text-[var(--color-ink-muted)]">{d.label}</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--color-surface-sunken)]">
            <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${(d.value / max) * 100}%` }} />
          </div>
          <span className="w-6 shrink-0 text-right text-[12.5px] font-medium text-[var(--color-ink)]">{d.value}</span>
        </div>
      ))}
    </div>
  )
}
