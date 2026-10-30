import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Newspaper, 
  Calendar, 
  FileText, 
  Tag, 
  Search, 
  ExternalLink, 
  ArrowLeft, 
  ChevronRight, 
  ShieldCheck, 
  Scale 
} from 'lucide-react';
import { NewsArticle } from '../types';

export const NewsPage: React.FC = () => {
  const { news, selectedNewsId, setSelectedNewsId } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [activeArticleId, setActiveArticleId] = useState<string | null>(selectedNewsId);

  const categories = ['전체', '현지 법령/규제', '판결/분쟁', '리조트 소식', '업계 동향'];

  const filteredNews = news.filter(item => {
    const matchCat = selectedCategory === '전체' || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const activeArticle = news.find(n => n.id === activeArticleId);

  // Related articles (same category or recent, excluding current)
  const relatedArticles = activeArticle 
    ? news.filter(n => n.id !== activeArticle.id && (n.category === activeArticle.category || true)).slice(0, 3)
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <Newspaper className="w-4 h-4 text-[#D4AF37]" />
          <span>공식 보도 및 법원 판결 중심 팩트 아카이브</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          카지노 뉴스 & 사건 판례 (Casino News & Rulings)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          베트남 재무부 및 관광청의 최신 규제 발표, 슬롯머신 오작동 무효 소송 등 실제 국제 게이밍 법원 판결, 복합리조트의 정식 시설 소식을 객관적으로 기록합니다.
        </p>
      </div>

      {/* If viewing a single article detail */}
      {activeArticle ? (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <button
            onClick={() => {
              setActiveArticleId(null);
              setSelectedNewsId(null);
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            전체 뉴스 목록으로 돌아가기
          </button>

          <article className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Image Header */}
            <div className="relative h-64 sm:h-96">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold px-3 py-1 rounded bg-black/80 border border-[#D4AF37]/50 text-[#F3E5AB]">
                  {activeArticle.category}
                </span>
              </div>
            </div>

            {/* Article Content Area */}
            <div className="p-6 sm:p-12 space-y-8">
              
              <div className="space-y-3 border-b border-slate-800 pb-6">
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                  {activeArticle.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    사건 발생일: {activeArticle.eventDate}
                  </span>
                  <span>·</span>
                  <span>기사 발행일: {activeArticle.publishDate}</span>
                  <span>·</span>
                  <span className="text-slate-300 font-medium">출처: {activeArticle.source}</span>
                </div>
              </div>

              {/* Summary Lead */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#070B14] border border-slate-800 text-sm text-[#F3E5AB] font-medium leading-relaxed">
                {activeArticle.summary}
              </div>

              {/* Full Body Prose */}
              <div className="space-y-5 text-sm text-slate-300 leading-relaxed font-normal">
                {activeArticle.content.map((p, i) => (
                  <p key={i} className="whitespace-pre-line leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
                {activeArticle.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-0.5 rounded bg-[#070B14] border border-slate-800 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Integrity Notice */}
              <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-slate-400">
                ※ DANANG VVIP는 보도 사실을 임의로 왜곡하거나 특정 카지노의 사실관계를 다른 시설로 변경하지 않는 보도 윤리 준칙을 이행합니다.
              </div>

            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="font-serif text-lg font-bold text-white">
                관련 기사 및 판례
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setActiveArticleId(rel.id);
                      setSelectedNewsId(rel.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-xl bg-[#0B1120] border border-slate-800 hover:border-[#D4AF37]/50 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold text-[#D4AF37] block">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-bold text-white line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-500 pt-3 block">
                      {rel.publishDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      ) : (
        /* News List Mode */
        <div className="space-y-8">
          
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 p-1 bg-[#0B1120] rounded-lg border border-slate-800 overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="뉴스 제목, 출처, 태그 검색..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-[#0B1120] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveArticleId(item.id);
                  setSelectedNewsId(item.id);
                }}
                className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-[#D4AF37]/50 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-black/75 border border-[#D4AF37]/40 text-[#F3E5AB]">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[11px] text-slate-300 font-mono">
                      발행: {item.publishDate}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      <span>출처: {item.source}</span>
                      <span>·</span>
                      <span>사건일: {item.eventDate}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                    <span>기사 전문 읽기</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
