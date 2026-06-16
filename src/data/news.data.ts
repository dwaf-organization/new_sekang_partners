import type { NewsGalleryItem, NewsHero } from '@/types/news.types'

const gaonEventImageUrls = [
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-21%20001.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-21%20002.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-21%20003.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-21%20004.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-21%20005.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-21%20006.jpeg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2FKakaoTalk_Photo_2026-06-15-13-53-22%20007.jpeg?alt=media',
]

export const newsHero: NewsHero = {
  eyebrow: 'News & Updates',
  title: '창업 생태계의 변화와\n가온브릿지의 소식',
  description:
    '투자, 액셀러레이팅, 파트너십, 산업 리포트까지 가온브릿지가 만드는 최신 흐름을 전합니다.',
  imageUrl:
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=85',
}

export const newsGalleryItems: NewsGalleryItem[] = [
  {
    id: 'startup-expo',
    title: '2025 부산 스타트업 투자 밋업',
    category: '행사',
    date: '2025.06.15',
    client: '부산창업지원센터',
    place: '부산 벡스코 제1전시장',
    content:
      '지역 창업팀과 투자자가 함께 만난 투자 밋업 행사입니다. IR 발표, 투자 상담, 네트워킹 프로그램을 통해 초기 창업팀의 후속 성장 기회를 만들었습니다.',
    imageUrl: gaonEventImageUrls[0],
    galleryImages: gaonEventImageUrls,
  },
  {
    id: 'outdoor-networking',
    title: '창업가 네트워킹 데이',
    category: '네트워킹',
    date: '2025.06.04',
    client: '가온브릿지',
    place: '부산시민공원 다솜마당',
    content:
      '창업가, 멘토, 투자자가 편안한 분위기에서 교류한 네트워킹 데이입니다. 팀별 소개와 협업 매칭을 중심으로 실질적인 파트너십 기회를 만들었습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 'demo-day',
    title: '2025년 제1회 부기테크 투자쇼',
    category: '데모데이',
    date: '2025.05.28',
    client: '부기테크 운영사무국',
    place: '부산 콘텐츠코리아랩',
    content:
      '기술 기반 스타트업의 투자 유치를 위한 데모데이입니다. 선발팀의 발표와 투자자 질의응답, 후속 상담이 이어졌으며 유망 팀의 투자 검토가 진행되었습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 'career-fair',
    title: '청년 창업 박람회 참가',
    category: '박람회',
    date: '2025.05.16',
    client: '부산청년창업허브',
    place: '부산 창업박람회장',
    content:
      '청년 창업가와 예비 창업자를 위한 박람회 참가 소식입니다. 창업 상담, 지원사업 안내, 투자 연계 프로그램 소개를 통해 초기 팀의 참여를 이끌었습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 'founder-talk',
    title: '창업가 토크 콘서트',
    category: '강연',
    date: '2025.05.02',
    client: '가온브릿지 액셀러레이팅팀',
    place: '부산 스타트업 라운지',
    content:
      '성장 단계별 창업 경험을 공유하는 토크 콘서트입니다. 창업자의 시행착오, 투자 유치 과정, 팀 빌딩 전략을 중심으로 현장 질문과 답변이 진행되었습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 'ir-session',
    title: 'IR 피칭 클리닉',
    category: '프로그램',
    date: '2025.04.21',
    client: '가온브릿지 투자팀',
    place: '가온브릿지 IR룸',
    content:
      '창업팀의 투자 발표 자료와 피칭 메시지를 고도화한 실전형 클리닉입니다. 투자자 관점의 질문과 데이터 보강을 통해 발표 완성도를 높였습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 'local-festival',
    title: '지역 혁신 스타트업 페스티벌',
    category: '행사',
    date: '2025.04.09',
    client: '지역혁신창업협의회',
    place: '부산 문화광장',
    content:
      '지역 혁신 스타트업과 시민이 함께한 페스티벌입니다. 전시 부스, 공개 발표, 현장 체험 프로그램을 통해 기술 창업의 가능성을 소개했습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 'workshop',
    title: '초기 창업팀 사업화 워크숍',
    category: '워크숍',
    date: '2025.03.28',
    client: '가온브릿지 교육팀',
    place: '부산창업카페 세미나실',
    content:
      '초기 창업팀의 사업화 전략을 점검하는 워크숍입니다. 고객 검증, 수익모델, 실행 로드맵을 중심으로 팀별 코칭과 발표 피드백을 진행했습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85',
    ],
  },
]
