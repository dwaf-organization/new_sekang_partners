import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { InvestmentHero } from '@/types/investment.types'

type InvestmentPageHeroSectionProps = {
  hero: InvestmentHero
}

export function InvestmentPageHeroSection({ hero }: InvestmentPageHeroSectionProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden pt-20 text-text-primary">
      <img className="absolute inset-0 h-full w-full object-cover" src={hero.imageUrl} alt="" />
      <div className="absolute inset-0 bg-linear-to-r from-surface-base/86 via-surface-muted/68 to-surface-base/22" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_34%,rgba(0,198,255,0.2),transparent_28%),radial-gradient(circle_at_74%_22%,rgba(0,114,255,0.18),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1440px] items-center px-8 py-26 max-md:px-5">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.34em] text-primary-gradient-start uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 whitespace-pre-line text-6xl leading-[1.04] font-black max-md:text-[40px]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-170 text-lg leading-8 font-semibold text-text-primary/74 max-md:text-base">
            {hero.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
