import { ROUTES } from '@/router/routes'
import type {
  AboutCta,
  AboutHero,
  AboutStat,
  AboutValueCard,
  CeoGreeting,
  HistoryYear,
} from '@/types/about.types'

export const aboutHero: AboutHero = {
  eyebrow: 'About Us',
  title: '더 나은 미래를 향한\n가온브릿지의 이야기',
  description:
    '2019년 창업 이후, 가온브릿지는 혁신적인 창업가와 세상을 연결하는 다리가 되어왔습니다.',
}

export const ceoGreeting: CeoGreeting = {
  eyebrow: 'CEO Greeting',
  title: '혁신의 씨앗을\n현실로 피워냅니다',
  quote:
    '창업가는 세상을 바꾸는 사람들입니다. 가온브릿지는 그 여정을 함께하며, 아이디어와 현실 사이의 다리가 됩니다.',
  paragraphs: [
    '좋은 투자는 단순히 자본을 넣는 것이 아니라, 창업가와 함께 문제를 풀어나가는 파트너십이라고 믿습니다.',
    '가온브릿지는 AI 기반의 창업 파운드리를 통해 스타트업의 성장 속도를 높이고 글로벌 무대에서 경쟁할 수 있는 기업을 만들어가고 있습니다.',
  ],
  name: '권오성',
  role: '대표이사 · 창업자 - 권오성',
}

export const aboutStats: AboutStat[] = [
  { id: 'portfolio', label: '포트폴리오사', value: '50+' },
  { id: 'fund', label: '운용자산', value: '₩1,700억+' },
  { id: 'founders', label: '배출 창업가', value: '200+' },
  { id: 'network', label: '글로벌 네트워크', value: '12개국' },
]

export const aboutValueCards: AboutValueCard[] = [
  {
    id: 'investment',
    label: '투자',
    title: '단계별 파트너십 투자',
    description:
      'AI, 딥테크, 플랫폼, 헬스테크 등 미래 산업을 선도하는 창업가에게 시드부터 시리즈B까지 단계별 투자를 집행합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'culture',
    label: '문화',
    title: '도전을 응원하는 조직 문화',
    description:
      '실패를 두려워하지 않는 도전 정신, 서로를 성장시키는 협업 문화, 다양성을 존중하는 열린 조직을 만들어갑니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'global',
    label: '글로벌',
    title: '세계 무대로의 연결',
    description:
      '싱가포르, 실리콘밸리, 런던의 주요 VC 및 액셀러레이터와 긴밀한 네트워크를 구축해 글로벌 진출을 지원합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'innovation',
    label: '혁신',
    title: 'AI 기반 창업 파운드리',
    description:
      '초기 단계부터 스케일업까지 기술과 사업화 사이의 간극을 좁히는 체계적인 성장 지원을 제공합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1000&q=85',
  },
]

export const historyYears: HistoryYear[] = [
  {
    id: '2019',
    year: '2019',
    phase: '설립',
    events: ['법인 설립', '초기 포트폴리오 3개사', '투자 철학 정립'],
  },
  {
    id: '2022',
    year: '2022',
    phase: '도약',
    events: ['1호 펀드 결성', '엑셀러레이팅 1기 운영', '포트폴리오 10개사'],
  },
  {
    id: '2023',
    year: '2023',
    phase: '성장',
    events: ['코스닥 상장 2개사', '엑셀러레이팅 2·3기 운영', 'AI 특화 전략 수립'],
  },
  {
    id: '2024',
    year: '2024',
    phase: '확장',
    events: ['2호 펀드 결성', '데모데이 투자자 500명', '헬스·기후테크 확장'],
  },
  {
    id: '2026',
    year: '2026',
    phase: '현재',
    events: ['글로벌 VC MOU 체결', '엑셀러레이팅 4기', '누적 포트폴리오 50개사'],
    current: true,
  },
]

export const historyBackgroundImageUrl =
  'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85'

export const aboutCta: AboutCta = {
  title: '함께 성장할 준비가 되셨나요?',
  description: '투자 문의, 엑셀러레이팅 지원, 파트너십 제안을 환영합니다.',
  primaryLabel: '투자 문의하기',
  primaryPath: ROUTES.INVESTMENT_INQUIRY,
  secondaryLabel: '엑셀러레이팅 지원',
  secondaryPath: ROUTES.ACCELERATING,
}
