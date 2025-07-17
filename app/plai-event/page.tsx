'use client'

import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'

export default function PlaiEventPage() {
  return (
    <main className="min-h-screen relative" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
          
            {/* 헤더 */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 mb-6">
                <span className="text-lg">🎨</span>
                <span className="text-sm font-medium text-gray-700">PLAI Event</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">나의 회사 생활 Vibe</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                GenAI로 표현하는 우리의 일상
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* 핵심 정보 */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">응모 기간</h3>
                <p className="text-xl font-bold text-blue-600">7.17 ~ 8.6</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">최대 상금</h3>
                <p className="text-xl font-bold text-purple-600">30만원</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">제출 형식</h3>
                <p className="text-sm text-gray-600 font-medium">제한 없음</p>
              </div>
            </div>

            {/* 참여 방법 */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-10 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                참여 방법
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">GenAI 툴로 콘텐츠 제작</h4>
                    <p className="text-gray-600 text-sm">이미지, 영상, 노래, 만화 등 형식은 자유롭게 선택하세요</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">제목 형식 준수</h4>
                    <p className="text-gray-600 text-sm">소속회사/팀/이름을 포함하여 업로드해주세요</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">자유롭게 도전</h4>
                    <p className="text-gray-600 text-sm">여러 작품 제출 가능하니 마음껏 도전해보세요</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 시상 내역 */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-10 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                시상 내역
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/60">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🥇</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Best Video/Song/Picture</h4>
                    <p className="text-lg font-bold text-amber-600 mb-1">각 20만원 상당</p>
                    <p className="text-xs text-gray-600">카테고리별 최우수작</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/60">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">최다 하트 수상</h4>
                    <p className="text-lg font-bold text-red-600 mb-1">30만원 상당</p>
                    <p className="text-xs text-gray-600">가장 많은 공감을 받은 작품</p>
                  </div>
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50/80 rounded-xl border border-gray-200/60">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">발표일:</span> 8월 8일(금)
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://padlet.com/gs52group2/PLAIseason2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="text-lg">🚀</span>
                작품 제출하러 가기
              </a>
              
              <p className="mt-6 text-sm text-gray-500">
                작성 가이드를 준수하지 않으면 당첨에서 제외될 수 있습니다
              </p>
            </div>
            
          </div>
        </div>
      </PageTransition>
    </main>
  )
}