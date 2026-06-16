import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { PortfolioDetail } from '@/types/portfolio.types'

type PortfolioDetailContentSectionProps = {
  detail: PortfolioDetail
}

export function PortfolioDetailContentSection({ detail }: PortfolioDetailContentSectionProps) {
  const [mainGallery, ...subGallery] = detail.gallery

  return (
    <section className="bg-white px-8 py-20 text-text-inverse max-md:px-5 max-md:py-14">
      <div className="mx-auto max-w-360">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <ScrollReveal>
            <div>
              <p className="text-xs font-black tracking-[0.34em] text-gray-400 uppercase">About</p>
              <div className="mt-7 space-y-6 text-base leading-8 font-semibold text-gray-600">
                {detail.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <aside className="border border-gray-200 bg-section p-8 shadow-[0_18px_48px_rgba(17,19,23,0.06)]">
              <h2 className="text-lg font-black text-text-inverse">프로그램 정보</h2>
              <dl className="mt-6 divide-y divide-gray-200">
                {detail.info.map((item) => (
                  <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 py-4" key={item.label}>
                    <dt className="text-sm font-bold text-gray-500">{item.label}</dt>
                    <dd className="text-right text-sm font-black text-text-inverse">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-24">
          <p className="text-xs font-black tracking-[0.34em] text-gray-400 uppercase">Gallery</p>
          {mainGallery ? (
            <div className="mt-7 overflow-hidden bg-gray-100">
              <img
                className="aspect-[2.35/1] w-full object-cover"
                src={mainGallery.imageUrl}
                alt={mainGallery.alt}
              />
            </div>
          ) : null}
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {subGallery.map((item) => (
              <div className="overflow-hidden bg-gray-100" key={item.id}>
                <img
                  className="aspect-[1.55/1] h-full w-full object-cover"
                  src={item.imageUrl}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
