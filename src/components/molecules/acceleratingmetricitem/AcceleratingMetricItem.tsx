import { BarChart3, CalendarDays, Clock3, Users, type LucideIcon } from 'lucide-react'

import type { AcceleratingMetric } from '@/types/accelerating.types'

type AcceleratingMetricItemProps = {
  metric: AcceleratingMetric
}

const metricIcons: Record<AcceleratingMetric['icon'], LucideIcon> = {
  clock: Clock3,
  users: Users,
  chart: BarChart3,
  calendar: CalendarDays,
}

export function AcceleratingMetricItem({ metric }: AcceleratingMetricItemProps) {
  const Icon = metricIcons[metric.icon]

  return (
    <div className="flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-gradient-start/12 text-primary-gradient-start ring-1 ring-primary-gradient-start/24">
        <Icon className="size-5" strokeWidth={2.2} />
      </span>
      <span>
        <span className="block text-xs font-bold text-text-primary/42">{metric.label}</span>
        <strong className="mt-1 block text-lg font-black text-text-primary">{metric.value}</strong>
      </span>
    </div>
  )
}
