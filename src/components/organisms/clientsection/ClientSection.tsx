import { motion, useReducedMotion } from 'motion/react'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { ClientLogoCard } from '@/components/molecules/clientlogocard/ClientLogoCard'
import type { ClientLogo } from '@/types/home.types'

type ClientSectionProps = {
  clients: ClientLogo[]
}

export function ClientSection({ clients }: ClientSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const scrollingClients = [...clients, ...clients]

  return (
    <section className="px-8 py-24 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.28em] text-primary uppercase">Clients</p>
        </ScrollReveal>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
          <ScrollReveal delay={0.08}>
            <h2 className="text-[48px] leading-[1.08] font-black max-md:text-[34px]">
              함께 만든
              <br />
              <span className="bg-linear-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                실적 공공기관
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="max-w-120 text-right text-sm leading-6 font-semibold text-gray-300 max-md:text-left">
              가온브릿지와 함께 프로젝트를 수행한 기관과 기업입니다.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-14 overflow-hidden py-3" delay={0.12}>
          <motion.div
            animate={shouldReduceMotion ? { x: 0 } : { x: '-50%' }}
            className="flex w-max gap-4"
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: shouldReduceMotion ? 0 : Infinity,
            }}
          >
            {scrollingClients.map((client, index) => (
              <div aria-hidden={index >= clients.length} key={`${client.id}-${index}`}>
                <ClientLogoCard client={client} />
              </div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
