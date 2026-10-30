import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PageType, 
  CasinoItem, 
  InsightArticle, 
  VipFacility, 
  ServiceTier, 
  NightlifeSpot, 
  NewsArticle, 
  PromotionItem 
} from '../types';
import { 
  INITIAL_CASINOS, 
  INITIAL_INSIGHTS, 
  INITIAL_VIP_FACILITIES, 
  SERVICE_TIERS, 
  INITIAL_NIGHTLIFE_SPOTS, 
  INITIAL_NEWS, 
  INITIAL_PROMOTIONS 
} from '../data/mockData';

// Safe storage utility that never throws in sandboxed iframes or private browsing
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch {
      // Ignore sandboxed iframe restriction
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Ignore sandboxed iframe restriction
    }
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {
      // Ignore sandboxed iframe restriction
    }
  }
};

interface AppContextType {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  casinos: CasinoItem[];
  insights: InsightArticle[];
  vipFacilities: VipFacility[];
  serviceTiers: ServiceTier[];
  nightlifeSpots: NightlifeSpot[];
  news: NewsArticle[];
  promotions: PromotionItem[];
  selectedCasinoId: string | null;
  setSelectedCasinoId: (id: string | null) => void;
  selectedInsightId: string | null;
  setSelectedInsightId: (id: string | null) => void;
  selectedNewsId: string | null;
  setSelectedNewsId: (id: string | null) => void;
  showAgeGate: boolean;
  setShowAgeGate: (show: boolean) => void;
  showResponsibleModal: boolean;
  setShowResponsibleModal: (show: boolean) => void;
  showSeoModal: boolean;
  setShowSeoModal: (show: boolean) => void;
  showAdminModal: boolean;
  setShowAdminModal: (show: boolean) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (logged: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  // Admin CMS handlers
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, updated: Partial<NewsArticle>) => void;
  deleteNewsArticle: (id: string) => void;
  updatePromotionLegalStatus: (id: string, status: PromotionItem['legalStatus'], isPublished: boolean) => void;
  addPromotion: (promo: Omit<PromotionItem, 'id'>) => void;
  updateCasinoData: (id: string, updated: Partial<CasinoItem>) => void;
  resetAllDataToDefault: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [selectedCasinoId, setSelectedCasinoId] = useState<string | null>(null);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  // Modals state (safely loaded)
  const [showAgeGate, setShowAgeGate] = useState<boolean>(() => {
    return safeStorage.getItem('danang_vvip_age_confirmed') !== 'true';
  });
  const [showResponsibleModal, setShowResponsibleModal] = useState<boolean>(false);
  const [showSeoModal, setShowSeoModal] = useState<boolean>(false);
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dynamic Content with safe LocalStorage fallback
  const [casinos, setCasinos] = useState<CasinoItem[]>(() => {
    try {
      const saved = safeStorage.getItem('danang_vvip_casinos');
      return saved ? JSON.parse(saved) : INITIAL_CASINOS;
    } catch {
      return INITIAL_CASINOS;
    }
  });

  const [news, setNews] = useState<NewsArticle[]>(() => {
    try {
      const saved = safeStorage.getItem('danang_vvip_news');
      return saved ? JSON.parse(saved) : INITIAL_NEWS;
    } catch {
      return INITIAL_NEWS;
    }
  });

  const [promotions, setPromotions] = useState<PromotionItem[]>(() => {
    try {
      const saved = safeStorage.getItem('danang_vvip_promos');
      return saved ? JSON.parse(saved) : INITIAL_PROMOTIONS;
    } catch {
      return INITIAL_PROMOTIONS;
    }
  });

  const [nightlifeSpots] = useState<NightlifeSpot[]>(INITIAL_NIGHTLIFE_SPOTS);
  const [vipFacilities] = useState<VipFacility[]>(INITIAL_VIP_FACILITIES);
  const [serviceTiers] = useState<ServiceTier[]>(SERVICE_TIERS);
  const [insights] = useState<InsightArticle[]>(INITIAL_INSIGHTS);

  // Safely sync to storage
  useEffect(() => {
    safeStorage.setItem('danang_vvip_casinos', JSON.stringify(casinos));
  }, [casinos]);

  useEffect(() => {
    safeStorage.setItem('danang_vvip_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    safeStorage.setItem('danang_vvip_promos', JSON.stringify(promotions));
  }, [promotions]);

  // Toast handler
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Scroll to top on page change
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Ignore
    }
  }, [activePage, selectedCasinoId, selectedInsightId, selectedNewsId]);

  // Admin CMS functions
  const addNewsArticle = (articleData: Omit<NewsArticle, 'id'>) => {
    const newArt: NewsArticle = {
      ...articleData,
      id: `news-${Date.now()}`
    };
    setNews(prev => [newArt, ...prev]);
    showToast('새로운 카지노 뉴스가 발행되었습니다.');
  };

  const updateNewsArticle = (id: string, updated: Partial<NewsArticle>) => {
    setNews(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
    showToast('뉴스 기사가 성공적으로 수정되었습니다.');
  };

  const deleteNewsArticle = (id: string) => {
    setNews(prev => prev.filter(item => item.id !== id));
    showToast('기사가 삭제되었습니다.');
  };

  const updatePromotionLegalStatus = (id: string, status: PromotionItem['legalStatus'], isPublished: boolean) => {
    const safePublish = status === '검토 승인 완료' ? isPublished : false;
    setPromotions(prev => prev.map(p => p.id === id ? { ...p, legalStatus: status, isPublished: safePublish } : p));
    showToast(`프로모션 법적 상태가 '${status}'(으)로 갱신되었습니다.`);
  };

  const addPromotion = (promoData: Omit<PromotionItem, 'id'>) => {
    const newPromo: PromotionItem = {
      ...promoData,
      id: `promo-${Date.now()}`,
      isPublished: promoData.legalStatus === '검토 승인 완료' ? promoData.isPublished : false
    };
    setPromotions(prev => [newPromo, ...prev]);
    showToast('새 프로모션이 심사 목록에 등록되었습니다.');
  };

  const updateCasinoData = (id: string, updated: Partial<CasinoItem>) => {
    setCasinos(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
    showToast('카지노 정보가 갱신되었습니다.');
  };

  const resetAllDataToDefault = () => {
    setCasinos(INITIAL_CASINOS);
    setNews(INITIAL_NEWS);
    setPromotions(INITIAL_PROMOTIONS);
    safeStorage.removeItem('danang_vvip_casinos');
    safeStorage.removeItem('danang_vvip_news');
    safeStorage.removeItem('danang_vvip_promos');
    showToast('모든 데이터가 공식 검증 기본값으로 초기화되었습니다.');
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage: (p) => {
          setActivePage(p);
          setSelectedCasinoId(null);
          setSelectedInsightId(null);
          setSelectedNewsId(null);
        },
        casinos,
        insights,
        vipFacilities,
        serviceTiers,
        nightlifeSpots,
        news,
        promotions,
        selectedCasinoId,
        setSelectedCasinoId,
        selectedInsightId,
        setSelectedInsightId,
        selectedNewsId,
        setSelectedNewsId,
        showAgeGate,
        setShowAgeGate,
        showResponsibleModal,
        setShowResponsibleModal,
        showSeoModal,
        setShowSeoModal,
        showAdminModal,
        setShowAdminModal,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        toastMessage,
        showToast,
        addNewsArticle,
        updateNewsArticle,
        deleteNewsArticle,
        updatePromotionLegalStatus,
        addPromotion,
        updateCasinoData,
        resetAllDataToDefault
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
