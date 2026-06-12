import { motion } from 'motion/react'

import type { AcceleratingStep } from '@/types/home.types'

type ProcessStepCardProps = {
  step: AcceleratingStep
}

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <motion.article
      className="group grid grid-cols-[72px_1fr] gap-6 bg-white p-7 shadow-[rgba(14,81,213,0.05)_0px_10px_28px_0px] transition duration-300 hover:-translate-x-2 hover:border-primary-200 hover:shadow-[rgba(14,81,213,0.12)_0px_18px_44px_0px] max-sm:grid-cols-1"
      whileHover={{ x: -8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <span className="text-3xl font-black text-primary transition duration-300 group-hover:scale-110">
        {step.number}
      </span>
      <div>
        <h3 className="text-lg font-black text-text-inverse">{step.title}</h3>
        <p className="mt-3 text-sm leading-6 font-semibold text-gray-300">{step.description}</p>
      </div>
    </motion.article>
  )
}
