import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { ROUTES } from '@/router/routes'
import type { PortfolioDetail } from '@/types/portfolio.types'

type PortfolioDetailHeroSectionProps = {
  detail: PortfolioDetail
}

export function PortfolioDetailHeroSection({ detail }: PortfolioDetailHeroSectionProps) {
  return (
    <section className="relative min-h-90 overflow-hidden pt-20 text-text-primary">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={detail.heroImageUrl}
        alt=""
      />
      <div className="absolute inset-0 bg-linear-to-r from-surface-base/92 via-surface-muted/72 to-surface-base/32" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(0,198,255,0.16),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[70px_70px]" />

      <div className="relative z-10 mx-auto flex min-h-90 max-w-360 flex-col justify-center px-8 py-18 max-md:px-5">
        <ScrollReveal>
          <NavLink
            className="inline-flex text-sm font-black text-text-primary/70 transition duration-300 hover:text-primary-gradient-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            to={ROUTES.PORTFOLIO}
          >
            ← 포트폴리오 목록
          </NavLink>
          <h1 className="mt-8 text-5xl leading-tight font-black max-md:text-[38px]">
            {detail.title}
          </h1>
          <p className="mt-5 text-base font-semibold text-text-primary/68">{detail.subtitle}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
