import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Globe, FileCode, Check, Copy } from 'lucide-react';

export const SeoMetaModal: React.FC = () => {
  const { showSeoModal, setShowSeoModal, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots' | 'schema' | 'keywords'>('sitemap');
  const [copied, setCopied] = useState(false);

  if (!showSeoModal) return null;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://danang-vvip.com/</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/casino-guide</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/casino-insight</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/vip-facilities</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/services</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/karaoke</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/spa</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/nightlife</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/news</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://danang-vvip.com/faq-contact</loc>
    <lastmod>2026-10-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/private

Sitemap: https://danang-vvip.com/sitemap.xml`;

  const schemaJsonLd = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://danang-vvip.com/#website",
      "url": "https://danang-vvip.com",
      "name": "DANANG VVIP",
      "description": "경험자를 위한 다낭 카지노 정보와 프리미엄 나이트라이프 독립 정보 가이드",
      "inLanguage": "ko-KR"
    },
    {
      "@type": "FAQPage",
      "@id": "https://danang-vvip.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "다낭 카지노에 입장하려면 어떤 신분증이 필요한가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "만 21세 이상 외국인 여권 실물 원본이 필수이며, 사본이나 모바일 사진은 불허됩니다."
          }
        },
        {
          "@type": "Question",
          "name": "고액 카지노 당첨금은 세관 신고가 필요한가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "미화 5,000 USD 초과 외환 반출 시 카지노 공식 Certificate of Winnings를 발급받아 베트남 세관에 신고해야 합법 반출 가능합니다."
          }
        }
      ]
    }
  ]
}`;

  const currentContent = 
    activeTab === 'sitemap' ? sitemapXml :
    activeTab === 'robots' ? robotsTxt :
    activeTab === 'schema' ? schemaJsonLd : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    showToast('클립보드에 복사되었습니다.');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-[#0B1120] border border-slate-700 rounded-xl p-6 shadow-2xl space-y-5">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">
              검색엔진 최적화 (SEO) & 구조화 데이터 현황
            </h3>
          </div>
          <button
            onClick={() => setShowSeoModal(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1.5 p-1 bg-[#070B14] rounded-lg border border-slate-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'sitemap' ? 'bg-[#D4AF37] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'robots' ? 'bg-[#D4AF37] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            robots.txt
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'schema' ? 'bg-[#D4AF37] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            JSON-LD 구조화 데이터
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'keywords' ? 'bg-[#D4AF37] text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            핵심 검색 키워드 분석
          </button>
        </div>

        {/* Content Box */}
        {activeTab !== 'keywords' ? (
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '복사됨' : '복사'}</span>
            </button>
            <pre className="p-4 bg-[#050811] rounded-lg border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-72 leading-relaxed">
              {currentContent}
            </pre>
          </div>
        ) : (
          <div className="space-y-3 p-4 bg-[#070B14] rounded-lg border border-slate-800 text-xs">
            <h4 className="font-semibold text-[#F3E5AB]">실제 네이버 & 구글 타깃 SEO 전략:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div className="p-2.5 bg-[#0B1120] rounded border border-slate-800">
                <span className="text-[#D4AF37] font-semibold block mb-0.5">다낭 카지노 입장 규정</span>
                <span className="text-slate-400 text-[11px]">여권 원본, 만 21세, 드레스코드 정밀 안내</span>
              </div>
              <div className="p-2.5 bg-[#0B1120] rounded border border-slate-800">
                <span className="text-[#D4AF37] font-semibold block mb-0.5">호이아나 카지노 정보</span>
                <span className="text-slate-400 text-[11px]">라이브 바카라, 테이블 수, VIP 라운지</span>
              </div>
              <div className="p-2.5 bg-[#0B1120] rounded border border-slate-800">
                <span className="text-[#D4AF37] font-semibold block mb-0.5">베트남 카지노 게임 규칙</span>
                <span className="text-slate-400 text-[11px]">5% 커미션 vs 슈퍼6 수학적 하우스 엣지</span>
              </div>
              <div className="p-2.5 bg-[#0B1120] rounded border border-slate-800">
                <span className="text-[#D4AF37] font-semibold block mb-0.5">다낭 밤문화 주의사항</span>
                <span className="text-slate-400 text-[11px]">바가지 요금 방지, 합법 KTV 식별법, 공안 단속 법규</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              ※ 투명성 원칙: 숨김 키워드, 허위 조작 후기, 가짜 프로모션은 전면 배제되어 정직한 신뢰도를 확보합니다.
            </p>
          </div>
        )}

        <div className="flex justify-end pt-2">
          <button
            onClick={() => setShowSeoModal(false)}
            className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
