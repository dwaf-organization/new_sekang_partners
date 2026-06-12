import portfolio1 from '@/assets/images/portfolio/portfolio1.png'
import portfolio2 from '@/assets/images/portfolio/portfolio2.png'
import portfolio3 from '@/assets/images/portfolio/portfolio3.png'
import dongaLogo from '@/assets/images/partnersLogo/donga.png'
import hyundaiLogo from '@/assets/images/partnersLogo/hyundai.png'
import kfiLogo from '@/assets/images/partnersLogo/kfi.png'
import ksaLogo from '@/assets/images/partnersLogo/ksa.png'
import kyungsungLogo from '@/assets/images/partnersLogo/kyungsung.png'
import lgLogo from '@/assets/images/partnersLogo/lg.png'
import nocLogo from '@/assets/images/partnersLogo/noc.png'
import sbaLogo from '@/assets/images/partnersLogo/sba.png'
import seoulDesignLogo from '@/assets/images/partnersLogo/seouldesign.png'
import sosangLogo from '@/assets/images/partnersLogo/sosang.png'
import type {
  AcceleratingPoint,
  AcceleratingStep,
  ClientLogo,
  FoundryFeature,
  HomeHero,
  HeroStat,
  HomeMetric,
  InvestmentArea,
  NewsItem,
  PortfolioProgram,
  ServiceCard,
  ShowcaseItem,
  TeamMember,
} from '@/types/home.types'

export const homeHero: HomeHero = {
  eyebrow: 'AI 기업 창업 투자 파운드리',
  titleLines: [
    { id: 'future', text: '미래를 향한' },
    { id: 'startup', text: '창업', highlighted: true },
    { id: 'bridge', text: '브릿지' },
  ],
  description:
    '가온브릿지는 AI 시대의 혁신적인 창업기업과 함께합니다. 투자와 교육, 성장을 하나로 잇는 파운드리 플랫폼.',
  primaryAction: {
    label: '포트폴리오 보기',
    path: '/portfolio',
  },
  secondaryAction: {
    label: '회사 소개',
    path: '/about',
  },
}

export const heroStats: HeroStat[] = [
  { id: 'portfolio', label: '포트폴리오', value: '50+' },
  { id: 'fund', label: '누적 투자 규모', value: '₩300억+' },
  { id: 'teams', label: '함께한 스타트업', value: '200+' },
]

export const foundryFeatures: FoundryFeature[] = [
  {
    id: 'curation',
    title: '선별 투자',
    description: 'AI, 딥테크, 플랫폼 비즈니스 영역의 잠재력 높은 스타트업에 집중 투자합니다.',
  },
  {
    id: 'foundry',
    title: '창업 파운드리',
    description: '아이디어 단계부터 스케일업까지 제품, 자본, 네트워크를 함께 설계합니다.',
  },
  {
    id: 'growth',
    title: '지속 성장 지원',
    description: '후속 투자와 사업화, 시장 진입 전략까지 장기 성장 기반을 만듭니다.',
  },
]

export const investmentAreas: InvestmentArea[] = [
  {
    id: 'ai',
    title: 'AI / 머신러닝',
    englishTitle: 'Artificial Intelligence',
    description: '생성형 AI, 산업 자동화, 데이터 인텔리전스 영역을 발굴합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    tags: ['Generative AI', 'LLM'],
    tone: 'cyan',
  },
  {
    id: 'deep-tech',
    title: '딥테크',
    englishTitle: 'Deep Technology',
    description: '원천 기술과 연구 기반의 고성장 기술 기업을 지원합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    tags: ['로보틱스', 'Quantum'],
    tone: 'violet',
  },
  {
    id: 'platform',
    title: '플랫폼 비즈니스',
    englishTitle: 'Platform Business',
    description: '네트워크 효과를 기반으로 빠르게 확장하는 서비스를 찾습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    tags: ['SaaS', 'Marketplace'],
    tone: 'blue',
  },
  {
    id: 'climate',
    title: '기후테크',
    englishTitle: 'Climate Technology',
    description: '탄소 저감, 에너지 전환, 지속가능 인프라 스타트업에 투자합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80',
    tags: ['그린에너지', '탄소감축'],
    tone: 'green',
  },
  {
    id: 'health',
    title: '헬스테크',
    englishTitle: 'Health Technology',
    description: '디지털 헬스케어와 바이오 데이터 기반 서비스를 발굴합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    tags: ['Digital Health', 'BioTech'],
    tone: 'rose',
  },
  {
    id: 'finance',
    title: '핀테크',
    englishTitle: 'Financial Technology',
    description: '결제, 자산관리, 금융 데이터 혁신을 만드는 팀과 함께합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    tags: ['결제혁신', 'Payment'],
    tone: 'yellow',
  },
]

