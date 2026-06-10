import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { TeamMember } from '@/types/home.types'

type TeamSectionProps = {
  members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section id="team" className=" px-19.5 py-11 max-lg:px-8 max-md:px-5">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-[30px] leading-10 font-black">팀소개</h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-4 gap-7 max-lg:grid-cols-2 max-md:grid-cols-1">
          {members.map((member, index) => (
            <ScrollReveal delay={index * 0.08} key={member.id}>
              <article className="group relative h-75 overflow-hidden bg-white transition duration-500 hover:-translate-y-2 hover:bg-primary-100 hover:shadow-[rgba(14,81,213,0.2)_0px_8px_20px_0px]">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  src={member.imageUrl}
                  alt={`${member.name} ${member.role}`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-surface-base/90 to-transparent p-5 text-text-primary">
                  <h3 className="text-xl font-black">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-text-primary/75">{member.role}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
