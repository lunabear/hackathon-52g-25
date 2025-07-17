'use client'

import { useState } from 'react'
import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'

export default function PlaiEventPage() {
  const [showGuideModal, setShowGuideModal] = useState(false)

  return (
    <main className="min-h-screen relative" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-7xl mx-auto">
            
            {/* 헤더 */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                PLAI Event : 나의 회사 생활 Vibe
              </h1>
              {/* 설명과 버튼 레이아웃 */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="space-y-3">
                      <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                        GenAI로 표현하는 <span className="font-bold text-gray-900">우리의 일상</span>을 공유해보세요.
                      </p>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        창의적인 아이디어와 즐거운 경험을 <span className="font-semibold text-gray-700">함께 나눠보세요</span>.
                      </p>
                    </div>
                  </div>
                  
                  {/* 구분선 */}
                  <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  
                  {/* 작성 가이드 보기 버튼 */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setShowGuideModal(true)}
                      className="group relative inline-flex items-center gap-3 bg-slate-900 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
                    >
                      {/* 미묘한 샤인 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10 text-lg">🗓️</span>
                      <span className="relative z-10">이벤트 가이드</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Padlet 임베드 */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              <iframe
                src="https://padlet.com/gs52group2/plai-ai-fqu4auq6jbr6ladw"
                style={{ width: '100%', height: '80vh', border: 'none' }}
                title="PLAI Event Submissions"
              ></iframe>
            </div>
            
          </div>
        </div>
      </PageTransition>

      {/* 이벤트 가이드 모달 */}
      {showGuideModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col">
            <div className="bg-white rounded-t-3xl border-b border-gray-100 p-6 flex-shrink-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-lg">🗓️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">이벤트 가이드</h2>
                </div>
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-gray-600 text-xl">×</span>
                </button>
              </div>
            </div>
            
            <div className="p-8 overflow-y-auto flex-1">
              {/* 핵심 정보 */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-6 text-center border border-blue-200/30">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">응모 기간</h3>
                  <p className="text-xl font-bold text-blue-700">7.17 ~ 8.6</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-6 text-center border border-purple-200/30">
                  <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">최대 상금</h3>
                  <p className="text-xl font-bold text-purple-700">30만원</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-6 text-center border border-emerald-200/30">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">제출 형식</h3>
                  <p className="text-base text-emerald-700 font-semibold">제한 없음</p>
                </div>
              </div>

              {/* 참여 방법 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">참여 방법</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-200/50">
                    <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">GenAI 툴로 콘텐츠 제작</h4>
                      <p className="text-gray-600 text-base leading-relaxed">이미지, 영상, 노래, 만화 등 형식은 자유롭게 선택하세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-200/50">
                    <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">제목 형식 준수</h4>
                      <p className="text-gray-600 text-base leading-relaxed">소속회사/팀/이름을 포함하여 업로드해주세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-200/50">
                    <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">자유롭게 도전</h4>
                      <p className="text-gray-600 text-base leading-relaxed">여러 작품 제출 가능하니 마음껏 도전해보세요</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 시상 내역 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">시상 내역</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200/60">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🥇</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Best Video/Song/Picture</h4>
                      <p className="text-xl font-bold text-amber-600 mb-2">각 20만원 상당</p>
                      <p className="text-sm text-gray-600">카테고리별 최우수작</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200/60">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">❤️</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">최다 하트 수상</h4>
                      <p className="text-xl font-bold text-red-600 mb-2">30만원 상당</p>
                      <p className="text-sm text-gray-600">가장 많은 공감을 받은 작품</p>
                    </div>
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-3xl border border-gray-200/50">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    <p className="text-gray-700 text-lg">
                      <span className="font-semibold">발표일:</span> 8월 8일(금)
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 주의사항 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 text-center border border-blue-200/50">
                <div className="inline-flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-blue-700 text-base font-medium">
                    작성 가이드를 준수하지 않으면 당첨에서 제외될 수 있습니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}