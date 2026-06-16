import { motion } from 'motion/react'

import type { AcceleratingBenefit } from '@/types/accelerating.types'

type AcceleratingBenefitItemProps = {
  benefit: AcceleratingBenefit
}

export function AcceleratingBenefitItem({ benefit }: AcceleratingBenefitItemProps) {
  return (
    <motion.article
      className="border-t border-white/10 px-8 py-9 transition duration-500 hover:border-primary-gradient-start/70 hover:bg-white/[0.03] max-md:px-0"
      transition={{ duration: 0.28, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <p className="text-xs font-black tracking-[0.18em] text-text-primary/42">{benefit.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-black text-primary-gradient-start">{benefit.title}</h3>
      <p className="mt-4 text-sm leading-6 font-semibold text-text-primary/56">
        {benefit.description}
      </p>
    </motion.article>
  )
}
