import { 
  CasinoItem, 
  InsightArticle, 
  VipFacility, 
  ServiceTier, 
  NightlifeSpot, 
  NewsArticle, 
  PromotionItem 
} from '../types';

export const HERO_IMAGE = '/images/danang_resort_hero_1793339722724.jpg';
export const CASINO_IMAGE = '/images/casino_baccarat_salon_1793339723348.jpg';
export const LOUNGE_IMAGE = '/images/danang_rooftop_lounge_1793339724803.jpg';
export const SPA_IMAGE = '/images/resort_luxury_spa_1793339724117.jpg';

export const INITIAL_CASINOS: CasinoItem[] = [
  {
    id: 'hoiana-casino',
    name: '호이아나 카지노 (Hoiana Resort & Golf)',
    englishName: 'Hoiana Casino & Resort',
    location: '꽝남성 듀이쑤옌 (다낭 국제공항 남쪽 약 40분)',
    address: 'Tay Son Tay Hamlet, Duy Hai Commune, Duy Xuyen District, Quang Nam Province',
    operator: 'Nam Hoi An Development Co., Ltd.',
    licenseInfo: '베트남 재무부(MOF) 공식 카지노 영업 인가 취득 (Decree 03/2017/ND-CP)',
    foreignerEligibility: '유효한 외국 여권을 소지한 만 21세 이상 성인 (베트남 국적자 입장 불가)',
    passportIdRules: '여권 원본 필수 지참 (모바일 사진, 복사본 불가), 베트남 출입국 유효 비자 스탬프 확인',
    dressCode: '스마트 캐주얼 (민소매, 반바지 슬리퍼 불가, 모자 및 선글라스 테이블 착용 금지)',
    gameTypes: ['바카라 (전통/노커미션)', '블랙잭', '룰렛', '식보 (다이사이)', '전자 슬롯머신', 'ETG (전자 테이블 게임)'],
    tableCountText: '라이브 테이블 140여 대, 최신 슬롯머신 350여 대, 프라이빗 VIP 정킷 살롱 운영',
    preVisitChecklist: [
      '카지노 내부 사진 및 동영상 촬영 엄격 금지 (보안요원 제재)',
      '현금은 미국 달러(USD) 또는 베트남 동(VND)으로 캐셔 케이지에서 칩 구매',
      '신용카드(Visa/Master) 캐시 어드밴스 이용 시 3~5% 수수료 부과',
      '고액 외환 반출 시 카지노 공식 당첨 증명서(Certificate of Winnings) 수령 필수'
    ],
    officialRules: [
      '테이블별 최소/최대 베팅 금액(Minimum/Maximum) 전자 디스플레이 명시',
      '핸드 셔플 및 정밀 전자 슈(Shoe) 규정 준수',
      '모든 칩은 카지노 내부 케이지에서만 공식 정산 가능'
    ],
    disputeProcedures: '판정 논란 시 즉시 해당 피트보스(Pit Boss) 및 듀티 매니저 호출. 상호 이의제기 시 카지노 CCTV 감시팀(Surveillance) 영상 재확인 후 베트남 재무부 카지노 감독 규정에 의거 최종 결정.',
    officialSource: 'Hoiana Resort & Golf 공식 카지노 가이드 및 베트남 재무부 공고',
    lastVerifiedDate: '2026-10-15',
    isVerified: true,
    image: CASINO_IMAGE,
    summary: '중부 베트남 최대 규모의 인터내셔널 복합리조트 카지노로, 라이브 테이블과 최고급 프라이빗 VIP 정킷 라운지를 완비한 대표 시설입니다.',
    features: ['라이브 딜러 테이블', '프라이빗 VIP 살롱', '24시간 운영', 'USD 환전 캐셔', '공식 당첨 증명서 발급']
  },
  {
    id: 'crown-international-club',
    name: '크라운 인터내셔널 클럽 (Silver Shores Resort)',
    englishName: 'Crown International Club Da Nang',
    location: '다낭 오행산군 박미안 해변 (실버쇼어 리조트 내)',
    address: '8 Son Tra Dien Ngoc, Bac My An, Ngu Hanh Son, Da Nang',
    operator: 'Silver Shores Investment Development Co., Ltd.',
    licenseInfo: '다낭시 최초 국제 카지노 영업 인가 취득 사업장',
    foreignerEligibility: '유효한 외국 국적 여권 소지자 (만 21세 이상)',
    passportIdRules: '여권 원본 확인 후 멤버십 카드 발급 및 입장권 수령',
    dressCode: '단정한 캐주얼 복장 (모자 차광 모자 착용 불가, 슬리퍼 제한)',
    gameTypes: ['바카라', '블랙잭', '캐리비안 스터드 포커', '룰렛', '슬롯머신'],
    tableCountText: '테이블 100여 대, VIP 전용 정킷 룸 다수 운영',
    preVisitChecklist: [
      '전통적인 중화권 및 아시아 VIP 고객 선호도가 높은 시설',
      '철저한 신원 확인 및 보안 검색대 통과 필수',
      'USD 기준 테이블 베팅 기본 적용'
    ],
    officialRules: [
      '베팅 시 칩 단위 명확히 준수',
      'VIP 테이블 이용 시 별도의 미니멈 베팅 규정 준수',
      '소란 행위 또는 비매너 행위 적발 시 즉시 퇴장 및 재입장 차단'
    ],
    disputeProcedures: '테이블 담당 슈퍼바이저 및 보안 총괄 책임자 면담 후 현장 분쟁 해결 위원회 절차 적용.',
    officialSource: 'Silver Shores Resort & 다낭시 관광청 확인 자료',
    lastVerifiedDate: '2026-09-28',
    isVerified: true,
    image: HERO_IMAGE,
    summary: '다낭 미케비치 남단 실버쇼어 리조트에 위치한 카지노로, 오랜 역사와 풍부한 테이블 게임 인프라를 보유하고 있습니다.',
    features: ['오행산 해변 인접', 'VIP 정킷 룸', 'USD 테이블', '보안 검색 완비']
  },
  {
    id: 'club-99-furama',
    name: '클럽 99 (푸라마 리조트 다낭)',
    englishName: 'Club 99 - Furama Resort Da Nang',
    location: '다낭 오행산군 푸라마 리조트 지하 1층',
    address: '105 Vo Nguyen Giap Street, Khue My, Ngu Hanh Son, Da Nang',
    operator: 'Furama Resort & Japanese E-Gaming Operating Consortium',
    licenseInfo: '베트남 E-Gaming 전자 슬롯 및 전자 테이블 게임 공식 라이선스',
    foreignerEligibility: '만 21세 이상 외국인 (여권 원본 확인)',
    passportIdRules: '여권 원본 제시 (최초 방문 시 회원 등록 필수)',
    dressCode: '캐주얼 (수영복, 가운, 슬리퍼 착용 시 입장 불가)',
    gameTypes: ['전자 바카라 (스마트 터치)', '전자 블랙잭', '전자 룰렛', '최신 멀티 비디오 슬롯머신'],
    tableCountText: '전자 게이밍 터미널 80여 대 (라이브 딜러 테이블 없음, 전자 자동화 시스템)',
    preVisitChecklist: [
      '라이브 딜러가 아닌 일본계 정밀 자동화 전자 게임기 중심',
      '초보자나 소액으로 안전하게 즐기려는 이용자에게 최적화',
      '무료 음료 및 간단한 스낵 라운지 서비스 제공'
    ],
    officialRules: [
      '전자 머신 계정 카드 충전 후 이용',
      '기계 오작동 발생 시 모든 지불 무효 원칙(국제 게이밍 규정) 적용',
      '당첨금 정산은 캐셔 데스크에서 회원 카드 제시 후 현금 수령'
    ],
    disputeProcedures: '전자 기계 로그 기록 및 서버 데이터 대조 확인 후 정산.',
    officialSource: 'Furama Resort Da Nang 공식 클럽 가이드',
    lastVerifiedDate: '2026-10-10',
    isVerified: true,
    image: CASINO_IMAGE,
    summary: '푸라마 리조트 내에 위치한 일본계 운영 전자 카지노로, 라이브 딜러 부담 없이 전자 바카라와 슬롯을 편안하게 즐길 수 있습니다.',
    features: ['전자 바카라 & 룰렛', '푸라마 리조트 위치', '친절한 한국어 안내', '음료 바 제공']
  },
  {
    id: 'club-one-opera',
    name: '세븐 드래곤 클럽 (원 오페라 호텔)',
    englishName: 'Seven Dragon Club - One Opera Hotel',
    location: '다낭 하이쩌우군 도심',
    address: '115 Nguyen Van Linh, Nam Duong, Hai Chau, Da Nang',
    operator: 'One Opera Hotel Da Nang E-Gaming Club',
    licenseInfo: '베트남 관광호텔 부속 전자 슬롯 게임 클럽 인가',
    foreignerEligibility: '외국인 여권 소지 성인 (만 21세 이상)',
    passportIdRules: '여권 원본 확인',
    dressCode: '단정한 복장',
    gameTypes: ['전자 슬롯', '전자 룰렛', '전자 바카라'],
    tableCountText: '전자 터미널 50여 대',
    preVisitChecklist: [
      '다낭 시내 중심가 위치로 접근성 용이',
      '주로 소규모 슬롯 및 전자 기기 위주'
    ],
    officialRules: ['전자 충전 카드 규정 준수'],
    disputeProcedures: '호텔 매니저 및 머신 로그 확인',
    officialSource: 'One Opera Hotel 공식 안내',
    lastVerifiedDate: '2026-09-20',
    isVerified: true,
    image: HERO_IMAGE,
    summary: '다낭 공항과 가까운 시내 중심부에 위치하여 가볍게 전자 게임을 즐길 수 있는 도심형 E-Gaming 클럽입니다.',
    features: ['다낭 도심 위치', '전자 슬롯 머신', '빠른 접근성']
  }
];

