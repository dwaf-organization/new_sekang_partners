import { TeamMemberCard } from '@/components/molecules/teammembercard/TeamMemberCard'
import type { TeamMember } from '@/types/team.types'

type TeamMembersSectionProps = {
  members: TeamMember[]
}

export function TeamMembersSection({ members }: TeamMembersSectionProps) {
  return (
    <section className="bg-white px-8 pb-32 max-md:px-5 max-md:pb-20">
      <div className="mx-auto max-w-[1240px] border-t border-gray-200 pt-18 max-md:pt-12">
        <p className="text-lg font-black tracking-[-0.01em] text-text-inverse">Team Members</p>

        <div className="mt-12 grid grid-cols-3 gap-x-24 gap-y-16 max-xl:gap-x-14 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-12">
          {members.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
