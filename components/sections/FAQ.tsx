'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string | React.JSX.Element
}

const faqItems: FAQItem[] = [
  {
    question: "개발 역량이 없어도 해커톤에 신청할 수 있나요?",
    answer: "당연합니다! GenAI에 관심이 있다면 누구든지 환영합니다."
  },
  {
    question: "GenAI 지식이 없어도 해커톤에 참여할 수 있나요?",
    answer: "물론입니다! 해커톤 온라인 교육 콘텐츠를 통해 필요한 지식을 학습하고 차근차근 실습할 수 있습니다."
  },
  {
    question: "GenAI툴은 어떤걸 사용하나요?",
    answer: "GS그룹 플레이그라운드 MISO와 바이브 코딩 툴 V0를 사용할 수 있도록 환경을 제공하며, 그 외의 툴을 사용하고자 하시는 경우, 운영진 또는 각 사 크루에게 문의 주시기 바랍니다."
  },
  {
    question: "리모트 리그와 필드 리그, 둘 다 참여하고 싶은데 양 리그 지원이 가능한가요?",
    answer: "둘 중 하나의 리그만 선택하여 지원할 수 있습니다. 즐겁게 완주할 수 있는 리그 하나를 골라서 지원해주세요!"
  },
  {
    question: "꼭 팀을 구성해서 참가해야 하나요?",
    answer: "기본적으로 팀으로 참여하셔야 하며, 개인 출전을 원하시면 필드 리그로 지원하셔야 합니다. 개인 신청자를 위한 팀 빌딩은 필드 리그 당일에 랜덤으로 진행합니다. 팀으로 지원해도 모든 팀원이 각각 지원하셔야 한다는 것, 잊지 마세요!"
  },
  {
    question: "다른 회사 구성원과 팀을 만들어 출전할 수 있나요?",
    answer: "올해 해커톤에서는 같은 회사 동료끼리만 출전이 가능합니다. (자회사는 함께 출전 가능) 다른 회사 동료와 함께 하고 싶다면 랜덤 팀빌딩을 진행하는 '개인 출전-필드리그'로 신청해주세요!"
  },
  {
    question: "해커톤에 참여하기 위한 준비물이 있나요?",
    answer: "GenAI와 바이브 코딩을 하기 위한 노트북과 해커정신! 끝장을 보겠다는 의지!만 있으면 됩니다."
  },
  {
    question: "결과물은 어떤 형태로 제출하나요?",
    answer: "GenAI를 활용한 디지털 프로덕트로 웹앱, 모바일앱, 챗봇 등 형태는 자유입니다."
  },
  {
    question: "제3회 해커톤 아이디어 중 현실화가 된 사례가 있나요?",
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
          <p><strong>GS파워 &lt;sAIfety&gt;</strong><br />
          위험성 평가 자료를 기존에 평가결과를 분석하는 것에 자료의 다양성과 시간 부족으로 제대로 하지 못한 것을 GenAI를 통하여, 시간을 단축하고, 평가의 신뢰를 높이는 솔루션</p>
          <p><strong>GS엔텍 &lt;제제고&gt;</strong><br />
          L&L 자료가 Database화가 되어져 있지만, 사용자의 잘 사용하지 않고, 찾는 것에 어려움이 있으므로, GenAI를 통해서 반복되는 유사문제에 대해서 쉽고 빠르게 검색하여 사고 예방을 할 수 있도록 경각심을 주는 아이디어</p>
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