export const INITIAL_INSIGHTS: InsightArticle[] = [
  {
    id: 'baccarat-commission-math',
    category: '게임 규칙',
    title: '바카라 커미션 구조와 하우스 엣지: 전통 vs 슈퍼6 비교',
    subtitle: '수학적 기댓값으로 이해하는 5% 커미션과 노커미션 뱅커 6의 차이',
    readingTime: '5분',
    publishedDate: '2026-10-18',
    summary: '전통 바카라의 5% 뱅커 커미션과 노커미션 바카라의 뱅커 6승 50% 삭감 규정 중 어떤 테이블이 수학적으로 유리한지 하우스 엣지를 통해 명확히 비교합니다.',
    content: [
      '바카라는 카지노 게임 중 플레이어와 뱅커의 확률이 가장 균등한 게임 중 하나입니다. 그러나 카지노(하우스)는 지속적인 수학적 우위를 확보하기 위해 규칙을 설계했습니다.',
      '1. 전통 커미션 바카라 (Classic Commission Baccarat):\n- 뱅커 승리 시 베팅액의 5%를 커미션으로 징수합니다.\n- 뱅커 베팅의 하우스 엣지(House Edge): 약 1.06%\n- 플레이어 베팅의 하우스 엣지: 약 1.24%\n- 타이(Tie) 베팅의 하우스 엣지: 8대 1 배당 시 약 14.36% (가장 불리함)',
      '2. 노커미션 바카라 (No Commission / Super 6):\n- 평소에는 뱅커 승리 시 100% 전액을 지급하여 편리하지만, 뱅커가 6점으로 승리할 경우 베팅액의 50%만 지급(1:0.5)합니다.\n- 뱅커 6점이 나오는 확률은 약 5.38%에 불과해 보이지만, 이 단 하나의 규칙으로 인해 노커미션 뱅커의 하우스 엣지는 약 1.46%로 급증합니다.\n- 결과적으로, 노커미션 바카라는 전통 커미션 바카라(1.06%)보다 플레이어에게 수학적으로 약 0.4% 더 불리합니다.',
      '결론: 단기적 게임에서는 칩 계산의 편의성 때문에 노커미션을 선호할 수 있으나, 장기적인 확률 관점에서는 5% 커미션 바카라가 통계적으로 우수합니다.'
    ],
    keyTakeaways: [
      '전통 바카라 뱅커 하우스 엣지 1.06% vs 노커미션 뱅커 1.46%',
      '노커미션 바카라는 뱅커 6 승리 시 50%만 지급하므로 카지노에 더 유리함',
      '타이(Tie) 베팅은 하우스 엣지 14.36%로 장기적으로 가장 위험한 선택'
    ],
    disclaimer: '본 콘텐츠는 확률 및 규정 이해를 돕기 위한 정보이며, 어떠한 베팅 시스템도 카지노의 수학적 하우스 엣지를 극복하거나 수익을 보장할 수 없습니다.'
  },
  {
    id: 'rolling-turnover-concept',
    category: '롤링 & 턴오버',
    title: '롤링(Rolling)과 턴오버(Turnover)의 정의와 프로토콜',
    subtitle: '비환전 칩(Dead Chip)의 작동 메커니즘과 불법 정킷 과장 홍보 식별법',
    readingTime: '6분',
    publishedDate: '2026-10-12',
    summary: '롤링 칩과 캐시 칩의 차이, 누적 턴오버의 계산 방식, 그리고 해외 정킷 알선 업자들이 악용하는 허위 커미션 과장 광고의 실체를 객관적으로 해설합니다.',
    content: [
      '카지노 VIP 살롱에서 통용되는 "롤링"이란 비환전용 칩(Non-negotiable Chip, 속칭 롤링 칩/데드 칩)으로 베팅을 진행하여 승리 시 현금화 가능한 캐시 칩(Cash Chip)으로 전환하는 전체 베팅 순환 과정을 의미합니다.',
      '1. 롤링 칩의 메커니즘:\n- 플레이어는 현금 또는 예치금을 통해 비환전용 롤링 칩을 구매합니다.\n- 테이블에서 롤링 칩으로 베팅하여 승리하면 원금(롤링 칩)은 그대로 돌려받고 배당금은 캐시 칩으로 지급받습니다.\n- 패배하면 롤링 칩이 회수됩니다.\n- 플레이어는 모인 캐시 칩을 다시 롤링 칩으로 교환(Rolling)하며 게임을 지속합니다. 이 과정에서 누적 교환된 롤링 칩의 총액이 "롤링 실적(Turnover)"이 됩니다.',
      '2. 턴오버(Turnover)의 산정:\n- 단순히 1,000만 원을 베팅해서 승패를 반복하여 총 베팅 합계가 1억 원이 되었다면, 턴오버는 1억 원이 됩니다.\n- 공식 카지노 정킷 라이선스 업체는 이 턴오버 실적에 따라 규정된 0.7% ~ 1.2% 수준의 리베이트 수수료를 정산합니다.',
      '3. 주의해야 할 불법 롤링 피 과장 수법:\n- 일부 무허가 브로커는 "롤링 2.0% 이상 보장", "손실액 전액 무료 숙박 제공" 등의 비현실적인 조건을 내세우며 고객을 유인합니다.\n- 카지노의 수학적 하우스 엣지가 약 1.06%~1.24%인 상황에서 2%가 넘는 롤링 요율을 약속하는 것은 불법 사설 정킷이거나 환전 먹튀, 자금 횡령의 전형적인 징후입니다.\n- 정식 카지노는 모든 롤링 내역을 전산 모니터링하며, 불법 알선 업체를 통한 분쟁에 대해 책임을 지지 않습니다.'
    ],
    keyTakeaways: [
      '롤링 실적은 원금이 아닌 누적 베팅 칩 교환 총액을 의미함',
      '정상적인 카지노 공식 리베이트 요율은 통상 0.7%~1.2% 범위',
      '비현실적인 고율 롤링 보장(2.0% 이상)은 사기 또는 불법 정킷 사설 조작의 고위험 신호'
    ],
    disclaimer: 'DANANG VVIP는 카지노 롤링 수수료 알선이나 에이전시 영업을 하지 않으며, 정식 규정의 이해를 돕기 위한 정보만을 제공합니다.'
  },
  {
    id: 'chips-exchange-official-settlement',
    category: '정산 & 세무',
    title: '카지노 칩 교환 및 공식 정산 프로토콜과 외환 반출 규정',
    subtitle: '캐셔 케이지 정산 절차, 신용카드 수수료, 베트남 외환관리법 신고 가이드',
    readingTime: '5분',
    publishedDate: '2026-09-30',
    summary: '카지노 내부 케이지에서의 칩 정산 절차와 미화 5,000달러 초과 현금 소지 시 베트남 세관 합법 신고 절차(Certificate of Winnings)를 안내합니다.',
    content: [
      '베트남 내 합법 카지노에서의 자금 흐름은 베트남 중앙은행(SBV)과 재무부(MOF)의 엄격한 외환관리법 적용을 받습니다.',
      '1. 칩 구매 및 정산 기본 규칙:\n- 게임 칩은 반드시 카지노 공식 캐셔 케이지(Cage) 또는 정식 테이블 바이인(Buy-in)을 통해서만 구매해야 합니다.\n- 장외 개인 간 칩 거래나 사설 환전상을 통한 칩 매매는 베트남 법령 위반이자 카지노 즉시 퇴장 및 칩 몰수 사유입니다.',
      '2. 신용카드 캐시 어드밴스(Cash Advance):\n- 카지노 케이지에서 비자/마스터카드로 칩을 구매할 경우, 통상 3%~5%의 카드사/가맹점 수수료와 국제 결제 환율이 적용되므로 현금(USD) 준비에 비해 비용 부담이 큽니다.',
      '3. 고액 당첨금 공식 증명서 (Certificate of Winnings):\n- 베트남 외환관리법(Circular 15/2011/TT-NHNN)에 따라, 출국 시 미화 5,000 USD(또는 이에 상당하는 타 통화)를 초과하는 현금을 소지하고 출국할 경우 베트남 세관에 공식 신고해야 합니다.\n- 카지노에서 승리하여 획득한 자금인 경우, 카지노 케이지에 "합법적 게임 당첨 증명서" 발급을 정식 요청하여 세관에 제출하면 합법적으로 외환을 반출할 수 있습니다.\n- 증명서 없이 5,000달러를 초과 소지하다 적발될 경우 자금 압류 및 고액의 벌금형에 처해질 수 있습니다.'
    ],
    keyTakeaways: [
      '미화 5,000 USD 초과 현금 출국 시 세관 신고 필수 (Certificate of Winnings 필수 발급)',
      '개인 간 장외 칩 거래는 카지노 규정상 즉시 몰수 및 영구 출입금지 대상',
      '신용카드 칩 결제 시 3~5% 가맹점 수수료 감안 필요'
    ],
    disclaimer: '외환 반출 및 세관 신고는 베트남 세관 당국의 최신 고시를 따르며, 법령 변경 여부를 출국 전 재확인하시기 바랍니다.'
  },
  {
    id: 'korean-criminal-law-246',
    category: '법률 검토',
    title: '한국인 해외 카지노 이용과 대한민국 형법 제246조 법률적 쟁점',
    subtitle: '속인주의 원칙, \'일시오락의 정도\' 대법원 판례 기준 및 법적 리스크 분석',
    readingTime: '7분',
    publishedDate: '2026-10-05',
    summary: '대한민국 형법상 해외 도박 처벌 규정과 대법원이 제시하는 일시오락의 기준, 도박 빚의 불법원인급여 판례를 법률적으로 명확히 분석합니다.',
    content: [
      '대한민국 형법은 \'속인주의(대한민국 영역 외에서 죄를 범한 내국인에게 적용)\'를 원칙으로 채택하고 있습니다. 따라서 베트남 현지 법률상 합법적으로 인가받은 카지노라 하더라도 한국 국적자는 한국 형법의 적용을 받습니다.',
      '1. 대한민국 형법 제246조 (도박, 상습도박):\n- 제1항: 도박을 한 사람은 1천만 원 이하의 벌금에 처한다. 단, "일시오락 정도에 불과한 경우에는 예외로 한다."\n- 제2항: 상습으로 도박을 한 사람은 3년 이하의 징역 또는 2천만 원 이하의 벌금에 처한다.',
      '2. 대법원이 제시하는 \'일시오락\' 판단 기준:\n- 대법원 판례(대법원 2002도6333 등)에 따르면 일시오락 여부는 도박의 시간과 장소, 도박자의 사회적 신분과 재산 정도, 도박에 걸린 재물의 가액, 도박에 이르게 된 경위 등을 종합적으로 고려하여 사회통념에 따라 판단합니다.\n- 관광지에서 소액으로 단발적인 게임을 즐긴 것은 일시오락으로 인정되어 처벌받지 않을 가능성이 높으나, 수천만 원 단위의 고액 베팅, 반복적인 도박, 롤링 에이전시 연계 자금 차입 등은 상습도박죄로 기소될 수 있습니다.',
      '3. 도박 자금 차입(도박 빚)의 무효성:\n- 한국 민법 제103조(반사회질서의 법률행위) 및 제746조(불법원인급여)에 따라 도박 자금으로 빌려준 돈은 법적으로 변제할 의무가 없습니다. 해외 카지노에서 사설 환전상이나 브로커에게 차용한 도박 빚은 국내 법원에서 청구할 수 없으며, 이를 빌려주고 회수하는 행위 자체가 도박개장 및 방조로 형사처벌 대상입니다.',
      '주의사항: 본 사이트는 카지노 방문을 조장하거나 도박을 권유하지 않으며, 이용자는 본인의 법적 책임과 위험을 명확히 인지해야 합니다.'
    ],
    keyTakeaways: [
      '한국인은 속인주의 원칙에 따라 해외 합법 카지노에서도 한국 형법 적용 대상',
      '재산 상태와 소득에 비해 과도한 베팅은 일시오락 범위를 넘어 처벌될 수 있음',
      '해외 사설 도박 자금 차입은 불법원인급여에 해당하며 형사 수사 대상'
    ],
    disclaimer: '본 해설은 일반적인 법률 상식 제공용이며, 구체적인 사안에 대한 공식 법률 자문은 전문 변호사를 통하시기 바랍니다.'
  },
  {
    id: 'aml-kyc-procedures',
    category: '자금세탁방지',
    title: '국제 카지노의 자금세탁방지(AML) 및 고객확인(KYC) 의무',
    subtitle: '고액 현금 거래 보고(CTR) 기준과 여권 검증 및 계좌 실명제 원칙',
    readingTime: '4분',
    publishedDate: '2026-09-15',
    summary: 'FATF(국제자금세탁방지기구) 권고안 및 베트남 법률에 따른 카지노의 의심거래 보고(STR)와 실명 여권 검증 절차를 설명합니다.',
    content: [
      '국제 카지노 산업은 금융기관과 동등한 수준의 엄격한 자금세탁방지(AML) 의무를 부담합니다.',
      '1. 고객확인(KYC: Know Your Customer):\n- 카지노 입장 시 여권 원본을 스캔하고 데이터베이스에 기록하는 것은 자금세탁 방지를 위한 법적 의무입니다.\n- VIP 정킷 살롱 이용 시 자금 출처(Source of Funds)에 대한 소명 자료를 요구받을 수 있습니다.',
      '2. 고액 현금 거래 보고 (CTR):\n- 베트남 법령에 따라 일정 금액 이상의 현금 교환 거래는 금융정보분석원(FIU)에 자동으로 보고됩니다.',
      '3. 의심 거래(STR) 주의:\n- 게임을 거의 하지 않고 고액의 현금을 칩으로 바꾼 직후 타인에게 양도하거나 다시 수표/계좌이체로 환전하려는 행위는 자금세탁 의심 거래로 즉시 전산에 포착되어 계좌 동결 및 관계 당국에 통보됩니다.'
    ],
    keyTakeaways: [
      '카지노는 금융기관 수준의 AML/KYC 법적 의무를 이행함',
      '정상적인 게임 이용 없이 환전 목적으로 칩을 순환시키는 행위는 즉시 계정 동결',
      '여권 및 신원 불일치 시 자금 반출 거부 가능'
    ],
    disclaimer: '카지노 내 모든 금융 거래는 기록되며 투명하고 합법적인 절차에 의해 진행되어야 합니다.'
  },
  {
    id: 'disputes-and-court-rulings',
    category: '규정 & 판례',
    title: '실제 카지노 분쟁 사례와 법원 판례: 기계 오작동과 칩 분실',
    subtitle: '\'Malfunction Voids All Plays\' 면책 조항의 법적 효력과 CCTV 확인 권한의 한계',
    readingTime: '5분',
    publishedDate: '2026-09-08',
    summary: '슬롯머신 잭팟 오작동 무효 판례와 칩 분실 분쟁 시 카지노가 지는 법적 책임의 범위에 대한 실제 판례를 분석합니다.',
    content: [
      '카지노 이용 중 발생할 수 있는 주요 분쟁 유형과 국제 법원의 확립된 판례 원칙을 정리합니다.',
      '1. 슬롯머신 기계 오작동(Malfunction) 판례:\n- 슬롯머신에 명시된 "Malfunction voids all plays and pays(기계 오작동은 모든 플레이와 지불을 무효로 한다)" 문구는 전 세계 카지노 법률에서 유효한 면책 조항으로 인정받고 있습니다.\n- 기계 시스템 에러로 잭팟 금액이 비정상적으로 표기된 사건에 대해 법원은 카지노 측의 서버 로그 데이터를 인정하여 초과 지불 의무가 없다고 판결한 바 있습니다.',
      '2. 테이블 칩 도난 및 분실 분쟁:\n- 테이블 위에 올려둔 칩이 타인에 의해 도난당했을 때, 카지노가 100% 손해를 배상할 의무는 없습니다.\n- 플레이어에게도 소지품 관리 주의 의무가 있으며, 카지노는 CCTV 영상 조사를 통해 가해자를 식별하고 경찰에 인계할 협조 의무를 집니다.\n- 이용자 개인이 카지노 내부 CCTV 원본 영상을 직접 열람하거나 복사해 가는 것은 고객 개인정보 보호법상 원칙적으로 불허됩니다.'
    ],
    keyTakeaways: [
      '슬롯머신 소프트웨어 결함 시 지불 무효 조항은 법적으로 유효',
      '테이블 위 칩 관리 책임은 1차적으로 이용자 본인에게 있음',
      'CCTV 영상은 보안실 내부 조사 후 경찰 공식 요청 시에만 제출됨'
    ],
    disclaimer: '본 사례 분석은 분쟁 예방을 위한 가이드이며, 현장 분쟁 시 카지노 운영진 및 현지 사법 기관의 안내를 따라야 합니다.'
  }
];

