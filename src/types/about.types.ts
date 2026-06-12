export type AboutHero = {
  eyebrow: string
  title: string
  description: string
}

export type CeoGreeting = {
  eyebrow: string
  title: string
  quote: string
  paragraphs: string[]
  name: string
  role: string
}

export type AboutStat = {
  id: string
  label: string
  value: string
}

export type HistoryYear = {
  id: string
  year: string
  phase: string
  events: string[]
  current?: boolean
}

export type AboutValueCard = {
  id: string
  label: string
  title: string
  description: string
  imageUrl: string
}

export type AboutCta = {
  title: string
  description: string
  primaryLabel: string
  primaryPath: string
  secondaryLabel: string
  secondaryPath: string
}
