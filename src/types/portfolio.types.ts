export type PortfolioHero = {
  eyebrow: string
  title: string
  description: string
  imageUrl: string
}

export type PortfolioDetail = {
  id: string
  title: string
  subtitle: string
  heroImageUrl: string
  overview: string[]
  info: {
    label: string
    value: string
  }[]
  inquiryText: string
  gallery: {
    id: string
    imageUrl: string
    alt: string
  }[]
}
