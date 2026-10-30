import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  Flame, 
  Feather 
} from 'lucide-react';
import { SPA_IMAGE } from '../data/mockData';

export const SpaPage: React.FC = () => {
  const { nightlifeSpots } = useApp();

  const spaSpots = nightlifeSpots.filter(s => s.category === 'spa');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Title Header */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>다낭 프리미엄 웰니스 & 힐링 스파</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          마사지 & 스파 (Massage & Spa Guide)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          장시간의 카지노 테이블 게임 및 비행 후 쌓인 신체 피로를 완벽하게 해소할 수 있는 5성급 리조트 호텔 스파, 건식 스포츠 마사지, 아로마 테라피 및 전문 풋 스파를 안내합니다.
        </p>
      </div>

      {/* 4 Types of Treatments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            1. 스포츠 건식 마사지
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            오일 없이 편안한 마사지복을 착용하고 경혈과 척추, 어깨 근육을 강하게 지압하여 뭉친 피로를 즉각적으로 풀어줍니다.
          </p>
          <div className="text-[11px] text-[#F3E5AB] font-semibold pt-1">
            권장: 골프 라운딩 직후 / 테이블 피로
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Feather className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            2. 아로마 에센셜 테라피
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            천연 라벤더, 레몬그라스, 일랑일랑 천연 오일을 체온으로 흡수시켜 스트레스 완화와 깊은 숙면을 유도합니다.
          </p>
          <div className="text-[11px] text-[#F3E5AB] font-semibold pt-1">
            권장: 심신 안정 및 숙면 필요 시
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            3. 핫스톤 & 풋 마사지
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            따뜻한 화산석(현무암)의 원적외선 열기를 이용하여 혈액순환을 촉진하고 종아리와 발바닥 피로를 집중 케어합니다.
          </p>
          <div className="text-[11px] text-[#F3E5AB] font-semibold pt-1">
            권장: 비행기 부종 / 다리 저림 완화
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-white">
            4. 5성급 호텔 시그니처 스파
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            독립된 프라이빗 스파 스위트룸, 자쿠지 거품 목욕, 유기농 티 세레모니가 결합된 최상의 하이엔드 웰니스 경험을 선사합니다.
          </p>
          <div className="text-[11px] text-[#F3E5AB] font-semibold pt-1">
            권장: 최고급 프라이빗 힐링
          </div>
        </div>

      </div>

      {/* Spa Spots Details */}
      <div className="space-y-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
          엄선된 검증 스파 & 웰니스 리스트
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-4"
            >
              <div className="relative h-48">
                <img
                  src={spot.image || SPA_IMAGE}
                  alt={spot.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-black/75 border border-[#D4AF37]/40 text-[#F3E5AB]">
                  {spot.subCategory}
                </span>
                <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/40">
                  건전 힐링 인증
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
                  <div><strong className="text-slate-300">운영 시간: </strong>{spot.hours}</div>
                  <div><strong className="text-slate-300">투명 정찰 가격: </strong><span className="text-[#F3E5AB]">{spot.priceRange}</span></div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-semibold text-slate-300 block">제공 특징:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.features.map((f, i) => (
                      <li key={i} className="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 list-none">
                        {f}
                      </li>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
                  <span>예약 유의: {spot.bookingNotice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Notice */}
      <div className="p-4 rounded-xl bg-[#070B14] border border-slate-800 text-xs text-slate-400 text-center">
        ※ 본 플랫폼에 등록된 마사지 & 스파 시설은 위생 기준 및 테라피스트 자격 검증을 거친 정식 건전 업소입니다.
      </div>

    </div>
  );
};
