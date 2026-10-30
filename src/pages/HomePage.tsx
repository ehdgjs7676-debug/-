import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  ArrowRight, 
  Dice5, 
  BookOpen, 
  Crown, 
  Sparkles, 
  Scale, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  ChevronRight, 
  Calendar 
} from 'lucide-react';
import { HERO_IMAGE, CASINO_IMAGE, LOUNGE_IMAGE, SPA_IMAGE } from '../data/mockData';

export const HomePage: React.FC = () => {
  const { 
    setActivePage, 
    setSelectedCasinoId, 
    setSelectedInsightId, 
    setSelectedNewsId, 
    casinos, 
    insights, 
    news, 
    serviceTiers, 
    setShowResponsibleModal 
  } = useApp();

  const handleCasinoDetail = (id: string) => {
    setSelectedCasinoId(id);
    setActivePage('casino-guide');
  };

  const handleInsightDetail = (id: string) => {
    setSelectedInsightId(id);
    setActivePage('casino-insight');
  };

  const handleNewsDetail = (id: string) => {
    setSelectedNewsId(id);
    setActivePage('news');
  };

  return (
    <div className="space-y-24">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Backdrop Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="다낭 호이아나 럭셔리 복합리조트 및 카지노 야경 전경"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/75 to-[#070B14]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,11,20,0)_0%,#070B14_100%)] opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#0B1120]/80 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>경험자를 위한 성인 전용 독립 정보 플랫폼</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-tight mb-4 text-balance">
            DANANG VVIP<br />
            <span className="text-gold-gradient">CASINO & NIGHTLIFE INSIDER</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8 text-balance">
            경험자를 위한 다낭 카지노 정보와 프리미엄 나이트라이프 가이드.<br className="hidden sm:inline" />
            공식 인가 규정, 롤링과 정산의 수학적 인사이트, VIP 복합시설을 투명하게 안내합니다.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => setActivePage('casino-guide')}
              className="w-full sm:w-auto px-7 py-3 text-sm font-bold text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded transition-all shadow-lg shadow-[#D4AF37]/15 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Dice5 className="w-4 h-4 text-black" />
              <span>카지노 가이드 바로보기</span>
            </button>
            <button
              onClick={() => setActivePage('casino-insight')}
              className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-slate-200 bg-[#0B1120]/80 hover:bg-[#0F172A] border border-slate-700 hover:border-[#D4AF37]/50 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>카지노 인사이트 분석</span>
            </button>
          </div>

          {/* Trust markers (Hero Zone) */}
          <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded bg-[#0B1120]/60 border border-slate-800/80">
              <span className="text-[11px] text-slate-400 block">검증 완료 시설</span>
              <span className="text-sm font-bold text-slate-100">공식 허가 카지노 전수</span>
            </div>
            <div className="p-3 rounded bg-[#0B1120]/60 border border-slate-800/80">
              <span className="text-[11px] text-slate-400 block">정보 투명성</span>
              <span className="text-sm font-bold text-slate-100">외환 5,000 USD 규정</span>
            </div>
            <div className="p-3 rounded bg-[#0B1120]/60 border border-slate-800/80">
              <span className="text-[11px] text-slate-400 block">정산 프로토콜</span>
              <span className="text-sm font-bold text-slate-100">공식 캐셔 케이지 정산</span>
            </div>
            <div className="p-3 rounded bg-[#0B1120]/60 border border-slate-800/80">
              <span className="text-[11px] text-slate-400 block">의전 컨시어지</span>
              <span className="text-sm font-bold text-slate-100">합법 차량 & 호텔 예약</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4 CORE PORTALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div 
            onClick={() => setActivePage('casino-guide')}
            className="group p-6 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                <Dice5 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                01. 카지노 가이드
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                호이아나, 크라운, 클럽 99 등 다낭 주요 카지노의 공식 인가 번호, 여권 필수 규정, 드레스코드 및 게임 종류를 팩트체크합니다.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>자세히 보기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => setActivePage('casino-insight')}
            className="group p-6 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                02. 카지노 인사이트
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                바카라 5% 수수료와 노커미션의 하우스 엣지 차이, 롤링·턴오버의 실제 메커니즘 및 한국 형법 제246조 판례를 분석합니다.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>수학적 분석</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => setActivePage('vip-facilities')}
            className="group p-6 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                03. VIP 시설 & 편의
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                오션프론트 풀빌라, VIP 멤버스 전용 라운지, 알파드 의전 차량 및 미쉐린 파인다이닝의 정식 이용 요건을 소개합니다.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>시설 확인</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => setActivePage('nightlife')}
            className="group p-6 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                04. 나이트라이프 가이드
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                정식 인가 KTV 정찰제 룸, 5성급 힐링 스파, 노보텔 스카이36 등 루프탑 바와 바가지 예방 5대 수칙을 점검합니다.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
              <span>안전 가이드</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* CASINO SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              VERIFIED OFFICIAL CASINOS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              다낭 공식 검증 카지노 현황
            </h2>
          </div>
          <button
            onClick={() => setActivePage('casino-guide')}
            className="text-xs text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1 font-semibold cursor-pointer"
          >
            전체 카지노 상세 규정 보기
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {casinos.slice(0, 3).map((casino) => (
            <div
              key={casino.id}
              onClick={() => handleCasinoDetail(casino.id)}
              className="bg-[#0B1120] border border-slate-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={casino.image}
                  alt={casino.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[11px] font-semibold px-2 py-0.5 rounded bg-black/70 border border-[#D4AF37]/50 text-[#F3E5AB] backdrop-blur-sm">
                  {casino.lastVerifiedDate} 공식 확인
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{casino.location}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                    {casino.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {casino.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/70 space-y-2">
                  <div className="text-[11px] text-slate-300">
                    <span className="text-slate-500">외국인 자격: </span>
                    {casino.foreignerEligibility}
                  </div>
                  <div className="text-[11px] text-slate-300">
                    <span className="text-slate-500">드레스코드: </span>
                    {casino.dressCode}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#D4AF37] pt-2">
                  <span>입장 규정 및 게임 종류</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASINO INSIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0B1120] via-[#0F172A] to-[#0B1120] border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
              EXPERT MATHEMATICAL & LEGAL ESSENTIALS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              실제 이용자가 알아야 할 카지노 확률과 법률
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              수익 보장 마케팅은 허위입니다. 수학적 하우스 엣지(바카라 1.06% vs 노커미션 1.46%)와 비환전용 롤링 칩의 본질, 5,000 USD 초과 세관 신고 절차 및 한국 형법 제246조 속인주의 판례를 확인하세요.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setActivePage('casino-insight')}
                className="px-5 py-2.5 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded transition-colors cursor-pointer"
              >
                카지노 인사이트 리포트 읽기
              </button>
              <button
                onClick={() => setShowResponsibleModal(true)}
                className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                책임 있는 도박 & 법적 면책
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TIERS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            LEGAL TRAVEL & CONCIERGE PACKAGES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            합법적 여행 편의 및 의전 서비스
          </h2>
          <p className="text-xs text-slate-400">
            카지노 베팅액이나 롤링 실적에 연동된 불법 프로모션을 배제한 투명한 여행 편의 견적입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {serviceTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between border ${
                tier.id === 'signature' 
                  ? 'bg-gradient-to-b from-[#0F172A] to-[#0B1120] border-[#D4AF37]/60 shadow-xl shadow-[#D4AF37]/5' 
                  : 'bg-[#0B1120] border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    {tier.tierName}
                  </span>
                  {tier.id === 'signature' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/40">
                      최고급 의전
                    </span>
                  )}
                </div>
                
                <h3 className="font-serif text-lg font-bold text-white">{tier.subtitle}</h3>
                
                <div className="p-3 rounded bg-[#070B14] border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block mb-0.5">정규 가격 안내</span>
                  <span className="text-sm font-semibold text-[#F3E5AB]">{tier.priceGuide}</span>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-300 block">포함 내역:</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {tier.inclusions.slice(0, 4).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60">
                <button
                  onClick={() => setActivePage('services')}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer text-center block"
                >
                  패키지 상세 및 환불 규정
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT NEWS & RULINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              OFFICIAL RULINGS & REPORTS
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              최신 카지노 뉴스 & 사건 판례
            </h2>
          </div>
          <button
            onClick={() => setActivePage('news')}
            className="text-xs text-[#D4AF37] hover:text-[#F3E5AB] flex items-center gap-1 font-semibold cursor-pointer"
          >
            전체 기사 보기
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.slice(0, 2).map((item) => (
            <div
              key={item.id}
              onClick={() => handleNewsDetail(item.id)}
              className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-[#D4AF37]/50 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-[#D4AF37] font-semibold">{item.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.publishDate}
                  </span>
                  <span>·</span>
                  <span>{item.source}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                <span>기사 전문 읽기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONCIERGE QUICK INQUIRY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0B1120] border border-[#D4AF37]/40 text-center max-w-3xl mx-auto space-y-5">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            프리미엄 여행 일정 & 의전 문의
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            다낭 및 호이안 일대의 합법 운송 차량(알파드/카니발 리무진), 5성급 리조트 스위트룸 예약 및 프라이빗 다이닝을 한국인 전담 컨시어지가 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('faq-contact')}
              className="w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded transition-all cursor-pointer"
            >
              컨시어지 문의 (카톡 & 텔레그램: danangvvip)
            </button>
            <button
              onClick={() => setActivePage('nightlife')}
              className="w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
            >
              다낭 밤문화 주의사항 확인
            </button>
          </div>
          <p className="text-[11px] text-slate-500">
            ※ 카지노 베팅, 칩 환전 및 성적 서비스 관련 문의는 일체 수신 및 처리하지 않습니다.
          </p>
        </div>
      </section>

    </div>
  );
};
