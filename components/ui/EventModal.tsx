"use client"

import { useEffect, useState, useCallback } from "react"
import { createPortal } from "react-dom"
// 애니메이션 제거
import { WINNERS } from "@/lib/winners"

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

  // 이벤트 페이지 이동은 현재 모달 내에서 사용하지 않음

  useEffect(() => {
    // Portal 요소 생성
    const element = document.createElement("div")
    element.style.position = "fixed"
    element.style.top = "0"
    element.style.left = "0"
    element.style.zIndex = "10001"
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
      document.body.style.overflow = "hidden"
      
      // 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO("hideChannelButton")
      }
    } else {
      document.body.style.overflow = "auto"
      
      // 채널톡 버튼 다시 보이기
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }

    return () => {
      document.body.style.overflow = "auto"
      // 컴포넌트 언마운트 시 채널톡 버튼 복원
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [isOpen])

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleCloseModal}
      />
      
      {/* 모달 컨테이너 (정적 렌더링) */}
      <div
        className="relative bg-white rounded-md w-full max-w-[360px] max-h-[80vh] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
            {/* 헤더 */}
            <div className="relative px-5 pt-5 pb-2 flex-shrink-0">
              {/* 닫기 버튼 */}
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 상단 콘텐츠 - 더 컴팩트하게 */}
              <div className="text-center">
                <h2 className="text-[18px] font-bold text-gray-900 leading-tight">🏆 당첨자 발표</h2>
                <p className="mt-0.5 text-xs text-gray-500 font-medium">PLAI 이벤트 수상자를 축하드립니다</p>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="flex-1 px-5 pb-4 overflow-y-auto">
              {/* 수상자 목록 - 데이터 기반, 컴팩트 렌더링 */}
              <ul className="space-y-2.5">
                {WINNERS.map((item, index) => (
                  <li
                    key={`${item.category}-${index}`}
                    className={
                      index === 0
                        ? "bg-gradient-to-r from-yellow-50 to-amber-50 rounded-md p-3 shadow-sm"
                        : "bg-white rounded-md p-3 shadow-sm"
                    }
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p
                          className={
                            index === 0
                              ? "text-xs font-bold text-amber-800"
                              : "text-xs font-bold text-gray-800"
                          }
                        >
                          {item.category}
                        </p>
                        <p className="mt-0.5 text-[11px] text-gray-700 truncate">{item.winner}</p>
                      </div>
                      <p
                        className={
                          index === 0
                            ? "text-xs font-bold text-amber-800 whitespace-nowrap"
                            : "text-xs font-bold text-gray-800 whitespace-nowrap"
                        }
                      >
                        {item.prize}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* 안내 메시지 - 더 컴팩트하게 */}
              <div className="mt-3">
                <div className="bg-blue-50 rounded-md p-2.5">
                  <p className="text-[11px] text-blue-800 text-center leading-relaxed">
                    당첨된 분들께는 별도 연락을 통해 상품을 전달드릴 예정입니다.
                  </p>
                </div>
              </div>

              {/* CTA 버튼 */}
              <div className="mt-3">
                <button
                  onClick={handleCloseModal}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-5 rounded-md transition-colors duration-200 text-sm"
                >
                  확인했어요
                </button>
              </div>

              {/* 하단 정보 - 더 작게 */}
              <div className="mt-2 flex justify-center text-xs text-gray-400">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="w-3 h-3 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-900 focus:ring-1"
                  />
                  <span className="text-xs">다시 보지 않을게요</span>
                </label>
              </div>
            </div>
      </div>
    </div>,
    portalElement
  )
}
