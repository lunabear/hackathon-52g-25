'use client'

import { useState, useEffect } from 'react'
import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// ChannelIO 타입 정의
declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void
  }
}

// 카테고리 데이터
const categories = [
  {
    id: 'video',
    title: '영상 만들기',
    subtitle: '오늘은 내가 인급동 유튜버',
    description: 'AI와 함께 브이로그부터 광고 영상까지!\n누구나 쉽게 크리에이터가 될 수 있어요',
    image: '/assets/miso/miso-team.gif',
    embedUrl: 'https://padlet.com/gs52group2/PLAIvideo',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'webtoon',
    title: '웹툰 그리기',
    subtitle: '오늘은 내가 웹툰작가',
    description: '스토리만 있으면 OK!\nAI가 그림 실력 걱정은 덜어드릴게요',
    image: '/assets/miso/miso-protagonist.png',
    embedUrl: 'https://padlet.com/gs52group2/PLAIcartoon',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'music',
    title: '음악 만들기',
    subtitle: '오늘은 내가 케이팝 데몬헌터스',
    description: '흥얼거리던 멜로디가 진짜 노래로!\n당신의 감성을 AI가 완성해드려요',
    image: '/assets/miso/miso-music.png',
    embedUrl: 'https://padlet.com/gs52group2/PLAImusic',
    bgColor: 'bg-green-50'
  },
  {
    id: 'image',
    title: '그림 그리기',
    subtitle: '오늘은 내가 화가!',
    description: '상상하는 모든 걸 그림으로!\n붓을 들지 않아도 작품이 완성돼요',
    image: '/assets/miso/miso-picaso.png',
    embedUrl: 'https://padlet.com/gs52group2/PLAIpicture',
    bgColor: 'bg-orange-50'
  }
]

