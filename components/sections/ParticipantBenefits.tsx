import Image from 'next/image'

export default function ParticipantBenefits() {
  return (
    <div style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
      <div className="mb-12 md:mb-16">
        <div className="text-center mb-16 md:mb-20 relative">
          {/* 메인 타이틀 */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">참가자 특전</span>
          </h3>
          {/* 서브 타이틀 */}
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              해커톤 참가자에게는 <span className="font-semibold text-rose-600">특별한 혜택</span>을 드립니다.
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="mx-auto" style={{ maxWidth: '88rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* 리모트 리그 */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">리모트 리그</h4>
                <p className="text-base font-medium text-purple-600 mb-3">PLAI EVERYWHERE</p>
                <div className="w-8 h-px bg-purple-300 mx-auto mb-6"></div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex-1 space-y-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      언제, 어디서든 <span className="font-bold text-purple-600">자유롭게 참여</span>할 수 있는 기회
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      우리가 모인 곳을 플레이 그라운드로 만들어주는 <span className="font-bold text-purple-600">PLAI리모트팩</span>
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50/50 rounded-2xl p-4 mt-auto">
                  <p className="text-purple-700 text-xs md:text-sm leading-relaxed">
                    PLAI 리모트팩 구성품: 해커톤 티셔츠, 간식 쿠폰, 리모트 리그 전용 키링 등
                  </p>
                </div>
              </div>
            </div>

            {/* 필드 리그 */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">필드 리그</h4>
                <p className="text-base font-medium text-blue-600 mb-3">PLAI TOGETHER</p>
                <div className="w-8 h-px bg-blue-300 mx-auto mb-6"></div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex-1 space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <span className="font-bold text-blue-600">다양한 계열사 구성원, AI기업</span>들과 만날 수 있는 기회
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      공식 오픈 전, <span className="font-bold text-blue-600">웨스틴 서울 파르나스를 가장 먼저 경험</span>할 기회
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      MISO & 바이브코딩 마스터들의 <span className="font-bold text-blue-600">기술 코칭</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      우리의 경험을 더욱 즐겁게 만들어주는 <span className="font-bold text-blue-600">PLAI필드팩</span>
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50/50 rounded-2xl p-4 mt-auto">
                  <p className="text-blue-700 text-xs md:text-sm leading-relaxed">
                  PLAI필드팩 구성품: FC서울x52g 한정판 저지, 해커톤 모자, 필드 리그전용 키링 등
                  </p>
                </div>
              </div>
            </div>

            {/* 챔피언스리그 */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">챔피언스리그</h4>
                <p className="text-base font-medium text-emerald-600 mb-3">PLAI TO THE MOON</p>
                <div className="w-8 h-px bg-emerald-300 mx-auto mb-6"></div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex-1 space-y-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <span className="font-bold text-emerald-600">데모데이를 통한 아이디어 현실화 기회</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      비즈니스 전문가들의 피드백과 <span className="font-bold text-emerald-600">멘토링 기회</span>
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50/50 rounded-2xl p-4 mt-auto">
                  <p className="text-emerald-700 text-xs md:text-sm leading-relaxed">
                    50만원 상당의 완주 상품 제공
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* 참가자 모두에게는? */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-2xl md:rounded-3xl px-6 md:px-12 py-8 md:py-12 shadow-sm text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">참가자 모두에게는?</span>
          </div>
          <div className="max-w-4xl mx-auto text-base md:text-lg text-slate-700 font-medium space-y-3">
            <p className="text-slate-700">
              24시간 해커들과 함께하는 <span className="font-bold text-rose-600">AI PLAI MAKER</span>
            </p>
            <p className="text-slate-600">
              GenAI를 스스로 학습하고, 직접 만들어볼 수 있도록 돕는 <span className="font-bold text-rose-600">템플릿과 온라인 콘텐츠</span>
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>
      
      {/* 중요 안내 & CTA */}
      <div className="text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* 신청 섹션 */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* 왼쪽: MISO 캐릭터 */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image 
                  src="/assets/miso/miso-together.png" 
                  alt="MISO Character" 
                  width={320}
                  height={320}
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
        <div className="mt-20 md:mt-24">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-slate-700 font-semibold tracking-wide">
              PLAI Everywhere, PLAI Together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}