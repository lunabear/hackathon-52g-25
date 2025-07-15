export default function HackathonJourney() {
  return (
    <div className="mb-12 md:mb-16" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 섹션 라벨 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6 shadow-sm">
          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">Journey</span>
        </div>
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-slate-700">함께 떠나는</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">해커톤 여정</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            단계별로 <span className="font-semibold text-blue-600">함께 나아가는</span> 여정
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* 컴팩트 타임라인 그리드 */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* 참여자 모집 */}
          <div className="group text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 border-slate-200/60 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[200px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">참여자 모집</h4>
              </div>
              <div>
                <p className="text-slate-700 font-bold text-sm md:text-base mb-1">7.17 ~ 8.6</p>
                <p className="text-slate-500 text-xs">신청 기간</p>
              </div>
            </div>
          </div>

          {/* 확정자 발표 */}
          <div className="group text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 border-slate-200/60 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[200px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">확정자 발표</h4>
              </div>
              <div>
                <p className="text-slate-700 font-bold text-sm md:text-base mb-1">8.11(월)</p>
                <p className="text-slate-500 text-xs">선발 결과</p>
              </div>
            </div>
          </div>

          {/* 리모트 리그 */}
          <div className="group text-center">
            <div className="bg-blue-50/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 border-blue-200/60 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[200px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">리모트 리그</h4>
              </div>
              <div>
                <p className="text-blue-700 font-bold text-sm md:text-base mb-1">8.13 ~ 8.27</p>
                <p className="text-blue-600 text-xs">원하는 장소에서</p>
              </div>
            </div>
          </div>

          {/* 필드 리그 */}
          <div className="group text-center">
            <div className="bg-emerald-50/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 border-emerald-200/60 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[200px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">필드 리그</h4>
              </div>
              <div>
                <p className="text-emerald-700 font-bold text-sm md:text-base mb-1">9.8 ~ 9.9</p>
                <p className="text-emerald-600 text-xs">웨스틴 파르나스</p>
              </div>
            </div>
          </div>

          {/* 챔피언스리그 */}
          <div className="group text-center">
            <div className="bg-gradient-to-br from-purple-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 border-purple-200/60 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[200px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">챔피언스리그</h4>
              </div>
              <div>
                <p className="text-purple-700 font-bold text-sm md:text-base mb-1">9.29(월)</p>
                <p className="text-purple-600 text-xs mb-1">GS역삼타워</p>
                <p className="text-purple-500 text-xs font-medium">아이디어 현실화</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}