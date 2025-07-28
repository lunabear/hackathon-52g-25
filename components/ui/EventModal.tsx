'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// ChannelIO 타입 정의
declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void
  }
}

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  onDontShowAgain: () => void
}

export default function EventModal({ isOpen, onClose, onDontShowAgain }: EventModalProps) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  const handleCloseModal = useCallback(() => {
    if (dontShowAgain) {
      onDontShowAgain()
    } else {
      onClose()
    }
  }, [dontShowAgain, onDontShowAgain, onClose])

  const handleEventPageClick = useCallback(() => {
    window.location.href = '/plai-event'
    if (dontShowAgain) {
      onDontShowAgain()
    } else {
      onClose()
    }
  }, [dontShowAgain, onDontShowAgain, onClose])

  useEffect(() => {
    // Portal 요소 생성
    const element = document.createElement('div')
    element.style.position = 'fixed'
    element.style.top = '0'
    element.style.left = '0'
    element.style.zIndex = '10001'
    document.body.appendChild(element)
    setPortalElement(element)

    return () => {
      if (document.body.contains(element)) {
        document.body.removeChild(element)
      }
    }
  }, [])

  // 모달 열림 시 body 스크롤 방지 및 채널톡 버튼 숨기기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      // 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO('hideChannelButton')
      }
    } else {
      document.body.style.overflow = 'auto'
      
      // 채널톡 버튼 다시 보이기
      if (window.ChannelIO && window.location.pathname === '/') {
        window.ChannelIO('showChannelButton')
      }
    }

    return () => {
      document.body.style.overflow = 'auto'
      // 컴포넌트 언마운트 시 채널톡 버튼 복원
      if (window.ChannelIO && window.location.pathname === '/') {
        window.ChannelIO('showChannelButton')
      }
    }
  }, [isOpen])

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleCloseModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen, handleCloseModal])

  if (!isOpen || !portalElement) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* 토스 스타일 모달 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-white rounded-[28px] w-full max-w-[420px] max-h-[90vh] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="relative px-6 pt-6 pb-4 flex-shrink-0">
              {/* 닫기 버튼 */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 상단 콘텐츠 */}
              <div className="flex items-center gap-4">
                                 {/* 좌측 미소 이벤트 이미지 - 크게 강조 */}
                 <div className="flex-shrink-0">
                   <Image 
                     src="/assets/miso/miso-event.png" 
                     alt="Miso Event" 
                     width={120} 
                     height={120}
                     className="w-20 h-20 object-contain drop-shadow-sm"
                   />
                 </div>
                
                                 {/* 우측 텍스트 */}
                 <div className="flex-1 min-w-0">
                   <h2 className="text-[22px] font-bold text-gray-900 leading-tight mb-1">
                     나의 회사 생활 Vibe ✨
                   </h2>
                   <p className="text-sm text-gray-500 font-medium">
                     GenAI로 창의적인 작품을 만들어보세요
                   </p>
                 </div>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="flex-1 px-6 pb-6 overflow-y-auto">
              {/* 핵심 정보 카드 */}
              <div className="bg-gray-50 rounded-[20px] p-5 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">📅</span>
                    </div>
                                         <p className="text-xs font-medium text-gray-600 mb-1">응모 기간</p>
                     <p className="text-sm font-bold text-gray-900">~8.10까지</p>
                   </div>
                   <div className="text-center">
                     <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                       <span className="text-lg">🏆</span>
                     </div>
                     <p className="text-xs font-medium text-gray-600 mb-1">총 상금</p>
                     <p className="text-sm font-bold text-gray-900">100만원!</p>
                   </div>
                   <div className="text-center">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                       <span className="text-lg">🎨</span>
                     </div>
                     <p className="text-xs font-medium text-gray-600 mb-1">형식</p>
                     <p className="text-sm font-bold text-gray-900">자유롭게</p>
                  </div>
                </div>
              </div>

                             {/* 참여 방법 */}
               <div className="mb-6">
                 <h3 className="text-base font-bold text-gray-900 mb-3">이런 분들께 특히 추천드려요! 😊</h3>
                 <div className="space-y-2">
                   <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                     <span className="text-sm">🎬</span>
                     <span className="text-sm text-gray-700">영상, 음악 창작이 즐거우신 분</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                     <span className="text-sm">🎨</span>
                     <span className="text-sm text-gray-700">이미지, 웹툰 그리기를 좋아하시는 분</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                     <span className="text-sm">🚀</span>
                     <span className="text-sm text-gray-700">GenAI 툴을 재미있게 써보고 싶으신 분</span>
                   </div>
                 </div>
               </div>

                             {/* CTA 버튼 */}
               <div className="space-y-3 mb-4">
                 <button
                   onClick={handleEventPageClick}
                   className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-[16px] transition-all duration-200"
                 >
                   이벤트 자세히 알아보기 🎯
                 </button>
                 
                 <button
                   onClick={handleCloseModal}
                   className="w-full bg-gray-100 hover:bg-gray-150 text-gray-700 font-medium py-3 px-6 rounded-[16px] transition-colors duration-200"
                 >
                   나중에 확인할게요
                 </button>
               </div>

                             {/* 하단 정보 */}
               <div className="flex justify-end text-xs text-gray-400">
                 {/* 다시 보지 않음 체크박스 */}
                 <label className="flex items-center gap-2 cursor-pointer">
                   <input
                     type="checkbox"
                     checked={dontShowAgain}
                     onChange={(e) => setDontShowAgain(e.target.checked)}
                     className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-900 focus:ring-1"
                   />
                   <span>다시 보지 않을게요</span>
                 </label>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalElement
  )
}
