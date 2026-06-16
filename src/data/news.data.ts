import type { NewsGalleryItem, NewsHero } from '@/types/news.types'

const storageUrl = (path: string) =>
  `https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/${encodeURIComponent(
    path,
  )}?alt=media`

const eventGallery = (paths: string[]) => paths.map((path) => storageUrl(path))

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
    id: 'education-1210',
    title: '해양 특화 창업 아이디어 발굴 프로그램',
    category: '교육',
    date: '2025.12.10',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '해양 산업의 특성과 지역 자원을 바탕으로 창업 아이디어를 발굴한 프로그램입니다. 참여자들은 해양 분야 문제를 정의하고, 기술과 서비스로 확장 가능한 사업 아이템을 구체화했습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education1210/education1210.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education1210/education1210.jpg',
      'Gaon-eventsNews/education1210/education1210-1.jpg',
      'Gaon-eventsNews/education1210/education1210-2.jpg',
      'Gaon-eventsNews/education1210/education1210-3.jpg',
      'Gaon-eventsNews/education1210/education1210-4.jpg',
    ]),
  },
  {
    id: 'education-1202',
    title: '숏폼 콘텐츠 제작 교육',
    category: '교육',
    date: '2025.12.02',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '창업 아이템과 브랜드 메시지를 짧고 명확하게 전달하기 위한 숏폼 콘텐츠 제작 교육입니다. 기획, 촬영, 편집, 업로드 전략을 실습하며 홍보 콘텐츠를 직접 구성해보는 시간을 가졌습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education1202/education1202.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education1202/education1202.jpg',
      'Gaon-eventsNews/education1202/educaiton1202-1.jpg',
      'Gaon-eventsNews/education1202/education1202-2.jpg',
      'Gaon-eventsNews/education1202/education1202-3.jpg',
      'Gaon-eventsNews/education1202/education1202-4.jpg',
    ]),
  },
  {
    id: 'education-1109',
    title: '언리얼엔진과 VR을 활용한 부산 로컬 창업 콘텐츠 개발 교육',
    category: '교육',
    date: '2025.11.09',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '언리얼엔진과 VR 기술을 활용해 부산 로컬 자원과 창업 아이템을 몰입형 콘텐츠로 구현한 실습형 교육입니다. 참여자들은 지역 스토리와 공간을 가상 환경으로 시각화하며 콘텐츠 기반 창업 가능성을 탐색했습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education1109/education1109.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education1109/education1109.jpg',
      'Gaon-eventsNews/education1109/education1109-1.jpg',
      'Gaon-eventsNews/education1109/education1109-2.jpg',
      'Gaon-eventsNews/education1109/education1109-3.jpg',
      'Gaon-eventsNews/education1109/education1109-4.jpg',
      'Gaon-eventsNews/education1109/education1109-5.jpg',
    ]),
  },
  {
    id: 'education-1002',
    title: '소셜 임팩트 스타트업 아카데미',
    category: '교육',
    date: '2025.10.02',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '사회문제 해결과 지속가능한 비즈니스를 함께 고민한 소셜 임팩트 스타트업 교육입니다. 참여자들은 문제 정의, 이해관계자 분석, 수익모델 설계를 통해 임팩트와 사업성을 동시에 갖춘 창업 모델을 점검했습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education1002/education1002.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education1002/education1002.jpg',
      'Gaon-eventsNews/education1002/education1002.jpg',
      'Gaon-eventsNews/education1002/education1002-1.jpg',
      'Gaon-eventsNews/education1002/education1002-2.jpg',
      'Gaon-eventsNews/education1002/education1002-3.jpg',
      'Gaon-eventsNews/education1002/education1002-5.jpg',
      'Gaon-eventsNews/education1002/education1002-7.jpg',
      'Gaon-eventsNews/education1002/education1002-8.jpg',
    ]),
  },
  {
    id: 'education-0908',
    title: '오픈이노베이션 네트워킹 & 영업전략 실습교육',
    category: '교육',
    date: '2025.09.08',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '오픈이노베이션을 주제로 기업·기관과의 협력 가능성을 이해하고, 실제 영업 전략을 설계해본 실습 교육입니다. 참여자들은 네트워킹 방식, 제안 메시지, 고객 접점 전략을 정리하며 사업 확장 역량을 강화했습니다.',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2Feducation0809%2Feducation0908-main.jpg?alt=media&token=4e5d8a2c-0bd6-4272-8203-ba427fb59e3f',
    galleryImages: [
      'https://firebasestorage.googleapis.com/v0/b/ai-simulation-c6919.firebasestorage.app/o/Gaon-eventsNews%2Feducation0809%2Feducation0908-main.jpg?alt=media&token=4e5d8a2c-0bd6-4272-8203-ba427fb59e3f',
      ...eventGallery([
        'Gaon-eventsNews/education2/education0908.jpg',
        'Gaon-eventsNews/education2/education0908-1.jpg',
        'Gaon-eventsNews/education2/education0908-3.JPG',
        'Gaon-eventsNews/education2/education0908-4.JPG',
      ]),
    ],
  },
  {
    id: 'education-0809',
    title: '창업 아이템 프로토타입 개발교육',
    category: '교육',
    date: '2025.08.09',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '창업 아이템을 빠르게 검증하기 위한 프로토타입 개발 교육입니다. 참여자들은 아이디어를 시제품 형태로 구체화하고, 사용자 피드백을 반영해 개선 방향을 도출하는 과정을 실습했습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education0809/education0809.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education0809/education0809.jpg',
      'Gaon-eventsNews/education0809/education0809-1.jpg',
      'Gaon-eventsNews/education0809/education0809-2.jpg',
      'Gaon-eventsNews/education0809/education0809-3.jpg',
      'Gaon-eventsNews/education0809/education0809-4.jpg',
    ]),
  },
  {
    id: 'education-0714',
    title: '해양 미래산업 Meet-up 캠프',
    category: '교육',
    date: '2025.07.14',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '해양 미래산업 분야의 창업 기회를 탐색하고 참여자 간 네트워킹을 강화한 Meet-up 캠프입니다. 해양 기술, 물류, 항만, 관광 등 다양한 분야의 아이디어를 공유하며 협업 가능성을 넓혔습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/educaiton0714/education0714.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/educaiton0714/education0714.jpg',
      'Gaon-eventsNews/educaiton0714/education0714-1.jpg',
      'Gaon-eventsNews/educaiton0714/education0714-2.jpg',
      'Gaon-eventsNews/educaiton0714/education0714-3.jpg',
      'Gaon-eventsNews/educaiton0714/education0714-4.jpg',
    ]),
  },
  {
    id: 'education-0630',
    title: '소셜 임팩트 스타트업 아카데미',
    category: '교육',
    date: '2025.06.30',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '사회적 가치와 창업 아이템을 연결하는 소셜 임팩트 스타트업 아카데미입니다. 참여자들은 해결하고자 하는 사회문제를 구체화하고, 고객 검증과 사업계획 수립을 통해 실행 가능한 모델로 발전시켰습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education0630/education1002.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education0630/education1002.jpg',
      'Gaon-eventsNews/education0630/education1002-1.jpg',
      'Gaon-eventsNews/education0630/education1002-2.jpg',
      'Gaon-eventsNews/education0630/education1002-3.jpg',
      'Gaon-eventsNews/education0630/education1002-5.jpg',
      'Gaon-eventsNews/education0630/education1002-7.jpg',
      'Gaon-eventsNews/education0630/education1002-8.jpg',
    ]),
  },
  {
    id: 'education-0116',
    title: '미래해양 기술인재 양성교육',
    category: '교육',
    date: '2025.01.16',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '미래 해양 산업을 이끌 기술 인재를 대상으로 진행한 역량 강화 교육입니다. 해양 기술 트렌드와 창업 가능성을 함께 살펴보고, 기술 기반 아이디어를 실제 사업화 관점으로 연결했습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education0116/education0116.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education0116/education0116.jpg',
      'Gaon-eventsNews/education0116/education0116-1.jpg',
      'Gaon-eventsNews/education0116/education0116-2.jpg',
      'Gaon-eventsNews/education0116/education0116-3.jpg',
      'Gaon-eventsNews/education0116/education0116-4.jpg',
    ]),
  },
  {
    id: 'education-4',
    title: '해양물류 인사이트 Level-up 아카데미 미래형 해운 항만 신사업 발굴 교육',
    category: '교육',
    date: '2025.01.04',
    client: '한국해양대학교',
    place: '창업 교육 현장',
    content:
      '해양물류 산업의 변화와 미래형 해운·항만 신사업 기회를 탐색한 아카데미입니다. 참여자들은 산업 인사이트를 바탕으로 새로운 서비스 모델과 창업 아이디어를 발굴하고 사업화 방향을 논의했습니다.',
    imageUrl: storageUrl('Gaon-eventsNews/education4/education4.jpg'),
    galleryImages: eventGallery([
      'Gaon-eventsNews/education4/education4.jpg',
      'Gaon-eventsNews/education4/education1.jpg',
      'Gaon-eventsNews/education4/education4-2.jpg',
      'Gaon-eventsNews/education4/education4-3.jpg',
      'Gaon-eventsNews/education4/education4-4.jpg',
    ]),
  },
]
