import type { ReactElement, SVGProps } from 'react'
import { motion } from 'motion/react'

import type { InvestmentArea } from '@/types/home.types'

type InvestmentAreaCardProps = {
  area: InvestmentArea
}

type FilledIconProps = SVGProps<SVGSVGElement>

const toneClasses: Record<InvestmentArea['tone'], string> = {
  blue: 'border-blue-200/80 text-blue-700',
  cyan: 'border-cyan-200/80 text-cyan-700',
  green: 'border-green-200/80 text-green-700',
  rose: 'border-rose/25 text-rose',
  violet: 'border-violet-200/80 text-violet-700',
  yellow: 'border-yellow/30 text-yellow',
}

function AiFilledIcon(props: FilledIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M10 5.5A4.5 4.5 0 0 0 5.5 10v12A4.5 4.5 0 0 0 10 26.5h12a4.5 4.5 0 0 0 4.5-4.5V10A4.5 4.5 0 0 0 22 5.5H10Zm2.25 8.1c0-1.7 1.38-3.08 3.08-3.08h1.34c1.7 0 3.08 1.38 3.08 3.08v4.8a3.08 3.08 0 0 1-3.08 3.08h-1.34a3.08 3.08 0 0 1-3.08-3.08v-4.8Zm3.08-.98a.98.98 0 0 0-.98.98v4.8c0 .54.44.98.98.98h1.34c.54 0 .98-.44.98-.98v-4.8a.98.98 0 0 0-.98-.98h-1.34Z"
        fill="currentColor"
      />
      <path
        d="M10.3 2.5a1 1 0 0 1 1 1v2.8h-2V3.5a1 1 0 0 1 1-1Zm5.7 0a1 1 0 0 1 1 1v2.8h-2V3.5a1 1 0 0 1 1-1Zm5.7 0a1 1 0 0 1 1 1v2.8h-2V3.5a1 1 0 0 1 1-1ZM10.3 25.7h2v2.8a1 1 0 1 1-2 0v-2.8Zm5.7 0h2v2.8a1 1 0 1 1-2 0v-2.8Zm5.7 0h2v2.8a1 1 0 1 1-2 0v-2.8ZM2.5 10.3a1 1 0 0 1 1-1h2.8v2H3.5a1 1 0 0 1-1-1Zm0 5.7a1 1 0 0 1 1-1h2.8v2H3.5a1 1 0 0 1-1-1Zm0 5.7a1 1 0 0 1 1-1h2.8v2H3.5a1 1 0 0 1-1-1ZM25.7 9.3h2.8a1 1 0 1 1 0 2h-2.8v-2Zm0 5.7h2.8a1 1 0 1 1 0 2h-2.8v-2Zm0 5.7h2.8a1 1 0 1 1 0 2h-2.8v-2Z"
        fill="currentColor"
        opacity="0.62"
      />
    </svg>
  )
}

function DeepTechFilledIcon(props: FilledIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M9 6.5A2.5 2.5 0 0 0 6.5 9v14A2.5 2.5 0 0 0 9 25.5h14a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 23 6.5H9Zm3.5 5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
        fill="currentColor"
      />
      <path
        d="M4 10h3v2H4a1 1 0 1 1 0-2Zm0 5h3v2H4a1 1 0 1 1 0-2Zm0 5h3v2H4a1 1 0 1 1 0-2Zm21-10h3a1 1 0 1 1 0 2h-3v-2Zm0 5h3a1 1 0 1 1 0 2h-3v-2Zm0 5h3a1 1 0 1 1 0 2h-3v-2ZM10 4a1 1 0 1 1 2 0v3h-2V4Zm5 0a1 1 0 1 1 2 0v3h-2V4Zm5 0a1 1 0 1 1 2 0v3h-2V4ZM10 25h2v3a1 1 0 1 1-2 0v-3Zm5 0h2v3a1 1 0 1 1-2 0v-3Zm5 0h2v3a1 1 0 1 1-2 0v-3Z"
        fill="currentColor"
        opacity="0.58"
      />
    </svg>
  )
}

