import { AnimatePresence, motion } from 'motion/react'
import type { InvestmentAreaDetail } from '@/types/investment.types'

type InvestmentDetailPanelProps = {
  area: InvestmentAreaDetail
}

const panelToneStyles = {
  cyan: 'border-primary-gradient-start/70 text-primary-gradient-start',
  violet: 'border-violet-500/70 text-violet-400',
  blue: 'border-primary-gradient-end/70 text-primary-gradient-end',
  green: 'border-emerald-500/70 text-emerald-400',
  rose: 'border-rose-500/70 text-rose-400',
  amber: 'border-amber-500/70 text-amber-400',
}

export function InvestmentDetailPanel({ area }: InvestmentDetailPanelProps) {
  const tone = panelToneStyles[area.tone]

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={area.id}
        animate={{ opacity: 1, y: 0 }}
        className={`relative overflow-hidden border border-t-2 border-gray-200 bg-white px-12 py-10 text-text-inverse shadow-[0_24px_70px_rgba(17,19,23,0.08)] ${tone} max-lg:px-7 max-md:px-5`}
        exit={{ opacity: 0, y: -16 }}
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,198,255,0.08),transparent_26%),radial-gradient(circle_at_84%_12%,rgba(0,114,255,0.06),transparent_22%)]" />

        <div className="relative z-10 grid grid-cols-[280px_minmax(0,1fr)_180px] gap-10 max-lg:grid-cols-[220px_minmax(0,1fr)] max-md:grid-cols-1">
          <div className="overflow-hidden rounded-md bg-gray-100">
            <img
              className="aspect-[1.55/1] h-full w-full object-cover"
              src={area.imageUrl}
              alt={`${area.title} 영역 이미지`}
            />
          </div>

          <div>
            <div className="flex items-center gap-4">
              {/* <span className={`rounded-full border px-3 py-1 text-xs font-black ${tone}`}>
                {area.category}
              </span> */}
              <p className="text-2xl font-black text-text-inverse">{area.title}</p>
            </div>
            <p className="mt-5 text-lg leading-8 font-semibold text-gray-600">{area.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <span
                  className={`border bg-gray-100 px-3 py-2 text-sm font-black ${tone}`}
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="flex flex-col justify-center border-l border-gray-200 pl-10 max-lg:col-span-2 max-lg:flex-row max-lg:justify-start max-lg:gap-12 max-lg:border-l-0 max-lg:border-t max-lg:pt-8 max-lg:pl-0 max-md:col-span-1 max-md:flex-col max-md:gap-6">
            <div>
              <p className={`text-4xl font-black ${tone}`}>{area.companies}</p>
              <p className="mt-2 text-sm font-bold text-gray-500">투자사</p>
            </div>
            <div className="mt-8 max-lg:mt-0">
              <p className={`text-4xl font-black ${tone}`}>{area.stage}</p>
              <p className="mt-2 text-sm font-bold text-gray-500">평균 투자 단계</p>
            </div>
          </div> */}
        </div>
      </motion.article>
    </AnimatePresence>
  )
}
