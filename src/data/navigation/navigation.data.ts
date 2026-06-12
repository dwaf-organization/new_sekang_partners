import { ROUTES } from '@/router/routes'
import type { NavigationItem } from '@/types/home.types'

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: '회사소개', path: ROUTES.ABOUT },
  { id: 'team', label: '팀소개', path: ROUTES.TEAM },
  { id: 'investment', label: '투자영역', path: ROUTES.INVESTMENT },
  { id: 'portfolio', label: '포트폴리오', path: ROUTES.PORTFOLIO },
  { id: 'accelerating', label: '엑셀러레이팅', path: ROUTES.ACCELERATING },
  { id: 'news', label: '뉴스', path: ROUTES.NEWS },
  { id: 'investment-inquiry', label: '투자 문의', path: ROUTES.INVESTMENT_INQUIRY },
]
