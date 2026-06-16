import { CalendarCheck, CircleCheck, Clock3 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import type { AcceleratingApplyCta } from '@/types/accelerating.types'

type AcceleratingApplySectionProps = {
  cta: AcceleratingApplyCta
}

const scheduleIcons = [CalendarCheck, Clock3, CircleCheck]

export function AcceleratingApplySection({ cta }: AcceleratingApplySectionProps) {
  return (
    <section className="bg-white px-8 py-28 text-text-inverse max-md:px-5 max-md:py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-245 border border-gray-200 bg-white px-10 py-16 text-center shadow-[0_28px_80px_rgba(17,19,23,0.08)] max-md:px-5 max-md:py-12">
          <p className="text-xs font-black tracking-[0.34em] text-primary-gradient-start uppercase">
            {cta.eyebrow}
          </p>
          <h2 className="mt-5 text-[44px] leading-tight font-black max-md:text-[32px]">
            {cta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-150 text-base leading-7 font-semibold text-gray-500">
            {cta.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <NavLink
              className="inline-flex h-13 items-center justify-center border border-gray-300 px-8 text-sm font-black text-text-inverse transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95"
              to={cta.secondaryAction.path}
            >
              {cta.secondaryAction.label}
            </NavLink>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {cta.schedule.map((item, index) => {
              const Icon = scheduleIcons[index] ?? CircleCheck
              return (
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-500"
                  key={item.id}
                >
                  <Icon className="size-4 text-primary-gradient-start" strokeWidth={2.2} />
                  {item.label}
                </span>
              )
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