function PlatformFilledIcon(props: FilledIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 4.5 6 10v12l10 5.5L26 22V10L16 4.5Z" fill="currentColor" />
      <path
        d="M16 8.25 9.5 11.8v8.4L16 23.75l6.5-3.55v-8.4L16 8.25Zm0 3.2 3.6 1.98v5.14L16 20.55l-3.6-1.98v-5.14L16 11.45Z"
        fill="white"
        opacity="0.72"
      />
      <path
        d="M6 11.1 16 16.6l10-5.5v3.08l-10 5.5-10-5.5V11.1Z"
        fill="currentColor"
        opacity="0.42"
      />
    </svg>
  )
}

function ClimateFilledIcon(props: FilledIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M5.5 14.5 14 10v4.4l8.5-4.4v4.8l3.7-2.2A1.2 1.2 0 0 1 28 13.63V25a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 25v-8.38c0-.9.58-1.7 1.5-2.12Z"
        fill="currentColor"
      />
      <path d="M8 19.5h4v3H8v-3Zm6 0h4v3h-4v-3Zm6 0h4v3h-4v-3Z" fill="white" opacity="0.72" />
      <path
        d="M20.6 4.2c3.42.18 6.1 2.88 6.1 6.1-3.46-.12-6.1-2.78-6.1-6.1Z"
        fill="currentColor"
        opacity="0.58"
      />
      <path
        d="M18.7 12.2c0-3.42 2.7-6.08 6.1-6.1 0 3.42-2.72 6.08-6.1 6.1Z"
        fill="currentColor"
        opacity="0.36"
      />
    </svg>
  )
}

function HealthFilledIcon(props: FilledIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 28s10.5-6.35 10.5-15.05c0-4.1-2.55-7.05-6.05-7.05-2.08 0-3.58 1.02-4.45 2.18C15.13 6.92 13.63 5.9 11.55 5.9c-3.5 0-6.05 2.95-6.05 7.05C5.5 21.65 16 28 16 28Z"
        fill="currentColor"
      />
      <path
        d="M15 12.25h2v3.35h3.35v2H17v3.35h-2V17.6h-3.35v-2H15v-3.35Z"
        fill="white"
        opacity="0.78"
      />
    </svg>
  )
}

function FinanceFilledIcon(props: FilledIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 4 5 9.4V12h22V9.4L16 4Z" fill="currentColor" />
      <path
        d="M7 13.5h4v9H7v-9Zm7 0h4v9h-4v-9Zm7 0h4v9h-4v-9Z"
        fill="currentColor"
        opacity="0.78"
      />
      <path
        d="M5.5 24h21a1.5 1.5 0 0 1 1.5 1.5V28H4v-2.5A1.5 1.5 0 0 1 5.5 24Z"
        fill="currentColor"
      />
      <path d="M16 7.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Z" fill="white" opacity="0.72" />
    </svg>
  )
}

const areaIcons: Record<InvestmentArea['id'], (props: FilledIconProps) => ReactElement> = {
  ai: AiFilledIcon,
  'deep-tech': DeepTechFilledIcon,
  platform: PlatformFilledIcon,
  climate: ClimateFilledIcon,
  health: HealthFilledIcon,
  finance: FinanceFilledIcon,
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
            'mb-6 flex h-16 w-16 items-center justify-center rounded-sm border bg-white/88 shadow-[rgba(14,81,213,0.07)_0px_12px_28px_0px] backdrop-blur-sm transition duration-500 group-hover:-translate-y-1 group-hover:border-primary-200 group-hover:bg-white/62 group-hover:text-primary group-hover:shadow-[rgba(14,81,213,0.16)_0px_18px_36px_0px]',
            toneClasses[area.tone],
          ].join(' ')}
        >
          <Icon aria-hidden="true" className="h-8 w-8" />
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
                  'inline-flex rounded-sm border bg-white/72 px-2.5 py-1 text-xs font-bold backdrop-blur-sm',
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
