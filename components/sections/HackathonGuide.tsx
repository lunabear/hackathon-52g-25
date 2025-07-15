export default function HackathonGuide() {
  return (
    <div className="mb-12 md:mb-16" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 섹션 라벨 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-6 shadow-sm">
          <span className="text-base">👥</span>
          <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">Who Can Join</span>
        </div>
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">참여 안내</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            이런 분들이 <span className="font-semibold text-emerald-600">참여할 수 있습니다</span>
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {/* 모집 대상 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-slate-200/60 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👤</span>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-6">모집 대상</h4>
            <div className="w-8 h-px bg-slate-300 mx-auto mb-6"></div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                GS그룹 구성원 중 GenAI로 내 문제를<br />스스로 해결해보고 싶은 사람 누구나
              </p>
              <span className="inline-block px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-xs font-medium">52g 초청사</span>
            </div>
          </div>
          
          {/* 팀 구성 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-blue-200/60 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-6">팀 구성</h4>
            <div className="w-8 h-px bg-blue-300 mx-auto mb-6"></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-gray-500 text-sm md:text-base">팀 출전</span>
                  <span className="font-medium text-gray-900 text-sm md:text-base">2~4인</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-gray-500 text-sm md:text-base">개인 출전</span>
                  <span className="font-medium text-gray-900 text-sm md:text-base">필드 리그만</span>
                </div>
              </div>
              
              {/* 중요 안내 */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-700 font-semibold text-sm mb-1">필수 확인사항</p>
                    <p className="text-blue-600 text-xs leading-relaxed">
                      팀으로 지원하는 경우에도 <strong>모든 팀원이 각각 개별적으로 신청서를 제출</strong>해야 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 제출물 요구사항 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-slate-200/60 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📋</span>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-6">제출물 요구사항</h4>
            <div className="w-8 h-px bg-orange-300 mx-auto mb-6"></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xs font-bold bg-orange-100 px-2 py-1 rounded-full mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">아이디어 소개서</p>
                    <p className="text-gray-500 text-xs mt-1">풀고 싶은 문제와 해결방법 소개</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xs font-bold bg-orange-100 px-2 py-1 rounded-full mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">동작하는 디지털 결과물</p>
                    <p className="text-gray-500 text-xs mt-1">웹사이트 또는 앱 링크 제출</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xs font-bold bg-orange-100 px-2 py-1 rounded-full mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">시연 영상</p>
                    <p className="text-gray-500 text-xs mt-1">팀 & 아이디어 소개 (3분 이내)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}