import globalBornImage from '@/assets/images/GlobalBorn.png'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { FoundryFeatureCard } from '@/components/molecules/foundryfeaturecard/FoundryFeatureCard'
import type { FoundryFeature } from '@/types/home.types'

type AboutFoundrySectionProps = {
  features: FoundryFeature[]
}

export function AboutFoundrySection({ features }: AboutFoundrySectionProps) {
  return (
    <section className="px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-360">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <ScrollReveal>
              <p className="text-xs font-black tracking-[0.28em] text-primary uppercase">
                About Gaonbridge
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 text-[48px] leading-[1.08] font-black max-md:text-[34px]">
                AI 시대를 여는
                <br />
                <span className="bg-linear-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                  창업 투자 파운드리
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8 max-w-160 space-y-5 text-base leading-8 font-semibold text-gray-300 max-md:text-sm max-md:leading-7">
                <p>
                  가온브릿지(GaonBridge)는 혁신적인 창업가와 미래 산업 사이의 다리 역할을 합니다.
                  <br /> 단순한 투자를 넘어, AI 기반의 파운드리 프로그램을 통해 창업 생태계 전반을
                  지원합니다.
                </p>
                <p>
                  2019년 설립 이래, 50개 이상의 스타트업에 투자하며 누적 기업가치 1조원이 넘는
                  <br /> 포트폴리오를 구축했습니다. <br /> 기술과 사람을 연결하고, 가능성을 현실로
                  만듭니다.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <dl className="mt-10 grid max-w-120 grid-cols-3 gap-7">
                <div>
                  <dt className="text-xs font-bold text-gray-300">설립연도</dt>
                  <dd className="mt-2 text-2xl font-black text-primary">2019</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-gray-300">포트폴리오</dt>
                  <dd className="mt-2 text-2xl font-black text-primary">50+</dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16} className="relative">
            <div className="overflow-hidden border border-primary-200 bg-surface-muted shadow-[rgba(14,81,213,0.18)_0px_18px_50px_0px]">
              <img
                className="h-105 w-full object-cover opacity-90 transition duration-700 hover:scale-105 max-md:h-70"
                src={globalBornImage}
                alt=""
              />
            </div>
            <div className="absolute right-8 bottom-8 w-130 border border-text-inverse/20 bg-white/60 rounded p-6 shadow-[rgba(0,0,0,0.14)_0px_18px_40px_0px] max-md:relative max-md:right-auto max-md:bottom-auto max-md:max-w-none">
              <p className="text-xs font-black tracking-[0.24em] text-primary uppercase">Mission</p>
              <p className="mt-3 text-sm leading-6 font-bold text-text-inverse">
                혁신적인 아이디어와 시장을 연결하여 새로운 가능성을 현실로 만듭니다.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal className="h-full" delay={index * 0.08} key={feature.id}>
              <FoundryFeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
