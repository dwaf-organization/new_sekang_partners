import { Award, BarChart3, FileText, Rocket, Users, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'

import type { AcceleratingProcess } from '@/types/accelerating.types'

type AcceleratingProcessCardProps = {
  process: AcceleratingProcess
  align: 'left' | 'right'
}

const processIcons: Record<AcceleratingProcess['icon'], LucideIcon> = {
  document: FileText,
  users: Users,
  rocket: Rocket,
  chart: BarChart3,
  award: Award,
}

export function AcceleratingProcessCard({ process, align }: AcceleratingProcessCardProps) {
  const Icon = processIcons[process.icon]
  const hasBackgroundImage = Boolean(process.backgroundImageUrl)

  const numberCell = (
    <div
      className={`relative flex h-full min-h-54 flex-col justify-center overflow-hidden border-gray-200 bg-white p-12 max-md:min-h-0 max-md:p-7 lg:border-r ${
        hasBackgroundImage ? 'bg-cover bg-center text-text-primary' : ''
      }`}
      style={
        process.backgroundImageUrl
          ? { backgroundImage: `url(${process.backgroundImageUrl})` }
          : undefined
      }
    >
      {hasBackgroundImage ? (
        <>
          <div className="absolute inset-0 bg-linear-to-br from-surface-base/82 via-surface-base/48 to-primary/34" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,198,255,0.22),transparent_34%)] opacity-80 transition duration-500 group-hover:opacity-100" />
        </>
      ) : null}

      <span
        className={`relative z-10 text-[72px] leading-none font-black transition duration-300 max-md:text-5xl ${
          hasBackgroundImage
            ? 'text-white/82 group-hover:text-white'
            : 'text-gray-200 group-hover:text-primary-100'
        }`}
      >
        {process.number}
      </span>
      <div className="relative z-10 mt-5 flex items-center gap-3">
        <span
          className={`flex size-9 items-center justify-center rounded-full ${
            hasBackgroundImage
              ? 'bg-white/18 text-text-primary backdrop-blur'
              : 'bg-about-cta text-text-primary'
          }`}
        >
          <Icon className="size-4" strokeWidth={2.2} />
        </span>
        <span
          className={`text-sm font-black ${hasBackgroundImage ? 'text-white/76' : 'text-gray-400'}`}
        >
          {process.duration}
        </span>
      </div>
    </div>
  )

  const contentCell = (
    <div className="flex min-h-54 flex-col justify-center bg-white p-12 max-md:min-h-0 max-md:border-t max-md:border-gray-200 max-md:p-7">
      <p className="text-xs font-black tracking-[0.22em] text-gray-400">{process.eyebrow}</p>
      <h3 className="mt-4 text-2xl font-black text-text-inverse max-md:text-xl">{process.title}</h3>
      <p className="mt-6 max-w-150 text-base leading-8 font-semibold text-gray-500 max-md:text-sm max-md:leading-7">
        {process.description}
      </p>
    </div>
  )

  return (
    <motion.article
      className="group grid overflow-hidden border border-gray-200 bg-white shadow-[0_16px_42px_rgba(17,19,23,0.04)] transition duration-500 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_60px_rgba(14,81,213,0.1)] md:grid-cols-2"
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      {align === 'left' ? (
        <>
          {numberCell}
          {contentCell}
        </>
      ) : (
        <>
          <div className="max-md:order-2">{contentCell}</div>
          <div className="h-full max-md:order-1 [&>div]:lg:border-r-0 [&>div]:lg:border-l">
            {numberCell}
          </div>
        </>
      )}
    </motion.article>
  )
}