export const clientLogos: ClientLogo[] = [
  {
    id: 'donga',
    name: '동아대학교',
    logoUrl: dongaLogo,
  },
  {
    id: 'hyundai',
    name: '현대',
    logoUrl: hyundaiLogo,
  },
  {
    id: 'kfi',
    name: '한국소방산업기술원',
    logoUrl: kfiLogo,
  },
  {
    id: 'ksa',
    name: '한국표준협회',
    logoUrl: ksaLogo,
  },
  {
    id: 'kyungsung',
    name: '경성대학교',
    logoUrl: kyungsungLogo,
  },
  {
    id: 'lg',
    name: 'LG',
    logoUrl: lgLogo,
  },
  {
    id: 'noc',
    name: '국립오페라단',
    logoUrl: nocLogo,
  },
  {
    id: 'sba',
    name: '서울경제진흥원',
    logoUrl: sbaLogo,
  },
  {
    id: 'seouldesign',
    name: '서울디자인재단',
    logoUrl: seoulDesignLogo,
  },
  {
    id: 'sosang',
    name: '소상공인시장진흥공단',
    logoUrl: sosangLogo,
  },
]

export const portfolioPrograms: PortfolioProgram[] = [
  {
    id: 'investment-foundry',
    imageUrl: portfolio1,
    programName: '밸류파인더 투자 프로그램',
  },
  {
    id: 'accelerating',
    imageUrl: portfolio2,
    programName: 'AI 액셀러레이팅 프로그램',
  },
  {
    id: 'education',
    imageUrl: portfolio3,
    programName: '실전 창업 교육',
  },
]

export const acceleratingPoints: AcceleratingPoint[] = [
  { id: 'mentor', label: 'AI 전문 멘토 1:1 코칭' },
  { id: 'funding', label: '200+ 투자자 네트워크' },
  { id: 'space', label: '사업 공간 제공' },
  { id: 'market', label: '시장 진출 전략 지원' },
  { id: 'follow', label: '연계 투자 지원' },
  { id: 'scale', label: '실행 데이터 기반 스케일업' },
]

export const acceleratingSteps: AcceleratingStep[] = [
  {
    id: 'discover',
    number: '01',
    title: '발굴 & 선별',
    description: '아이디어 단계부터 시장성, 실행력, 확장성을 함께 검증합니다.',
  },
  {
    id: 'build',
    number: '02',
    title: '집중 육성',
    description: '비즈니스 모델, 제품, 세일즈 전략을 고도화합니다.',
  },
  {
    id: 'connect',
    number: '03',
    title: '투자 연계',
    description: '후속 투자 유치와 파트너십 연결을 위한 기회를 만듭니다.',
  },
  {
    id: 'scale',
    number: '04',
    title: '성장 지원',
    description: '시장 확장, 조직 운영, 데이터 기반 성장 관리를 지원합니다.',
  },
]

export const newsItems: NewsItem[] = [
  {
    id: 'ai-foundry',
    category: '투자',
    title: '가온브릿지, AI 스타트업 NeuralMind에 80억원 시리즈 B 투자',
    date: '2026.06.11',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'program',
    category: '프로그램',
    title: '2026 창업 액셀러레이팅 4기 모집 시작',
    date: '2026.05.21',
    imageUrl:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'report',
    category: '리포트',
    title: '기술창업 생태계 2026, 투자 패러다임 리포트 발행',
    date: '2026.05.13',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'meetup',
    category: '네트워킹',
    title: '글로벌 VC 34개사 초청 투자 밋업 개최',
    date: '2026.05.05',
    imageUrl:
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=500&q=80',
  },
]

export const serviceCards: ServiceCard[] = [
  {
    id: 'investment',
    title: '투자',
    description: '초기 스타트업부터 스케일업 단계까지 성장하는 만큼 투자합니다.',
    image: 'invest',
  },
  {
    id: 'accelerating',
    title: '엑셀러레이팅',
    description: '초기 스타트업부터 스케일업 단계까지 성장하는 만큼 지원합니다.',
    image: 'accelerator',
  },
  {
    id: 'education',
    title: '교육',
    description: '창업팀과 실무자를 위한 실행 중심 교육 프로그램을 제공합니다.',
    image: 'education',
  },
]

export const homeMetrics: HomeMetric[] = [
  { id: 'founded', label: '설립연도', value: '2026년' },
  { id: 'clients', label: '누적고객사', value: '5,000+' },
  { id: 'satisfaction', label: '고객만족도', value: '99%' },
  { id: 'revenue', label: '매출액', value: '3BILLION+' },
]

export const portfolioItems: ShowcaseItem[] = [
  { id: 'baemin', name: '배달의민족', label: '배달의민족' },
  { id: 'yanolja', name: 'yanolja', label: 'yanolja' },
  { id: 'zigbang', name: '직방', label: '직방' },
  { id: 'dabang', name: '다방', label: '다방' },
  { id: 'partner-a', name: '파트너사', label: '배달의민족' },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: '김서윤',
    role: 'Investment Partner',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'team-2',
    name: '이도현',
    role: 'Startup Accelerator',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'team-3',
    name: '박하린',
    role: 'Program Director',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=640&q=80',
  },
  {
    id: 'team-4',
    name: '정민재',
    role: 'Portfolio Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80',
  },
]
