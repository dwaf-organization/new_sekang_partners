import { motion, useReducedMotion } from 'motion/react'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { HistoryYearItem } from '@/components/molecules/historyyearitem/HistoryYearItem'
import type { HistoryYear } from '@/types/about.types'

type CompanyHistorySectionProps = {
  backgroundImageUrl: string
  items: HistoryYear[]
}

export function CompanyHistorySection({ backgroundImageUrl, items }: CompanyHistorySectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-surface-muted px-8 py-28 text-text-primary max-md:px-5 max-md:py-20">
      <motion.img
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-38"
        src={backgroundImageUrl}
        alt=""
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-surface-base/88 via-surface-muted/82 to-surface-base/94" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,198,255,0.18),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(0,114,255,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:82px_82px] opacity-45 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_76%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-35%] w-1/3 rotate-12 bg-linear-to-r from-transparent via-primary-gradient-start/18 to-transparent blur-xl"
        animate={shouldReduceMotion ? undefined : { x: ['0%', '420%'] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-14 right-[12%] h-42 w-42 rounded-full border border-primary-gradient-start/20"
        animate={shouldReduceMotion ? undefined : { rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 mx-auto max-w-[1160px]">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.3em] text-primary-gradient-start uppercase">
            Company History
          </p>
          <h2 className="mt-6 text-[42px] leading-tight font-black max-md:text-[32px]">
            가온브릿지 연혁
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="relative mt-18 grid gap-10 overflow-hidden rounded-sm border border-white/12 bg-white/8 p-10 shadow-[rgba(0,0,0,0.28)_0px_24px_70px_0px] backdrop-blur-md md:grid-cols-5 max-md:p-6">
            <span className="absolute top-[45px] right-10 left-10 h-px bg-white/15 max-md:hidden" />
            <motion.span
              aria-hidden="true"
              className="absolute top-[45px] left-10 hidden h-px w-[calc(100%-80px)] origin-left bg-linear-to-r from-primary-gradient-start via-primary-gradient-end to-transparent md:block"
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.45 }}
            />
            {items.map((item) => (
              <HistoryYearItem item={item} key={item.id} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
