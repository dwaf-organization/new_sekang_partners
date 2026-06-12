import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { Leader } from '@/types/team.types'

type LeaderCardProps = {
  leader: Leader
  delay?: number
}

export function LeaderCard({ leader, delay = 0 }: LeaderCardProps) {
  return (
    <ScrollReveal delay={delay} className="group">
      <article className="flex h-full flex-col">
        <div className="relative aspect-[1.05/1] overflow-hidden bg-gray-100">
          <img
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
            src={leader.imageUrl}
            alt={`${leader.name} 프로필 이미지`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-base/8 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>

        <div className="mt-8 border-t-2 border-text-inverse pt-6">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <h2 className="text-3xl font-black tracking-[-0.01em] text-text-inverse max-md:text-2xl">
              {leader.name}
            </h2>
            <p className="text-base font-black text-gray-500">{leader.position}</p>
          </div>

          <ul className="mt-10 space-y-3 text-lg leading-8 font-semibold text-gray-700 max-md:mt-7 max-md:text-base">
            {leader.careers.map((career) => (
              <li key={career}>{career}</li>
            ))}
          </ul>
        </div>
      </article>
    </ScrollReveal>
  )
}
