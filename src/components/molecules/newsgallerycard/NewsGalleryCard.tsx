import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

import type { NewsGalleryItem } from '@/types/news.types'

type NewsGalleryCardProps = {
  item: NewsGalleryItem
  onSelect: (item: NewsGalleryItem) => void
}

export function NewsGalleryCard({ item, onSelect }: NewsGalleryCardProps) {
  return (
    <motion.button
      aria-label={`${item.title} 상세 보기`}
      className="group relative block aspect-[0.78/1] w-full overflow-hidden bg-gray-100 text-left outline-none max-md:aspect-[1.05/1]"
      onClick={() => onSelect(item)}
      type="button"
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <img
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
        src={item.imageUrl}
        alt={`${item.title} 이미지`}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/56 to-transparent opacity-0 transition duration-500 group-hover:opacity-95 group-focus-visible:opacity-95 max-md:opacity-88" />
      <div className="absolute inset-x-0 bottom-0 translate-y-8 p-8 text-text-primary opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-lg:p-6 max-md:translate-y-0 max-md:opacity-100">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-black">
            {item.category}
          </span>
          <time className="text-xs font-bold text-text-primary/72">{item.date}</time>
        </div>
        <div className="flex items-end justify-between gap-5">
          <h2 className="text-2xl leading-tight font-black max-xl:text-xl">{item.title}</h2>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-primary transition duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
            <ArrowRight className="size-5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </motion.button>
  )
}
