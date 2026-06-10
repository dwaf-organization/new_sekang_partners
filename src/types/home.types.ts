export type NavigationItem = {
  id: string
  label: string
  path: string
}

export type HomeHero = {
  title: string
  highlightedTitle: string
  description: string
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
