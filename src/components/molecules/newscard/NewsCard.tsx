import { motion } from 'motion/react'

import type { NewsItem } from '@/types/home.types'

type NewsCardProps = {
  item: NewsItem
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.article
      className="group grid grid-cols-[104px_1fr] overflow-hidden border border-white/10 bg-white/8 shadow-[rgba(0,0,0,0.18)_0px_10px_28px_0px] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary-gradient-start/30 hover:bg-white/12 hover:shadow-[rgba(0,198,255,0.12)_0px_18px_44px_0px] max-sm:grid-cols-1"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <img
        className="h-full min-h-28 w-full object-cover transition duration-500 group-hover:scale-105"
        src={item.imageUrl}
        alt=""
      />
      <div className="p-5">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="text-xs font-black text-primary">{item.category}</span>
          <time className="text-xs font-semibold text-text-primary/45">{item.date}</time>
        </div>
        <h3 className="line-clamp-2 text-sm leading-6 font-black text-text-primary">
          {item.title}
        </h3>
      </div>
    </motion.article>
  )
}
