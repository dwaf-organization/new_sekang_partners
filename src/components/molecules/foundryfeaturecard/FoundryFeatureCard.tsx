import { Rocket, Target, TrendingUp, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'

import type { FoundryFeature } from '@/types/home.types'

type FoundryFeatureCardProps = {
  feature: FoundryFeature
}

const featureIcons: Record<FoundryFeature['id'], LucideIcon> = {
  curation: Target,
  foundry: Rocket,
  growth: TrendingUp,
}

export function FoundryFeatureCard({ feature }: FoundryFeatureCardProps) {
  const Icon = featureIcons[feature.id]

  return (
    <motion.article
      className="group flex h-full min-h-62 flex-col border border-gray-200/70 bg-white p-7 shadow-[rgba(14,81,213,0.04)_0px_12px_32px_0px] transition-[border-color,box-shadow] duration-300 hover:border-primary-200 hover:shadow-[rgba(14,81,213,0.12)_0px_18px_44px_0px]"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }}
    >
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-black text-primary transition duration-300 group-hover:bg-primary group-hover:text-text-primary">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
      </div>
      <h3 className="text-xl font-black text-text-inverse">{feature.title}</h3>
      <p className="mt-4 text-sm leading-6 font-semibold text-gray-300">{feature.description}</p>
    </motion.article>
  )
}
