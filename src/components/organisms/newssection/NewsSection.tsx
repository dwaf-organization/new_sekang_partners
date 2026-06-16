import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { NewsGalleryCard } from '@/components/molecules/newsgallerycard/NewsGalleryCard'
import { NewsGalleryModal } from '@/components/organisms/newsgallerymodal/NewsGalleryModal'
import { ROUTES } from '@/router/routes'
import type { NewsGalleryItem } from '@/types/news.types'

type NewsSectionProps = {
  items: NewsGalleryItem[]
}

export function NewsSection({ items }: NewsSectionProps) {
  const [selectedItem, setSelectedItem] = useState<NewsGalleryItem | null>(null)
  const mainItems = items.slice(0, 4)

  return (
    <>
      <section className="bg-white px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
        <div className="mx-auto max-w-360">
          <div className="flex items-end justify-between gap-8 max-md:items-start">
            <div>
              <ScrollReveal>
                <p className="text-xs font-black tracking-[0.28em] text-primary-gradient-start uppercase">
                  News & Updates
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="mt-5 text-[44px] leading-tight font-black max-md:text-[34px]">
                  최신 소식
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.14}>
              <NavLink
                className="rounded-sm text-sm font-black text-gray-500 transition duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                to={ROUTES.NEWS}
              >
                전체 보기 →
              </NavLink>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mainItems.map((item, index) => (
              <ScrollReveal delay={index * 0.08} key={item.id}>
                <NewsGalleryCard item={item} onSelect={setSelectedItem} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedItem ? (
        <NewsGalleryModal
          item={selectedItem}
          key={selectedItem.id}
          onClose={() => setSelectedItem(null)}
        />
      ) : null}
    </>
  )
}
