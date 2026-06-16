import { useState } from 'react'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { NewsGalleryCard } from '@/components/molecules/newsgallerycard/NewsGalleryCard'
import { NewsGalleryModal } from '@/components/organisms/newsgallerymodal/NewsGalleryModal'
import type { NewsGalleryItem } from '@/types/news.types'

type NewsGallerySectionProps = {
  items: NewsGalleryItem[]
}

export function NewsGallerySection({ items }: NewsGallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<NewsGalleryItem | null>(null)

  return (
    <>
      <section className="bg-white px-8 py-24 text-text-inverse max-md:px-5 max-md:py-16">
        <div className="mx-auto max-w-[1440px]">
          <ScrollReveal>
            <p className="text-xs font-black tracking-[0.34em] text-primary-gradient-start uppercase">
              Event Gallery
            </p>
            <h2 className="mt-5 text-[44px] leading-tight font-black max-md:text-[32px]">
              현장의 순간들
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => (
              <ScrollReveal delay={index * 0.04} key={item.id}>
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
