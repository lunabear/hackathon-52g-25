export default function ParticipantBenefits() {
  return (
    <div style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="mb-12 md:mb-16">
        <div className="text-center mb-16 md:mb-20 relative">
          
          {/* 섹션 라벨 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-6 shadow-sm">
            <span className="text-base">⭐</span>
            <span className="text-xs font-semibold text-rose-700 tracking-wider uppercase">Benefits</span>
          </div>
          
          {/* 메인 타이틀 */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">참가자 특전</span>
          </h3>
          
          {/* 서브 타이틀 */}
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              해커톤 참가자들에게 주어지는 <span className="font-semibold text-rose-600">특별한 혜택</span>
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* 특전 1 - AI 학습 플랫폼 */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-purple-200/60 hover:border-purple-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              
              <div className="flex-grow">
                {/* 아이콘 */}
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📚</span>
                </div>
                
                {/* 제목 */}
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  AI 학습 플랫폼
                </h4>
                
                {/* 설명 */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  V0, MISO와 바이브 코딩 활용법부터 실전 프로젝트까지
                </p>
              </div>
              
              {/* 세부 혜택 - 하단 고정 */}
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">프리미엄 온라인 교육 콘텐츠</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">실전 프로젝트 템플릿 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">V0, MISO 툴 무제한 사용권</span>
                </li>
              </ul>
            </div>

            {/* 특전 2 - 네트워킹 & 멘토링 */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-blue-200/60 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              
              <div className="flex-grow">
                {/* 아이콘 */}
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔗</span>
                </div>
                
                {/* 제목 */}
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  전문가 네트워킹
                </h4>
                
                {/* 설명 */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  GS그룹 AI 전문가와 함께하는 성장 기회
                </p>
              </div>
              
              {/* 세부 혜택 - 하단 고정 */}
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">1:1 전문가 멘토링 세션</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">FC서울 콜라보 굿즈 패키지</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">참가자 전용 커뮤니티 액세스</span>
                </li>
              </ul>
            </div>

            {/* 특전 3 - 사업화 기회 */}
            <div className="group relative bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-emerald-200/60 hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              
              <div className="flex-grow">
                {/* 아이콘 */}
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                
                {/* 제목 */}
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  사업화 & 투자 연계
                </h4>
                
                {/* 설명 */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  아이디어를 현실로, 챔피언스리그 진출 시 50만원 상당 상품
                </p>
              </div>
              
              {/* 세부 혜택 - 하단 고정 */}
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">챔피언스리그 진출 시 50만원 상당 상품</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">GS 계열사 PoC 기회 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">스폰서십 및 투자 검토 기회</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 추가 안내 문구 */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              * 모든 참가자에게 기본 혜택이 제공되며, 리그 진출 단계에 따라 추가 혜택이 제공됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>
      
      {/* 중요 안내 & CTA */}
      <div className="text-center">
        
        {/* 중요 안내 & CTA */}
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          

          {/* 신청 섹션 */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            {/* 왼쪽: MISO 캐릭터 */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <img 
                  src="/assets/miso/miso-together.png" 
                  alt="MISO Character" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                {/* 캐릭터 주변 장식 */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/4 -left-4 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '2s'}}></div>
              </div>
            </div>

            {/* 오른쪽: 텍스트 & 버튼 */}
            <div className="flex-1 text-center lg:text-left max-w-lg">
              
              {/* 헤드라인 */}
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
                지금이 바로 <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">시작할 때</span>입니다
              </h4>

              {/* 서브 텍스트 */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md lg:max-w-none mx-auto lg:mx-0">
                MISO와 함께하는 특별한 여행, <br />
                당신의 아이디어를 현실로 만들어보세요
              </p>

              {/* CTA 버튼 */}
              <div className="text-center lg:text-left">
                <a
                  href="https://form.typeform.com/to/GX5MGuZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 hover:-translate-y-1 text-sm md:text-base tracking-[-0.01em] relative overflow-hidden"
                >
                  {/* 미묘한 샤인 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">지금 바로 신청하기</span>
                  <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                {/* 주석 형태의 안내 문구 */}
                <p className="text-xs text-slate-500 mt-3 max-w-sm mx-auto lg:mx-0">
                  * 팀 출전을 하더라도 모든 팀원이 신청서를 제출해야 합니다
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 브랜드 메시지 - 박스 밖으로 이동 */}
        <div className="mt-10 md:mt-12">
          <p className="text-slate-400 text-sm md:text-base font-normal tracking-wide">
            함께 PLAI하면, 그곳이 바로 <span className="font-semibold text-slate-600">플레이그라운드</span>
          </p>
        </div>
      </div>
    </div>
  )
}