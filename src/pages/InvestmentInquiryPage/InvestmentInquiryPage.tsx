import { CheckCircle2, Clock3, FileText, Handshake, Mail, MapPin, Phone } from 'lucide-react'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'

const contactItems = [
  {
    id: 'email',
    icon: Mail,
    label: '이메일',
    value: 'dwaf@example.com',
    href: 'mailto:dwaf@example.com',
  },
  {
    id: 'phone',
    icon: Phone,
    label: '전화번호',
    value: '051-123-4567',
    href: 'tel:051-123-4567',
  },
  {
    id: 'address',
    icon: MapPin,
    label: '주소',
    value: '부산광역시 부산진구 BIFC2',
    href: 'https://map.naver.com/p/search/부산광역시 부산진구 BIFC2',
  },
]

const inquiryScopes = [
  '투자 검토',
  '파트너십 제안',
  '액셀러레이팅 협업',
  '창업교육 운영',
  '기관 프로그램 도입',
]

const inquiryProcess = [
  {
    id: 'submit',
    number: '01',
    title: '문의 접수',
    description: '연락처로 문의 내용을 보내주시면 담당자가 내용을 확인합니다.',
  },
  {
    id: 'review',
    number: '02',
    title: '내부 검토',
    description: '투자 분야, 협업 목적, 프로그램 적합성을 빠르게 검토합니다.',
  },
  {
    id: 'meeting',
    number: '03',
    title: '미팅 조율',
    description: '필요 시 온·오프라인 미팅을 통해 구체적인 진행 방향을 논의합니다.',
  },
]

const preparationItems = [
  '회사 및 팀 소개 자료',
  '제품 또는 서비스 소개서',
  '현재 투자 단계와 필요 자금',
  '협업 또는 문의 목적',
]

const reviewPoints = [
  {
    id: 'market',
    title: '시장성과 확장성',
    description: '해결하려는 문제가 충분히 크고, 국내외 시장으로 확장 가능한지 검토합니다.',
  },
  {
    id: 'team',
    title: '팀의 실행력',
    description: '핵심 인력의 경험, 기술 역량, 실행 속도와 장기 성장 가능성을 함께 봅니다.',
  },
  {
    id: 'fit',
    title: '가온브릿지와의 적합성',
    description: '투자, 액셀러레이팅, 기관 프로그램 연계 가능성을 기준으로 검토합니다.',
  },
]

export function InvestmentInquiryPage() {
  return (
    <main className="min-h-svh bg-white font-primary text-text-inverse">
      <section className="mx-auto max-w-[1180px]">
        <div className="px-8 pt-32 pb-18 max-md:px-5 max-md:pt-24">
          <ScrollReveal>
            <p className="text-sm font-black tracking-[0.26em] text-primary-gradient-start uppercase">
              Contact
            </p>
            <h1 className="mt-5 text-[56px] leading-tight font-black max-md:text-[40px]">
              투자 문의
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 font-semibold text-gray-600 max-md:text-base max-md:leading-7">
              투자 검토, 파트너십, 액셀러레이팅 협업, 기관 프로그램 도입까지 가온브릿지와 함께
              논의하고 싶은 내용을 보내주세요.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-8 px-8 pb-14 lg:grid-cols-[0.88fr_1.12fr] max-md:px-5">
          <div className="grid content-start gap-3">
            {contactItems.map((item, index) => {
              const Icon = item.icon

              return (
                <ScrollReveal delay={index * 0.08} key={item.id}>
                  <a
                    className="group flex items-center gap-5 border border-gray-200 bg-white px-6 py-5 shadow-[0_12px_32px_rgba(17,19,23,0.045)] transition duration-500 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_44px_rgba(14,81,213,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-md:items-start max-md:gap-4"
                    href={item.href}
                    rel={item.id === 'address' ? 'noreferrer' : undefined}
                    target={item.id === 'address' ? '_blank' : undefined}
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-primary text-text-primary transition duration-300 group-hover:bg-primary-gradient-start">
                      <Icon className="size-5" strokeWidth={2.2} />
                    </span>
                    <span>
                      <span className="text-sm font-black tracking-[0.12em] text-gray-400">
                        {item.label}
                      </span>
                      <span className="mt-1.5 block break-keep text-lg leading-7 font-black text-text-inverse max-lg:text-base">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </ScrollReveal>
              )
            })}

            <ScrollReveal delay={0.26}>
              <div className="border border-gray-200 bg-section p-7">
                <div className="flex items-center gap-3">
                  <Clock3 className="size-5 text-primary" strokeWidth={2.2} />
                  <h2 className="text-lg font-black">응답 안내</h2>
                </div>
                <p className="mt-4 text-sm leading-7 font-semibold text-gray-600">
                  영업일 기준 1~2일 내 확인 후 회신드립니다. 자료가 함께 전달되면 검토와 미팅 조율이
                  더 빠르게 진행됩니다.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.14}>
            <div className="h-full min-h-[340px] overflow-hidden border border-gray-200 bg-section shadow-[0_16px_42px_rgba(17,19,23,0.05)]">
              <iframe
                aria-label="가온브릿지 위치 지도"
                className="h-full min-h-[340px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20BIFC2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="가온브릿지 위치 지도"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.16}>
          <div className="mx-8 mb-28 overflow-hidden border border-gray-200 bg-section shadow-[0_20px_64px_rgba(17,19,23,0.07)] max-md:mx-5 max-md:mb-20">
            <div className="border-b border-gray-200 bg-white p-10 max-md:p-7">
              <p className="text-xs font-black tracking-[0.24em] text-primary-gradient-start uppercase">
                Inquiry Guide
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-black max-md:text-2xl">
                문의 전에 이런 정보를 함께 보내주세요
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {preparationItems.map((item) => (
                  <div className="flex items-center gap-3 bg-section px-4 py-3" key={item}>
                    <CheckCircle2 className="size-5 shrink-0 text-primary" strokeWidth={2.2} />
                    <span className="text-sm font-black text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-r border-gray-200 p-10 max-md:border-r-0 max-md:border-b max-md:p-7">
                <div className="flex items-center gap-3">
                  <Handshake className="size-5 text-primary" strokeWidth={2.2} />
                  <h3 className="text-xl font-black">문의 가능 영역</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {inquiryScopes.map((scope) => (
                    <span
                      className="inline-flex border border-primary-100 bg-white px-3.5 py-2 text-xs font-black text-primary"
                      key={scope}
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 max-md:p-7">
                <div className="flex items-center gap-3">
                  <FileText className="size-5 text-primary" strokeWidth={2.2} />
                  <h3 className="text-xl font-black">검토 기준</h3>
                </div>
                <div className="mt-6 grid gap-5">
                  {reviewPoints.map((point) => (
                    <div key={point.id}>
                      <h4 className="text-base font-black text-text-inverse">{point.title}</h4>
                      <p className="mt-2 text-sm leading-7 font-semibold text-gray-500">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 bg-white p-10 max-md:p-7">
              <p className="text-xs font-black tracking-[0.24em] text-gray-400 uppercase">
                Process
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {inquiryProcess.map((step) => (
                  <div className="border-l-2 border-primary pl-5" key={step.id}>
                    <p className="text-sm font-black text-primary">{step.number}</p>
                    <h3 className="mt-2 text-lg font-black text-text-inverse">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 font-semibold text-gray-500">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
