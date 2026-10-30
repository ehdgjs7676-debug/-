import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Copy, 
  Check, 
  Clock, 
  Building, 
  ShieldAlert, 
  Send, 
  FileCheck2, 
  AlertCircle 
} from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const FaqContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedKakao, setCopiedKakao] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  // Contact Form State
  const [name, setName] = useState('');
  const [kakaoOrPhone, setKakaoOrPhone] = useState('');
  const [dates, setDates] = useState('');
  const [interestService, setInterestService] = useState('차량 및 호텔 편의');
  const [message, setMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyKakaoId = () => {
    try {
      navigator.clipboard.writeText('danangvvip');
      setCopiedKakao(true);
      showToast('카카오톡 ID (danangvvip)가 복사되었습니다.');
      setTimeout(() => setCopiedKakao(false), 2000);
    } catch {
      showToast('카카오톡 ID: danangvvip');
    }
  };

  const copyTelegramId = () => {
    try {
      navigator.clipboard.writeText('danangvvip');
      setCopiedTelegram(true);
      showToast('텔레그램 ID (@danangvvip)가 복사되었습니다.');
      setTimeout(() => setCopiedTelegram(false), 2000);
    } catch {
      showToast('텔레그램 ID: danangvvip');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !kakaoOrPhone.trim() || !message.trim()) {
      showToast('이름, 연락처, 문의 내용을 모두 입력해주세요.');
      return;
    }
    if (!agreeTerms) {
      showToast('개인정보처리방침 및 서비스 범위에 동의해주세요.');
      return;
    }

    setIsSubmitted(true);
    showToast('여행 편의 컨시어지 문의가 정상 접수되었습니다.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Title */}
      <div className="space-y-3 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1120] border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
          <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
          <span>자주 묻는 질문 & 공식 여행 컨시어지 창구</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          FAQ & 고객센터 (Customer Concierge)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          다낭 카지노 입장 신분증 규정, 5,000 USD 세관 신고 등 필수 FAQ와 합법적 여행 편의 서비스(차량, 호텔, 다이닝) 문의를 위한 공식 채널입니다.
        </p>
      </div>

      {/* 2-Column: Quick Kakao Card & FAQ Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Official Contact Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1120] border border-[#D4AF37]/40 shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                OFFICIAL CONCIERGE CHANNEL
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                카카오톡 & 텔레그램 1:1 전담 문의
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                호텔 예약 대행, 공항 픽업 및 전용 리무진 기사 배차, 레스토랑 예약 등 합법적인 여행 편의 일정을 카카오톡과 텔레그램으로 편리하게 상담받으실 수 있습니다.
              </p>
            </div>

            {/* Dual Contact Cards: KakaoTalk & Telegram */}
            <div className="space-y-3">
              {/* Kakao Card */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">카카오톡 공식 ID</span>
                  <span className="font-mono text-base sm:text-lg font-bold text-[#F3E5AB]">danangvvip</span>
                </div>
                <button
                  onClick={copyKakaoId}
                  className="flex items-center gap-1.5 px-3 py-2 rounded bg-slate-800 hover:bg-[#D4AF37] hover:text-black text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  {copiedKakao ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKakao ? '복사됨' : 'ID 복사'}</span>
                </button>
              </div>

              {/* Telegram Card */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-sky-900/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">텔레그램 공식 ID</span>
                  <a 
                    href="https://t.me/danangvvip" 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-mono text-base sm:text-lg font-bold text-sky-400 hover:underline"
                  >
                    @danangvvip
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyTelegramId}
                    className="flex items-center gap-1.5 px-3 py-2 rounded bg-slate-800 hover:bg-[#D4AF37] hover:text-black text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    {copiedTelegram ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedTelegram ? '복사됨' : 'ID 복사'}</span>
                  </button>
                  <a
                    href="https://t.me/danangvvip"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white transition-colors flex items-center gap-1"
                  >
                    대화 시작
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-semibold">응답 가능 시간: </span>
                <span className="text-slate-200">매일 10:00 - 24:00 (한국시간 기준)</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-6">
                ※ 심야 시간 접수 건은 익일 오전 10시부터 순차 회신 드립니다.
              </p>
            </div>

            {/* Strict Exclusion Notice */}
            <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-600/30 text-xs text-amber-200 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>상담 제외 및 차단 원칙</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-300">
                카지노 베팅 권유, 칩 교환/환전 대행, 불법 롤링 정킷 수수료 정산 및 성적 서비스 연결 관련 문의는 일체 수신하지 않으며 즉시 차단 처리됩니다.
              </p>
            </div>
          </div>

          {/* Business & Privacy Info */}
          <div className="p-6 rounded-xl bg-[#070B14] border border-slate-800 text-xs text-slate-400 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Building className="w-4 h-4 text-[#D4AF37]" />
              사업자 및 운영 정보 고지
            </h4>
            <div className="space-y-1 text-[11px] leading-relaxed">
              <div>상호명: DANANG VVIP Hospitality Services</div>
              <div>소재지: Vo Nguyen Giap, Ngu Hanh Son, Da Nang, Vietnam</div>
              <div>업태: 관광 편의 제공 및 여행 일정 컨시어지 대행</div>
              <div>개인정보보호책임자: Compliance Director (contact@danang-vvip.com)</div>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:col-span-7 space-y-4">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              자주 묻는 질문 (FAQ)
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0B1120] border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="font-serif text-sm font-bold text-slate-200">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-[#070B14]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Online Inquiry Form */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#0B1120] border border-slate-800 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            LEGAL TRAVEL CONCIERGE APPLICATION
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            여행 일정 및 의전 편의 온라인 접수
          </h3>
          <p className="text-xs text-slate-400">
            접수해 주신 내용은 전담 한국인 컨시어지가 확인 후 카카오톡으로 신속히 답변드립니다.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 rounded-xl bg-[#070B14] border border-emerald-600/40 text-center space-y-4">
            <FileCheck2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">
              문의가 정상적으로 접수되었습니다
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              기재해 주신 연락처(<span className="text-[#F3E5AB] font-mono">{kakaoOrPhone}</span>)로 1시간 이내에 담당자가 안내 메시지를 전송해 드립니다.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setKakaoOrPhone('');
                setMessage('');
                setAgreeTerms(false);
              }}
              className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
            >
              새로운 문의 작성하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">성함 / 닉네임 *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">카카오톡 ID 또는 전화번호 *</label>
                <input
                  type="text"
                  required
                  value={kakaoOrPhone}
                  onChange={(e) => setKakaoOrPhone(e.target.value)}
                  placeholder="예: kakao_id123 또는 010-XXXX-XXXX"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">희망 방문 일정 / 체류 기간</label>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="예: 2026년 11월 10일 ~ 11월 13일 (3박 4일)"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">관심 서비스 패키지</label>
                <select
                  value={interestService}
                  onChange={(e) => setInterestService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="BASIC 컨시어지">BASIC 컨시어지 (공항 픽업/기본 이동)</option>
                  <option value="PREMIUM 호스피탈리티">PREMIUM 호스피탈리티 (5성 호텔 & 알파드 쇼퍼)</option>
                  <option value="SIGNATURE VVIP">SIGNATURE VVIP 엘리트 (풀빌라 & 패스트트랙)</option>
                  <option value="호텔/스파 단독 예약">호텔/스파/다이닝 단독 예약 대행</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">문의 내용 (인원수, 희망 차량, 특별 요청 등) *</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="희망하시는 일정과 인원수, 특별 요청 사항을 자유롭게 적어주세요."
                className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="p-3 rounded-lg bg-[#070B14] border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 text-[#D4AF37] focus:ring-0 cursor-pointer"
                />
                <span className="text-slate-300">
                  [필수] 개인정보 수집 및 이용에 동의하며, 카지노 베팅 알선 및 불법 성매매 관련 목적이 아닌 합법적 여행 편의 상담임을 확인합니다.
                </span>
              </label>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89225] hover:brightness-110 rounded transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/15 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>컨시어지 문의 접수하기</span>
              </button>
            </div>

          </form>
        )}
      </div>

    </div>
  );
};
