import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PageType } from '../types';
import { 
  Menu, 
  X, 
  MessageSquare, 
  ShieldCheck, 
  SlidersHorizontal 
} from 'lucide-react';

export const Header: React.FC = () => {
  const { activePage, setActivePage, setShowAdminModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'casino-guide', label: '카지노 가이드' },
    { id: 'casino-insight', label: '카지노 인사이트' },
    { id: 'vip-facilities', label: 'VIP 시설' },
    { id: 'services', label: '서비스 & 혜택 정보' },
    { id: 'karaoke', label: '가라오케' },
    { id: 'spa', label: '마사지 & 스파' },
    { id: 'nightlife', label: '다낭 밤문화' },
    { id: 'news', label: '카지노 뉴스' },
    { id: 'faq-contact', label: 'FAQ' },
  ];

  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070B14]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="DANANG VVIP 홈으로 이동"
          >
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors whitespace-nowrap shrink-0">
                DANANG VVIP
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Casino & Nightlife Insider
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links (single line, whitespace-nowrap shrink-0) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 relative ${
                    isActive 
                      ? 'text-[#F3E5AB] font-semibold' 
                      : 'text-slate-300 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action & Admin trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowAdminModal(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-[#D4AF37] border border-slate-800 rounded hover:border-[#D4AF37]/40 transition-colors cursor-pointer"
              title="관리자 설정"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>관리자</span>
            </button>

            <button
              onClick={() => handleNavClick('faq-contact')}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded-sm shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>컨시어지 문의</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="전체 메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0F1D] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/60">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded text-sm transition-colors ${
                  activePage === item.id 
                    ? 'bg-[#D4AF37]/15 text-[#F3E5AB] font-semibold border-l-2 border-[#D4AF37]' 
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>독립 검증 정보 가이드</span>
            </div>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setShowAdminModal(true);
              }}
              className="text-[#D4AF37] hover:underline flex items-center gap-1"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              관리자 모드
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
