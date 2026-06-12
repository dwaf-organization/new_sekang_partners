import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { NewsCard } from '@/components/molecules/newscard/NewsCard'
import { ROUTES } from '@/router/routes'
import type { NewsItem } from '@/types/home.types'

type NewsSectionProps = {
  items: NewsItem[]
}

export function NewsSection({ items }: NewsSectionProps) {
  const featuredItem = items.find((item) => item.featured) ?? items[0]
  const sideItems = items.filter((item) => item.id !== featuredItem.id)

  return (
    <section className="bg-surface-muted px-8 py-28 text-text-primary max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <ScrollReveal>
              <p className="text-xs font-black tracking-[0.28em] text-primary uppercase">
                News & Updates
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="mt-5 text-[44px] leading-tight font-black max-md:text-[34px]">
                최신 소식
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.14}>
            <NavLink
              className="rounded-sm text-sm font-black text-text-primary/60 transition duration-300 hover:text-primary-gradient-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              to={ROUTES.NEWS}
            >
              전체 보기 →
            </NavLink>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <ScrollReveal>
            <article className="group relative min-h-[360px] overflow-hidden bg-surface-muted text-text-primary shadow-[rgba(14,81,213,0.08)_0px_18px_44px_0px]">
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                src={featuredItem.imageUrl}
                alt=""
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-base via-surface-base/30 to-transparent" />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-8 max-md:p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-sm bg-primary px-3 py-1 text-xs font-black">
                    {featuredItem.category}
                  </span>
                  <time className="text-xs font-bold text-text-primary/75">
                    {featuredItem.date}
                  </time>
                </div>
                <h3 className="max-w-180 text-2xl leading-9 font-black max-md:text-xl max-md:leading-8">
                  {featuredItem.title}
                </h3>
              </div>
            </article>
          </ScrollReveal>

          <div className="grid content-start gap-5">
            {sideItems.map((item, index) => (
              <ScrollReveal delay={index * 0.08} key={item.id}>
                <NewsCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