export const INITIAL_VIP_FACILITIES: VipFacility[] = [
  {
    id: 'hoiana-presidential-suite',
    category: '스위트룸 & 빌라',
    name: '호이아나 오션프론트 4베드룸 풀빌라 & 프레지덴셜 스위트',
    resortName: 'Hoiana Resort & Golf',
    description: '탁 트인 동베트남해를 마주하는 독립된 해변 풀빌라로, 전용 인피니티 풀, 개인 정원, 전담 버틀러 룸 및 마스터 침실을 갖춘 최고급 휴식 공간입니다.',
    features: ['전용 프라이빗 풀 & 선데크', '24시간 1:1 전담 버틀러', 'VIP 전용 별도 체크인 라운지', '최상급 어메니티 & 다이닝 공간'],
    accessRequirements: '사전 예약 및 VIP 등급 또는 정규 스위트 요금 결제 고객',
    image: HERO_IMAGE
  },
  {
    id: 'hoiana-premier-lounge',
    category: 'VIP 라운지',
    name: '호이아나 프리미어 멤버스 익스클루시브 라운지',
    resortName: 'Hoiana Resort & Golf',
    description: '선정된 멤버 및 VIP 고객만을 위한 독립 라운지로, 샴페인 바, 애프터눈 티, 프라이빗 비즈니스 미팅 룸 및 미팅 케이터링을 제공합니다.',
    features: ['무제한 프리미엄 샴페인 & 와인', '프라이빗 컨시어지 데스크', '조용한 방음 휴게 공간', '고속 보안 Wi-Fi'],
    accessRequirements: 'VIP 멤버십 카드 소지자 및 라운지 이용 패키지 고객',
    image: LOUNGE_IMAGE
  },
  {
    id: 'furama-luxury-villas',
    category: '스위트룸 & 빌라',
    name: '푸라마 리조트 다낭 프라이빗 풀빌라 컬렉션',
    resortName: 'Furama Resort Da Nang',
    description: '울창한 열대 정원에 둘러싸인 3~4베드룸 풀빌라로, 다낭 시내 및 미케비치와의 접근성이 탁월하며 클럽 99 게이밍 클럽과 인접해 있습니다.',
    features: ['개인 정원 및 수영장', '주방 및 다이닝 룸', '해변 직통 연결 보도', '24시간 룸서비스'],
    accessRequirements: '정규 리조트 예약 고객',
    image: HERO_IMAGE
  },
  {
    id: 'vip-chauffeur-service',
    category: '전용 교통',
    name: '다낭 VVIP 전용 쇼퍼 & 토요타 알파드 / 카니발 하이리무진',
    resortName: 'DANANG VVIP Chauffeur Service',
    description: '공항 착륙부터 숙소 이동까지 전 일정 전담 기사가 수행하는 최고급 전용 차량 서비스입니다. 철저한 신원 검증과 정숙한 승차감을 보장합니다.',
    features: ['토요타 알파드 또는 기아 카니발 하이리무진 배차', '무료 생수 및 휴대폰 충전 완비', '실시간 한국어 컨시어지 소통', '공항 피켓 서비스'],
    accessRequirements: 'VVIP 컨시어지 사전 예약 고객 (패키지 포함 또는 단독 예약)',
    image: HERO_IMAGE
  },
  {
    id: 'resort-fine-dining',
    category: '파인다이닝',
    name: '더 그릴 & 광둥 정통 파인다이닝',
    resortName: 'Hoiana / Furama Selection',
    description: '세계적인 셰프가 선보이는 최고급 해산물 스테이크 그릴 및 미쉐린 출신 마스터가 조리하는 정통 광둥 요리와 고급 얌차 코스를 프라이빗 룸에서 즐기실 수 있습니다.',
    features: ['독립 프라이빗 다이닝 룸(PDR)', '소믈리에 추천 빈티지 와인 페어링', '프리미엄 랍스터 & 와규 스테이크', '사전 예약 필수'],
    accessRequirements: '사전 예약 고객',
    image: LOUNGE_IMAGE
  }
];

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'basic',
    tierName: 'BASIC CONCIERGE',
    subtitle: '스마트하고 합법적인 다낭 현지 여행 편의 기본 패키지',
    priceGuide: '1일 기준 $180 ~ $240 (차량/일정에 따른 투명한 견적)',
    description: '다낭에 첫 방문하시거나 카지노 및 주요 명소를 안전하게 이동하고자 하는 분들을 위한 필수 교통 및 한국어 전담 편의 안내 서비스입니다.',
    inclusions: [
      '다낭 국제공항 단독 VIP 픽업 및 귀국 샌딩 (신형 카니발/세단)',
      '1일 시내 주요 이동 지원 및 전담 현지 기사',
      '실시간 카카오톡 한국어 여행 컨시어지 (맛집, 스파 예약 대행)',
      '베트남 현지 합법 환전 및 유심/eSIM 안내'
    ],
    exclusions: [
      '호텔 숙박료 및 개인 식음료비',
      '카지노 칩 구매 및 게임 비용',
      '기사 개인 매너 팁'
    ],
    termsAndConditions: [
      '제공 주체: 다낭 정식 등록 합법 여행 운송 서비스 협력사',
      '순수 여행 이동 및 예약 편의 대행 서비스입니다.',
      '카지노 베팅액 연동 할인이나 무료 제공은 일체 적용되지 않습니다.'
    ],
    provider: 'DANANG VVIP Hospitality Partner (합법 운송 및 여행 대행사)',
    cancellationPolicy: '이용 48시간 전 취소 시 100% 전액 환불, 24시간 전 50% 환불'
  },
  {
    id: 'premium',
    tierName: 'PREMIUM HOSPITALITY',
    subtitle: '5성급 호텔과 전용 리무진 기사가 결합된 프리미엄 패키지',
    priceGuide: '2박 3일 기준 $850 ~ $1,400 (호텔 시즌 및 인원별 변동)',
    description: '호이아나 또는 미케비치 5성급 럭셔리 호텔 투숙과 함께 24시간 전용 차량 기사, 고급 파인다이닝 및 정식 허가 가라오케 VIP 룸 예약 대행을 원스톱으로 지원합니다.',
    inclusions: [
      '5성급 오션뷰 프리미어 룸 2박 (조식 포함)',
      '토요타 알파드 또는 카니발 하이리무진 전용 쇼퍼 3일 전 일정 배차',
      '공항 프라이빗 피켓 영접 및 쾌속 픽업',
      '정식 인가 프리미엄 가라오케(KTV) 최상위 VIP 룸 우선 예약 지원',
      '호이아나 및 다낭 최고급 파인다이닝 독립 PDR 룸 예약 대행'
    ],
    exclusions: [
      '개인 주류 추가 주문 및 카지노 베팅 머니',
      '불법 및 비공식 서비스 일체'
    ],
    termsAndConditions: [
      '실제 검증된 호텔 및 정식 허가 시설만을 엄선하여 예약 대행합니다.',
      '베팅 실적 조건부 페이백이나 롤링 페이백 형태의 위장 여행 상품은 취급하지 않습니다.'
    ],
    provider: 'DANANG VVIP Premium Travel Service Co.',
    cancellationPolicy: '호텔 규정에 따름 (이용 7일 전 100% 환불, 3일 전 50% 환불)'
  },
  {
    id: 'signature',
    tierName: 'SIGNATURE VVIP ELITE',
    subtitle: '최고급 풀빌라와 패스트트랙, 1:1 전담 컨시어지가 제공되는 시그니처',
    priceGuide: '3박 4일 맞춤 견적 (카카오톡 실시간 1:1 상담)',
    description: '타협 없는 최상의 안락함과 프라이버시를 요구하는 고객을 위한 의전 패키지로, 공항 입국 패스트트랙, 독립 풀빌라, 최고급 스파 및 전담 버틀러 수준의 의전을 제공합니다.',
    inclusions: [
      '호이아나 프라이빗 비치 풀빌라 또는 5성급 펜트하우스 3박',
      '다낭 공항 입국 패스트트랙(Fast-track) 서비스 (대기 없는 VIP 입국)',
      '최고급 럭셔리 리무진 및 24시간 전속 수행 기사',
      '호텔 5성급 시그니처 럭셔리 스파 90분 트리트먼트 포함',
      '항공 스케줄 변경 지원 및 1:1 전담 VIP 매니저 상시 밀착 케어',
      '호이아나 카지노 VIP 멤버십 발급 절차 및 정식 정산 가이드 동행'
    ],
    exclusions: [
      '게임 관련 베팅 손실 및 개인 사적 비용'
    ],
    termsAndConditions: [
      '모든 서비스는 사전 계약서 작성 및 합법 영수증 발행 원칙',
      '어떠한 불법 성매매 알선이나 사설 정킷 롤링 영업을 배제한 최고급 여행 의전'
    ],
    provider: 'DANANG VVIP Concierge Executive Division',
    cancellationPolicy: '예약 확정 시 개별 계약서 약관에 의거 진행'
  }
];

