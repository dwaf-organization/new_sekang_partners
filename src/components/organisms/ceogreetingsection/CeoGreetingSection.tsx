import ceoImage from '@/assets/images/CEO.png'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { AboutStatItem } from '@/components/molecules/aboutstatitem/AboutStatItem'
import type { AboutStat, CeoGreeting } from '@/types/about.types'

type CeoGreetingSectionProps = {
  greeting: CeoGreeting
  stats: AboutStat[]
}

export function CeoGreetingSection({ greeting, stats }: CeoGreetingSectionProps) {
  return (
    <section className="bg-section px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <div className="mx-auto grid max-w-290 gap-18 lg:grid-cols-[0.95fr_1fr] lg:items-start">
        <ScrollReveal>
          <figure>
            <div className="overflow-hidden shadow-[rgba(14,81,213,0.12)_0px_22px_60px_0px]">
              <img
                className="h-170 w-full object-cover transition duration-700 hover:scale-105 max-md:h-107.5"
                src={ceoImage}
                alt="가온브릿지 대표 권오성"
              />
            </div>
            <figcaption className="mt-6 border-t-2 border-text-inverse pt-5">
              <p className="text-lg font-black text-text-inverse">{greeting.name}</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">{greeting.role}</p>
            </figcaption>
          </figure>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.08}>
            <p className="text-xs font-black tracking-[0.3em] text-primary uppercase">
              {greeting.eyebrow}
            </p>
            <h2 className="mt-6 whitespace-pre-line text-[42px] leading-[1.16] font-black max-md:text-[32px]">
              {greeting.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <blockquote className="mt-9 border-l-4 border-text-inverse py-3 pl-8 text-base leading-8 font-bold text-gray-700">
              {greeting.quote}
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="mt-9 space-y-6 text-base leading-8 font-semibold text-gray-300">
              {greeting.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.32}>
            <dl className="mt-12 grid grid-cols-2 gap-x-14 gap-y-8 border-t border-gray-200 pt-8">
              {stats.map((stat) => (
                <AboutStatItem key={stat.id} stat={stat} />
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
