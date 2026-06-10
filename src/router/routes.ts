export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TEAM: '/team',
  INVESTMENT: '/investment',
  PORTFOLIO: '/portfolio',
  ACCELERATING: '/accelerating',
  EDUCATION: '/education',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
