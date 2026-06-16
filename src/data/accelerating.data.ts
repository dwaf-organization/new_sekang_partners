import { ROUTES } from '@/router/routes'
import type {
  AcceleratingApplyCta,
  AcceleratingBenefit,
  AcceleratingHero,
  AcceleratingMetric,
  AcceleratingProcess,
} from '@/types/accelerating.types'

export const acceleratingHero: AcceleratingHero = {
  eyebrow: 'Global AI Startup Challenge',
  title: '부울경 글로벌 AI\n창업챌린지',
  description:
    '지역문제에서 출발해 유학생과 글로벌 시장을 검증하고, AI Agent로 아이디어 발굴부터 경영 시뮬레이션과 IR까지 완성하는 실전형 창업교육 프로그램입니다.',
  imageUrl:
    'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1800&q=85',
  primaryAction: {
    label: '프로그램 문의하기',
    path: ROUTES.INVESTMENT_INQUIRY,
  },
}

export const acceleratingMetrics: AcceleratingMetric[] = [
  { id: 'period', icon: 'clock', label: '운영 기간', value: '2026.07~10' },
  { id: 'participants', icon: 'users', label: '참여 규모', value: '60명 내외' },
  { id: 'teams', icon: 'chart', label: '글로벌 혼합팀', value: '12팀' },
  { id: 'hackathon', icon: 'calendar', label: '핵심 행사', value: '1박 2일' },
]

export const acceleratingProcesses: AcceleratingProcess[] = [
  {
    id: 'recruit',
    number: '01',
    eyebrow: 'Recruiting',
    title: '참여자 모집',
    description:
      '부울경 대학(원)생과 유학생을 대상으로 참여자를 모집합니다. 지역 전략산업과 글로벌 시장 검증에 관심 있는 예비 창업 인재를 선발합니다.',
    duration: 'M1',
    icon: 'document',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'team-building',
    number: '02',
    eyebrow: 'Global Team Building',
    title: '글로벌 팀빌딩',
    description:
      '팀당 4~5명 규모로 국내 학생과 유학생을 혼합 구성합니다. CEO, Product, Market, Global, Finance/IR 역할을 나누어 실전 팀 운영 구조를 만듭니다.',
    duration: 'M1',
    icon: 'users',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'pre-mentoring',
    number: '03',
    eyebrow: 'Pre Mentoring',
    title: '사전 멘토링',
    description:
      '문제·고객 Pain Point, 글로벌 확장성, 시장성·수익모델, 해커톤 작업계획표를 순차적으로 점검해 산출물 구조를 확정합니다.',
    duration: 'M2',
    icon: 'award',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ai-education',
    number: '04',
    eyebrow: 'AI Agent Education',
    title: 'AI 창업교육',
    description:
      'Local Problem, Global Insight, Customer, Market, BM, Simulation, IR, Risk 등 8개 AI Agent로 아이디어 발굴부터 IR 초안까지 실습합니다.',
    duration: 'M2',
    icon: 'rocket',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'global-validation',
    number: '05',
    eyebrow: 'Global Validation',
    title: '글로벌 시장검증',
    description:
      '유학생의 모국시장 감각을 활용해 해외 고객가설, 문화 차이, 현지화 가능성, 해외 유사사례를 검증하고 글로벌 확장성 분석표를 만듭니다.',
    duration: 'M2~M3',
    icon: 'users',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'hackathon',
    number: '06',
    eyebrow: '1 Night 2 Days Hackathon',
    title: '1박 2일 해커톤',
    description:
      '지역문제 기반 아이디어 발굴, AI Agent 고객·시장 분석, BM 설계, 경영 시뮬레이션, 멘토링을 거쳐 IR Deck과 Q&A 대비표를 완성합니다.',
    duration: '1박 2일',
    icon: 'chart',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'demo-day',
    number: '07',
    eyebrow: 'Demo Day',
    title: '데모데이 · 평가 · 시상',
    description:
      '지역문제 적합성, 글로벌 확장성, AI 활용 수준, 사업모델 완성도, 지역정주 연계성, 발표·팀워크를 기준으로 전문가 평가를 진행합니다.',
    duration: 'M3',
    icon: 'award',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'follow-up',
    number: '08',
    eyebrow: 'Follow-up',
    title: '후속연계',
    description:
      '우수팀을 지역기업 프로젝트, 국내외 스타트업 인턴십, AC/VC 포트폴리오 기업, 창업지원사업과 연결해 교육 이후 정주와 사업화로 이어갑니다.',
    duration: 'M4',
    icon: 'award',
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=85',
  },
]

export const acceleratingBenefits: AcceleratingBenefit[] = [
  {
    id: 'ai-agent',
    eyebrow: 'AI 창업교육',
    title: '8개 AI Agent',
    description:
      '지역문제 발굴, 해외시장 분석, 고객가설, 시장분석, BM, 시뮬레이션, IR, 리스크 점검을 실습합니다.',
  },
  {
    id: 'simulation',
    eyebrow: '경영 시뮬레이션',
    title: '수치 기반 BM',
    description:
      '3·6·12개월 매출, 손익분기점, 국내형·해외확장형 수익모델, 투자자 Q&A 대응전략을 도출합니다.',
  },
  {
    id: 'hackathon',
    eyebrow: '핵심 행사',
    title: '1박 2일 해커톤',
    description:
      '문제정의서, 지역-글로벌 매칭표, 고객·시장 분석표, BM Canvas, IR Deck을 집중 완성합니다.',
  },
  {
    id: 'mentor-pool',
    eyebrow: '멘토 Pool',
    title: '7대 멘토군',
    description:
      '대기업 현직자, 앵커기업, 스타트업 창업자, AC/VC, AI·데이터 전문가, 글로벌 비즈니스, 외국인 창업자를 연계합니다.',
  },
  {
    id: 'awards',
    eyebrow: '평가 · 시상',
    title: '6대 평가 기준',
    description:
      '지역성, 글로벌성, AI 활용성, 사업성, 실행가능성, 지역정주성을 기준으로 우수팀과 개인을 선정합니다.',
  },
  {
    id: 'follow-up',
    eyebrow: '후속연계',
    title: '정주 · 인턴십',
    description:
      '지역기업 프로젝트, 국내외 인턴십, 창업보육센터, 예비·초기창업패키지 등 후속 사업화 경로를 연결합니다.',
  },
]

export const acceleratingApplyCta: AcceleratingApplyCta = {
  eyebrow: 'Apply Now',
  title: '글로벌 AI 창업챌린지에 참여하세요',
  description:
    '부울경 지역문제를 글로벌 시장 관점으로 검증하고, AI Agent 기반 실전 산출물을 만드는 창업교육 프로그램입니다. 참여대상은 부울경 대학(원)생과 유학생입니다.',
  primaryAction: {
    label: '프로그램 문의하기',
    path: ROUTES.INVESTMENT_INQUIRY,
  },
  secondaryAction: {
    label: '상담 문의',
    path: ROUTES.INVESTMENT_INQUIRY,
  },
  schedule: [
    { id: 'm1', label: 'M1 세부기획 · 참여대학 협의 · 멘토 Pool 구성' },
    { id: 'm2', label: 'M2 참여자 모집 · 선발 · 팀빌딩 · 사전 멘토링' },
    { id: 'm3', label: 'M3 AI 창업교육 · 1박 2일 해커톤 · 데모데이' },
    { id: 'm4', label: 'M4 인턴십 · 후속연계 · 성과관리' },
  ],
}
