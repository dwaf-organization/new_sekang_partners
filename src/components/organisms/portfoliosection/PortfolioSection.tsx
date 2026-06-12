import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { PortfolioProgramCard } from '@/components/molecules/portfolioprogramcard/PortfolioProgramCard'
import type { PortfolioProgram } from '@/types/home.types'

type PortfolioSectionProps = {
  programs: PortfolioProgram[]
}

export function PortfolioSection({ programs }: PortfolioSectionProps) {
  return (
    <section className=" px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <ScrollReveal>
          <p className="text-xs font-black tracking-[0.28em] text-primary uppercase">Portfolio</p>
        </ScrollReveal>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
          <ScrollReveal delay={0.08}>
            <h2 className="text-[48px] leading-[1.08] font-black max-md:text-[34px]">
              운영 프로그램
              <br />
              <span className="bg-linear-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                포트폴리오
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="max-w-120 text-right text-sm leading-6 font-semibold text-gray-300 max-md:text-left">
              투자, 교육, 액셀러레이팅, 글로벌 진출까지 창업팀의 성장을 돕는 대표 프로그램입니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <ScrollReveal delay={index * 0.06} key={program.id}>
              <PortfolioProgramCard program={program} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
