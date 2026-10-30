import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Lock, 
  Plus, 
  Trash2, 
  CheckCircle, 
  AlertTriangle, 
  RotateCcw, 
  FileText, 
  ShieldCheck, 
  Save 
} from 'lucide-react';
import { PromotionItem, NewsArticle } from '../types';

export const AdminModal: React.FC = () => {
  const { 
    showAdminModal, 
    setShowAdminModal, 
    isAdminLoggedIn, 
    setIsAdminLoggedIn,
    news,
    addNewsArticle,
    deleteNewsArticle,
    promotions,
    updatePromotionLegalStatus,
    addPromotion,
    casinos,
    updateCasinoData,
    resetAllDataToDefault,
    showToast 
  } = useApp();

  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<'news' | 'promotions' | 'casinos' | 'reset'>('news');

  // New News form state
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState<NewsArticle['category']>('현지 법령/규제');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsSource, setNewsSource] = useState('베트남 관광청 / 재무부');
  const [newsTags, setNewsTags] = useState('다낭, 규정, 법령');

  // New Promo form state
  const [promoTitle, setPromoTitle] = useState('');
  const [promoCategory, setPromoCategory] = useState<PromotionItem['category']>('호텔/리조트');
  const [promoPartner, setPromoPartner] = useState('');
  const [promoProof, setPromoProof] = useState('');
  const [promoValidUntil, setPromoValidUntil] = useState('2026-12-31');
  const [promoConditions, setPromoConditions] = useState('');
  const [promoLegalStatus, setPromoLegalStatus] = useState<PromotionItem['legalStatus']>('심사 대기');
  const [promoDetails, setPromoDetails] = useState('');

  if (!showAdminModal) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '1224') {
      setIsAdminLoggedIn(true);
      showToast('관리자 인증에 성공했습니다.');
    } else {
      showToast('비밀번호가 올바르지 않습니다. (비밀번호: 1224)');
    }
  };

  const handleCreateNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsSummary.trim() || !newsContent.trim()) {
      showToast('기사 제목, 요약, 본문을 모두 입력해주세요.');
      return;
    }

    addNewsArticle({
      title: newsTitle,
      category: newsCategory,
      summary: newsSummary,
      content: newsContent.split('\n\n').filter(Boolean),
      eventDate: new Date().toISOString().split('T')[0],
      publishDate: new Date().toISOString().split('T')[0],
      source: newsSource,
      tags: newsTags.split(',').map(t => t.trim()),
      image: '/images/danang_resort_hero_1793339722724.jpg',
      isVerified: true
    });

    setNewsTitle('');
    setNewsSummary('');
    setNewsContent('');
  };

  const handleCreatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoTitle.trim() || !promoPartner.trim() || !promoProof.trim()) {
      showToast('프로모션명, 제공업체 및 적법성 증빙자료를 입력해주세요.');
      return;
    }

    addPromotion({
      title: promoTitle,
      category: promoCategory,
      partnerName: promoPartner,
      proofDocument: promoProof,
      validUntil: promoValidUntil,
      conditions: promoConditions,
      legalStatus: promoLegalStatus,
      isPublished: promoLegalStatus === '검토 승인 완료',
      details: promoDetails
    });

    setPromoTitle('');
    setPromoPartner('');
    setPromoProof('');
    setPromoConditions('');
    setPromoDetails('');
    setPromoLegalStatus('심사 대기');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#0B1120] border border-[#D4AF37]/50 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B14]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              DANANG VVIP 콘텐츠 & 컴플라이언스 관리자 (CMS)
            </h3>
          </div>
          <button
            onClick={() => setShowAdminModal(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isAdminLoggedIn ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
              <Lock className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">관리자 인증</h4>
              <p className="text-xs text-slate-400 mt-1">
                뉴스 발행 및 프로모션 법적 심사 상태를 제어하기 위한 관리자 패스워드를 입력하세요.
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="비밀번호 입력 (비밀번호: 1224)"
                className="w-full px-4 py-2.5 rounded bg-[#070B14] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 font-bold text-xs text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded transition-colors cursor-pointer"
              >
                관리자 로그인
              </button>
            </form>
            <p className="text-[11px] text-slate-500">
              안내: 관리자 패스워드는 <code className="text-[#F3E5AB]">1224</code> 입니다.
            </p>
          </div>
        ) : (
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Admin Tabs */}
            <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800 bg-[#070B14] overflow-x-auto">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'news' ? 'bg-[#D4AF37] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                카지노 뉴스 발행 ({news.length})
              </button>
              <button
                onClick={() => setActiveTab('promotions')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'promotions' ? 'bg-[#D4AF37] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                프로모션 법적 심사 ({promotions.length})
              </button>
              <button
                onClick={() => setActiveTab('casinos')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'casinos' ? 'bg-[#D4AF37] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                카지노 정보 감사 ({casinos.length})
              </button>
              <button
                onClick={() => setActiveTab('reset')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap text-rose-300 hover:bg-rose-950/40 ${
                  activeTab === 'reset' ? 'bg-rose-900/60 text-white' : ''
                }`}
              >
                데이터 초기화
              </button>
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* TAB 1: NEWS */}
              {activeTab === 'news' && (
                <div className="space-y-6">
                  {/* Create News */}
                  <form onSubmit={handleCreateNews} className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F3E5AB]">신규 카지노 뉴스 및 사건/판례 작성</span>
                      <span className="text-[11px] text-slate-500">※ 실제 언론/공식 발표 기반 작성</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label className="text-[11px] text-slate-400 block mb-1">기사 제목</label>
                        <input
                          type="text"
                          value={newsTitle}
                          onChange={(e) => setNewsTitle(e.target.value)}
                          placeholder="제목 입력 (예: 다낭 카지노 신규 전자 게이밍 규정 개정)"
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">카테고리</label>
                        <select
                          value={newsCategory}
                          onChange={(e) => setNewsCategory(e.target.value as any)}
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="현지 법령/규제">현지 법령/규제</option>
                          <option value="판결/분쟁">판결/분쟁</option>
                          <option value="리조트 소식">리조트 소식</option>
                          <option value="업계 동향">업계 동향</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">기사 요약 (리스트 노출용 1~2줄)</label>
                      <input
                        type="text"
                        value={newsSummary}
                        onChange={(e) => setNewsSummary(e.target.value)}
                        placeholder="요약 내용 입력"
                        className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">기사 본문 (단락 구분은 엔터 두 번)</label>
                      <textarea
                        rows={4}
                        value={newsContent}
                        onChange={(e) => setNewsContent(e.target.value)}
                        placeholder="본문 내용을 입력하세요..."
                        className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">공식 출처</label>
                        <input
                          type="text"
                          value={newsSource}
                          onChange={(e) => setNewsSource(e.target.value)}
                          placeholder="출처 명시"
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">태그 (쉼표 구분)</label>
                        <input
                          type="text"
                          value={newsTags}
                          onChange={(e) => setNewsTags(e.target.value)}
                          placeholder="다낭, 카지노, 판례"
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        기사 발행하기
                      </button>
                    </div>
                  </form>

                  {/* News list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-300">발행된 뉴스 목록 ({news.length}건)</h4>
                    {news.map((item) => (
                      <div key={item.id} className="p-3.5 rounded bg-[#070B14] border border-slate-800 flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="text-[#D4AF37] font-semibold">{item.category}</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-400">{item.publishDate}</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-400">{item.source}</span>
                          </div>
                          <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                          <p className="text-xs text-slate-400 line-clamp-1">{item.summary}</p>
                        </div>
                        <button
                          onClick={() => deleteNewsArticle(item.id)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 rounded hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                          title="기사 삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: PROMOTIONS */}
              {activeTab === 'promotions' && (
                <div className="space-y-6">
                  {/* Warning banner */}
                  <div className="p-3.5 rounded bg-amber-950/40 border border-amber-600/40 text-xs text-amber-200 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong>법적 준수 필수 규칙:</strong> 프로모션 데이터에는 제공 업체, 증빙 자료, 유효기간, 적용 조건, 법적 검토 상태가 저장되어야 하며, <span className="underline font-bold">\'검토 승인 완료\' 상태가 아닌 미확인 프로모션은 일반 사용자 화면에 절대 공개할 수 없습니다.</span> (카지노 롤링 연동 혜택 일체 금지)
                    </div>
                  </div>

                  {/* Add Promo Form */}
                  <form onSubmit={handleCreatePromo} className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-3">
                    <span className="text-xs font-bold text-[#F3E5AB] block">신규 프로모션 심사 등록</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">프로모션명</label>
                        <input
                          type="text"
                          value={promoTitle}
                          onChange={(e) => setPromoTitle(e.target.value)}
                          placeholder="예: 5성급 호텔 2박 시 VIP 차량 우대"
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">제공 업체 (법인명)</label>
                        <input
                          type="text"
                          value={promoPartner}
                          onChange={(e) => setPromoPartner(e.target.value)}
                          placeholder="예: Danang Luxury Chauffeur Co."
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">증빙 자료 (계약서/인가증 번호)</label>
                        <input
                          type="text"
                          value={promoProof}
                          onChange={(e) => setPromoProof(e.target.value)}
                          placeholder="예: 정식 운송업 등록증 제2026-04호"
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">유효 기간</label>
                        <input
                          type="date"
                          value={promoValidUntil}
                          onChange={(e) => setPromoValidUntil(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">초기 법적 검토 상태</label>
                        <select
                          value={promoLegalStatus}
                          onChange={(e) => setPromoLegalStatus(e.target.value as any)}
                          className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                        >
                          <option value="심사 대기">심사 대기 (비공개)</option>
                          <option value="보완 필요">보완 필요 (비공개)</option>
                          <option value="검토 승인 완료">검토 승인 완료 (공개 가능)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">적용 조건 및 비고 (카지노 롤링 조건 배제 확인)</label>
                      <input
                        type="text"
                        value={promoConditions}
                        onChange={(e) => setPromoConditions(e.target.value)}
                        placeholder="예: 정규 패키지 3일 대절 시 적용 (카지노 실적 무관)"
                        className="w-full px-3 py-2 text-xs rounded bg-[#0B1120] border border-slate-700 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#F3E5AB] rounded transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        프로모션 심사 등록
                      </button>
                    </div>
                  </form>

                  {/* Promo list with approval toggle */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-300">등록된 프로모션 관리 ({promotions.length}건)</h4>
                    {promotions.map((p) => {
                      const isApproved = p.legalStatus === '검토 승인 완료';
                      return (
                        <div key={p.id} className={`p-4 rounded-lg border ${
                          isApproved ? 'bg-[#070B14] border-slate-800' : 'bg-rose-950/20 border-rose-900/40'
                        } space-y-2`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <span className="text-xs font-bold text-white block">{p.title}</span>
                              <div className="text-[11px] text-slate-400 mt-0.5 space-x-2">
                                <span>제공사: {p.partnerName}</span>
                                <span>·</span>
                                <span>증빙: {p.proofDocument}</span>
                                <span>·</span>
                                <span>기한: {p.validUntil}</span>
                              </div>
                            </div>
                            
                            {/* Status badge and toggle */}
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                                isApproved ? 'bg-emerald-950 text-emerald-300 border border-emerald-600/40' : 'bg-rose-950 text-rose-300 border border-rose-600/40'
                              }`}>
                                {p.legalStatus} ({p.isPublished ? '공개중' : '차단됨'})
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
                            <span className="text-slate-400 text-[11px]">조건: {p.conditions}</span>
                            <div className="flex items-center gap-2">
                              {isApproved ? (
                                <button
                                  onClick={() => updatePromotionLegalStatus(p.id, '보완 필요', false)}
                                  className="px-2.5 py-1 text-[11px] rounded bg-rose-900/40 text-rose-300 hover:bg-rose-900/70 border border-rose-700/40 cursor-pointer"
                                >
                                  승인 취소 (게시 차단)
                                </button>
                              ) : (
                                <button
                                  onClick={() => updatePromotionLegalStatus(p.id, '검토 승인 완료', true)}
                                  className="px-2.5 py-1 text-[11px] rounded bg-emerald-900/40 text-emerald-300 hover:bg-emerald-900/70 border border-emerald-700/40 cursor-pointer font-semibold"
                                >
                                  법적 적법성 승인 (공개 허용)
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: CASINOS AUDIT */}
              {activeTab === 'casinos' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-300">카지노 공식 정보 및 라이선스 확인 일자 감사</h4>
                  {casinos.map((c) => (
                    <div key={c.id} className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-sm">{c.name}</span>
                        <span className="text-xs text-[#D4AF37]">마지막 확인: {c.lastVerifiedDate}</span>
                      </div>
                      <p className="text-xs text-slate-400">운영사: {c.operator} | 인가: {c.licenseInfo}</p>
                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => {
                            const today = new Date().toISOString().split('T')[0];
                            updateCasinoData(c.id, { lastVerifiedDate: today });
                          }}
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-slate-800 hover:bg-[#D4AF37] hover:text-black rounded text-slate-300 transition-colors cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          오늘 날짜로 공식 검증 갱신
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: RESET */}
              {activeTab === 'reset' && (
                <div className="p-6 rounded-lg bg-rose-950/20 border border-rose-900/50 space-y-4 text-center max-w-lg mx-auto">
                  <RotateCcw className="w-10 h-10 text-rose-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">전체 데이터 공식 검증 기본값 복원</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    로컬 스토리지에 저장된 사용자 수정 기사, 프로모션 상태, 카지노 정보 등을 초기 공식 팩트체크 데이터로 되돌립니다.
                  </p>
                  <button
                    onClick={resetAllDataToDefault}
                    className="py-2.5 px-6 text-xs font-bold text-white bg-rose-700 hover:bg-rose-600 rounded transition-colors cursor-pointer"
                  >
                    공식 기본값으로 초기화
                  </button>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-[#070B14] flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                로그인 계정: Administrator (Session Active)
              </span>
              <button
                onClick={() => setShowAdminModal(false)}
                className="px-4 py-1.5 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
