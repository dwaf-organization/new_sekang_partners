import { motion } from 'motion/react'

import type { AboutValueCard as AboutValueCardType } from '@/types/about.types'

type AboutValueCardProps = {
  card: AboutValueCardType
}

export function AboutValueCard({ card }: AboutValueCardProps) {
  return (
    <motion.article
      className="group"
      transition={{ type: 'spring', stiffness: 250, damping: 24, mass: 0.85 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-48 overflow-hidden rounded-sm bg-surface-muted shadow-[rgba(14,81,213,0.08)_0px_14px_34px_0px] max-md:h-42">
        <img
          className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-106 group-hover:grayscale-0"
          src={card.imageUrl}
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface-base/34 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 rounded-sm bg-white px-3 py-1 text-xs font-black text-text-inverse">
          {card.label}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-black text-text-inverse">{card.title}</h3>
      <p className="mt-4 text-sm leading-7 font-semibold text-gray-300">{card.description}</p>
    </motion.article>
  )
}
