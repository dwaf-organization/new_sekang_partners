import type { InvestmentAreaDetail, InvestmentHero } from '@/types/investment.types'

export const investmentHero: InvestmentHero = {
  eyebrow: 'Investment Area',
  title: 'AI 중심의 미래 산업에\n전략적으로 투자합니다',
  description:
    '가온브릿지는 기술의 깊이와 시장 확장성을 함께 검토하며, 성장 가능성이 높은 창업팀을 선별해 투자합니다.',
  imageUrl:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85',
}

export const investmentAreaDetails: InvestmentAreaDetail[] = [
  {
    id: 'ai',
    title: 'AI / 머신러닝',
    englishTitle: 'Generative AI · LLM',
    category: 'Seed',
    description:
      '생성형 AI, 산업 자동화, 데이터 인텔리전스 등 AI 기반으로 산업 효율을 재정의하는 스타트업에 투자합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
    tags: ['Generative AI', 'LLM', 'Data Intelligence', 'Automation'],
    companies: '12개',
    stage: 'Seed~A',
    tone: 'cyan',
    position: {
      desktop: 'left-1/2 top-[8%] -translate-x-1/2',
      mobile: 'left-1/2 top-4 -translate-x-1/2',
    },
  },
  {
    id: 'deep-tech',
    title: '딥테크',
    englishTitle: 'Semiconductor · Quantum',
    category: 'Series A',
    description:
      '반도체, 로보틱스, 양자컴퓨팅처럼 긴 연구개발 시간이 필요하지만 산업 파급력이 큰 원천기술 기업을 발굴합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    tags: ['반도체', 'Quantum', 'Robotics', 'Materials'],
    companies: '7개',
    stage: 'Seed~B',
    tone: 'violet',
    position: {
      desktop: 'right-[8%] top-[30%]',
      mobile: 'right-4 top-[24%]',
    },
  },
  {
    id: 'platform',
    title: '플랫폼',
    englishTitle: 'SaaS · Marketplace',
    category: 'Series A',
    description:
      'B2B SaaS, 마켓플레이스, 업무 자동화 플랫폼처럼 반복 사용과 네트워크 효과를 만드는 비즈니스에 투자합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
    tags: ['SaaS', 'Marketplace', 'Workflow', 'B2B'],
    companies: '10개',
    stage: 'A~B',
    tone: 'blue',
    position: {
      desktop: 'right-[13%] bottom-[20%]',
      mobile: 'right-6 bottom-[25%]',
    },
  },
  {
    id: 'climate',
    title: '기후테크',
    englishTitle: 'Energy · Carbon Neutral',
    category: 'Series B',
    description:
      '에너지 전환, 탄소 저감, 순환경제, 산업 인프라 혁신처럼 지속가능성을 수익 모델로 만드는 기업을 지원합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85',
    tags: ['그린에너지', '탄소중립', '순환경제', 'Infra'],
    companies: '6개',
    stage: 'A~B',
    tone: 'green',
    position: {
      desktop: 'left-1/2 bottom-[7%] -translate-x-1/2',
      mobile: 'left-1/2 bottom-5 -translate-x-1/2',
    },
  },
  {
    id: 'health',
    title: '헬스테크',
    englishTitle: 'Digital Health · BioTech',
    category: 'Series A',
    description:
      '디지털 헬스케어, 바이오 데이터, 의료 AI처럼 건강 데이터를 바탕으로 치료와 예방 경험을 바꾸는 팀을 찾습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
    tags: ['Digital Health', 'BioTech', 'Medical AI', 'Care'],
    companies: '8개',
    stage: 'Seed~A',
    tone: 'rose',
    position: {
      desktop: 'left-[10%] bottom-[20%]',
      mobile: 'left-6 bottom-[25%]',
    },
  },
  {
    id: 'fintech',
    title: '핀테크',
    englishTitle: 'Blockchain · Payment',
    category: 'Series A',
    description:
      '블록체인, 페이먼트, 인슈어테크, 자산관리 등 금융 경험과 규제 대응 역량을 함께 갖춘 스타트업에 투자합니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85',
    tags: ['블록체인', 'Payment', 'InsurTech', 'WealthTech', 'RegTech'],
    companies: '8개',
    stage: 'A~B',
    tone: 'amber',
    position: {
      desktop: 'left-[8%] top-[30%]',
      mobile: 'left-4 top-[24%]',
    },
  },
]
