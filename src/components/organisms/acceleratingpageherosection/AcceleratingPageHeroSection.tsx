import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { AcceleratingMetricItem } from '@/components/molecules/acceleratingmetricitem/AcceleratingMetricItem'
import type { AcceleratingHero, AcceleratingMetric } from '@/types/accelerating.types'

type AcceleratingPageHeroSectionProps = {
  hero: AcceleratingHero
  metrics: AcceleratingMetric[]
}

export function AcceleratingPageHeroSection({ hero, metrics }: AcceleratingPageHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-20 text-text-primary">
      <img className="absolute inset-0 h-full w-full object-cover" src={hero.imageUrl} alt="" />
      <div className="absolute inset-0 bg-linear-to-r from-surface-base/88 via-surface-muted/68 to-surface-base/22" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_32%,rgba(0,198,255,0.22),transparent_28%),radial-gradient(circle_at_76%_24%,rgba(0,114,255,0.18),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1440px] items-center px-8 py-24 max-md:px-5">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.34em] text-primary-gradient-start uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 whitespace-pre-line text-6xl leading-[1.04] font-black max-md:text-[40px]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-160 text-lg leading-8 font-semibold text-text-primary/74 max-md:text-base">
            {hero.description}
          </p>
          <NavLink
            className="mt-9 inline-flex h-13 items-center justify-center bg-primary-gradient-start px-8 text-sm font-black text-text-primary transition duration-300 hover:-translate-y-1 hover:bg-primary-gradient-end hover:shadow-[0_18px_38px_rgba(0,198,255,0.26)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95"
            to={hero.primaryAction.path}
          >
            {hero.primaryAction.label}
          </NavLink>
        </ScrollReveal>
      </div>

      <div className="relative z-10 border-t border-white/8 bg-about-cta/92">
        <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-6 px-8 py-7 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-5">
          {metrics.map((metric) => (
            <AcceleratingMetricItem key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  )
}
