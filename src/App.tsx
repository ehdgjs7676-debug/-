/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AgeGateModal } from './components/AgeGateModal';
import { ResponsibleGamblingModal } from './components/ResponsibleGamblingModal';
import { SeoMetaModal } from './components/SeoMetaModal';
import { AdminModal } from './components/AdminModal';

import { HomePage } from './pages/HomePage';
import { CasinoGuidePage } from './pages/CasinoGuidePage';
import { CasinoInsightPage } from './pages/CasinoInsightPage';
import { VipFacilitiesPage } from './pages/VipFacilitiesPage';
import { ServicesPage } from './pages/ServicesPage';
import { KaraokePage } from './pages/KaraokePage';
import { SpaPage } from './pages/SpaPage';
import { NightlifePage } from './pages/NightlifePage';
import { NewsPage } from './pages/NewsPage';
import { FaqContactPage } from './pages/FaqContactPage';

import { CheckCircle2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activePage, toastMessage } = useApp();

  // Dynamic SEO Page Title synchronization
  useEffect(() => {
    const titles: Record<string, string> = {
      'home': 'DANANG VVIP - 다낭 카지노 & 프리미엄 나이트라이프 인사이드',
      'casino-guide': '다낭 카지노 가이드 - 공식 인가 및 입장 규정 | DANANG VVIP',
      'casino-insight': '카지노 인사이트 - 바카라 수학과 롤링 정산 규정 | DANANG VVIP',
      'vip-facilities': 'VIP 편의시설 & 풀빌라 컬렉션 | DANANG VVIP',
      'services': '서비스 & 혜택 정보 (BASIC/PREMIUM/SIGNATURE) | DANANG VVIP',
      'karaoke': '다낭 정식 가라오케 KTV 시설 및 가격 가이드 | DANANG VVIP',
      'spa': '다낭 5성급 호텔 스파 & 프리미엄 웰니스 | DANANG VVIP',
      'nightlife': '다낭 밤문화 주의사항 & 루프탑 바 가이드 | DANANG VVIP',
      'news': '다낭 카지노 뉴스 및 사건 판례 아카이브 | DANANG VVIP',
      'faq-contact': 'FAQ & 고객센터 (카톡·텔레그램: danangvvip) | DANANG VVIP',
      'admin': '관리자 모드 (CMS) | DANANG VVIP',
    };

    if (titles[activePage]) {
      document.title = titles[activePage];
    }
  }, [activePage]);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'casino-guide':
        return <CasinoGuidePage />;
      case 'casino-insight':
        return <CasinoInsightPage />;
      case 'vip-facilities':
        return <VipFacilitiesPage />;
      case 'services':
        return <ServicesPage />;
      case 'karaoke':
        return <KaraokePage />;
      case 'spa':
        return <SpaPage />;
      case 'nightlife':
        return <NightlifePage />;
      case 'news':
        return <NewsPage />;
      case 'faq-contact':
        return <FaqContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Top Header adhering to Top Bar contract */}
      <Header />

      {/* Main Viewport Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav />

      {/* Modals & Overlays */}
      <AgeGateModal />
      <ResponsibleGamblingModal />
      <SeoMetaModal />
      <AdminModal />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[#0B1120] border border-[#D4AF37] text-xs font-semibold text-white shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
