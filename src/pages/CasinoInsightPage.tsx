import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  Scale, 
  Percent, 
  Coins, 
  FileCheck2, 
  AlertTriangle, 
  UserCheck, 
  Building, 
  Search, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';

export const CasinoInsightPage: React.FC = () => {
  const { insights, selectedInsightId, setSelectedInsightId, setShowResponsibleModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [activeArticleId, setActiveArticleId] = useState<string | null>(
    selectedInsightId || insights[0]?.id || null
  );

  const categories = ['전체', '게임 규칙', '롤링 & 턴오버', '정산 & 세무', '법률 검토', '자금세탁방지', '규정 & 판례'];

  const filteredInsights = insights.filter(item => {
    const matchCat = activeCategory === '전체' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const activeArticle = insights.find(i => i.id === activeArticleId) || insights[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Title Header */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-[#D4AF37]" />
          <span>경험자를 위한 수학적·법률적 전문 분석</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          카지노 인사이트 (Casino Insights)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          바카라와 노커미션의 하우스 엣지 비교, 롤링 및 턴오버의 공식 메커니즘, 외환 반출 5,000 USD 신고 규정, 그리고 대한민국 형법 제246조 속인주의 판례를 전문적으로 분석합니다.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Categories (Buttons with active states) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0B1120] rounded-lg border border-slate-800 overflow-x-auto w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="인사이트 주제 검색..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-[#0B1120] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* 2-Column Split: List & Detailed Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Article Navigation List */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            분석 리포트 목록 ({filteredInsights.length}편)
          </span>

          {filteredInsights.map((art) => {
            const isSelected = activeArticle?.id === art.id;
            return (
              <div
                key={art.id}
                onClick={() => {
                  setActiveArticleId(art.id);
                  setSelectedInsightId(art.id);
                }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1120] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-[#070B14] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className={`font-semibold ${isSelected ? 'text-[#D4AF37]' : 'text-slate-400'}`}>
                    {art.category}
                  </span>
                  <span>{art.readingTime} 소요</span>
                </div>
                <h4 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {art.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {art.summary}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 mt-2 border-t border-slate-800/60">
                  <span>게시일: {art.publishedDate}</span>
                  <span className="text-[#D4AF37] font-medium flex items-center gap-0.5">
                    리포트 읽기
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active In-Depth Report Reader */}
        {activeArticle && (
          <div className="lg:col-span-7 bg-[#0B1120] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
            
            {/* Header info */}
            <div className="space-y-3 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-[#D4AF37] font-bold">{activeArticle.category}</span>
                <span>·</span>
                <span>열람 시간 약 {activeArticle.readingTime}</span>
                <span>·</span>
                <span>발행일: {activeArticle.publishedDate}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {activeArticle.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                {activeArticle.subtitle}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#070B14] border border-[#D4AF37]/30 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F3E5AB] flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-[#D4AF37]" />
                핵심 요약 포인트 (Key Takeaways)
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Prose Content */}
            <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {activeArticle.content.map((paragraph, idx) => (
                <div key={idx} className="whitespace-pre-line leading-relaxed">
                  {paragraph}
                </div>
              ))}
            </div>

            {/* Disclaimer & Responsibility Note */}
            <div className="p-4 rounded-lg bg-[#070B14] border border-amber-900/30 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>법적 한계 및 플랫폼 정책</span>
              </div>
              <p className="leading-relaxed">
                {activeArticle.disclaimer}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setShowResponsibleModal(true)}
                  className="text-xs text-[#D4AF37] hover:underline cursor-pointer"
                >
                  대한민국 형법 제246조 및 베트남 외환관리법 상세 고지 확인 &gt;
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