export const INITIAL_NIGHTLIFE_SPOTS: NightlifeSpot[] = [
  // KARAOKE
  {
    id: 'ktv-royal-suite',
    category: 'karaoke',
    subCategory: '프리미엄 KTV',
    name: '원 오페라 KTV (One Opera Licensed KTV)',
    koreanName: '원 오페라 정식 인가 KTV 클럽',
    location: '다낭 하이쩌우군 원 오페라 호텔 복합단지 내',
    hours: '19:00 - 익일 02:00',
    priceRange: '기본 맥주/양주 세트 룸 차지 포함 약 $150 ~ $300',
    dressCode: '스마트 캐주얼 (슬리퍼 지양)',
    description: '베트남 문화관광부 정식 인가를 받은 다낭 대표 대형 KTV 룸 시설로, 최신 한국 노래방 음향 시스템(TJ/금영 최신곡)과 고급스러운 인테리어의 대형 룸 20여 개를 완비하고 있습니다.',
    features: ['정식 사업자 인가 시설', '최신 한국 음향 시스템', '대형 VIP 독립 룸', '정찰제 주류 메뉴판 제공'],
    bookingNotice: '사전 예약 권장, 바가지 요금 없는 정찰제 주류 메뉴판 확인 필수',
    isLegitimateVerified: true,
    image: LOUNGE_IMAGE
  },
  {
    id: 'ktv-moonlight',
    category: 'karaoke',
    subCategory: '프리미엄 KTV',
    name: '다낭 골든 럭셔리 가라오케',
    koreanName: '골든 럭셔리 비즈니스 KTV',
    location: '다낭 팜반동 한인 타운 인근',
    hours: '19:30 - 익일 02:00',
    priceRange: '양주 12년산 세트 기준 약 $200선',
    dressCode: '단정한 복장',
    description: '한국인 여행객 및 출장자가 안심하고 방문할 수 있는 합법 비즈니스 노래방 시설로, 바가지 요금 없이 투명한 영수증 발행을 원칙으로 합니다.',
    features: ['투명한 정찰 가격', '한국어 가능 매니저 상주', '위스키 및 샴페인 정품 취급'],
    bookingNotice: '불법 성적 서비스 요구 시 입장 거부될 수 있습니다.',
    isLegitimateVerified: true,
    image: LOUNGE_IMAGE
  },

  // MASSAGE & SPA
  {
    id: 'spa-maia-resort',
    category: 'spa',
    subCategory: '5성급 호텔 스파',
    name: '푸라마 리조트 바얀 트리 스파 셀렉션',
    koreanName: '푸라마 오아시스 럭셔리 스파',
    location: '다낭 푸라마 리조트 오행산 해변',
    hours: '09:00 - 22:00',
    priceRange: '60분 아로마 $50 / 90분 시그니처 테라피 $75 (팁 포함)',
    description: '자연 채광과 전통 목조 인테리어가 어우러진 최고급 5성급 힐링 공간으로, 공인 자격을 보유한 전문 테라피스트들이 천연 에센셜 오일을 이용한 오가닉 케어를 제공합니다.',
    features: ['공인 전문 테라피스트', '천연 유기농 아로마 오일', '프라이빗 샤워 & 자쿠지', '카지노 피로 회복 특화'],
    bookingNotice: '사전 예약 필수 (투숙객 외 외부 방문객 가능)',
    isLegitimateVerified: true,
    image: SPA_IMAGE
  },
  {
    id: 'spa-gold-massage',
    category: 'spa',
    subCategory: '전문 힐링 마사지',
    name: '다낭 프리미엄 스포츠 & 풋 스파',
    koreanName: '다낭 프리미엄 웰니스 센터',
    location: '다낭 한강(Han River) 인근 도심',
    hours: '10:00 - 23:00',
    priceRange: '90분 전신 힐링 마사지 약 600,000 VND (~$25)',
    description: '골프 및 장시간 테이블 게임 후 굳은 어깨와 척추 근육을 정밀하게 풀어주는 건식 스포츠 마사지와 핫스톤 아로마 테라피를 제공하는 건전 힐링 샵입니다.',
    features: ['건전 힐링 테라피', '핫스톤 릴렉싱', '발 마사지 전용 리클라이너', '무료 픽업 서비스(2인 이상)'],
    bookingNotice: '건전 마사지 업소로 퇴폐 영업 일체 없음',
    isLegitimateVerified: true,
    image: SPA_IMAGE
  },

  // LOUNGE & BAR
  {
    id: 'lounge-sky36',
    category: 'lounge-bar',
    subCategory: '루프탑 스카이 라운지',
    name: '스카이 36 (Sky 36 Novotel Rooftop)',
    koreanName: '노보텔 스카이 36 루프탑 라운지',
    location: '노보텔 다낭 프리미어 한 리버 36층',
    hours: '18:00 - 익일 02:00',
    priceRange: '칵테일 잔당 약 250,000 VND / VIP 테이블 미니멈 약 2,500,000 VND',
    dressCode: '스마트 캐주얼 (슬리퍼, 샌들, 운동용 반바지 입장 불가)',
    description: '다낭에서 가장 높은 36층 야외 루프탑 바에서 한강과 용다리, 미케비치를 한눈에 조망할 수 있는 다낭 대표 랜드마크 나이트라이프 스팟입니다.',
    features: ['다낭 최고층 파노라마 뷰', '국제 DJ 라이브 세션', '시그니처 수제 칵테일', '프라이빗 VIP 야외 부스'],
    bookingNotice: '주말 야외 메인 VIP 테이블은 최소 2일 전 사전 예약 권장',
    isLegitimateVerified: true,
    image: LOUNGE_IMAGE
  },
  {
    id: 'lounge-hoiana-edge',
    category: 'lounge-bar',
    subCategory: '프라이빗 리조트 라운지',
    name: '호이아나 더 엣지 스카이 풀 바 (The Edge)',
    koreanName: '호이아나 더 엣지 루프탑 라운지',
    location: '호이아나 호텔 & 스위트 16층',
    hours: '15:00 - 24:00',
    priceRange: '글라스 와인 $12 ~ $25 / 시그니처 칵테일 $15',
    dressCode: '엘레강스 리조트 웨어',
    description: '호이아나 복합리조트 상층부에 위치한 인피니티 풀 바 겸 라운지로, 잔잔한 파도 소리와 밤바다의 정취 속에서 최고급 샴페인과 위스키를 음미할 수 있는 프라이빗한 명소입니다.',
    features: ['루프탑 인피니티 풀 뷰', '고급 싱글몰트 위스키 컬렉션', '조용하고 은밀한 대화 분위기'],
    bookingNotice: '카지노 방문 전후 차분한 비즈니스 미팅 및 릴렉싱에 최적',
    isLegitimateVerified: true,
    image: LOUNGE_IMAGE
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-2026-mof-decree',
    title: '베트남 재무부, 카지노 내 외국인 외환 관리 및 자금세탁 방지 특별 점검 강화',
    category: '현지 법령/규제',
    summary: '베트남 재무부(MOF)와 중앙은행이 중부 다낭 및 꽝남성 일대 복합리조트 카지노의 외환 반출 증명서 발급 실태 및 외국인 여권 실명 등록에 대한 전수 감사를 실시한다고 밝혔습니다.',
    content: [
      '베트남 재무부(MOF) 산하 금융감독국은 2026년 하반기 정례 회의를 통해 베트남 전역의 합법 카지노 사업장을 대상으로 Decree 03/2017/ND-CP 준수 현황 점검을 강화한다고 발표했습니다.',
      '주요 점검 대상은 다음과 같습니다:\n1. 외국인 입장객의 유효 여권 원본 확인 및 입국 비자 유효기간 전산 보관 여부\n2. 미화 5,000 USD 초과 고액 당첨금에 대한 공식 외환 반출 증명서(Certificate of Winnings) 정상 발급 여부\n3. 무허가 사설 정킷 브로커의 장외 칩 유통 및 불법 환전 행위 근절',
      '재무부 관계자는 "베트남 카지노는 국제 기준의 자금세탁방지(AML) 규정을 철저히 준수해야 하며, 공식 인가받은 카지노 케이지 외에서의 불법 자금 흐름은 엄정 처벌 대상"이라고 강조했습니다.'
    ],
    eventDate: '2026-10-04',
    publishDate: '2026-10-06',
    source: 'Vietnam Investment Review & 베트남 재무부 보도자료',
    tags: ['베트남 재무부', '외환관리법', '여권규정', '카지노 감사'],
    image: CASINO_IMAGE,
    isVerified: true
  },
  {
    id: 'news-2026-court-malfunction',
    title: '해외 카지노 슬롯머신 오류로 인한 잭팟 분쟁, 법원 \'기계 오작동 무효\' 판결 재확인',
    category: '판결/분쟁',
    summary: '슬롯머신 프로그램 에러로 거액의 배당금이 잘못 표시된 사건에서 법원이 "기계 오작동은 모든 지급을 무효로 한다"는 카지노 이용약관의 유효성을 인정했습니다.',
    content: [
      '최근 해외 카지노에서 발생한 잭팟 표시 오류 분쟁에 대해 관할 법원은 카지노 운영사의 손을 들어주었습니다.',
      '사건의 전말:\n원고 A씨는 슬롯머신 이용 중 화면에 수십만 달러의 잭팟 메시지가 점등되었으나, 카지노 측은 소프트웨어 센서 일시 오류로 인한 비정상 출력이라며 지급을 거부했습니다.',
      '법원의 판단 요지:\n1. 기계 외관 및 게임 화면 하단에 명시된 \'Malfunction Voids All Plays and Pays\' 경고문구는 이용 계약의 핵심 조건이다.\n2. 카지노 메인 서버에 기록된 정밀 난수생성기(RNG) 로그상 해당 스핀은 잭팟 당첨 조합이 아니었음이 기술적으로 증명되었다.\n3. 따라서 카지노는 오류로 표시된 금액을 지급할 법적 의무가 없으며, 당시 베팅 원금만을 반환하면 족하다.',
      '카지노 전문 변호인은 "전자 슬롯머신이나 ETG 게임을 이용할 때 화면 표시와 서버 데이터가 충돌할 경우 항상 서버 기록이 우선한다는 점을 인지해야 한다"고 조언했습니다.'
    ],
    eventDate: '2026-09-22',
    publishDate: '2026-09-25',
    source: 'International Gaming Law Review & 해외 판례 연구회',
    tags: ['슬롯머신 분쟁', '오작동 무효', '법원 판례', 'RNG 검증'],
    image: HERO_IMAGE,
    isVerified: true
  },
  {
    id: 'news-2026-hoiana-expansion',
    title: '호이아나 리조트 & 골프, 신규 국제 VIP 게이밍 살롱 및 웰니스 시설 확장 오픈',
    category: '리조트 소식',
    summary: '다낭 남부 꽝남성의 호이아나 리조트가 아시아 최고 수준의 인터내셔널 VIP 라운지와 프라이빗 테이블 살롱을 공식 오픈했습니다.',
    content: [
      '호이아나 리조트 & 골프(Hoiana Resort & Golf)가 프리미엄 고객들을 위한 신규 VIP 살롱과 프라이빗 스위트 전용 라운지를 공식 개장했습니다.',
      '이번에 오픈한 살롱은 최고 수준의 방음과 프라이버시가 보장되는 독립된 바카라 및 룰렛 테이블룸 10여 개를 갖추고 있으며, 전담 버틀러와 인터내셔널 믹솔로지스트가 상주합니다.',
      '호이아나 관계자는 "고급화되는 글로벌 하이롤러 및 비즈니스 여행객의 눈높이에 맞춰 최상의 의전과 투명한 정산 인프라를 제공할 것"이라고 밝혔습니다.'
    ],
    eventDate: '2026-10-10',
    publishDate: '2026-10-12',
    source: 'Hoiana Resort 공식 언론 배포문',
    tags: ['호이아나', 'VIP 살롱', '복합리조트', '다낭 신규 시설'],
    image: LOUNGE_IMAGE,
    isVerified: true
  },
  {
    id: 'news-2026-nightlife-crackdown',
    title: '다낭시 공안 당국, 외국인 대상 바가지 요금 및 불법 변종 업소 집중 단속령',
    category: '업계 동향',
    summary: '다낭시 관광청과 공안국이 외국인 관광객 피해를 예방하기 위해 미케비치 및 한강 인근의 무허가 마사지 샵과 과다 청구 바가지 업소에 대한 불시 단속을 시작했습니다.',
    content: [
      '다낭시 관광안전특별수사대는 10월부터 연말 성수기까지 외국인을 상대로 한 악의적인 바가지 요금(Overcharging)과 허위 호객 행위를 강력 단속한다고 발표했습니다.',
      '주요 단속 유형:\n1. 길거리 호객꾼(삐끼)을 통해 저렴한 가격을 부른 뒤 매장 내부에서 과도한 팁이나 숨은 봉사료를 강제 징수하는 행위\n2. 주류 메뉴판의 가격을 임의로 위조하여 수배의 계산서를 요구하는 불법 바(Bar)\n3. 정식 위생 및 소방 허가를 받지 않은 무등록 마사지 및 불법 성매매 알선 업소',
      '다낭시 관계자는 "피해 발생 시 영수증을 확보하고 즉시 관광 핫라인(0236-3550-111) 또는 경찰에 신고할 것"을 당부하며, "정식 라이선스가 확인된 안전한 가맹점을 이용해야 한다"고 전했습니다.'
    ],
    eventDate: '2026-10-01',
    publishDate: '2026-10-03',
    source: 'Danang Department of Tourism 공식 성명',
    tags: ['다낭 관광청', '바가지 단속', '안전 여행', '합법 업소'],
    image: SPA_IMAGE,
    isVerified: true
  }
];

