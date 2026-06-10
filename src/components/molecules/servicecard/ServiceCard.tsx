import type { ServiceCard as ServiceCardType } from '@/types/home.types'

type ServiceCardProps = {
  card: ServiceCardType
  imageSrc: string
}

export function ServiceCard({ card, imageSrc }: ServiceCardProps) {
  return (
    <article
      className="group relative min-h-57.5 overflow-hidden rounded-[20px] border border-gray-200 bg-white p-8 transition duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-[rgba(14,81,213,0.2)_0px_8px_20px_0px] focus-within:border-primary max-md:min-h-52 max-md:p-6"
      id={card.id}
    >
      <div className="absolute -right-6 -bottom-5 h-40 w-40 rounded-full bg-primary-100 blur-2xl transition duration-500 group-hover:scale-150" />
      <h2 className="relative text-[28px] leading-9 font-bold max-md:text-2xl max-md:leading-8">
        {card.title}
      </h2>
      <p className="relative mt-7 max-w-52.5 leading-8 text-gray-300 max-md:mt-5 max-md:max-w-40 max-md:text-sm max-md:leading-6">
        {card.description}
      </p>
      <a
        className="relative mt-7 inline-flex items-center gap-3 rounded-full text-sm text-primary transition duration-300 hover:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-md:mt-5 max-md:text-xs"
        href={`#${card.id}`}
      >
        자세히보기
        <span aria-hidden="true">→</span>
      </a>
      <img
        className="absolute right-5 bottom-5 w-41.25 transition duration-700 group-hover:scale-110 group-hover:rotate-3 max-md:right-3 max-md:bottom-4 max-md:w-25"
        src={imageSrc}
        alt=""
      />
    </article>
  )
}
