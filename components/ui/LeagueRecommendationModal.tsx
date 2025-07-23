'use client'
import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface LeagueRecommendationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Answer {
  id: string
  text: string
  score: number
}

interface Question {
  id: string
  question: string
  answers: Answer[]
}

const questions: Question[] = [
  {
    id: '1',
    question: '어떤 작업 방식을 선호하시나요?',
    answers: [
      { id: '1a', text: '자유로운 시간에 팀원들과 협업하며 진행', score: 1 },
      { id: '1b', text: '정해진 시간에 모든 참가자와 함께 집중 개발', score: 2 }
    ]
  },
  {
    id: '2',
    question: '시간 유연성에 대해 어떻게 생각하시나요?',
    answers: [
      { id: '2a', text: '개인 일정에 맞춰 자유롭게 조정하고 싶음', score: 1 },
      { id: '2b', text: '정해진 일정에 맞춰 집중적으로 참여하고 싶음', score: 2 }
    ]
  },
  {
    id: '3',
    question: '어떤 개발 환경을 선호하시나요?',
    answers: [
      { id: '3a', text: '편안한 곳에서 자유롭게 개발하고 싶음', score: 1 },
      { id: '3b', text: '전문적인 환경에서 집중해서 개발하고 싶음', score: 2 }
    ]
  },
  {
    id: '4',
    question: '네트워킹과 협업의 중요도는?',
    answers: [
      { id: '4a', text: '온라인으로도 충분히 소통할 수 있음', score: 1 },
      { id: '4b', text: '직접 만나서 소통하고 협업하는 것이 중요함', score: 2 }
    ]
  },
  {
    id: '5',
    question: '해커톤 경험과 개발 스타일은?',
    answers: [
      { id: '5a', text: '체계적으로 계획하고 단계별로 진행하는 스타일', score: 1 },
      { id: '5b', text: '빠른 속도로 집중해서 완성하는 스타일', score: 2 }
    ]
  }
]

export default function LeagueRecommendationModal({ isOpen, onClose }: LeagueRecommendationModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})
  const [showResult, setShowResult] = useState(false)
  const [recommendation, setRecommendation] = useState<'remote' | 'field' | null>(null)
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Create portal element on mount
    const element = document.createElement('div')
    element.style.position = 'fixed'
    element.style.top = '0'
    element.style.left = '0'
    element.style.zIndex = '9999'
    document.body.appendChild(element)
    setPortalElement(element)

    // Cleanup on unmount
    return () => {
      if (document.body.contains(element)) {
        document.body.removeChild(element)
      }
    }
  }, [])

  const resetSurvey = useCallback(() => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setRecommendation(null)
  }, [])

  const handleClose = useCallback(() => {
    resetSurvey()
    onClose()
  }, [resetSurvey, onClose])

  const handleAnswer = (questionId: string, score: number) => {
    const newAnswers = { ...answers, [questionId]: score }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // 결과 계산
      const totalScore = Object.values(newAnswers).reduce((sum, score) => sum + score, 0)
      const recommendedLeague = totalScore <= 7 ? 'remote' : 'field'
      setRecommendation(recommendedLeague)
      setShowResult(true)
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen, handleClose])

  if (!isOpen || !portalElement) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 - 전체 화면 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* 모달 컨텐츠 - viewport 중앙 */}
      <div 
        className="relative bg-white rounded-2xl w-[900px] max-w-[95vw] max-h-[90vh] shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}
      >
        {/* 모달 헤더 */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-xl">🧭</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">리그 추천 가이드</h3>
              <p className="text-sm text-slate-600">나에게 맞는 리그를 찾아보세요</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* 진행 상황 표시 */}
        {!showResult && (
          <div className="sticky top-[73px] bg-white border-b border-slate-100 px-6 py-4 z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700">
                질문 {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-sm text-slate-500">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}
        
        {/* 탭 컨텐츠 */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
          {!showResult ? (
            <div className="space-y-6 sm:space-y-8">
              {/* 질문 */}
              <div className="text-center">
                <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4">
                  {questions[currentQuestion].question}
                </h4>
                <p className="text-slate-600 text-sm sm:text-base">
                  가장 적합한 답변을 선택해주세요
                </p>
              </div>

              {/* 답변 옵션 */}
              <div className="space-y-3 sm:space-y-4">
                {questions[currentQuestion].answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(questions[currentQuestion].id, answer.score)}
                    className="w-full p-4 sm:p-6 text-left bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 rounded-xl border border-slate-200 hover:border-purple-300 transition-all duration-200 hover:shadow-md"
                  >
                    <span className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
                      {answer.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {/* 결과 표시 */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl">
                    {recommendation === 'remote' ? '💻' : '🏢'}
                  </span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">
                  당신에게 추천하는 리그는
                </h4>
                <h3 className="text-2xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text mb-4 sm:mb-6">
                  {recommendation === 'remote' ? '리모트 리그' : '필드 리그'}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
                  {recommendation === 'remote' 
                    ? '자유로운 시간에 팀원들과 협업하며 진행하는 스타일이 맞습니다'
                    : '정해진 시간에 모든 참가자와 함께 집중 개발하는 스타일이 맞습니다'
                  }
                </p>
              </div>

              {/* 핵심 특징 */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-purple-200/50">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
                  {recommendation === 'remote' ? '리모트 리그' : '필드 리그'}의 특징
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {recommendation === 'remote' ? (
                    <>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-purple-500 text-sm sm:text-base">💻</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">자유로운 시간에 팀원들과 협업</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-purple-500 text-sm sm:text-base">📍</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">원하는 장소에서 개발 가능</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-purple-500 text-sm sm:text-base">🏢</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">오후 시간 GS타워 그래잇 자유롭게 이용 가능(14:00-19:00)</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-purple-500 text-sm sm:text-base">🎁</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">PLAI리모트팩과 온라인 멘토링 지원</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-emerald-500 text-sm sm:text-base">👥</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">모든 해커가 한 자리에 모여 진행</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-emerald-500 text-sm sm:text-base">⚡</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">무박 2일간 함께 모여 집중 개발</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-emerald-500 text-sm sm:text-base">🏨</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">웨스틴 서울 파르나스에서 진행</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-emerald-500 text-sm sm:text-base">🎁</span>
                          <span className="text-slate-700 text-xs sm:text-sm font-medium">PLAI필드팩과 MISO 전문가 코칭 제공</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={resetSurvey}
                  className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  다시 진단하기
                </button>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  확인
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    portalElement
  )
}
