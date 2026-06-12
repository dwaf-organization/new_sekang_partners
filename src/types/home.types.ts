export type NavigationItem = {
  id: string
  label: string
  path: string
}

export type HomeHero = {
  eyebrow: string
  titleLines: {
    id: string
    text: string
    highlighted?: boolean
  }[]
  description: string
  primaryAction: {
    label: string
    path: string
  }
  secondaryAction: {
    label: string
    path: string
  }
}

export type HeroStat = {
  id: string
  label: string
  value: string
}

export type FoundryFeature = {
  id: string
  title: string
  description: string
}

export type InvestmentArea = {
  id: string
  title: string
  englishTitle: string
  description: string
  imageUrl: string
  tags: string[]
  tone: 'cyan' | 'violet' | 'blue' | 'green' | 'rose' | 'yellow'
}

export type ClientLogo = {
  id: string
  name: string
  logoUrl: string
}

export type PortfolioProgram = {
  id: string
  imageUrl: string
  programName: string
}

export type AcceleratingPoint = {
  id: string
  label: string
}

export type AcceleratingStep = {
  id: string
  number: string
  title: string
  description: string
}

export type NewsItem = {
  id: string
  category: string
  title: string
  date: string
  imageUrl: string
  featured?: boolean
}

export type ServiceCard = {
  id: string
  title: string
  description: string
  image: 'invest' | 'accelerator' | 'education'
}

export type HomeMetric = {
  id: string
  label: string
  value: string
}

export type ShowcaseItem = {
  id: string
  name: string
  label: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  imageUrl: string
}
