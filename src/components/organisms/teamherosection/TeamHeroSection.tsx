import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { TeamHero } from '@/types/team.types'

type TeamHeroSectionProps = {
  hero: TeamHero
}

export function TeamHeroSection({ hero }: TeamHeroSectionProps) {
  return (
    <section className="relative min-h-[460px] overflow-hidden pt-20 text-text-primary">
      <img className="absolute inset-0 h-full w-full object-cover" src={hero.imageUrl} alt="" />
      <div className="absolute inset-0 bg-linear-to-r from-surface-base/78 via-surface-muted/58 to-surface-base/28" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(0,198,255,0.16),transparent_28%)]" />

      <div className="relative z-10 mx-auto flex min-h-[460px] max-w-[1440px] items-center px-8 py-24 max-md:px-5">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.3em] text-primary-gradient-start uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 whitespace-pre-line text-5xl leading-[1.08] font-black max-md:text-[38px]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-150 text-base leading-7 font-semibold text-text-primary/72">
            {hero.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
