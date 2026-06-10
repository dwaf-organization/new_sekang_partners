import type { ShowcaseItem } from '@/types/home.types'

type ShowcaseCardProps = {
  item: ShowcaseItem
}

export function ShowcaseCard({ item }: ShowcaseCardProps) {
  return (
    <article className="flex h-48 min-w-47 items-center justify-center rounded-md bg-white p-6 text-center text-[30px] font-black text-text-inverse transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[rgba(0,0,0,0.18)_0px_12px_36px_0px]">
      <span className={item.name === 'yanolja' ? 'text-pink-500' : ''}>{item.label}</span>
    </article>
  )
}
