export type AcceleratingHero = {
  eyebrow: string
  title: string
  description: string
  imageUrl: string
  primaryAction: {
    label: string
    path: string
  }
}

export type AcceleratingMetric = {
  id: string
  icon: 'clock' | 'users' | 'chart' | 'calendar'
  label: string
  value: string
}

export type AcceleratingProcess = {
  id: string
  number: string
  eyebrow: string
  title: string
  description: string
  duration: string
  icon: 'document' | 'users' | 'rocket' | 'chart' | 'award'
  backgroundImageUrl?: string
}

export type AcceleratingBenefit = {
  id: string
  eyebrow: string
  title: string
  description: string
}

export type AcceleratingApplyCta = {
  eyebrow: string
  title: string
  description: string
  primaryAction: {
    label: string
    path: string
  }
  secondaryAction: {
    label: string
    path: string
  }
  schedule: {
    id: string
    label: string
  }[]
}
