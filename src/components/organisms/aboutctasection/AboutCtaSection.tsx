import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { AboutCta } from '@/types/about.types'

type AboutCtaSectionProps = {
  cta: AboutCta
}

export function AboutCtaSection({ cta }: AboutCtaSectionProps) {
  return (
    <section className="bg-about-cta px-8 py-24 text-center text-text-primary max-md:px-5">
      <ScrollReveal>
        <h2 className="text-[34px] leading-tight font-black max-md:text-[28px]">{cta.title}</h2>
        <p className="mt-5 text-base font-semibold text-text-primary/48">{cta.description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <NavLink
            className="inline-flex h-13 items-center justify-center border border-white/70 px-8 text-sm font-black text-text-primary transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            to={cta.primaryPath}
          >
            {cta.primaryLabel}
          </NavLink>
        </div>
      </ScrollReveal>
    </section>
  )
}
