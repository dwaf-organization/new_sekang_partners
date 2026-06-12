import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { InvestmentAreaCard } from '@/components/molecules/investmentareacard/InvestmentAreaCard'
import type { InvestmentArea } from '@/types/home.types'

type InvestmentAreasSectionProps = {
  areas: InvestmentArea[]
}

export function InvestmentAreasSection({ areas }: InvestmentAreasSectionProps) {
  return (
    <section className="bg-section-alt px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <ScrollReveal>
              <p className="text-xs font-black tracking-[0.28em] text-primary uppercase">
                Investment Areas
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 text-[48px] leading-[1.08] font-black max-md:text-[34px]">
                미래를 만드는
                <br />
                <span className="bg-linear-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                  6가지 투자 영역
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.16}>
            <p className="text-right text-sm leading-5 text-gray-600 max-md:text-sm max-md:leading-4">
              가온브릿지는 AI를 중심으로 딥테크, 플랫폼, 기후테크,
              <br /> 헬스테크, 핀테크 영역에서 미래를 선도하는
              <br /> 기업을 발굴합니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area, index) => (
            <ScrollReveal delay={index * 0.06} key={area.id}>
              <InvestmentAreaCard area={area} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
