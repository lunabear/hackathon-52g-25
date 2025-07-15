'use client'
import { useState } from 'react'
import LeagueRecommendationModal from '../ui/LeagueRecommendationModal'

export default function ParticipationSteps() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mb-12 md:mb-16" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 섹션 라벨 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mb-6 shadow-sm">
          <span className="text-base">🎯</span>
          <span className="text-xs font-semibold text-purple-700 tracking-wider uppercase">Choose Your Path</span>
        </div>
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-slate-700">참여 방법</span> <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">선택</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            두 가지 리그 중 <span className="font-semibold text-purple-600">원하는 방식을 선택</span>하세요
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mt-4 rounded-full"></div>
          
          {/* 참여방법 가이드 버튼 */}
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 shadow-sm"
            >
              <span className="text-base">🧭</span>
              <span className="text-sm text-slate-600 group-hover:text-purple-600 font-medium">나에게 맞는 리그 찾기</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
        {/* 리모트 리그 */}
        <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200/60 hover:border-slate-300 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💻</span>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">리모트 리그</h4>
            <div className="w-8 h-px bg-blue-300 mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              원하는 시간에 팀이 자유롭게 모여 진행하고,<br />
              기한 내에 결과물을 제출하는 방식
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">기간</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">8.13 ~ 8.27</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">장소</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">원하는 곳 어디서나</span>
            </div>
            <div className="bg-blue-50/70 rounded-2xl p-4 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">ℹ️</span>
                <p className="text-blue-700 text-xs md:text-sm font-medium">
                  GS타워 25층 리모트 존 자유롭게 이용 가능
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🎁</span>
                <p className="text-blue-700 text-xs md:text-sm font-medium">
                  PLAI 웰컴팩과 온라인 멘토링 지원
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 필드 리그 */}
        <div className="bg-white/90 backdrop-blur-sm border-2 border-slate-200/60 hover:border-slate-300 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏢</span>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">필드 리그</h4>
            <div className="w-8 h-px bg-emerald-300 mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              모든 해커가 한 자리 모여<br />
              무박 2일 동안 집중 개발하는 방식
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">기간</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">9.8 ~ 9.9</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">장소</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">웨스틴 파르나스</span>
            </div>
            <div className="bg-emerald-50/70 rounded-2xl p-4 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">ℹ️</span>
                <p className="text-emerald-700 text-xs md:text-sm font-medium">
                  무박 2일간 함께 모여 집중 개발
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🎁</span>
                <p className="text-emerald-700 text-xs md:text-sm font-medium">
                  FC서울 한정판 굿즈와 MISO 전문가 코칭 제공
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 리그 추천 모달 */}
      <LeagueRecommendationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}