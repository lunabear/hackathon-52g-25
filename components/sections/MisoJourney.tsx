import Image from 'next/image'

export default function MisoJourney() {
  return (
    <div className="mb-12 md:mb-16">
      <div className="text-center mb-16 md:mb-20 relative">
        
        {/* 섹션 라벨 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full mb-6 shadow-sm">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">MISO&apos;s Story</span>
        </div>
        
        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-slate-900">MISO</span><span className="text-slate-600">의</span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">바이브코딩 여정</span>
        </h3>
        
        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
            아이디어만 있던 MISO가 <span className="font-semibold text-purple-600 not-italic">해커톤 도전자</span>가 되기까지의 이야기
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Chapter 1: MISO의 고민 */}
          <div className="text-center" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-medium text-sm">01</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">
                MISO의 고민
              </h4>
            </div>
            
            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image 
                  src="/assets/miso/miso-no-idea.png"
                  alt="고민하는 MISO"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                &ldquo;혁신적인 아이디어가 있는데...&rdquo;
              </p>
              <p className="text-base md:text-lg text-slate-500 italic">
                &ldquo;아이디어만 있어도 뭔가 만들 수 있을까?&rdquo;
              </p>
            </div>
          </div>
          
          {/* Chapter 2: 바이브코딩과의 만남 */}
          <div className="text-center" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">02</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">
                바이브코딩을 만나다
              </h4>
            </div>
            
            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image 
                  src="/assets/miso/miso-play.png"
                  alt="신난 MISO"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                &ldquo;AI가 내 아이디어를 실현해준다니!&rdquo;
              </p>
              <p className="text-base md:text-lg text-blue-600 italic font-medium">
                &ldquo;내 아이디어를 현실로 만들 수 있겠어!&rdquo;
              </p>
            </div>
          </div>
          
          {/* Chapter 3: 해커톤 도전 */}
          <div className="text-center" style={{ fontFamily: 'Pretendard Variable, Pretendard, -apple-system, sans-serif' }}>
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-medium text-sm">03</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">
                해커톤에 도전하다
              </h4>
            </div>
            
            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image 
                  src="/assets/miso/miso-friends.png"
                  alt="도전하는 MISO"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain scale-125"
                />
              </div>
            </div>
            
            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                &ldquo;이제 해커톤에 도전해볼 시간!&rdquo;
              </p>
              <p className="text-base md:text-lg text-emerald-600 italic font-semibold">
                &ldquo;이제 정말 자신감이 생겼어!&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* 하단 메시지 */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-xl md:text-2xl font-medium text-slate-700 mb-2">
            당신도 MISO와 함께 도전해보세요
          </p>
          <p className="text-base text-slate-500">
            아이디어만 있어도 충분합니다
          </p>
        </div>
      </div>
    </div>
  )
}