export default function PlaiEventPage() {
  const [showGuideModal, setShowGuideModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null)

  // 가이드 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (showGuideModal) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO('hideChannelButton')
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === '/') {
        window.ChannelIO('showChannelButton')
      }
    }
  }, [showGuideModal])

  // 카테고리 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (selectedCategory) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO('hideChannelButton')
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === '/') {
        window.ChannelIO('showChannelButton')
      }
    }
  }, [selectedCategory])

  return (
    <main className="min-h-screen relative" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto">
            
            {/* 헤더 */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              🖼️ PLAI 갤러리: <br className="sm:hidden" />내가 만든 AI작품을 자랑해보세요! 🎨
              </h1>
              {/* 설명과 버튼 레이아웃 */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed">
                        📢 “웃기고 짠하고 할 말 많은 우리네 회사생활, AI로 보여주세요!“
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

            {/* 카테고리 그리드 - 애플 스타일 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="group bg-white rounded-xl border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300 ease-out hover:shadow-sm text-left overflow-hidden"
                >
                  {/* 반응형 레이아웃: 모바일 세로, PC 가로 */}
                  <div className="flex flex-col md:flex-row">
                    {/* 이미지 영역 */}
                    <div className="relative h-48 md:h-auto md:w-48 bg-gray-50/50 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={160}
                        height={160}
                        className={`w-36 h-36 md:w-40 md:h-40 object-contain group-hover:scale-105 transition-transform duration-500 ease-out ${
                          category.image.includes('miso-protagonist') || category.image.includes('miso-music') || category.image.includes('miso-picaso') ? 'rounded-2xl' : ''
                        }`}
                      />
                    </div>
                    
                    {/* 텍스트 콘텐츠 영역 */}
                    <div className="flex-1 flex flex-col">
                      <div className="p-6 space-y-3 flex-1">
                        {/* 메인 타이틀 */}
                        <h3 className="text-xl font-semibold text-gray-900 leading-tight tracking-tight">
                          {category.title}
                        </h3>
                        
                        {/* 서브 타이틀 */}
                        <p className="text-base font-medium text-gray-600 leading-snug">
                          {category.subtitle}
                        </p>
                        
                        {/* 설명 */}
                        <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line pt-1">
                          {category.description}
                        </p>
                      </div>
                      
                      {/* 하단 액션 영역 */}
                      <div className="px-6 pb-6 mt-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                            참여하기
                          </span>
                          <div className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all duration-200">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center z-[100] md:p-4">
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
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">참여 기간</h3>
                  <p className="text-sm md:text-lg font-bold text-blue-700">7.21 ~ 8.3</p>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">🏆</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">총 상금</h3>
                  <p className="text-sm md:text-lg font-bold text-purple-700">100만원</p>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">🎯</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">발표일</h3>
                  <p className="text-sm md:text-lg font-bold text-emerald-700">8.8(금)</p>
                </div>
              </div>

              {/* 참여 방법 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  📝 참여 방법
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">영상 / 만화 / 노래 / 그림 중 분야를 선택합니다</p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">(분야별 중복 지원 가능!)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">AI로 나만의 작품을 제작합니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">패들릿에 작품을 업로드합니다</p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">화면 하단에 +버튼을 누르면 바로 업로드 가능합니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">회사/팀/이름 기재 필수!</p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">시상을 위해 반드시 포함해주세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">내 작품 링크를 널리 널리 공유합니다</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 일정 및 안내 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  📅 일정 및 안내
                </h3>
                <div className="bg-blue-50 rounded-xl p-4 md:p-6 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">참여기간</h4>
                    <p className="text-gray-700 text-sm md:text-base">7월 21일(월) ~ 8월 3일(일)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">수상작 발표</h4>
                    <p className="text-gray-700 text-sm md:text-base">8월 8일(금)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">당첨자 안내방법</h4>
                    <ul className="text-gray-700 text-sm md:text-base space-y-1">
                      <li>• 패들릿에 수상작 공지</li>
                      <li>• 상품은 회사/팀/이름 기준으로 크루에게 연락처를 받아 별도 안내 및 전달예정</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 선정 기준 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  🎯 선정 기준
                </h3>
                
                {/* Best 작품 */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    🥇 Best 작품
                  </h4>
                  <div className="bg-amber-50 rounded-xl p-4 md:p-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      독창성, 공감성, 전달력을 고려하여 사내 심사위원단의 정성 평가를 거쳐 최종 선정합니다.
                    </p>
                    <p className="text-amber-700 text-xs md:text-sm font-medium">
                      📌 Best 작품은 부문별 콘텐츠로 수여됩니다.
                    </p>
                  </div>
                </div>

                {/* 대상 */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    🏆 선정 대상 (Best PLAI)
                  </h4>
                  <div className="bg-purple-50 rounded-xl p-4 md:p-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      독창성, 공감성, 전달력에 완성도를 포함하여 종합적으로 평가하며, 전사 구성원에게 가장 깊은 공감과 울림을 준 콘텐츠에 수여됩니다.
                    </p>
                    <p className="text-purple-700 text-xs md:text-sm font-medium">
                      📌 Best 작품과의 중복 수상은 불가합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 시상 내역 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  🏆 시상 내역
                </h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 md:p-6">
                  <p className="text-gray-700 text-sm md:text-base mb-4">
                    수상자: 카테고리별 베스트 작품 1개 선정하여 수상(1인)
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Video</span>
                      <span className="font-bold text-blue-600">30만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Cartoon</span>
                      <span className="font-bold text-purple-600">20만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Song</span>
                      <span className="font-bold text-green-600">10만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Picture</span>
                      <span className="font-bold text-orange-600">10만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg border-2 border-purple-200">
                      <span className="font-semibold text-gray-900">Best PLAI</span>
                      <span className="font-bold text-purple-600">30만원 상당</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-red-700 text-sm font-medium">
                      🛑 우승자가 중복될 경우, 하나의 분야에서만 수상됩니다
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 유의사항 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  📌 유의사항
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <span className="text-blue-600 text-lg">📢</span>
                    <p className="text-gray-700 text-sm md:text-base">제출작은 해커톤 진행 기간 중 홍보에 활용될 수 있어요</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-xl">
                    <span className="text-red-600 text-lg">⚠️</span>
                    <p className="text-gray-700 text-sm md:text-base">패들릿에 회사/팀/이름 미기재 시 선발이 어려울 수 있어요</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                    <span className="text-orange-600 text-lg">🚫</span>
                    <p className="text-gray-700 text-sm md:text-base">중복 수상은 불가! (가장 잘한 분야 1개만 시상)</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <span className="text-green-600 text-lg">🎨</span>
                    <p className="text-gray-700 text-sm md:text-base">툴은 자유! 추천 툴은 참고만 하시고, 본인이 편한 AI툴로 마음껏 만들어주세요 :)</p>
                  </div>
                </div>
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
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
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
                <div>
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-sm md:text-base font-medium text-gray-600">
                    {selectedCategory.subtitle}
                  </p>
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