export const INITIAL_PROMOTIONS: PromotionItem[] = [
  {
    id: 'promo-hoiana-suite',
    title: '호이아나 오션 스위트 2박 예약 시 VIP 공항 리무진 무상 픽업',
    category: '호텔/리조트',
    partnerName: 'Hoiana Hotel & Suites / 공식 파트너사',
    proofDocument: '제휴 숙박 공급 계약서 Ref. HN-2026-KR09',
    validUntil: '2026-12-31',
    conditions: '정규 요금 스위트룸 2박 이상 직계약 예약 고객 대상, 카지노 롤링 조건 없음',
    legalStatus: '검토 승인 완료',
    isPublished: true,
    details: '정식 호텔 계약에 따른 객실 패키지 혜택으로 불법 카지노 프로모션이 아닌 순수 숙박 편의 제공입니다.'
  },
  {
    id: 'promo-chauffeur-upgrade',
    title: '다낭 프리미엄 전용 차량 3일 이상 대절 시 5성급 호텔 스파 바우처 증정',
    category: '프라이빗 차량',
    partnerName: 'Danang Luxury Chauffeur Service',
    proofDocument: '운송 사업자 등록증 및 스파 바우처 제휴 협약서',
    validUntil: '2026-11-30',
    conditions: '알파드/하이리무진 3일 연속 대절 시 1매 제공 (사전 예약 한정)',
    legalStatus: '검토 승인 완료',
    isPublished: true,
    details: '적법성이 확인된 현지 공식 운송사와 스파 간의 공동 마케팅 프로모션입니다.'
  },
  {
    id: 'promo-unverified-rolling-sample',
    title: '[게시 보류 샘플] 카지노 롤링 베팅액 비례 항공권 캐시백 제안 건',
    category: '다이닝/스파',
    partnerName: '외부 미확인 사설 정킷 브로커',
    proofDocument: '증빙 서류 미제출 (사설 구두 제안)',
    validUntil: '2026-12-31',
    conditions: '카지노 롤링 실적 연동 요구',
    legalStatus: '보완 필요',
    isPublished: false,
    details: '※ 법적 리스크 및 카지노 공식 라이선스 미확인으로 본 플랫폼 게재 금지(비공개 처리됨). 투명한 검증 원칙 준수.'
  }
];

