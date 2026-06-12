import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { AboutValueCard } from '@/components/molecules/aboutvaluecard/AboutValueCard'
import type { AboutValueCard as AboutValueCardType } from '@/types/about.types'

type AboutValueSectionProps = {
  cards: AboutValueCardType[]
}

export function AboutValueSection({ cards }: AboutValueSectionProps) {
  return (
    <section className="bg-section px-8 pt-12 pb-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <ScrollReveal>
          <h2 className="max-w-210 text-[42px] leading-[1.18] font-bold text-primary max-md:text-[30px]">
            가온브릿지는 투자·문화·글로벌·혁신을
            <br />
            하나로 잇는 창업 투자 파운드리입니다.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {cards.map((card, index) => (
            <ScrollReveal delay={index * 0.08} key={card.id}>
              <AboutValueCard card={card} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
