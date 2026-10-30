import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Mic2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  DollarSign, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { LOUNGE_IMAGE } from '../data/mockData';

export const KaraokePage: React.FC = () => {
  const { nightlifeSpots, setActivePage } = useApp();

  const karaokeSpots = nightlifeSpots.filter(s => s.category === 'karaoke');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <Mic2 className="w-4 h-4 text-[#D4AF37]" />
          <span>다낭 정식 인가 KTV & 가라오케 시설 가이드</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          가라오케 (Karaoke & KTV Guide)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          다낭 현지 문화관광부 정식 인가를 취득한 프리미엄 KTV 룸 시설, 정찰제 주류 메뉴 가격 구조, 영업시간 및 합법적 이용 수칙을 안내합니다.
        </p>
      </div>

      {/* Pricing & Facility Structure Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            1. 룸 시설 & 음향 시스템
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            최신 한국 노래방 반주기(TJ 미디어 / 금영 최신곡 실시간 업데이트)와 대형 모니터, 독립 방음 부스, 전용 화장실을 갖춘 4인~20인 수용 VIP 룸 구조로 운영됩니다.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            2. 정찰제 가격 구조
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            - 맥주 기본 세트 (맥주 24캔 + 과일 안주 + 룸 차지 2시간): 약 $150~$180<br />
            - 위스키 세트 (조니워커/발렌타인 12~17년산 + 마른안주 + 음료): 약 $200~$320<br />
            ※ 사전에 정찰제 메뉴판 가격을 확인하는 것이 바가지 예방의 기본입니다.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            3. 이용시간 & 예약 절차
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            - 정규 영업시간: 19:00 ~ 익일 02:00<br />
            - 골든 타임(20:00~22:00)에는 대기 시간이 발생할 수 있으므로 당일 오후 6시 전 사전 예약 권장.<br />
            - 취소 규정: 당일 1시간 전 취소 시 위약금 없음.
          </p>
        </div>

      </div>

      {/* Verified Karaoke Spots List */}
      <div className="space-y-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
          확인된 대표 KTV 시설 목록
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {karaokeSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-4"
            >
              <div className="relative h-48">
                <img
                  src={spot.image || LOUNGE_IMAGE}
                  alt={spot.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/40">
                  정식 인가 확인됨
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{spot.location}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {spot.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {spot.description}
                </p>

                <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 text-xs space-y-1">
                  <div><strong className="text-slate-300">영업 시간: </strong>{spot.hours}</div>
                  <div><strong className="text-slate-300">가격대: </strong><span className="text-[#F3E5AB]">{spot.priceRange}</span></div>
                  <div><strong className="text-slate-300">드레스코드: </strong>{spot.dressCode}</div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-semibold text-slate-300 block">시설 특장점:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.features.map((f, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>안내: {spot.bookingNotice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strict Compliance Box */}
      <div className="p-5 rounded-xl bg-[#070B14] border border-amber-900/40 text-xs text-slate-300 space-y-2">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>합법적 이용 원칙 및 성매매 알선 금지 고지</span>
        </div>
        <p className="leading-relaxed">
          본 플랫폼은 베트남 법률 및 대한민국 법령을 철저히 준수합니다. 어떠한 형태의 성매매, 유료 성적 동행 및 불법 서비스를 알선하거나 예약 대행하지 않으며, 건전한 KTV 룸 및 정식 주류 음향 시설 이용만을 안내합니다.
        </p>
      </div>

    </div>
  );
};
