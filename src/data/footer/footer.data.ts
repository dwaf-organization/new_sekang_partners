import { ROUTES } from '@/router/routes'

export const footerCompanyInfo = [
  '회사명 | 가온브릿지',
  '대표자 | 권오성',
  '사업자등록번호 | 123-45-67890',
  'E-MAIL | dwaf@example.com',
  'TEL | 051-123-4567',
  'FAX | 070-123-4567',
  'ADRESS | 부산광역시 부산진구 BIFC2',
]

export const footerPolicyLinks = [
  { id: 'privacy', label: '개인정보처리방침', path: ROUTES.HOME },
  { id: 'terms', label: '이용약관', path: ROUTES.HOME },
]

export const footerMenuLinks = [
  { id: 'about', label: '회사소개', path: ROUTES.ABOUT },
  { id: 'investment', label: '사업분야', path: ROUTES.INVESTMENT },
  { id: 'portfolio', label: '포트폴리오', path: ROUTES.PORTFOLIO },
  { id: 'team', label: '팀소개', path: ROUTES.TEAM },
]
