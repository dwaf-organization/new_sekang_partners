import type { HistoryYear } from '@/types/about.types'

type HistoryYearItemProps = {
  item: HistoryYear
}

export function HistoryYearItem({ item }: HistoryYearItemProps) {
  return (
    <article className="relative min-w-0 pt-10">
      <span
        className={[
          'absolute top-0 left-0 h-2.5 w-2.5 rounded-full ring-8 ring-white/10',
          item.current ? 'bg-primary-gradient-start' : 'bg-white/35',
        ].join(' ')}
      />
      <h3
        className={[
          'text-lg font-black',
          item.current ? 'text-text-primary' : 'text-text-primary/58',
        ].join(' ')}
      >
        {item.year}
      </h3>
      <p className="mt-8 text-sm font-black text-primary-gradient-start">{item.phase}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 font-semibold text-text-primary/62">
        {item.events.map((event) => (
          <li className="flex gap-2" key={event}>
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-gradient-start/70" />
            {event}
          </li>
        ))}
      </ul>
    </article>
  )
}
