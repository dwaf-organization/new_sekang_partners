import { Brain, Cpu, HeartPulse, Layers3, Leaf, WalletCards } from 'lucide-react'
import { motion } from 'motion/react'
import type { InvestmentAreaDetail } from '@/types/investment.types'

type InvestmentDiagramNodeProps = {
  area: InvestmentAreaDetail
  active: boolean
  onSelect: (areaId: string) => void
}

const iconMap = {
  ai: Brain,
  'deep-tech': Cpu,
  platform: Layers3,
  climate: Leaf,
  health: HeartPulse,
  fintech: WalletCards,
}

const toneStyles = {
  cyan: {
    text: 'text-primary-gradient-start',
    ring: 'ring-primary-gradient-start/70',
    glow: 'shadow-[0_18px_42px_rgba(0,198,255,0.22)]',
    activeBg: 'from-primary-gradient-start/18 to-primary-gradient-end/10',
  },
  violet: {
    text: 'text-violet-400',
    ring: 'ring-violet-500/70',
    glow: 'shadow-[0_18px_42px_rgba(139,92,246,0.18)]',
    activeBg: 'from-violet-500/18 to-violet-600/10',
  },
  blue: {
    text: 'text-primary-gradient-end',
    ring: 'ring-primary-gradient-end/70',
    glow: 'shadow-[0_18px_42px_rgba(0,114,255,0.18)]',
    activeBg: 'from-primary-gradient-end/18 to-blue-600/10',
  },
  green: {
    text: 'text-emerald-400',
    ring: 'ring-emerald-500/70',
    glow: 'shadow-[0_18px_42px_rgba(16,185,129,0.18)]',
    activeBg: 'from-emerald-500/18 to-emerald-600/10',
  },
  rose: {
    text: 'text-rose-400',
    ring: 'ring-rose-500/70',
    glow: 'shadow-[0_18px_42px_rgba(244,63,94,0.18)]',
    activeBg: 'from-rose-500/18 to-rose-600/10',
  },
  amber: {
    text: 'text-amber-400',
    ring: 'ring-amber-500/70',
    glow: 'shadow-[0_18px_42px_rgba(245,158,11,0.22)]',
    activeBg: 'from-amber-400/22 to-amber-600/12',
  },
}

const positionStyles = {
  ai: 'left-1/2 top-[9%] -translate-x-1/2 max-md:top-5',
  'deep-tech': 'right-[15%] top-[31%] max-md:right-5 max-md:top-[25%]',
  platform: 'right-[17%] bottom-[21%] max-md:right-7 max-md:bottom-[26%]',
  climate: 'left-1/2 bottom-[8%] -translate-x-1/2 max-md:bottom-6',
  health: 'left-[17%] bottom-[21%] max-md:left-7 max-md:bottom-[26%]',
  fintech: 'left-[15%] top-[31%] max-md:left-5 max-md:top-[25%]',
}

export function InvestmentDiagramNode({ area, active, onSelect }: InvestmentDiagramNodeProps) {
  const Icon = iconMap[area.id as keyof typeof iconMap] ?? Layers3
  const tone = toneStyles[area.tone]

  return (
    <motion.button
      animate={{ scale: active ? 1.06 : 1 }}
      className={`absolute ${positionStyles[area.id as keyof typeof positionStyles]} z-20 flex w-34 flex-col items-center gap-2 rounded-full text-center outline-none max-md:w-28`}
      onClick={() => onSelect(area.id)}
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
    >
      <span
        className={`relative flex size-28 items-center justify-center rounded-full border border-gray-200 bg-white ring-1 transition duration-500 max-md:size-21 ${active ? `${tone.ring} ${tone.glow}` : 'ring-gray-200 hover:ring-primary-gradient-start/28'}`}
      >
        <span
          className={`absolute inset-2 rounded-full bg-linear-to-br transition duration-500 ${active ? tone.activeBg : 'from-gray-100 to-white'}`}
        />
        <span
          className={`absolute inset-5 rounded-full border transition duration-500 max-md:inset-3 ${active ? tone.ring : 'border-gray-200'}`}
        />
        <Icon className={`relative z-10 size-6 max-md:size-5 ${tone.text}`} strokeWidth={2.2} />
      </span>
      <span
        className={`text-base leading-tight font-black transition duration-300 max-md:text-xs ${active ? tone.text : 'text-text-inverse'}`}
      >
        {area.title}
      </span>
      <span className="max-w-34 text-xs leading-4 font-bold text-gray-500 max-md:hidden">
        {area.englishTitle}
      </span>
    </motion.button>
  )
}
