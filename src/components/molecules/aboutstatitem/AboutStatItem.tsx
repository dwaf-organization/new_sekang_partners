import type { AboutStat } from '@/types/about.types'

type AboutStatItemProps = {
  stat: AboutStat
}

export function AboutStatItem({ stat }: AboutStatItemProps) {
  return (
    <div>
      <dt className="text-[30px] leading-9 font-black text-text-inverse max-md:text-2xl">
        {stat.value}
      </dt>
      <dd className="mt-1 text-sm font-bold text-gray-300">{stat.label}</dd>
    </div>
  )
}
