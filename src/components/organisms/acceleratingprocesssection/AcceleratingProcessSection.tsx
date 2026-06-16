import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { AcceleratingProcessCard } from '@/components/molecules/acceleratingprocesscard/AcceleratingProcessCard'
import type { AcceleratingProcess } from '@/types/accelerating.types'

type AcceleratingProcessSectionProps = {
  processes: AcceleratingProcess[]
}

export function AcceleratingProcessSection({ processes }: AcceleratingProcessSectionProps) {
  return (
    <section className="bg-about-history px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.34em] text-gray-400 uppercase">Process</p>
          <h2 className="mt-5 text-[42px] leading-tight font-black max-md:text-[32px]">
            프로그램 진행 과정
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-0 max-lg:gap-6">
          {processes.map((process, index) => (
            <ScrollReveal delay={index * 0.08} key={process.id}>
              <AcceleratingProcessCard
                process={process}
                align={index % 2 === 0 ? 'left' : 'right'}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
