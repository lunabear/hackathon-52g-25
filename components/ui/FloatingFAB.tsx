'use client'

import { useState } from 'react'

export default function FloatingFAB() {
  const [isOpen, setIsOpen] = useState(false)

  const faqs = [
    {
      question: '해커톤 일정은 어떻게 되나요?',
      answer: `• 팀 등록: 7월 14일 ~ 8월 6일
• 사전 미션: 8월 8일 ~ 8월 11일
• 본선 진출 팀 발표: 8월 14일
• 개발: 8월 26일 ~ 9월 5일
• 결선 및 시상식: 9월 5일`
    },
    {
      question: '참가 자격이 어떻게 되나요?',
      answer: 'GenAI에 관심 있는 대학(원)생, 직장인 누구나 참가 가능합니다.'
    },
    {
      question: '팀 구성은 어떻게 하나요?',
      answer: '팀장 포함 4~5명으로 구성하며, 다양한 전공과 경험을 가진 멤버들을 추천합니다.'
    },
    {
      question: '리모트리그와 필드리그의 차이는 무엇인가요?',
      answer: `• 리모트리그: 온라인으로 자유롭게 참여, 장소 제약 없음
• 필드리그: 오프라인 현장 참여, 네트워킹 기회 제공`
    },
    {
      question: 'V0와 MISO가 무엇인가요?',
      answer: 'V0는 Vercel의 AI 기반 UI 생성 도구이고, MISO는 GS그룹의 사내 GenAI 플랫폼입니다.'
    },
    {
      question: '수상 혜택이 있나요?',
      answer: '대상 500만원을 포함한 총 1,700만원의 상금과 GS그룹 채용 전형 우대 혜택이 있습니다.'
    }
  ]

  return (
    <>
      {/* 플로팅 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 group transition-all duration-300 hover:scale-110"
        aria-label="자주 묻는 질문"
      >
        {/* 미소 FAQ 캐릭터 */}
        <div className="w-14 h-14 md:w-16 md:h-16">
          <img 
            src="/assets/miso/miso-faq.png" 
            alt="FAQ" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </button>

      {/* 모달 오버레이 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* 모달 컨텐츠 */}
          <div 
            className="bg-white/95 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] max-w-2xl w-full max-h-[85vh] overflow-hidden border border-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 - 포스터와 동일한 스타일 */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
              <div className="relative z-10 px-8 py-6 md:px-10 md:py-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="닫기"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-xl md:text-2xl font-semibold text-white text-center">
                  자주 묻는 질문
                </h2>
              </div>
            </div>

            {/* FAQ 컨텐츠 */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-gray-100/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-medium text-gray-900 text-sm md:text-base mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}