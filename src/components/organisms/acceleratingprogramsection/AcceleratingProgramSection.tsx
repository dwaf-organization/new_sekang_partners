import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { ProcessStepCard } from '@/components/molecules/processstepcard/ProcessStepCard'
import { ROUTES } from '@/router/routes'
import type { AcceleratingPoint, AcceleratingStep } from '@/types/home.types'

type AcceleratingProgramSectionProps = {
  points: AcceleratingPoint[]
  steps: AcceleratingStep[]
}

export function AcceleratingProgramSection({ points, steps }: AcceleratingProgramSectionProps) {
  return (
    <section className="bg-section-alt px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ScrollReveal>
            <p className="text-xs font-black tracking-[0.28em] text-primary uppercase">
              Accelerating Program
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-5 text-[48px] leading-[1.08] font-black max-md:text-[34px]">
              창업의 모든 단계,
              <br />
              <span className="text-primary">함께 걷습니다</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <p className="mt-8 max-w-150 text-base leading-8 font-semibold text-gray-300 max-md:text-sm max-md:leading-7">
              가온브릿지 액셀러레이팅 프로그램은 AI 시대에 맞는 창업팀을 육성합니다. 실행부터
              투자까지 빠르게 검증하고 성장합니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  className="flex items-center gap-3 text-sm font-bold text-gray-300"
                  key={point.id}
                >
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[rgba(14,81,213,0.5)_0px_0px_12px_2px]" />
                  {point.label}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.32}>
            <NavLink
              className="mt-10 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 text-sm font-black text-text-primary transition duration-300 hover:-translate-y-1 hover:shadow-[rgba(14,81,213,0.35)_0px_12px_28px_0px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95"
              to={ROUTES.ACCELERATING}
            >
              프로그램 지원하기 →
            </NavLink>
          </ScrollReveal>
        </div>

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <ScrollReveal delay={index * 0.08} key={step.id}>
              <ProcessStepCard step={step} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
