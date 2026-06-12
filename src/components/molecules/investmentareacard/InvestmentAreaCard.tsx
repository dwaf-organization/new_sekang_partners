import { Brain, Cpu, Globe, HeartPulse, Layers, Leaf, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'

import type { InvestmentArea } from '@/types/home.types'

type InvestmentAreaCardProps = {
  area: InvestmentArea
}

const toneClasses: Record<InvestmentArea['tone'], string> = {
  blue: 'bg-blue-50/80 text-blue-600 border-blue-200',
  cyan: 'bg-cyan-50/80 text-cyan-600 border-cyan-200',
  green: 'bg-green-50/80 text-green-600 border-green-200',
  rose: 'bg-rose/9 text-rose border-rose/25',
  violet: 'bg-violet-50/80 text-violet-600 border-violet-200',
  yellow: 'bg-yellow/9 text-yellow border-yellow/25',
}

const areaIcons: Record<InvestmentArea['id'], LucideIcon> = {
  ai: Brain,
  'deep-tech': Cpu,
  platform: Globe,
  climate: Leaf,
  health: HeartPulse,
  finance: Layers,
}

export function InvestmentAreaCard({ area }: InvestmentAreaCardProps) {
  const Icon = areaIcons[area.id]

  return (
    <motion.article
      className="group relative min-h-60 overflow-hidden border border-white bg-white p-7 shadow-[rgba(14,81,213,0.05)_0px_10px_28px_0px] transition-[border-color,box-shadow] duration-500 ease-out hover:border-primary-200 hover:shadow-[rgba(14,81,213,0.14)_0px_18px_44px_0px]"
      whileHover={{ scale: 1.015, y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }}
    >
      <img
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 ease-out group-hover:scale-100 group-hover:opacity-55"
        src={area.imageUrl}
        alt=""
      />
      <div className="absolute inset-0 bg-white/88 transition duration-700 ease-out group-hover:bg-white/58" />

      <div className="relative z-10">
        <div
          className={[
            'mb-6 flex h-14 w-14 items-center justify-center rounded-full border shadow-[rgba(14,81,213,0.08)_0px_8px_20px_0px] backdrop-blur-sm transition duration-500 group-hover:scale-105 group-hover:bg-white/35 group-hover:shadow-[rgba(14,81,213,0.12)_0px_10px_24px_0px]',
            toneClasses[area.tone],
          ].join(' ')}
        >
          <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.67} />
        </div>
        <h3 className="text-xl font-black text-text-inverse">{area.title}</h3>
        <p className="mt-2 text-xs font-black tracking-[0.08em] text-primary">
          {area.englishTitle}
        </p>
        <div className="relative mt-7 min-h-18 overflow-hidden">
          <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 transition duration-500 ease-out group-hover:translate-y-6 group-hover:opacity-0">
            {area.tags.map((tag) => (
              <span
                className={[
                  'inline-flex rounded-sm border px-2.5 py-1 text-xs font-bold backdrop-blur-sm',
                  toneClasses[area.tone],
                ].join(' ')}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="absolute inset-x-0 top-0 translate-y-6 text-sm leading-7 font-semibold text-gray-700 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {area.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
