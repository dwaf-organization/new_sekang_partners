import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'

export function AcceleratingPage() {
  return (
    <main className="min-h-svh bg-surface-muted px-19.5 py-24 font-primary text-text-primary max-lg:px-8 max-md:px-5">
      <ScrollReveal>
        <p className="text-sm font-bold tracking-[0.18em] text-primary">ACCELERATING</p>
        <h1 className="mt-5 text-[56px] leading-tight font-black max-md:text-[40px]">
          엑셀러레이팅
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-text-primary/80">
          스타트업의 제품, 시장, 조직 성장을 함께 설계하는 프로그램 페이지입니다.
        </p>
      </ScrollReveal>
    </main>
  )
}
