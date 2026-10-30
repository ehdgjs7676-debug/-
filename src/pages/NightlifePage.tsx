import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Wine, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  BookOpen, 
  MapPin, 
  Clock, 
  Glasses, 
  ChevronRight 
} from 'lucide-react';
import { LOUNGE_IMAGE } from '../data/mockData';

export const NightlifePage: React.FC = () => {
  const { nightlifeSpots, setActivePage } = useApp();
  const [activeTab, setActiveTab] = useState<'guide' | 'lounges'>('guide');

  const lounges = nightlifeSpots.filter(s => s.category === 'lounge-bar');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Title */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <Wine className="w-4 h-4 text-[#D4AF37]" />
          <span>다낭 프리미엄 나이트라이프 & 안전 가이드</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          다낭 밤문화 & 루프탑 라운지 (Nightlife Insider)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          현지 밤문화 용어의 실체, 바가지 요금(Overcharging) 방지 5대 수칙, 베트남 공안 단속 법규, 그리고 한강과 미케비치를 조망하는 프리미엄 스카이 라운지 정보를 엄선하여 전달합니다.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1 bg-[#0B1120] rounded-lg border border-slate-800 w-fit">
        <button
          onClick={() => setActiveTab('guide')}
          className={`px-4 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
            activeTab === 'guide'
              ? 'bg-[#D4AF37] text-black font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          밤문화 용어 & 바가지 예방 수칙
        </button>
        <button
          onClick={() => setActiveTab('lounges')}
          className={`px-4 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
            activeTab === 'lounges'
              ? 'bg-[#D4AF37] text-black font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          추천 루프탑 라운지 & 바 ({lounges.length})
        </button>
      </div>

      {/* TAB 1: NIGHTLIFE GUIDE & LAW */}
      {activeTab === 'guide' && (
        <div className="space-y-10">
          
          {/* Glossary Section */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#D4AF37]" />
              현지 밤문화 용어 사전 & 업소 유형 객관적 설명
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              <div className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 space-y-1.5">
                <span className="font-bold text-[#F3E5AB] text-sm block">1. KTV (Karaoke Television)</span>
                <p className="text-slate-300 leading-relaxed">
                  노래방 시설을 갖춘 독립된 룸에서 주류와 안주를 즐기는 비즈니스 접객 시설입니다. 베트남 법령상 정식 엔터테인먼트 라이선스가 발급된 합법 매장과 무허가 변종 업소가 공존하므로, 정식 사업자 등록증과 정찰제 메뉴판 구비 여부를 확인해야 합니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 space-y-1.5">
                <span className="font-bold text-[#F3E5AB] text-sm block">2. 에코(Eco) 및 접객 동행 용어의 오해와 실체</span>
                <p className="text-slate-300 leading-relaxed">
                  여행 커뮤니티 등에서 통용되는 은어로 현지 여성과의 단순 동행 통역 가이드 또는 유흥 동행을 지칭합니다. 그러나 베트남 공안 당국은 이를 매개로 한 금전 수수와 성적 대가 거래를 불법 성매매로 간주하여 상시 기획 단속을 진행하고 있으므로 법적 주의가 필요합니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 space-y-1.5">
                <span className="font-bold text-[#F3E5AB] text-sm block">3. 착석 바 (Bar) & 레이디스 드링크(LD)</span>
                <p className="text-slate-300 leading-relaxed">
                  바텐더나 직원이 테이블에 동석하여 대화를 나누며 음료(LD: Lady Drink)를 주문하는 형태입니다. LD 1잔당 100,000~200,000 VND 수준이 정상이나, 비정상적 업소에서는 10~20잔을 허위 누적 청구하는 바가지 수법이 빈번합니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 space-y-1.5">
                <span className="font-bold text-[#F3E5AB] text-sm block">4. 풀빌라 파티의 법적 책임</span>
                <p className="text-slate-300 leading-relaxed">
                  독립된 리조트 풀빌라에 외부 인원을 무단 입실시키는 행위는 리조트 이용약관 위반(외부인 숙박 미등록)이자 베트남 거주신고법(Luat Cu Tru) 위반으로 경찰 불시 단속 시 막대한 과태료가 부과됩니다.
                </p>
              </div>

            </div>
          </div>

          {/* 5 Anti-Scam Rules */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1120] border border-[#D4AF37]/40 space-y-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />
              바가지 요금 & 사기 피해 예방 5대 수칙
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 space-y-1">
                <span className="text-[#D4AF37] font-bold text-xs block">수칙 01</span>
                <span className="text-xs font-semibold text-white block">길거리 호객(삐끼) 거절</span>
                <p className="text-[11px] text-slate-400">오토바이나 길거리 호객꾼을 따라가는 것은 100% 바가지의 원인입니다.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 space-y-1">
                <span className="text-[#D4AF37] font-bold text-xs block">수칙 02</span>
                <span className="text-xs font-semibold text-white block">정찰제 메뉴판 사진 촬영</span>
                <p className="text-[11px] text-slate-400">주문 전 주류 및 세트 가격 메뉴판을 사진으로 남겨 청구서와 대조합니다.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 space-y-1">
                <span className="text-[#D4AF37] font-bold text-xs block">수칙 03</span>
                <span className="text-xs font-semibold text-white block">VAT & 봉사료 포함 확인</span>
                <p className="text-[11px] text-slate-400">계산 시 부가세 10% 및 서비스료 5%가 이중 부과되지 않는지 점검합니다.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 space-y-1">
                <span className="text-[#D4AF37] font-bold text-xs block">수칙 04</span>
                <span className="text-xs font-semibold text-white block">VND 현금 지폐 0 개수 확인</span>
                <p className="text-[11px] text-slate-400">50만 동(500k)과 5만 동(50k)은 색상이 비슷하여 바꿔치기 사기가 잦습니다.</p>
              </div>

              <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 space-y-1">
                <span className="text-[#D4AF37] font-bold text-xs block">수칙 05</span>
                <span className="text-xs font-semibold text-white block">신용카드 결제 시 눈앞 확인</span>
                <p className="text-[11px] text-slate-400">카드를 건네지 말고 휴대용 단말기 화면의 결제 금액을 직접 보고 서명하세요.</p>
              </div>
            </div>
          </div>

          {/* Vietnamese Law Enforcement */}
          <div className="p-5 rounded-xl bg-[#070B14] border border-rose-900/40 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>베트남 사회주의공화국 성매매 및 마약류 단속 관련 법규</span>
            </div>
            <p className="leading-relaxed">
              베트남 법령에 따르면 성매매 행위자 및 구매자는 모두 행정처벌(Nghi dinh 144/2021/ND-CP) 대상이며 외국인의 경우 즉시 국외 추방 및 일정 기간 베트남 재입국이 영구 금지됩니다. 또한 유흥가에서 유통되는 아산화질소 풍선(해피벌룬)이나 합성 마약류는 중범죄로 사형 또는 종신형에 처해질 수 있으므로 절대 접촉하지 말아야 합니다.
            </p>
          </div>

        </div>
      )}

      {/* TAB 2: LUXURY LOUNGE & BAR */}
      {activeTab === 'lounges' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lounges.map((lounge) => (
              <div
                key={lounge.id}
                className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-4"
              >
                <div className="relative h-56">
                  <img
                    src={lounge.image || LOUNGE_IMAGE}
                    alt={lounge.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-black/75 border border-[#D4AF37]/40 text-[#F3E5AB]">
                    {lounge.subCategory}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{lounge.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {lounge.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lounge.description}
                  </p>

                  <div className="p-3.5 rounded-lg bg-[#070B14] border border-slate-800 text-xs space-y-1.5">
                    <div><strong className="text-slate-300">영업 시간: </strong>{lounge.hours}</div>
                    <div><strong className="text-slate-300">메뉴 및 가격: </strong><span className="text-[#F3E5AB]">{lounge.priceRange}</span></div>
                    <div><strong className="text-slate-300">드레스코드: </strong>{lounge.dressCode}</div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-semibold text-slate-300 block">시설 주요 특징:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {lounge.features.map((f, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
                    <span>이용 팁: {lounge.bookingNotice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
