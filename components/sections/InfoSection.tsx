import Image from 'next/image'

export default function InfoSection() {
  return (
    <section className="min-h-screen py-16 md:py-24 px-4 md:px-6 flex items-center justify-center relative z-30">
      <div className="max-w-7xl mx-auto">
        
        {/* 프리미엄 포스터 컨테이너 */}
        <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden border border-white/30 relative">
          {/* 서브틀한 내부 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-50/20 pointer-events-none"></div>
          
          {/* 미니멀 헤더 */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
            {/* 미소 팀 배경 이미지 */}
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="/assets/miso/miso-team.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative z-10 text-center py-16 md:py-20 px-6 md:px-8">
              
              {/* 상단 라벨 */}
              <div className="mb-6 md:mb-8">
                <span className="inline-block px-5 py-2 md:px-6 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs md:text-sm font-medium tracking-wide border border-white/20">
                  제4회 GS그룹 해커톤
                </span>
              </div>
              
              {/* 메인 타이틀 */}
              <div className="mb-6 md:mb-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[-0.02em] text-white mb-2 md:mb-3 leading-[0.85]">
                  PLAI
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/50 font-normal tracking-[0.3em] uppercase">
                  with GenAI Season2
                </p>
              </div>
              
              {/* 서브 헤딩 */}
              <div className="pt-4 md:pt-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white/80 tracking-[0.1em] uppercase">
                  참여 안내서
                </h2>
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 - 그리드 레이아웃 */}
          <div className="relative z-10 p-8 md:p-16 lg:p-20 xl:p-24">
            
            {/* 1. 도전 과제 섹션 */}
            <div className="mb-16 md:mb-20">
              <div className="text-center mb-10 md:mb-16">
                <div className="inline-block p-3 md:p-4 bg-amber-50 rounded-3xl mb-6 md:mb-8">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-500 rounded-2xl"></div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 mb-4 md:mb-6 tracking-[-0.01em]">
                  도전 과제
                </h3>
                <div className="w-12 h-px bg-amber-500 mx-auto"></div>
              </div>
              
              <div className="max-w-5xl mx-auto text-center">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-600 leading-[1.6] mb-8 md:mb-12">
                  <span className="font-medium text-amber-600">GenAI</span>로 GS현장과 고객 경험에<br />
                  변화를 일으킬 아이디어
                </p>
                
                {/* 제출물 섹션 */}
                <div className="mt-12 md:mt-16 bg-amber-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-amber-100/50">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800">필수 제출물</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-600">아래 3가지 항목을 모두 제출해야 합니다</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="group/card bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 text-center border border-amber-200/30 hover:bg-white/90 hover:border-amber-300/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold text-xl md:text-2xl">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">아이디어 소개서</h4>
                    <p className="text-gray-600 text-xs md:text-sm font-normal">핵심 아이디어 문서</p>
                  </div>
                  <div className="group/card bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 text-center border border-amber-200/30 hover:bg-white/90 hover:border-amber-300/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold text-xl md:text-2xl">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">디지털 결과물</h4>
                    <p className="text-gray-600 text-xs md:text-sm font-normal">V0, MISO 배포 링크</p>
                  </div>
                  <div className="group/card bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 text-center border border-amber-200/30 hover:bg-white/90 hover:border-amber-300/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold text-xl md:text-2xl">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">시연 영상</h4>
                    <p className="text-gray-600 text-xs md:text-sm font-normal">팀 & 아이디어 소개</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>

            {/* 2. 해커톤 여정 타임라인 - 컴팩트 버전 */}
            <div className="mb-16 md:mb-20">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-[-0.01em]">
                  함께 떠나는 해커톤 여정
                </h3>
                <div className="w-12 h-px bg-amber-500 mx-auto"></div>
              </div>

              {/* 컴팩트 타임라인 그리드 */}
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                  {/* 참여자 모집 */}
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-amber-100/50 hover:border-amber-200/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">⛳️</span>
                      <h4 className="font-semibold text-sm md:text-base text-gray-900">참여자 모집</h4>
                    </div>
                    <p className="text-amber-600 font-medium text-xs md:text-sm">7.17 ~ 8.6</p>
                  </div>

                  {/* 확정자 발표 */}
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-amber-100/50 hover:border-amber-200/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">⛳️</span>
                      <h4 className="font-semibold text-sm md:text-base text-gray-900">확정자 발표</h4>
                    </div>
                    <p className="text-amber-600 font-medium text-xs md:text-sm">8.11(월)</p>
                  </div>

                  {/* 리모트 리그 */}
                  <div className="group relative bg-blue-50/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-blue-100/50 hover:border-blue-200/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">⚽️</span>
                      <h4 className="font-semibold text-sm md:text-base text-gray-900">리모트 리그</h4>
                    </div>
                    <p className="text-blue-600 font-medium text-xs md:text-sm mb-1">8.13 ~ 8.27</p>
                    <p className="text-gray-600 text-xs">원하는 장소에서</p>
                  </div>

                  {/* 필드 리그 */}
                  <div className="group relative bg-green-50/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-green-100/50 hover:border-green-200/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">⚽️</span>
                      <h4 className="font-semibold text-sm md:text-base text-gray-900">필드 리그</h4>
                    </div>
                    <p className="text-green-600 font-medium text-xs md:text-sm mb-1">9.8 ~ 9.9</p>
                    <p className="text-gray-600 text-xs">웨스틴 파르나스</p>
                  </div>

                  {/* 데모데이 */}
                  <div className="group relative bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-amber-200/50 hover:border-amber-300/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">🏆</span>
                      <h4 className="font-semibold text-sm md:text-base text-gray-900">데모데이</h4>
                    </div>
                    <p className="text-amber-600 font-medium text-xs md:text-sm mb-1">9.29(월)</p>
                    <p className="text-gray-600 text-xs">GS역삼타워</p>
                    <p className="text-gray-500 text-xs mt-1 italic hidden sm:block">
                      *스폰서십 기회
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>

            {/* 3. 팀 구성 & 모집 대상 */}
            <div className="mb-16 md:mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  
                  {/* 모집 대상 */}
                  <div className="text-center">
                    <div className="inline-block p-3 md:p-4 bg-purple-50 rounded-3xl mb-6 md:mb-8">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 tracking-[-0.01em]">모집 대상</h4>
                    <p className="text-gray-500 text-sm md:text-base leading-[1.6] mb-4 md:mb-6 font-normal">
                      GS그룹 구성원 중 GenAI로 내 문제를<br />스스로 해결해보고 싶은 사람 누구나
                    </p>
                    <p className="text-purple-600 text-xs md:text-sm font-medium">52g 초청사</p>
                  </div>
                  
                  {/* 팀 구성 */}
                  <div className="text-center">
                    <div className="inline-block p-3 md:p-4 bg-blue-50 rounded-3xl mb-6 md:mb-8">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M21 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 tracking-[-0.01em]">팀 구성</h4>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-500 font-normal text-sm md:text-base">팀 출전</span>
                        <span className="font-medium text-gray-900 text-sm md:text-base">2~4인</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-500 font-normal text-sm md:text-base">개인 출전</span>
                        <span className="font-medium text-gray-900 text-sm md:text-base">필드 리그만</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>

            {/* 4. 참여 방법 섹션 */}
            <div className="mb-16 md:mb-20">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-[-0.01em]">
                  참여 방법 선택
                </h3>
                <p className="text-gray-500 text-base md:text-lg font-normal">두 가지 리그 중 원하는 방식을 선택하세요</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {/* 리모트 리그 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-3xl p-8 md:p-10 group-hover:border-blue-200/70 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="text-center mb-6 md:mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-3xl mb-4 md:mb-6 shadow-lg">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                      <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 tracking-[-0.01em]">리모트 리그</h4>
                      <p className="text-gray-500 text-sm md:text-base leading-[1.6] font-normal">
                        원하는 시간에 팀이 자유롭게 모여 진행하고,<br />
                        기한 내에 결과물을 제출하는 방식
                      </p>
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center justify-between py-3 md:py-4 border-b border-gray-100/50">
                        <span className="text-gray-500 font-normal text-sm md:text-base">기간</span>
                        <span className="font-medium text-gray-900 text-sm md:text-base">8.13 ~ 8.27</span>
                      </div>
                      <div className="flex items-center justify-between py-3 md:py-4 border-b border-gray-100/50">
                        <span className="text-gray-500 font-normal text-sm md:text-base">장소</span>
                        <span className="font-medium text-gray-900 text-sm md:text-base">자유 선택</span>
                      </div>
                      <div className="bg-blue-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 mt-4 md:mt-6">
                        <p className="text-blue-700 text-xs md:text-sm font-normal">
                          💡 GS타워 25층 리모트 존 오픈
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 필드 리그 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-green-100/50 rounded-3xl p-8 md:p-10 group-hover:border-green-200/70 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="text-center mb-6 md:mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-3xl mb-4 md:mb-6 shadow-lg">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 tracking-[-0.01em]">필드 리그</h4>
                      <p className="text-gray-500 text-sm md:text-base leading-[1.6] font-normal">
                        모든 해커가 한 자리 모여<br />
                        무박 2일 동안 집중 개발하는 방식
                      </p>
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center justify-between py-3 md:py-4 border-b border-gray-100/50">
                        <span className="text-gray-500 font-normal text-sm md:text-base">기간</span>
                        <span className="font-medium text-gray-900 text-sm md:text-base">9.8 ~ 9.9</span>
                      </div>
                      <div className="flex items-center justify-between py-3 md:py-4 border-b border-gray-100/50">
                        <span className="text-gray-500 font-normal text-sm md:text-base">장소</span>
                        <span className="font-medium text-gray-900 text-sm md:text-base">웨스틴 파르나스</span>
                      </div>
                      <div className="bg-green-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 mt-4 md:mt-6">
                        <p className="text-green-700 text-xs md:text-sm font-normal">
                          💡 무박 2일 집중 개발
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>

            {/* 5. 참가자 특전 */}
            <div className="mb-16 md:mb-20">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-[-0.01em]">
                  참가자 특전
                </h3>
                <div className="w-12 h-px bg-amber-500 mx-auto"></div>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* 특전 1 */}
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100/50 hover:border-amber-200/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl md:text-2xl">📚</span>
                    </div>
                    <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
                      GenAI를 스스로 학습하고, 직접 만들어볼 수 있도록 돕는 <span className="font-semibold text-amber-600">템플릿과 온라인 콘텐츠</span>
                    </p>
                  </div>

                  {/* 특전 2 */}
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100/50 hover:border-amber-200/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl md:text-2xl">🎁</span>
                    </div>
                    <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
                      각 리그를 즐겁게 PLAI 할 수 있는 <span className="font-semibold text-amber-600">맞춤형 굿즈와 전문가의 멘토링</span>
                    </p>
                  </div>

                  {/* 특전 3 */}
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100/50 hover:border-amber-200/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl md:text-2xl">🏆</span>
                    </div>
                    <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
                      데모데이 진행 팀에게는 <span className="font-semibold text-amber-600">50만원 상당의 상품</span> 제공 및 현실화 기회
                    </p>
                  </div>
                </div>

                {/* 리그별 특전 - 샘플 이미지 포함 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-16">
                  {/* 리모트 리그 특전 */}
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-3xl p-8 md:p-10 group-hover:border-blue-200/70 transition-all duration-300 shadow-lg group-hover:shadow-xl h-full flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 tracking-[-0.01em]">리모트 리그 특별 혜택</h4>
                        <div className="inline-block bg-blue-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-4 mx-auto">
                          <span className="text-3xl md:text-4xl">🎁</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-center mb-6">
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                            우리가 모인 곳이 플레이그라운드가 되는 마법이 일어나는 <span className="font-semibold text-blue-600">플레이팩</span>
                          </p>
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            궁금할땐 클릭 한번으로 멘토링 받을 수 있는 <span className="font-semibold text-blue-600">채널 오픈</span>
                          </p>
                        </div>
                        {/* 샘플 이미지 */}
                        <div className="bg-gradient-to-br from-blue-100/50 to-blue-200/30 rounded-2xl p-3 md:p-4">
                          <div className="aspect-video relative overflow-hidden rounded-xl bg-white/60">
                            <img
                              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop"
                              alt="플레이팩 미리보기"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-blue-600 text-xs mt-2 font-medium">플레이팩 미리보기</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 필드 리그 특전 */}
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm border border-green-100/50 rounded-3xl p-8 md:p-10 group-hover:border-green-200/70 transition-all duration-300 shadow-lg group-hover:shadow-xl h-full flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 tracking-[-0.01em]">필드 리그 특별 혜택</h4>
                        <div className="inline-block bg-green-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-4 mx-auto">
                          <span className="text-3xl md:text-4xl">🎁</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-center mb-6">
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                            15만원 상당의 <span className="font-semibold text-green-600">FC서울 콜라보 굿즈</span>
                          </p>
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            <span className="font-semibold text-green-600">MISO & 바이브 코딩 마스터들</span>의 코칭
                          </p>
                        </div>
                        {/* 샘플 이미지 */}
                        <div className="bg-gradient-to-br from-green-100/50 to-green-200/30 rounded-2xl p-3 md:p-4">
                          <div className="aspect-video relative overflow-hidden rounded-xl bg-white/60">
                            <img
                              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop"
                              alt="FC서울 콜라보 굿즈"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-green-600 text-xs mt-2 font-medium">FC서울 콜라보 굿즈</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. 중요 안내 & CTA */}
            <div className="text-center">
              
              {/* 중요 안내 */}
              <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-12 md:mb-16 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs md:text-sm font-normal">!</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 text-base md:text-lg tracking-[-0.01em]">중요 안내</h5>
                </div>
                <p className="text-amber-800 text-xs md:text-sm leading-[1.6] font-normal">
                  팀 출전을 하더라도 <strong>모든 팀원이 개별 신청서를 제출</strong>해야 합니다
                </p>
              </div>

              {/* CTA 버튼 */}
              <div>
                <a
                  href="https://form.typeform.com/to/GX5MGuZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold px-10 md:px-16 py-5 md:py-6 rounded-2xl md:rounded-3xl hover:from-slate-800 hover:to-slate-700 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] text-base md:text-lg tracking-[-0.01em] relative overflow-hidden"
                >
                  {/* 미묘한 샤인 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">지금 바로 신청하기</span>
                  <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                {/* 브랜드 메시지 */}
                <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-slate-100/50">
                  <p className="text-slate-400 text-base md:text-lg font-normal tracking-wide">
                    함께 PLAI하면, 그곳이 바로 <span className="font-semibold text-slate-600">플레이그라운드</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}