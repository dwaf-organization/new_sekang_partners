import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { TeamMember } from '@/types/team.types'

type TeamMemberCardProps = {
  member: TeamMember
  delay?: number
}

export function TeamMemberCard({ member, delay = 0 }: TeamMemberCardProps) {
  return (
    <ScrollReveal delay={delay} y={34} className="group h-full">
      <article className="flex h-full flex-col items-start">
        <div className="relative size-33 overflow-hidden rounded-full bg-gray-100 shadow-[inset_0_0_0_1px_rgba(17,19,23,0.04)] max-md:size-28">
          <img
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            src={member.imageUrl}
            alt={`${member.name} 프로필 이미지`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary-gradient-start/0 transition duration-500 group-hover:bg-primary-gradient-start/8" />
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-black tracking-[-0.01em] text-text-inverse">{member.name}</h3>
          <p className="text-sm font-black text-gray-400">{member.position}</p>
        </div>

        <ul className="mt-5 space-y-2 text-[15px] leading-6 font-semibold text-gray-600">
          {member.careers.map((career) => (
            <li key={career}>{career}</li>
          ))}
        </ul>
      </article>
    </ScrollReveal>
  )
}
