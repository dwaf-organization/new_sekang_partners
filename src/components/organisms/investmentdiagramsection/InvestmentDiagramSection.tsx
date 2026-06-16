import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { InvestmentDetailPanel } from '@/components/molecules/investmentdetailpanel/InvestmentDetailPanel'
import { InvestmentDiagramNode } from '@/components/molecules/investmentdiagramnode/InvestmentDiagramNode'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { InvestmentAreaDetail } from '@/types/investment.types'

type InvestmentDiagramSectionProps = {
  areas: InvestmentAreaDetail[]
}

export function InvestmentDiagramSection({ areas }: InvestmentDiagramSectionProps) {
  const [selectedAreaId, setSelectedAreaId] = useState('fintech')
  const selectedArea = useMemo(
    () => areas.find((area) => area.id === selectedAreaId) ?? areas[0],
    [areas, selectedAreaId],
  )

  return (
    <section className="overflow-hidden bg-white px-8 py-28 text-text-inverse max-md:px-5 max-md:py-18">
      <div className="mx-auto max-w-330">
        <ScrollReveal className="text-center">
          <p className="text-sm font-black tracking-[0.36em] text-primary-gradient-start uppercase">
            Investment Overview
          </p>
          <h2 className="mt-5 text-5xl leading-tight font-black max-md:text-[34px]">
            AI 중심의 미래 산업 투자
          </h2>
          <p className="mt-5 text-lg font-semibold text-gray-500 max-md:text-base">
            각 영역을 클릭하면 상세 내용을 확인할 수 있습니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-16">
          <div className="relative mx-auto min-h-195 overflow-hidden rounded-4xl bg-white px-6 py-10 text-text-inverse max-md:min-h-155 max-md:rounded-3xl max-md:px-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,198,255,0.13),transparent_22%),radial-gradient(circle_at_50%_50%,rgba(0,114,255,0.08),transparent_48%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(14,81,213,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(14,81,213,0.045)_1px,transparent_1px)] bg-size-[58px_58px] opacity-70" />

            <motion.div
              animate={{ rotate: 360 }}
              className="absolute top-1/2 left-1/2 size-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary-gradient-start/24 max-md:size-117.5"
              transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              className="absolute top-1/2 left-1/2 size-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary-gradient-end/24 max-md:size-112.5"
              transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
            />
            <div className="absolute top-1/2 left-1/2 size-192.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-gradient-end/5 max-md:size-192.5" />
            <div className="absolute top-1/2 left-1/2 size-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-gradient-start/6 max-md:size-130" />

            <div className="absolute top-1/2 left-1/2 z-10 flex size-46 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary-gradient-start/38 bg-white text-center shadow-[0_18px_60px_rgba(0,114,255,0.16)] ring-1 ring-primary-gradient-end/22 max-md:size-34">
              <motion.span
                animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.08, 1] }}
                className="absolute inset-3 rounded-full border border-primary-gradient-start/34"
                transition={{ duration: 2.8, repeat: Infinity }}
              />
              <span className="relative z-10 text-xl font-black text-text-inverse max-md:text-xl">
                가온브릿지
              </span>
              <span className="relative z-10 mt-2 text-xs font-black tracking-[0.34em] text-primary-gradient-start uppercase">
                Investment
              </span>
              <span className="relative z-10 mt-2 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase max-md:hidden">
                6 Sectors · 50+ Companies
              </span>
            </div>

            <div className="absolute top-1/2 left-1/2 h-px w-[58%] -translate-x-1/2 bg-linear-to-r from-transparent via-primary-gradient-start/24 to-transparent" />
            <div className="absolute top-1/2 left-1/2 h-[58%] w-px -translate-y-1/2 bg-linear-to-b from-transparent via-primary-gradient-start/24 to-transparent" />

            {areas.map((area) => (
              <InvestmentDiagramNode
                active={selectedArea.id === area.id}
                area={area}
                key={area.id}
                onSelect={setSelectedAreaId}
              />
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12">
          <InvestmentDetailPanel area={selectedArea} />
        </div>
      </div>
    </section>
  )
}
