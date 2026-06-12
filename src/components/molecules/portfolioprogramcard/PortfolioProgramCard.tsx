import { motion } from 'motion/react'

import type { PortfolioProgram } from '@/types/home.types'

type PortfolioProgramCardProps = {
  program: PortfolioProgram
}

export function PortfolioProgramCard({ program }: PortfolioProgramCardProps) {
  return (
    <motion.article
      className="group overflow-hidden border border-gray-200/80 bg-white shadow-[rgba(14,81,213,0.05)_0px_12px_32px_0px] transition-[border-color,box-shadow] duration-500 hover:border-primary-200 hover:shadow-[rgba(14,81,213,0.14)_0px_20px_48px_0px]"
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.85 }}
      whileHover={{ y: -8 }}
    >
      <div className="flex aspect-[1.45/1] items-center justify-center overflow-hidden bg-section-alt p-8">
        <img
          className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-105"
          src={program.imageUrl}
          alt=""
        />
      </div>
      <div className="border-t border-gray-200/70 px-6 py-5">
        <h3 className="text-lg font-black text-text-inverse">{program.programName}</h3>
      </div>
    </motion.article>
  )
}
