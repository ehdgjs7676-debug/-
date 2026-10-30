import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  MapPin, 
  AlertCircle, 
  FileText, 
  HelpCircle, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';

export const CasinoGuidePage: React.FC = () => {
  const { casinos, selectedCasinoId, setSelectedCasinoId, setShowResponsibleModal } = useApp();
  const [activeCasinoId, setActiveCasinoId] = useState<string>(
    selectedCasinoId || casinos[0]?.id || 'hoiana-casino'
  );

  const activeCasino = casinos.find(c => c.id === activeCasinoId) || casinos[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>공식 라이선스 및 이용 규정 전수 검증</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          다낭 카지노 가이드 (Official Casino Guide)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          베트남 재무부(MOF) 인가 및 확인된 합법 카지노 시설의 외국인 입장 자격, 여권 확인 규정, 드레스코드, 게임 종류 및 분쟁 해결 절차를 객관적으로 안내합니다. (독립 정보 플랫폼)
        </p>
      </div>

      {/* Casino Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {casinos.map((c) => {
          const isSelected = activeCasinoId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => {
                setActiveCasinoId(c.id);
                setSelectedCasinoId(c.id);
              }}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0B1120] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                  : 'bg-[#070B14] border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-[#D4AF37] text-black font-bold' : 'bg-slate-800 text-slate-400'
                }`}>
                  {c.isVerified ? '공식 확인' : '검토 중'}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">{c.lastVerifiedDate}</span>
              </div>
              <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {c.name}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                {c.operator}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Selected Casino Detail Card */}
      {activeCasino && (
        <div className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Hero Media Header */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <img
              src={activeCasino.image}
              alt={activeCasino.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#F3E5AB] block mb-1">
                  {activeCasino.englishName}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                  {activeCasino.name}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-300 mt-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{activeCasino.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded bg-black/70 border border-[#D4AF37]/50 text-right backdrop-blur-md">
                  <span className="text-[10px] text-slate-400 block">최종 규정 검증일</span>
                  <span className="text-xs font-bold text-[#F3E5AB] font-mono">{activeCasino.lastVerifiedDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Overview & Operator License */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-[#070B14] border border-slate-800">
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  공식 운영사 (Operator)
                </span>
                <div className="text-sm font-bold text-white">
                  {activeCasino.operator}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {activeCasino.summary}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  확인된 정부 허가 및 라이선스 정보
                </span>
                <div className="text-sm font-semibold text-[#F3E5AB]">
                  {activeCasino.licenseInfo}
                </div>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  <span>출처: {activeCasino.officialSource}</span>
                </div>
              </div>
            </div>

            {/* Crucial Entry Requirements (foreigners, passport, dress code) */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                카지노 필수 입장 규정 및 신분증 지침
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-[#F3E5AB] block">
                    1. 외국인 입장 자격
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCasino.foreignerEligibility}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    ※ 베트남 법령상 내국인 입장은 특정 시범 카지노 외 전면 금지되어 있습니다.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-[#F3E5AB] block">
                    2. 여권 및 신분증 원본 지침
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCasino.passportIdRules}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    ※ 사본, 캡처 사진, 주민등록증은 절대 인정되지 않으며 입장이 거부됩니다.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-[#F3E5AB] block">
                    3. 복장 규정 (Dress Code)
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCasino.dressCode}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    ※ 모자나 짙은 선글라스는 보안 카메라(CCTV) 식별을 위해 테이블 착용이 금지됩니다.
                  </p>
                </div>

              </div>
            </div>

            {/* Game Types & Facility Capacity */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#D4AF37]" />
                제공 게임 종류 및 테이블 인프라
              </h3>

              <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 space-y-4">
                <div className="text-xs text-slate-400">
                  <strong className="text-slate-200">시설 규모: </strong>
                  {activeCasino.tableCountText}
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-2">
                    운영 중인 테이블 & 머신 종류:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCasino.gameTypes.map((g, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium rounded bg-[#0B1120] border border-slate-700 text-slate-200"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-Visit Checklist & Official Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3E5AB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  방문 전 확인사항 (Checklist)
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeCasino.preVisitChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#070B14] border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F3E5AB] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  공식 이용 규정 (House Rules)
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeCasino.officialRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">·</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Disputes & Resolution Procedures */}
            <div className="p-5 rounded-xl bg-[#070B14] border border-amber-900/30 space-y-2">
              <h4 className="text-xs font-bold text-amber-300 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                카지노 문의 및 분쟁 해결 절차 (Dispute Resolution)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCasino.disputeProcedures}
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                ※ 현장 테이블 판정에 불복할 경우 테이블 베팅 칩을 즉시 건드리지 마시고 피트보스 호출 후 CCTV 감시팀의 영상 확인을 요청해야 정당한 판정을 받을 수 있습니다.
              </p>
            </div>

            {/* Official Source & Verification Timestamp */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
              <div>
                공식 출처: <span className="text-slate-300 font-medium">{activeCasino.officialSource}</span> (최종 확인: {activeCasino.lastVerifiedDate})
              </div>
              <button
                onClick={() => setShowResponsibleModal(true)}
                className="text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer font-medium"
              >
                책임 있는 도박 & 법적 면책 전문 보기
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
