export type PageType = 
  | 'home' 
  | 'casino-guide' 
  | 'casino-insight' 
  | 'vip-facilities' 
  | 'services' 
  | 'karaoke' 
  | 'spa' 
  | 'nightlife' 
  | 'news' 
  | 'faq-contact'
  | 'admin';

export interface CasinoItem {
  id: string;
  name: string;
  englishName: string;
  location: string;
  address: string;
  operator: string;
  licenseInfo: string;
  foreignerEligibility: string;
  passportIdRules: string;
  dressCode: string;
  gameTypes: string[];
  tableCountText: string;
  preVisitChecklist: string[];
  officialRules: string[];
  disputeProcedures: string;
  officialSource: string;
  lastVerifiedDate: string;
  isVerified: boolean;
  image: string;
  summary: string;
  features: string[];
}

export interface InsightArticle {
  id: string;
  category: 
    | '게임 규칙' 
    | '롤링 & 턴오버' 
    | '수수료 구조' 
    | '정산 & 세무' 
    | '자금세탁방지' 
    | 'VIP 살롱' 
    | '규정 & 판례' 
    | '법률 검토';
  title: string;
  subtitle: string;
  readingTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  disclaimer: string;
}

export interface VipFacility {
  id: string;
  category: 'VIP 라운지' | '스위트룸 & 빌라' | '파인다이닝' | '전용 교통' | '스파 & 웰니스';
  name: string;
  resortName: string;
  description: string;
  features: string[];
  accessRequirements: string;
  image: string;
}

export interface ServiceTier {
  id: 'basic' | 'premium' | 'signature';
  tierName: string;
  subtitle: string;
  priceGuide: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  termsAndConditions: string[];
  provider: string;
  cancellationPolicy: string;
}

export interface NightlifeSpot {
  id: string;
  category: 'karaoke' | 'spa' | 'lounge-bar';
  subCategory?: string;
  name: string;
  koreanName: string;
  location: string;
  hours: string;
  priceRange: string;
  dressCode?: string;
  description: string;
  features: string[];
  bookingNotice: string;
  isLegitimateVerified: boolean;
  image?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: '현지 법령/규제' | '판결/분쟁' | '리조트 소식' | '업계 동향';
  summary: string;
  content: string[];
  eventDate: string;
  publishDate: string;
  source: string;
  sourceUrl?: string;
  tags: string[];
  image: string;
  isVerified: boolean;
}

export interface PromotionItem {
  id: string;
  title: string;
  category: '호텔/리조트' | '프라이빗 차량' | '다이닝/스파';
  partnerName: string;
  proofDocument: string;
  validUntil: string;
  conditions: string;
  legalStatus: '검토 승인 완료' | '보완 필요' | '심사 대기';
  isPublished: boolean;
  details: string;
}
