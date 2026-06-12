export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TEAM: '/team',
  INVESTMENT: '/investment',
  PORTFOLIO: '/portfolio',
  ACCELERATING: '/accelerating',
  NEWS: '/news',
  INVESTMENT_INQUIRY: '/investment-inquiry',
  EDUCATION: '/education',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
