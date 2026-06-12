import companyHeroImage from '@/assets/images/CompanyHeroSection.png'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { AboutHero } from '@/types/about.types'

type CompanyHeroSectionProps = {
  hero: AboutHero
}

export function CompanyHeroSection({ hero }: CompanyHeroSectionProps) {
  return (
    <section className="relative min-h-[460px] overflow-hidden pt-20 text-text-primary">
      <img className="absolute inset-0 h-full w-full object-cover" src={companyHeroImage} alt="" />

      <div className="relative z-10 mx-auto flex min-h-[460px] max-w-[1440px] items-center px-8 py-24 max-md:px-5">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.3em] text-text-primary/70 uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 whitespace-pre-line text-5xl leading-[1.08] font-black max-md:text-[38px]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-140 text-base leading-7 font-semibold text-text-primary/72">
            {hero.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
