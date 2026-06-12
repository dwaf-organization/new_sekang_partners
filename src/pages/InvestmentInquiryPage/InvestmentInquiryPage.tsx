import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'

export function InvestmentInquiryPage() {
  return (
    <main className="min-h-svh bg-surface-muted px-19.5 py-24 font-primary text-text-primary max-lg:px-8 max-md:px-5">
      <ScrollReveal>
        <p className="text-sm font-bold tracking-[0.18em] text-primary">CONTACT</p>
        <h1 className="mt-5 text-[56px] leading-tight font-black max-md:text-[40px]">투자 문의</h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-text-primary/80">
          투자 검토, 파트너십, 엑셀러레이팅 협업 문의를 접수하는 페이지입니다.
        </p>
      </ScrollReveal>
    </main>
  )
}
