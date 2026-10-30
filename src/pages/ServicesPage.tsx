import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  FileCheck, 
  AlertTriangle, 
  MessageSquare, 
  Building2, 
  Calendar 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { serviceTiers, promotions, setActivePage } = useApp();
  const [activeTier, setActiveTier] = useState<'basic' | 'premium' | 'signature'>('premium');

  // Filter only legally approved and published promotions
  const approvedPromotions = promotions.filter(p => p.legalStatus === '검토 승인 완료' && p.isPublished);

  const selectedTier = serviceTiers.find(t => t.id === activeTier) || serviceTiers[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Title */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>합법적 여행 편의 및 의전 컨시어지</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          서비스 및 혜택 정보 (Concierge Hospitality)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          BASIC, PREMIUM, SIGNATURE 3단계의 투명한 여행 편의 패키지입니다. 제공 주체, 가격 견적, 포함·불포함 사항 및 환불 규정을 정직하게 공개하며, 불법 카지노 롤링 실적 연동 혜택은 일체 취급하지 않습니다.
        </p>
      </div>

      {/* Tier Selection Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {serviceTiers.map((tier) => {
          const isSelected = activeTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#0B1120] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
                  : 'bg-[#070B14] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isSelected ? 'text-[#D4AF37]' : 'text-slate-400'
                  }`}>
                    {tier.tierName}
                  </span>
                  {tier.id === 'signature' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#F3E5AB]">
                      최상위 등급
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {tier.subtitle}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-4">
                <span className="text-[11px] text-slate-500 block mb-0.5">정규 견적 가이드</span>
                <span className="text-sm font-semibold text-[#F3E5AB] font-mono">
                  {tier.priceGuide}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Tier Deep Breakdown Card */}
      {selectedTier && (
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                {selectedTier.tierName} DETAILED SPECIFICATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedTier.subtitle}
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-[#070B14] border border-slate-800 text-right">
              <span className="text-[10px] text-slate-400 block mb-0.5">예상 요금 기준</span>
              <span className="text-base sm:text-lg font-bold text-[#F3E5AB]">
                {selectedTier.priceGuide}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {selectedTier.description}
          </p>

          {/* Inclusions vs Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Inclusions */}
            <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                포함 사항 (Inclusions)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedTier.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-400" />
                불포함 사항 (Exclusions)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedTier.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Legal Compliance, Terms, Provider, Cancellation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
            
            <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase block">제공 주체</span>
              <div className="text-xs font-bold text-white">{selectedTier.provider}</div>
              <p className="text-[11px] text-slate-500">다낭 정식 인가 운송/여행 서비스 등록 파트너</p>
            </div>

            <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase block">취소 및 환불 규정</span>
              <div className="text-xs font-semibold text-[#F3E5AB]">{selectedTier.cancellationPolicy}</div>
              <p className="text-[11px] text-slate-500">사전 계약 약관에 따른 안전한 취소 환불 보장</p>
            </div>

            <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase block">이용 조건 및 법적 한계</span>
              <ul className="text-[11px] text-slate-400 space-y-1">
                {selectedTier.termsAndConditions.map((t, idx) => (
                  <li key={idx}>· {t}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Inquiry CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-amber-950/30 to-[#070B14] border border-amber-600/30">
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">{selectedTier.tierName} 맞춤 일정 상담</strong>
              카카오톡 실시간 상담(danangvvip)으로 항공편 및 호텔 맞춤 일정 견적을 전달해 드립니다.
            </div>
            <button
              onClick={() => setActivePage('faq-contact')}
              className="px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              1:1 컨시어지 견적 신청
            </button>
          </div>

        </div>
      )}

      {/* VERIFIED PROMOTIONS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              LEGALLY AUDITED PROMOTIONS
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              실제 확인된 정식 호텔 & 차량 프로모션
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            법적 검토 승인 완료 ({approvedPromotions.length}건)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approvedPromotions.map((promo) => (
            <div
              key={promo.id}
              className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/40 font-semibold text-[11px]">
                  {promo.legalStatus}
                </span>
                <span className="text-slate-500 font-mono text-[11px]">기한: {promo.validUntil}</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                {promo.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {promo.details}
              </p>
              <div className="pt-3 border-t border-slate-800/70 text-[11px] text-slate-400 space-y-1">
                <div>제공 업체: <span className="text-slate-200">{promo.partnerName}</span></div>
                <div>적법성 증빙: <span className="text-slate-200">{promo.proofDocument}</span></div>
                <div>적용 조건: <span className="text-[#F3E5AB]">{promo.conditions}</span></div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>플랫폼 원칙:</strong> 카지노 게임 베팅액이나 손실액, 롤링 실적을 조건으로 숙박·차량을 제공하는 불법 정킷 프로모션은 본 사이트에 절대 등록될 수 없으며 전면 비공개 차단됩니다.
          </div>
        </div>
      </div>

    </div>
  );
};
