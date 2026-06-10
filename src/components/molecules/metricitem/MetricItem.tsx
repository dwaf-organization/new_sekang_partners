import type { HomeMetric } from '@/types/home.types'

type MetricItemProps = {
  metric: HomeMetric
}

export function MetricItem({ metric }: MetricItemProps) {
  return (
    <div>
      <dt className="text-xs leading-5 font-bold text-primary">{metric.label}</dt>
      <dd className="mt-2 text-[28px] leading-9 font-black tracking-[-0.02em] text-text-inverse max-md:text-2xl">
        {metric.value}
      </dd>
    </div>
  )
}
