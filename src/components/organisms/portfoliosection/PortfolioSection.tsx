import { motion, useReducedMotion } from 'motion/react'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { ShowcaseCard } from '@/components/molecules/showcasecard/ShowcaseCard'
import type { ShowcaseItem } from '@/types/home.types'

type PortfolioSectionProps = {
  items: ShowcaseItem[]
}

export function PortfolioSection({ items }: PortfolioSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const scrollingItems = [...items, ...items]

  return (
    <section
      id="portfolio"
      className="rounded-t-[20px] bg-surface-muted px-19.5 py-14 text-text-primary max-lg:px-8 max-md:px-5"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[190px_1fr] gap-10 max-lg:grid-cols-1">
        <ScrollReveal>
          <h2 className="text-[30px] leading-10 font-black">포트폴리오</h2>
          <p className="mt-4 text-lg leading-7 font-semibold text-text-primary/80">
            세강파트너스가 함께하는 혁신 기업을 소개합니다.
          </p>
          <a
            className="mt-12 inline-flex min-w-38 items-center justify-center gap-3 rounded-[999px] border border-white/70 px-6 py-3 text-sm font-bold transition duration-300 hover:border-primary hover:bg-primary hover:shadow-[rgba(14,81,213,0.35)_0px_8px_20px_0px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#portfolio"
          >
            자세히보기
            <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>

        <ScrollReveal className="overflow-hidden py-2" delay={0.12}>
          <motion.div
            animate={shouldReduceMotion ? { x: 0 } : { x: '-50%' }}
            className="flex w-max gap-3"
            transition={{
              duration: 28,
              ease: 'linear',
              repeat: shouldReduceMotion ? 0 : Infinity,
            }}
          >
            {scrollingItems.map((item, index) => (
              <div aria-hidden={index >= items.length} key={`${item.id}-${index}`}>
                <ShowcaseCard item={item} />
              </div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
