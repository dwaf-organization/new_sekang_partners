import { LeaderCard } from '@/components/molecules/leadercard/LeaderCard'
import type { Leader } from '@/types/team.types'

type LeadersSectionProps = {
  leaders: Leader[]
}

export function LeadersSection({ leaders }: LeadersSectionProps) {
  return (
    <section className="bg-white px-8 py-28 max-md:px-5 max-md:py-18">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-2xl font-black tracking-[-0.01em] text-text-inverse">Leaders</p>

        <div className="mt-18 grid grid-cols-2 gap-x-18 gap-y-16 max-lg:gap-x-10 max-md:mt-10 max-md:grid-cols-1">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.id} leader={leader} delay={index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
