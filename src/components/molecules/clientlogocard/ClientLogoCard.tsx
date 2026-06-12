import { motion } from 'motion/react'

import type { ClientLogo } from '@/types/home.types'

type ClientLogoCardProps = {
  client: ClientLogo
}

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  return (
    <motion.article
      className="flex h-24 w-52 shrink-0 transform-gpu items-center justify-center px-7 shadow-[rgba(14,81,213,0.04)_0px_10px_28px_0px] transition-[border-color,box-shadow] duration-500 ease-out hover:border-primary-200 hover:shadow-[rgba(14,81,213,0.12)_0px_18px_44px_0px] max-md:h-20 max-md:w-44"
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }}
      whileHover={{ scale: 1.035, y: -4 }}
      whileTap={{ scale: 0.995 }}
    >
      <img className="max-h-12 max-w-full object-contain" src={client.logoUrl} alt={client.name} />
    </motion.article>
  )
}
