import mainBannerImage from '@/assets/images/MainBannerImage.png'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { HomeHero } from '@/types/home.types'

type HeroSectionProps = {
  hero: HomeHero
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative min-h-svh overflow-hidden bg-surface-muted text-text-primary"
    >
      <img
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-90 motion-safe:animate-pulse"
        src={mainBannerImage}
        alt=""
      />
      <div className="absolute inset-0 bg-linear-to-r from-surface-base via-surface-base/70 to-surface-base/5" />
      <div className="absolute top-24 right-[18%] h-32 w-32 animate-spin rounded-full border border-primary/30 border-t-primary/80 duration-3000 max-lg:hidden" />
      <div className="absolute right-[8%] bottom-28 h-4 w-4 animate-bounce rounded-full bg-primary shadow-[rgba(14,81,213,0.45)_0px_0px_32px_10px]" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-360 items-center px-19.5 max-lg:px-8 max-md:px-5">
        <div className="max-w-140">
          <ScrollReveal>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-secondary backdrop-blur">
              SEKANG PARTNERS
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h1 className="text-[64px] leading-[1.12] font-black tracking-[-0.02em] text-text-primary max-lg:text-5xl max-md:text-[42px]">
              {hero.title}
              <br />
              <span className="bg-linear-to-r from-primary via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                {hero.highlightedTitle}
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <p className="mt-14 max-w-120 text-[22px] leading-8 font-semibold text-text-primary/90 max-md:mt-8 max-md:text-lg max-md:leading-7">
              {hero.description}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
