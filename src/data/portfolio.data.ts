import { portfolioPrograms } from '@/data/home.data'
import type { PortfolioDetail, PortfolioHero } from '@/types/portfolio.types'

export const portfolioHero: PortfolioHero = {
  eyebrow: 'Portfolio',
  title: '성장 가능성을 실적으로 바꾸는\n가온브릿지 포트폴리오',
  description:
    '투자, 액셀러레이팅, 교육 프로그램을 통해 창업팀과 기관이 함께 만든 성과를 소개합니다.',
  imageUrl:
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=85',
}

export const portfolioPagePrograms = portfolioPrograms

export const portfolioDetails: PortfolioDetail[] = [
  {
    id: 'my-startup-challenge',
    title: 'My Startup Challenge',
    subtitle: '실전과 동일한 환경에서 의사결정을 반복하는 AI 창업 경영 시뮬레이션',
    heroImageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85',
    overview: [
      'My Startup Challenge는 예비창업자가 창업 전 실전 경영을 경험할 수 있도록 설계된 AI 기반 창업 경영 시뮬레이션입니다.',
      '아이디어 검증과 BM 고도화부터 7분기 경영 시뮬레이션까지 창업 전 과정을 압축해 경험하며, 의사결정의 결과가 고객 반응과 매출에 즉시 반영됩니다.',
      '통계청 데이터 기반 75,600개 페르소나 풀, 7인의 AI 전문가 컨설팅, 경진대회 운영 콘솔을 결합해 교육과 실전 검증을 하나의 프로그램으로 운영합니다.',
    ],
    info: [
      { label: '프로그램', value: 'AI 창업 시뮬레이션' },
      { label: '핵심 구조', value: 'S0+7분기' },
      { label: '주요 모듈', value: 'BM · 컨설팅 · 시뮬레이션' },
      { label: '운영 대상', value: '대학 · 창업 경진대회' },
    ],
    inquiryText: '도입 문의하기',
    gallery: [
      {
        id: 'main',
        imageUrl:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
        alt: '창업팀 워크숍 이미지',
      },
      {
        id: 'persona',
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
        alt: '고객 데이터 분석 대시보드 이미지',
      },
      {
        id: 'strategy',
        imageUrl:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85',
        alt: '사업 전략 자료 이미지',
      },
      {
        id: 'competition',
        imageUrl:
          'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85',
        alt: '경진대회 팀 협업 이미지',
      },
    ],
  },
  {
    id: 'ai-secretary',
    title: '김부장 AI 비서',
    subtitle: '1인 기업가를 위한 실전형 지능형 업무 자동화 플랫폼',
    heroImageUrl:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1800&q=85',
    overview: [
      '김부장 AI 비서는 1인 기업가와 CEO가 반복적인 콘텐츠 제작, 문서 작성, 이미지 생성 업무를 빠르게 처리할 수 있도록 돕는 AI 워크스페이스입니다.',
      '작업 시작 전 AI가 역으로 질문해 목표와 타깃을 정교화하고, 집필·이미지·검수 등 8개 전문 에이전트가 병렬로 협업해 결과물을 완성합니다.',
      'PC에 보유한 사업계획서, 상품 이미지, 참고 URL, 벤치마킹 자료를 비서의 지식으로 활용해 블로그, 보고서, PPT, 상세페이지, 광고 이미지를 즉시 제작합니다.',
    ],
    info: [
      { label: '제품 유형', value: 'AI 업무 자동화' },
      { label: '핵심 엔진', value: '8개 AI 에이전트' },
      { label: '성과 지표', value: '업무 시간 90% 절감' },
      { label: '주요 산출물', value: '문서 · 이미지 · PPT' },
    ],
    inquiryText: '도입 문의하기',
    gallery: [
      {
        id: 'workspace',
        imageUrl:
          'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1600&q=85',
        alt: 'AI 워크스페이스 이미지',
      },
      {
        id: 'automation',
        imageUrl:
          'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=900&q=85',
        alt: '업무 자동화 이미지',
      },
      {
        id: 'content',
        imageUrl:
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85',
        alt: '콘텐츠 제작 이미지',
      },
      {
        id: 'local',
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
        alt: 'PC 기반 작업 이미지',
      },
    ],
  },
  {
    id: 'grant-ai-pro',
    title: '지원금AI PRO',
    subtitle: '기관용 AI 정부 지원금 통합 관리 및 컨설팅 솔루션',
    heroImageUrl:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=85',
    overview: [
      '지원금AI PRO는 기관이 관리하는 기업 상담과 정부 지원사업 매칭 업무를 데이터와 AI로 자동화하는 컨설팅 솔루션입니다.',
      '전국 지원사업 공고를 실시간으로 트래킹하고, LLM 기반 엔진이 공고문을 분석해 신청 자격, 제외 대상, 가점 요인을 정밀하게 추출합니다.',
      '기업별 상담 이력, 매칭 공고, 분석 리포트를 통합 관리하며 원클릭 AI 리포트와 지능형 상담 비서를 통해 반복 행정 업무를 줄입니다.',
    ],
    info: [
      { label: '제품 유형', value: '기관용 AI 솔루션' },
      { label: '핵심 기능', value: '공고 매칭 · CRM · 리포트' },
      { label: '기대 효과', value: '행정 업무 95% 자동화' },
      { label: '확장 기능', value: 'AI 신청서 자동작성' },
    ],
    inquiryText: '도입 문의하기',
    gallery: [
      {
        id: 'grant',
        imageUrl:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=85',
        alt: '지원사업 분석 이미지',
      },
      {
        id: 'report',
        imageUrl:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85',
        alt: '분석 리포트 이미지',
      },
      {
        id: 'consulting',
        imageUrl:
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
        alt: '기관 컨설팅 이미지',
      },
      {
        id: 'matching',
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
        alt: 'AI 매칭 대시보드 이미지',
      },
    ],
  },
]
