"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function FloatingApplyButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const toggleVisibility = () => {
      // 스크롤이 300px 이상일 때만 버튼 표시
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // 메인 페이지에서만 표시
  if (pathname !== "/") {
    return null
  }

  return (
    <div
      className={`fixed bottom-6 right-32 z-[9998] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="https://form.typeform.com/to/GX5MGuZ9"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold px-16 py-5 rounded-2xl shadow-2xl transition-all duration-300 ease-out group-hover:from-slate-800 group-hover:to-slate-700 group-hover:shadow-3xl group-hover:-translate-y-1 group-active:translate-y-0 group-active:shadow-lg">
          {/* 미묘한 샤인 효과 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>

          <span className="relative z-10 text-base font-bold tracking-wide whitespace-nowrap block text-center">
            참가 신청하기
          </span>
        </div>
      </a>
    </div>
  )
}
