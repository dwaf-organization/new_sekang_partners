import type {
  HomeHero,
  HomeMetric,
  ServiceCard,
  ShowcaseItem,
  TeamMember,
} from '@/types/home.types'

export const homeHero: HomeHero = {
  title: '투자와 성장의',
  highlightedTitle: '연결점',
  description:
    '세강파트너스는 스타트업을 발굴하고, 투자와 엑셀러레이팅으로 성장을 지원하며 지속 가능한 혁신 생태계를 만들어갑니다.',
}

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
