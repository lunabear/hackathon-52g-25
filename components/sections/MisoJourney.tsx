'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function MisoJourney() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isModalOpen])

  return (
    <div className="mb-12 md:mb-16">
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 섹션 라벨 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full mb-6 shadow-sm">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">이미소 매니저의 이야기</span>
        </div>
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-slate-900">미소</span><span className="text-slate-600">와 함께하는</span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">해커톤 대모험!</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
            아이디어만 있던 이미소 매니저가 <span className="font-semibold text-purple-600 not-italic">해커톤 도전자</span>가 되기까지의 이야기
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
          
          {/* 정보 버튼 */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 shadow-sm">
              <svg className="w-4 h-4 text-slate-500 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-slate-600 group-hover:text-purple-600 font-medium">MISO & 바이브코딩이란?</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Chapter 1: 이미소 매니저의 고민 */}
          <div className="text-center" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-medium text-sm">01</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">
                이미소 매니저의 고민
              </h4>
            </div>
            
            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image 
                  src="/assets/miso/miso-no-idea.png"
                  alt="고민하는 이미소 매니저"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                &ldquo;혁신적인 아이디어가 있는데...&rdquo;
              </p>
              <p className="text-base md:text-lg text-slate-500 italic">
                &ldquo;코딩은 못하는데 어떡하지...?&rdquo;
              </p>
            </div>
          </div>
          
          {/* Chapter 2: AI를 만나다 */}
          <div className="text-center" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">02</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">
                AI를 만나다
              </h4>
            </div>
            
            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center relative">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image 
                  src="/assets/miso/miso-play.png"
                  alt="신난 이미소 매니저"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
                
                {/* 음표 애니메이션 */}
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <span className="text-2xl">♪</span>
                </div>
                <div className="absolute top-0 -left-6 animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <span className="text-xl">♫</span>
                </div>
                <div className="absolute -bottom-2 -right-6 animate-bounce" style={{ animationDelay: '0.4s' }}>
                  <span className="text-lg">♬</span>
                </div>
                <div className="absolute bottom-4 -left-4 animate-bounce" style={{ animationDelay: '0.6s' }}>
                  <span className="text-xl">♪</span>
                </div>
              </div>
            </div>
            
            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                &ldquo;어? MISO랑 바이브코딩이 뭐야?&rdquo;
              </p>
              <p className="text-base md:text-lg text-blue-600 italic font-medium">
                &ldquo;대박! AI가 코딩을 대신해준다고?!&rdquo;
              </p>
            </div>
          </div>
          
          {/* Chapter 3: 해커톤 도전 */}
          <div className="text-center" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-medium text-sm">03</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">
                해커톤에 도전하다
              </h4>
            </div>
            
            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image 
                  src="/assets/miso/miso-friends.png"
                  alt="도전하는 이미소 매니저"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain scale-125"
                />
              </div>
            </div>
            
            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                &ldquo;팀원들아! 나랑 같이 해커톤 나가자!&rdquo;
              </p>
              <p className="text-base md:text-lg text-emerald-600 italic font-semibold">
                &ldquo;우리 아이디어로 GS의 미래를 바꿔보자고!&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* 하단 메시지 */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-xl md:text-2xl font-medium text-slate-700 mb-2">
            당신도 이미소 매니저와 함께 도전해보세요
          </p>
          <p className="text-base text-slate-500">
            아이디어만 있어도 충분합니다
          </p>
        </div>
      </div>
      
      {/* 모달 - Portal로 document.body에 렌더링 */}
      {isModalOpen && portalElement && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 배경 오버레이 - 전체 화면 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* 모달 컨텐츠 - viewport 중앙 */}
          <div 
            className="relative bg-white rounded-2xl w-[600px] max-w-full max-h-[90vh] shadow-2xl border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">MISO & 바이브코딩 소개</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 모달 컨텐츠 */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🚧</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">준비중입니다</h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  MISO & 바이브코딩에 대한 자세한 정보를<br />
                  곧 제공해드릴 예정입니다.
                </p>
              </div>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </div>
  )
}