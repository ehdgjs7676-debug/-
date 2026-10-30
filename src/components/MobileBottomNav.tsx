import React from 'react';
import { useApp } from '../context/AppContext';
import { PageType } from '../types';
import { 
  Home, 
  Dice5, 
  BookOpen, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { activePage, setActivePage } = useApp();

  const navItems: { id: PageType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: '홈', icon: <Home className="w-5 h-5" /> },
    { id: 'casino-guide', label: '카지노', icon: <Dice5 className="w-5 h-5" /> },
    { id: 'casino-insight', label: '인사이트', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'nightlife', label: '밤문화', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'faq-contact', label: '문의', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  return (
    <nav 
      aria-label="모바일 하단 내비게이션" 
      className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070B14]/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1 shadow-2xl"
    >
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = 
            activePage === item.id || 
            (item.id === 'nightlife' && (activePage === 'karaoke' || activePage === 'spa'));

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center justify-center w-16 py-1 transition-colors cursor-pointer ${
                isActive ? 'text-[#F3E5AB]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`transition-transform ${isActive ? 'scale-110 text-[#D4AF37]' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 whitespace-nowrap ${isActive ? 'font-semibold text-[#F3E5AB]' : 'font-normal'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
