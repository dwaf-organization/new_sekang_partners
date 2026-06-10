import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { ShowcaseCard } from '@/components/molecules/showcasecard/ShowcaseCard'
import type { ShowcaseItem } from '@/types/home.types'

type EducationSectionProps = {
  items: ShowcaseItem[]
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="rounded-t-[20px] to-primary/35 px-19.5 py-14  max-lg:px-8 max-md:px-5"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[190px_1fr] gap-10 max-lg:grid-cols-1">
        <ScrollReveal>
          <h2 className="text-[30px] leading-10 font-black">교육 프로그램</h2>
          <p className="mt-4 text-lg leading-7 font-semibold text-text-primary/80">
            세강파트너스가 함께하는 혁신 기업을 소개합니다.
          </p>
          <a
            className="mt-12 inline-flex min-w-38 items-center justify-center gap-3 rounded-[999px] border border-gray-400/70 px-6 py-3 text-sm font-bold transition duration-300 hover:border-primary hover:bg-primary hover:shadow-[rgba(14,81,213,0.35)_0px_8px_20px_0px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#education"
          >
            자세히보기
            <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>

        <div className="flex gap-3 overflow-x-auto pb-4">
          {items.map((item, index) => (
            <ScrollReveal delay={index * 0.08} key={`education-${item.id}`}>
              <ShowcaseCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
