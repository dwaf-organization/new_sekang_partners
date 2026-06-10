import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'

export function InvestmentPage() {
  return (
    <main className="min-h-svh bg-white px-19.5 py-24 font-primary text-text-inverse max-lg:px-8 max-md:px-5">
      <ScrollReveal>
        <p className="text-sm font-bold tracking-[0.18em] text-primary">INVESTMENT</p>
        <h1 className="mt-5 text-[56px] leading-tight font-black max-md:text-[40px]">투자영역</h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-300">
          초기 스타트업부터 스케일업까지, 성장 단계별 투자 전략을 소개하는 페이지입니다.
        </p>
      </ScrollReveal>
    </main>
  )
}