export const FAQ_DATA = [
  {
    question: '다낭 카지노에 입장하려면 어떤 신분증이 필요한가요?',
    answer: '반드시 유효기간이 남아있는 여권 원본(실물)을 지참하셔야 합니다. 스마트폰 사진, 복사본, 주민등록증, 운전면허증 등은 일체 인정되지 않습니다. 또한 베트남 법령상 만 21세 이상 성인만 입장이 허용됩니다.'
  },
  {
    question: 'DANANG VVIP는 카지노 공식 운영사인가요?',
    answer: '아닙니다. DANANG VVIP는 카지노 공식 운영사가 아닌 성인 이용자를 위한 독립적인 정보 제공 및 프리미엄 여행 편의 플랫폼입니다. 카지노 운영, 베팅 결과, 승패에 대해 어떠한 상업적 보장도 하지 않으며, 카지노 내 규칙은 각 카지노의 공식 이용약관을 따릅니다.'
  },
  {
    question: '카지노 롤링 에이전시나 수수료 페이백 문의도 받나요?',
    answer: '받지 않습니다. 본 사이트는 불법 사설 롤링 알선이나 카지노 손실액/베팅액에 연동한 무료 숙박 제공 등 법적 검토가 완료되지 않은 불투명한 영업 행위를 엄격히 배제합니다. 오직 검증된 합법 여행 편의, 프라이빗 차량, 5성급 호텔 예약 대행만을 취급합니다.'
  },
  {
    question: '카지노에서 승리한 고액의 돈을 한국으로 안전하게 가져갈 수 있나요?',
    answer: '베트남 외환관리법에 따라 5,000 USD를 초과하는 외환을 소지하고 출국할 경우 세관에 정식 신고해야 합니다. 카지노 케이지에서 \'Certificate of Winnings(공식 당첨 증명서)\'를 발급받아 세관에 제출하면 합법적으로 반출할 수 있습니다. 단, 한국 입국 시에도 대한민국 외국환거래법 및 관세법에 따른 자진신고 의무가 발생합니다.'
  },
  {
    question: '한국인이 해외 카지노를 이용하면 한국 법으로 처벌받나요?',
    answer: '대한민국 형법은 속인주의를 취하고 있어 원칙적으로 해외에서의 도박도 한국 형법 제246조의 적용을 받습니다. 관광 중 소액으로 즐기는 것은 \'일시오락\'으로 처벌 대상에서 제외될 수 있으나, 재산 수준에 비추어 과도한 고액 베팅이나 상습적인 도박 행위는 처벌 대상이 되므로 책임감 있는 이용이 필수적입니다.'
  },
  {
    question: '다낭 밤문화 이용 시 바가지 요금을 피하려면 어떻게 해야 하나요?',
    answer: '길거리 호객꾼(삐끼)의 안내를 따라가지 마시고, 정식 사업자 등록증과 정찰제 메뉴판이 구비된 검증된 KTV 및 라운지만을 이용하십시오. 주문 전 세금(VAT) 및 서비스료 포함 여부를 확인하고, 현금 결제 시 지폐 단위를 꼼꼼히 확인하시기 바랍니다.'
  }
];
