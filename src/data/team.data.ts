import ceoColorImage from '@/assets/images/CeoColor.png'
import type { Leader, TeamHero, TeamMember } from '@/types/team.types'

export const teamHero: TeamHero = {
  eyebrow: 'Team',
  title: '창업가의 성장을 함께 설계하는\n가온브릿지의 사람들',
  description:
    '투자, 기술, 글로벌 네트워크, 조직 운영 경험을 가진 팀이 창업가의 다음 단계를 함께 만듭니다.',
  imageUrl:
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85',
}

export const leaders: Leader[] = [
  {
    id: 'osung',
    name: '권오성',
    position: '대표이사',
    imageUrl: ceoColorImage,
    careers: [
      '前중소벤처기업진흥공단 팀장',
      '前LG전자, 삼성전기, LGD 선임연구원',
      '품질기술사, 경영지도사',
      '우수조달, 성능인증, NET, NEP 등 조달전문',
      'R&D 과제 기획, 前조달청 혁신제품 스카우터',
      '컨설팅 등 경력 23년',
    ],
  },
  {
    id: 'onyu',
    name: '박온유',
    position: '대표이사',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85',
    careers: [
      '경성대 겸임 교수',
      '前홍익기공(주) 이사',
      '경영지도사, 기술거래사',
      '우수조달, 성능인증, NET, NEP 등 조달전문',
      'R&D 과제 기획 및 평가위원',
      '컨설팅 등 경력 25년',
    ],
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'sumin',
    name: '이수민',
    position: 'Investment Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=520&q=85',
    careers: ['전 크레프트 전략기획', 'AI SaaS 투자 전문', '서울대 경영학과'],
  },
  {
    id: 'junghyun',
    name: '최준혁',
    position: 'Portfolio Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=520&q=85',
    careers: ['전 카카오벤처스 매니저', '딥테크·헬스테크 담당', '연세대 경제학과'],
  },
  {
    id: 'dahun',
    name: '정다은',
    position: 'Accelerating Lead',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=520&q=85',
    careers: ['전 스파크랩 프로그램 매니저', '액셀러레이팅 프로그램 총괄', '이화여대 MBA'],
  },
  {
    id: 'taeyang',
    name: '김태양',
    position: 'Global Partnership',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=520&q=85',
    careers: ['전 Google APAC BD', '글로벌 VC 네트워크 담당', 'UC Berkeley 컴퓨터공학'],
  },
  {
    id: 'jihyun',
    name: '오지현',
    position: 'Investment Analyst',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=520&q=85',
    careers: ['전 NH투자증권 리서치', '기후테크·핀테크 분석', '고려대 경영학과'],
  },
  {
    id: 'minjun',
    name: '박민준',
    position: 'Platform Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=520&q=85',
    careers: ['전 네이버 AI Lab', '파운드리 플랫폼 개발', 'POSTECH 컴퓨터공학'],
  },
]
