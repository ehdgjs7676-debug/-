import React from 'react';
import { useApp } from '../context/AppContext';
import { PageType } from '../types';
import { 
  ShieldAlert, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Globe 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    setActivePage, 
    setShowResponsibleModal, 
    setShowSeoModal, 
    setShowAdminModal,
    showToast 
  } = useApp();

  const [copiedKakao, setCopiedKakao] = React.useState(false);
  const [copiedTele, setCopiedTele] = React.useState(false);

  const copyKakaoId = () => {
    try {
      navigator.clipboard.writeText('danangvvip');
      setCopiedKakao(true);
      showToast('카카오톡 ID (danangvvip)가 복사되었습니다.');
      setTimeout(() => setCopiedKakao(false), 2000);
    } catch {
      showToast('카카오톡 ID: danangvvip');
    }
  };

  const copyTelegramId = () => {
    try {
      navigator.clipboard.writeText('danangvvip');
      setCopiedTele(true);
      showToast('텔레그램 ID (@danangvvip)가 복사되었습니다.');
      setTimeout(() => setCopiedTele(false), 2000);
    } catch {
      showToast('텔레그램 ID: danangvvip');
    }
  };

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'casino-guide', label: '카지노 가이드' },
    { id: 'casino-insight', label: '카지노 인사이트' },
    { id: 'vip-facilities', label: 'VIP 시설' },
    { id: 'services', label: '서비스 & 혜택' },
    { id: 'karaoke', label: '가라오케' },
    { id: 'spa', label: '마사지 & 스파' },
    { id: 'nightlife', label: '다낭 밤문화' },
    { id: 'news', label: '카지노 뉴스' },
    { id: 'faq-contact', label: 'FAQ & 문의' },
  ];

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-24 lg:pb-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer Banner */}
        <div className="p-4 sm:p-5 mb-12 rounded-lg bg-[#0B1120] border border-amber-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold text-[#F3E5AB]">독립 정보 플랫폼 공지:</span> 본 사이트는 베트남 다낭 현지 카지노 운영사의 공식 웹사이트가 아니며, 성인 이용자를 위한 독립적인 객관적 정보 제공 및 합법적 여행 편의 컨시어지 플랫폼입니다.
            </div>
          </div>
          <button
            onClick={() => setShowResponsibleModal(true)}
            className="text-xs text-[#D4AF37] hover:text-[#F3E5AB] underline flex items-center gap-1 shrink-0 cursor-pointer font-medium"
          >
            책임 있는 도박 & 법적 규정 확인
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-bold tracking-widest text-[#D4AF37]">
              DANANG VVIP
            </div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Casino & Nightlife Insider
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              경험자를 위한 다낭 카지노 정보와 프리미엄 나이트라이프 가이드. 입장 규정, 외환 정산, VIP 시설, 책임 있는 이용 안내를 원칙으로 합니다.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-semibold border border-amber-500/40 text-[#F3E5AB] rounded bg-[#0A0F1D]">
                19+ 성인 전용
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400">Decree 03/2017/ND-CP 준수</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              핵심 가이드 & 콘텐츠
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => setActivePage(l.id)}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              나이트라이프 & 서비스
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(5).map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => setActivePage(l.id)}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowResponsibleModal(true)}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left text-amber-300/80"
                >
                  도박중독 예방 & 한국 법령
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge & Inquiries */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              여행 편의 컨시어지 문의
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              호텔, 프라이빗 픽업 차량 및 정식 인가 시설 예약 안내 전용 창구입니다. (카지노 베팅 알선 불가)
            </p>
            <div className="space-y-2">
              <div className="p-2.5 rounded bg-[#0A0F1D] border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block">카카오톡 공식 ID</span>
                  <span className="font-mono text-xs font-bold text-[#F3E5AB]">danangvvip</span>
                </div>
                <button
                  onClick={copyKakaoId}
                  className="p-1 rounded bg-slate-800 hover:bg-[#D4AF37] hover:text-black transition-colors text-slate-300 cursor-pointer"
                  title="카카오톡 ID 복사"
                >
                  {copiedKakao ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-2.5 rounded bg-[#0A0F1D] border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block">텔레그램 공식 ID</span>
                  <a
                    href="https://t.me/danangvvip"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs font-bold text-sky-400 hover:underline"
                  >
                    @danangvvip
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={copyTelegramId}
                    className="p-1 rounded bg-slate-800 hover:bg-[#D4AF37] hover:text-black transition-colors text-slate-300 cursor-pointer"
                    title="텔레그램 ID 복사"
                  >
                    {copiedTele ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://t.me/danangvvip"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded bg-sky-900/40 text-sky-300 hover:bg-sky-800 text-[10px] font-semibold flex items-center gap-0.5"
                    title="텔레그램 바로가기"
                  >
                    열기
                  </a>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              응대 시간: 매일 10:00 - 24:00 (KST)
            </p>
          </div>

        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 DANANG VVIP Insider. All Rights Reserved. 독립적 정보 플랫폼.
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => setShowResponsibleModal(true)}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              이용약관 및 법적 면책
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setActivePage('faq-contact')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setShowSeoModal(true)}
              className="hover:text-slate-200 flex items-center gap-1 transition-colors cursor-pointer text-[#D4AF37]"
            >
              <Globe className="w-3.5 h-3.5" />
              SEO & Sitemap
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setShowAdminModal(true)}
              className="hover:text-slate-200 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              관리자 CMS
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
