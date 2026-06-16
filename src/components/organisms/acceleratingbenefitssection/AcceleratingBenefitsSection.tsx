import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { AcceleratingBenefitItem } from '@/components/molecules/acceleratingbenefititem/AcceleratingBenefitItem'
import type { AcceleratingBenefit } from '@/types/accelerating.types'

type AcceleratingBenefitsSectionProps = {
  benefits: AcceleratingBenefit[]
}

export function AcceleratingBenefitsSection({ benefits }: AcceleratingBenefitsSectionProps) {
  return (
    <section className="bg-surface-muted px-8 py-28 text-text-primary max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1240px]">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.34em] text-primary-gradient-start uppercase">
            Benefits
          </p>
          <h2 className="mt-5 text-[42px] leading-tight font-black max-md:text-[32px]">
            참여 혜택
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid border-b border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <ScrollReveal delay={index * 0.06} key={benefit.id}>
              <AcceleratingBenefitItem benefit={benefit} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
