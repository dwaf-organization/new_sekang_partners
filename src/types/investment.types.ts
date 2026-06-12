export type InvestmentHero = {
  eyebrow: string
  title: string
  description: string
  imageUrl: string
}

export type InvestmentAreaDetail = {
  id: string
  title: string
  englishTitle: string
  category: string
  description: string
  imageUrl: string
  tags: string[]
  companies: string
  stage: string
  tone: 'cyan' | 'violet' | 'blue' | 'green' | 'rose' | 'amber'
  position: {
    desktop: string
    mobile: string
  }
}
