'use client'
import { useState } from 'react'
import LeagueRecommendationModal from '../ui/LeagueRecommendationModal'

export default function ParticipationSteps() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mb-12 md:mb-16" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">참여 방법</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
          리모트 리그와 필드 리그 중 <span className="font-bold text-purple-600">원하는 리그를 선택해서 지원</span>해주세요!
        </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            내 상황에 맞는 해커톤을 선택하여 즐겨보세요☺️
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mt-4 rounded-full"></div>
          
          {/* 참여방법 가이드 버튼 */}
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="text-lg">🧭</span>
              <span className="text-sm font-semibold">나에게 맞는 리그 찾기</span>
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
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">리모트 리그</h4>
            <p className="text-base font-medium text-blue-600 mb-3">PLAI EVERYWHERE</p>
            <div className="w-8 h-px bg-blue-300 mx-auto mb-6"></div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium mb-3">
              해커톤 현장의 열기를 우리 현장으로!
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              현장으로 배달되는 PLAI팩을 함께하면<br />
              우리가 모이는 모든 곳이 해커톤 현장으로 변합니다.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              원하는 시간에 <span className="font-semibold">팀이 자유롭게 모여 해커톤 진행</span> 후,<br />
              기한 내에 인증샷과 결과물을 제출하면 끝!
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">기간</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">8.13(수) ~ 8.27(수)</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">장소</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">팀별로 원하는 장소에서 만나요</span>
            </div>
            <div className="bg-blue-50/50 rounded-2xl p-4 mt-6">
              <div className="space-y-2">
                <p className="text-blue-700 text-xs md:text-sm leading-relaxed">
                  <span className="inline-block mr-1">•</span>리모트 리그를 온전히 즐길 수 있는 온라인 교육을 제공합니다.
                </p>
                <p className="text-blue-700 text-xs md:text-sm leading-relaxed">
                  <span className="inline-block mr-1">•</span>도움이 필요할 때, 언제든 지원할 수 있는 AI코치를 활용할 수 있습니다.
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
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">필드 리그</h4>
            <p className="text-base font-medium text-emerald-600 mb-3">PLAI TOGETHER</p>
            <div className="w-8 h-px bg-emerald-300 mx-auto mb-6"></div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium mb-3">
              다양한 계열사 구성원들을 만나는 시간!
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              루틴한 일상에서 벗어나 새로운 변화를 위한<br />
              열기를 현장에서 직접 느껴보세요.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              오프라인으로 모든 해커가 한 자리 모여<br />
              2일 동안 제작한 결과물을 제출하면 끝!
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">기간</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">9.8(월) ~ 9.9(화)</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <span className="text-gray-500 text-sm md:text-base">장소</span>
              <span className="font-medium text-gray-900 text-sm md:text-base">웨스틴 서울 파르나스</span>
            </div>
            <div className="bg-emerald-50/50 rounded-2xl p-4 mt-6">
              <div className="space-y-2">
                <p className="text-emerald-700 text-xs md:text-sm leading-relaxed">
                  <span className="inline-block mr-1">•</span>다양한 계열사 구성원들과 만나 교류할 수 있습니다.
                </p>
                <p className="text-emerald-700 text-xs md:text-sm leading-relaxed">
                  <span className="inline-block mr-1">•</span>AI 전문가 코치와 AI활용 기업을 현장에서 만나볼 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 챔피언스리그 - 전체 폭 카드 */}
      <div className="mt-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50/90 to-indigo-50/90 backdrop-blur-sm border-2 border-purple-200/60 hover:border-purple-300 rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🏆</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">챔피언스리그</h4>
            <p className="text-sm font-medium text-purple-600 mb-3">PLAI to the Moon</p>
            <div className="w-6 h-px bg-purple-300 mx-auto mb-4"></div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-4 mb-4">
                <p className="text-sm md:text-base">
                  해커톤 참여팀 중 희망하는 팀에 한해 챔피언스리그에 도전하여<br />
                  9월 29일 데모데이 참여 및 <span className="font-bold">아이디어 현실화 기회</span>를 얻을 수 있습니다.
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