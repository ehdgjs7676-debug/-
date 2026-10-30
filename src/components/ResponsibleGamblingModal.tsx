import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Scale, AlertOctagon, PhoneCall, ShieldCheck } from 'lucide-react';

export const ResponsibleGamblingModal: React.FC = () => {
  const { showResponsibleModal, setShowResponsibleModal } = useApp();

  if (!showResponsibleModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-[#0B1120] border border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-amber-950/50 border border-amber-600/30 text-[#D4AF37]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                책임 있는 카지노 이용 & 필수 법적 보호 안내
              </h3>
              <p className="text-xs text-slate-400">
                대한민국 형법, 베트남 외환관리법 및 안전 지침
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowResponsibleModal(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Korean Criminal Law */}
        <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#F3E5AB]">
            <AlertOctagon className="w-4 h-4 text-amber-400" />
            <span>1. 대한민국 형법 제246조(속인주의) 안내</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            대한민국 형법은 속인주의를 원칙으로 하여, 해외에서 인가받은 합법 카지노라 하더라도 한국 국적자에게는 한국 형법이 적용됩니다.
          </p>
          <ul className="text-xs text-slate-400 space-y-1 list-disc pl-5">
            <li><strong className="text-slate-200">일시오락의 예외:</strong> 관광 중 소액으로 일시적 오락 수준의 게임을 한 경우 위법성이 조각될 수 있으나, 재산 상태나 소득에 비해 과도한 금액을 베팅하거나 반복하는 행위는 상습도박죄로 기소될 수 있습니다.</li>
            <li><strong className="text-slate-200">도박 빚의 불법원인급여:</strong> 해외 사설 환전상이나 브로커에게 빌린 도박 자금은 민법 제746조에 따라 반환 청구가 불가능하며, 불법 도박개장 및 외환관리법 위반으로 수사 대상이 됩니다.</li>
          </ul>
        </div>

        {/* Section 2: Vietnam Foreign Exchange */}
        <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#F3E5AB]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>2. 베트남 외환관리법(외환 반출 5,000 USD 초과 규정)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            베트남 중앙은행 규정에 따라, 출국 시 미화 5,000 USD를 초과하는 현금을 소지하고 출국할 경우 베트남 세관에 신고해야 합니다.
          </p>
          <ul className="text-xs text-slate-400 space-y-1 list-disc pl-5">
            <li>카지노에서 승리한 자금은 반드시 카지노 공식 캐셔(Cage)에서 <strong className="text-slate-200">\'당첨 증명서(Certificate of Winnings)\'</strong>를 정식 발급받아 세관에 제출해야 압류 위험이 없습니다.</li>
            <li>개인 간 장외 칩 거래나 사설 환전은 카지노 규정상 즉시 영구 출입금지 및 칩 몰수 사유입니다.</li>
          </ul>
        </div>

        {/* Section 3: Sex Trade & Anti-Drugs Notice */}
        <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-rose-300">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>3. 불법 성매매 및 마약류 무관용 엄단 고지</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            베트남 사회주의공화국 법률상 성매매는 강력한 행정처벌, 벌금 및 외국인의 경우 즉시 강제 출국 및 영구 입국금지 조치가 내려집니다. 본 플랫폼은 어떠한 유료 성적 동행이나 성매매 알선도 취급하지 않으며, 건전하고 합법적인 여행 편의 정보만을 제공합니다.
          </p>
        </div>

        {/* Section 4: Gambling Addiction Helpline */}
        <div className="p-4 rounded-lg bg-amber-950/30 border border-amber-600/30 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-amber-200">
              도박 문제 전문 상담 핫라인 (한국도박문제예방치유원)
            </div>
            <p className="text-xs text-slate-400">
              도박 문제로 고통받고 계시다면 24시간 언제든지 무료 상담을 받으실 수 있습니다.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0B1120] border border-amber-500/40 rounded text-amber-300 text-sm font-bold shrink-0">
            <PhoneCall className="w-4 h-4" />
            <span>1336 (국번없이)</span>
          </div>
        </div>

        {/* Action */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => setShowResponsibleModal(false)}
            className="px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded transition-all cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
