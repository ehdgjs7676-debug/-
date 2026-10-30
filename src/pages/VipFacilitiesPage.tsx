import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Crown, 
  BedDouble, 
  UtensilsCrossed, 
  Car, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Calendar 
} from 'lucide-react';

export const VipFacilitiesPage: React.FC = () => {
  const { vipFacilities, setActivePage } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = ['전체', '스위트룸 & 빌라', 'VIP 라운지', '파인다이닝', '전용 교통', '스파 & 웰니스'];

  const filtered = vipFacilities.filter(f => 
    selectedCategory === '전체' || f.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Title */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <Crown className="w-4 h-4 text-[#D4AF37]" />
          <span>공식 검증 복합리조트 & VIP 편의시설</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          VIP 편의시설 및 복합리조트 (VIP Facilities)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          호이아나 및 5성급 럭셔리 리조트의 프라이빗 풀빌라, VIP 멤버스 전용 라운지, 쇼퍼 전용 리무진 차량, 미쉐린 파인다이닝의 정규 이용 조건을 투명하게 안내합니다.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex items-center gap-1.5 p-1 bg-[#0B1120] rounded-lg border border-slate-800 overflow-x-auto w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((fac) => (
          <div
            key={fac.id}
            className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-black/75 border border-[#D4AF37]/40 text-[#F3E5AB] backdrop-blur-md">
                  {fac.category}
                </span>
                <span className="absolute bottom-3 left-3 text-xs text-slate-300 font-medium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {fac.resortName}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug">
                  {fac.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {fac.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-300 block">주요 편의 및 혜택:</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {fac.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 text-xs mb-4">
                <span className="text-slate-500 block text-[10px] uppercase font-semibold">이용 조건 및 자격</span>
                <span className="text-slate-300 font-medium">{fac.accessRequirements}</span>
              </div>
              <button
                onClick={() => setActivePage('services')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer text-center"
              >
                의전 및 연계 패키지 견적 확인
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Note about transparency */}
      <div className="p-4 rounded-xl bg-[#070B14] border border-slate-800 text-xs text-slate-400 text-center">
        ※ 본 플랫폼의 모든 VIP 시설 정보는 리조트 공식 공시 및 실제 계약이 확인된 시설만을 다루며, 도박 손실 연동 무료 제공 등의 과장 정보를 게재하지 않습니다.
      </div>

    </div>
  );
};
