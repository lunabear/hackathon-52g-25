'use client'

import { useState } from 'react'
import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// 카테고리 데이터
const categories = [
  {
    id: 'video',
    title: '영상을 만들었어요',
    description: '창의적인 영상 콘텐츠',
    icon: '🎬',
    image: '/assets/miso/miso-team.gif',
    embedUrl: 'https://www.youtube.com/embed/QH2-TGUlwu4',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'webtoon',
    title: '웹툰을 그렸어요',
    description: '재미있는 웹툰 스토리',
    icon: '🎨',
    image: '/assets/miso/miso-protagonist.png',
    embedUrl: 'https://padlet.com/gs52group2/plai-ai-fqu4auq6jbr6ladw',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'music',
    title: '노래를 작곡해봤어요',
    description: '감성적인 음악 창작',
    icon: '🎵',
    image: '/assets/miso/miso-music.png',
    embedUrl: 'https://www.youtube.com/embed/HcjR6ZngQcw',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'image',
    title: '이미지를 생성해봤어요',
    description: 'AI로 만든 창의적인 이미지',
    icon: '🖼️',
    image: '/assets/miso/miso-picaso.png',
    embedUrl: 'https://padlet.com/gs52group2/plai-ai-fqu4auq6jbr6ladw',
    color: 'from-orange-500 to-yellow-500'
  }
]

export default function PlaiEventPage() {
  const [showGuideModal, setShowGuideModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null)

  return (
    <main className="min-h-screen relative" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto">
            
            {/* 헤더 */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                PLAI Event : <br className="sm:hidden" />나의 회사 생활 Vibe
              </h1>
              {/* 설명과 버튼 레이아웃 */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed">
                        GenAI로 표현하는 <span className="font-bold text-gray-900">우리의 일상</span>을 공유해보세요.
                      </p>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
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
                      className="group relative inline-flex items-center gap-2 md:gap-3 bg-slate-900 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden text-sm md:text-base"
                    >
                      {/* 미묘한 샤인 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10 text-base md:text-lg">🗓️</span>
                      <span className="relative z-10">이벤트 가이드</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 카테고리 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="group bg-white rounded-xl hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200 hover:border-gray-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* 캐릭터 이미지 영역 */}
                    <div className="relative w-full md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* 콘텐츠 영역 */}
                    <div className="flex-1 p-6 md:p-8 text-left">
                      {/* 아이콘 */}
                      <div className="text-3xl mb-4">{category.icon}</div>
                      
                      {/* 텍스트 영역 */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>
                      </div>
                      
                      {/* 하단 화살표 */}
                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-700 transition-colors">
                        <span className="text-sm font-medium">자세히 보기</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
          </div>
        </div>
      </PageTransition>

      {/* 이벤트 가이드 모달 */}
      {showGuideModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center z-50 md:p-4">
          <div className="bg-white rounded-t-3xl md:rounded-3xl max-w-4xl w-full h-[85vh] md:h-[90vh] md:max-h-[90vh] shadow-2xl flex flex-col">
            <div className="bg-white rounded-t-3xl md:rounded-t-3xl border-b border-gray-100 p-4 md:p-6 flex-shrink-0">
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">이벤트 가이드</h2>
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-gray-600 text-lg md:text-xl">×</span>
                </button>
              </div>
            </div>
            
            <div className="p-4 md:p-8 overflow-y-auto flex-1">
              {/* 핵심 정보 */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
                <div className="bg-blue-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">📅</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">응모 기간</h3>
                  <p className="text-sm md:text-lg font-bold text-blue-700">7.17 ~ 8.6</p>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">🏆</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">최대 상금</h3>
                  <p className="text-sm md:text-lg font-bold text-purple-700">30만원</p>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">🎯</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">제출 형식</h3>
                  <p className="text-sm md:text-lg font-bold text-emerald-700">제한 없음</p>
                </div>
              </div>

              {/* 참여 방법 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-8 text-center">참여 방법</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl">
                    <div className="w-7 h-7 md:w-9 md:h-9 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">GenAI 툴로 콘텐츠 제작</h4>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">이미지, 영상, 노래, 만화 등 자유 형식</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl">
                    <div className="w-7 h-7 md:w-9 md:h-9 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">제목 형식 준수</h4>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">소속회사/팀/이름 포함</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-gray-50 rounded-xl md:rounded-2xl">
                    <div className="w-7 h-7 md:w-9 md:h-9 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">자유롭게 도전</h4>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">여러 작품 제출 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 시상 내역 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">시상 내역</h3>
                <div className="space-y-3 mb-4">
                  <div className="bg-amber-50 rounded-xl p-3 md:p-4 flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🥇</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">Best Video/Song/Picture</h4>
                      <p className="text-xs md:text-sm text-gray-600">각 20만원 상당</p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3 md:p-4 flex items-center gap-3">
                    <span className="text-xl md:text-2xl">❤️</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">최다 하트 수상</h4>
                      <p className="text-xs md:text-sm text-gray-600">30만원 상당</p>
                    </div>
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="font-semibold">발표일:</span> 8월 8일(금)
                  </p>
                </div>
              </div>
              
              {/* 주의사항 */}
              <div className="bg-blue-50 rounded-xl p-3 md:p-4 text-center">
                <p className="text-blue-700 text-xs md:text-sm font-medium flex items-center justify-center gap-2">
                  <span>⚠️</span>
                  가이드를 준수하지 않으면 당첨에서 제외될 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 전체화면 모달 */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 모달 헤더 */}
              <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCategory.icon}</span>
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                    {selectedCategory.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* 임베드 콘텐츠 */}
              <div className="w-full h-full pt-20">
                <iframe
                  src={selectedCategory.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}