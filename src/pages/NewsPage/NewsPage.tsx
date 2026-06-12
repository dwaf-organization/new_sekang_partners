import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'

export function NewsPage() {
  return (
    <main className="min-h-svh bg-white px-19.5 py-24 font-primary text-text-inverse max-lg:px-8 max-md:px-5">
      <ScrollReveal>
        <p className="text-sm font-bold tracking-[0.18em] text-primary">NEWS</p>
        <h1 className="mt-5 text-[56px] leading-tight font-black max-md:text-[40px]">뉴스</h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-300">
          세강파트너스의 새로운 소식과 투자 생태계 이야기를 전하는 페이지입니다.
        </p>
      </ScrollReveal>
    </main>
  )
}
