'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string | React.JSX.Element
}

const faqItems: FAQItem[] = [
  {
    question: "개발을 몰라도 해커톤 참가 자격이 있나요?",
    answer: "누구나 참가 가능합니다! 개발 경험이 없어도 GenAI에 관심이 있다면 누구든지 환영합니다."
  },
  {
    question: "리그는 언제 선택하나요?",
    answer: "신청서 작성 시, 원하는 리그를 선택할 수 있습니다."
  },
  {
    question: "팀은 어떻게 구성하나요?",
    answer: "기본적으로 팀으로 참여하셔야 하며, 개인 출전을 원하시면 필드 리그로 지원하셔야 합니다. 팀빌딩은 필드 리그 당일에 랜덤으로 진행합니다. 팀으로 지원해도 모든 팀원이 각각 지원하셔야 한다는 것, 잊지 마세요!"
  },
  {
    question: "준비물이 있나요?",
    answer: "노트북과 해커정신! 끝장을 보겠다는 의지!만 있으면 됩니다."
  },
  {
    question: "GenAI 기술을 몰라도 참가할 수 있나요?",
    answer: "물론입니다! 해커톤 전 온라인 교육 콘텐츠를 통해 필요한 지식을 학습하고 차근차근 실습할 수 있습니다."
  },
  {
    question: "다른 회사 구성원과 팀을 만들어 출전할 수 있나요?",
    answer: "올해 해커톤에서는 같은 회사 동료끼리만 출전이 가능합니다. (자회사는 함께 출전 가능) 다른 회사 동료와 함께 하고 싶다면 랜덤 팀빌딩을 진행하는 '개인 출전-필드리그'로 신청해주세요!"
  },
  {
    question: "결과물은 어떤 형태여야 하나요?",
    answer: "GenAI를 활용한 디지털 프로덕트로 웹앱, 모바일앱, 챗봇 등 형태는 자유입니다."
  },
  {
    question: "GenAI 툴을 제공해주나요?",
    answer: "GS그룹 플레이그라운드 MISO와 바이브 코딩 툴 V0를 사용할 수 있도록 환경을 제공하며, 그 외의 툴을 사용하고자 하시는 경우, 운영진 또는 각 사 크루에게 문의 주시기 바랍니다."
  },
  {
    question: "3회 해커톤 아이디어 중 현실화가 된 사례가 있나요?",
    answer: (
      <div className="space-y-3">
        <p>2024년 진행한 제3회 GS그룹 해커톤에서는 12개팀이 현실화 프로젝트에 선정되어 최종 5개 아이디어가 현장에 적용되었습니다.</p>
        <div className="space-y-2 text-sm">
          <p><strong>GS리테일 &lt;NewGenS&gt;</strong><br />
          GS Shop의 단어 검색이란 한계에서 벗어나, GenAI를 활용하여 자연어 검색을 통해 보다 정확도 높은 상품을 찾고 추천해주는 아이디어 → GS Shop App에 적용</p>
          <p><strong>GS건설 &lt;I Care U&gt;</strong><br />
          GenAI의 이미지 분석 기술을 활용하여 안전조회시 사전에 재해 발생 할 수 있는 인원에 대한 알람을 주어 사전에 재해를 방지하는 아이디어</p>
          <p><strong>GS칼텍스 &lt;Athena&gt;</strong><br />
          회의에서 나온 안건에 대해 GenAI의 분석과 요약을 통해 회의를 통한 의사결정의 정확도를 높이는 업무 효율화 아이디어</p>
        </div>
      </div>
    )
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div id="faq" className="mb-12 md:mb-16" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">자주 묻는 질문</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            해커톤에 대한 <span className="font-semibold text-amber-600">궁금한 점들</span>을 확인해보세요
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left hover:bg-slate-50/80 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <div className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}