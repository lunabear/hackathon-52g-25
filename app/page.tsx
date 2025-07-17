import Hero from '@/components/sections/Hero'
import MisoJourney from '@/components/sections/MisoJourney'
import HackathonGuide from '@/components/sections/HackathonGuide'
import ParticipationSteps from '@/components/sections/ParticipationSteps'
import HackathonJourney from '@/components/sections/HackathonJourney'
import ParticipantBenefits from '@/components/sections/ParticipantBenefits'
import FAQ from '@/components/sections/FAQ'
import ImageCycler from '@/components/ui/ImageCycler'
import PageTransition from '@/components/ui/PageTransition'

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageTransition>
        <Hero />
      
      {/* 메인 콘텐츠 섹션 */}
      <section id="main" className="min-h-screen py-16 md:py-24 px-4 md:px-6 flex items-center justify-center relative z-30">
        <div className="mx-auto" style={{ maxWidth: '88rem' }}>
          
          {/* 프리미엄 포스터 컨테이너 */}
          <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden border border-white/30 relative">
            {/* 서브틀한 내부 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-50/20 pointer-events-none"></div>
            
            {/* 미니멀 헤더 */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
              {/* 미소 팀 배경 이미지 */}
              <ImageCycler />
              <div className="relative z-10 text-center py-10 md:py-12 px-6 md:px-8">
                
                {/* 상단 라벨 */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium tracking-wide border border-white/20">
                    제4회 GS그룹 해커톤
                  </span>
                </div>
                
                {/* 메인 타이틀과 도전 과제 통합 */}
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-white mb-1 leading-[0.85]">
                    PLAI
                  </h1>
                  <p className="text-xs md:text-sm lg:text-base text-white/50 font-normal tracking-[0.3em] uppercase mb-6">
                    with GenAI Season2
                  </p>
                  
                  {/* 도전 과제 - 인라인 스타일 */}
                  <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-500/50"></div>
                      <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">주제</span>
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-500/50"></div>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-white/80 mt-2">
                      세상을 놀라게 하거나, GS현장을 변화시킬 아이디어를
                      <br />
                      GenAI로 직접 만들어보세요!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 메인 콘텐츠 - 그리드 레이아웃 */}
            <div className="relative z-10 p-6 md:p-12 lg:p-16 xl:p-20">
              <MisoJourney />
              
              {/* 구분선 */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12 md:mb-16"></div>
              
              <HackathonGuide />
              
              {/* 구분선 */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>
              
              <ParticipationSteps />
              
              {/* 구분선 */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>
              
              <HackathonJourney />
              
              {/* 구분선 */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>
              
              <ParticipantBenefits />
              
              {/* 구분선 */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 md:mb-20"></div>
              
              <FAQ />
            </div>
          </div>
        </div>
      </section>
      </PageTransition>
    </main>
  )
}