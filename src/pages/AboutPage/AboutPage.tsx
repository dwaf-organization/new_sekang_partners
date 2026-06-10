import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'

export function AboutPage() {
  return (
    <main className="min-h-svh bg-surface-muted px-19.5 py-24 font-primary text-text-primary max-lg:px-8 max-md:px-5">
      <ScrollReveal>
        <p className="text-sm font-bold tracking-[0.18em] text-primary">ABOUT</p>
        <h1 className="mt-5 text-[56px] leading-tight font-black max-md:text-[40px]">회사소개</h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-text-primary/80">
          세강파트너스의 비전, 투자 철학, 성장 파트너십을 소개하는 페이지입니다.
        </p>
      </ScrollReveal>
    </main>
  )
}
