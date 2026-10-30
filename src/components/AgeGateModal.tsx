import React, { useState } from 'react';
import { useApp, safeStorage } from '../context/AppContext';
import { ShieldAlert, CheckCircle2, AlertOctagon } from 'lucide-react';

export const AgeGateModal: React.FC = () => {
  const { showAgeGate, setShowAgeGate } = useApp();
  const [deniedWarning, setDeniedWarning] = useState(false);

  if (!showAgeGate) return null;

  const handleConfirm = () => {
    safeStorage.setItem('danang_vvip_age_confirmed', 'true');
    setShowAgeGate(false);
  };

  const handleExit = () => {
    setDeniedWarning(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="max-w-md w-full bg-[#0B1120] border border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
        
        <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
          <ShieldAlert className="w-8 h-8 text-[#D4AF37]" />
        </div>

        <div className="space-y-2">
          <div className="inline-block px-3 py-1 bg-amber-950/60 border border-amber-600/40 rounded text-xs font-semibold text-amber-300">
            19+ 성인 인증 및 법규 준수
          </div>
          <h2 className="font-serif text-2xl font-bold text-white tracking-wide">
            DANANG VVIP
          </h2>
          <p className="text-xs text-slate-400">
            Casino & Nightlife Insider Platform
          </p>
        </div>

        <div className="text-xs text-slate-300 text-left space-y-2.5 bg-[#070B14] p-4 rounded-lg border border-slate-800 leading-relaxed">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>본 웹사이트는 성인(만 19세 이상)을 위한 다낭 카지노 정보 및 합법적인 여행 편의 가이드입니다.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>본 사이트는 카지노 운영사의 공식 사이트가 아니며 도박 결과나 수익을 보장하지 않습니다.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>불법 사설 정킷, 무허가 롤링 알선, 불법 성적 서비스 홍보를 엄격히 금지합니다.</span>
          </div>
        </div>

        {deniedWarning && (
          <div className="p-3 rounded bg-rose-950/40 border border-rose-800/50 text-xs text-rose-300 flex items-start gap-2 text-left">
            <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>만 19세 미만 청소년 또는 규정에 동의하지 않으시는 경우 본 사이트의 열람이 제한됩니다.</span>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleExit}
            className="w-full sm:w-1/2 py-2.5 px-4 text-xs font-medium text-slate-400 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
          >
            동의하지 않음
          </button>
          <button
            onClick={handleConfirm}
            className="w-full sm:w-1/2 py-2.5 px-4 text-xs font-bold text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded transition-all shadow-lg cursor-pointer"
          >
            만 19세 이상 동의 (입장)
          </button>
        </div>

        <p className="text-[11px] text-slate-500">
          한국도박문제예방치유원 헬프라인 국번없이 1336
        </p>

      </div>
    </div>
  );
};
