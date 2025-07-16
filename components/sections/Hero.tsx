'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SimpleWordSwitcher from '@/components/ui/SimpleWordSwitcher'

const switchWords = ['GenAI', 'Everyone', 'Innovation', 'Future', 'Together', 'Vibe']

export default function Hero() {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const [isPlaiEventOpen, setIsPlaiEventOpen] = useState(false)
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-08-06T23:59:59+09:00') // 한국 시간 8월 6일 자정
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Portal element setup
  useEffect(() => {
    const element = document.createElement('div')
    element.style.position = 'fixed'
    element.style.top = '0'
    element.style.left = '0'
    element.style.zIndex = '9999'
    document.body.appendChild(element)
    setPortalElement(element)

    return () => {
      if (document.body.contains(element)) {
        document.body.removeChild(element)
      }
    }
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isPlaiEventOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isPlaiEventOpen])

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPlaiEventOpen) {
        setIsPlaiEventOpen(false)
      }
    }

    if (isPlaiEventOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isPlaiEventOpen])

  return (
    <div className="relative overflow-x-hidden">
      {/* 완전히 고정된 배경 섹션 - 전체 페이지 커버 */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* 깔끔한 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF] via-[#E3F2FD] to-[#BBDEFB]" />
        
        {/* 심플한 그리드 패턴 */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        
        {/* 축구장 배경 - 하단에 배치 */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%]">
          <Image 
            src="/assets/symbols/축구장.png" 
            alt="" 
            fill
            className="object-cover object-top opacity-70"
          />
        </div>
        
        {/* 3D 요소들 - 완전 고정 */}
        <div className="absolute top-[20%] left-[5%] sm:left-[10%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Image 
            src="/assets/symbols/도형1.png" 
            alt="" 
            width={160} 
            height={160}
            className="opacity-70 w-full h-full object-contain"
          />
        </div>
        
        <motion.div 
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[40%] sm:left-[45%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        >
          <Image 
            src="/assets/symbols/깃발.png" 
            alt="" 
            width={96} 
            height={96}
            className="opacity-60 w-full h-full object-contain"
          />
        </motion.div>
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[30%] left-[10%] sm:left-[15%] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        >
          <Image 
            src="/assets/symbols/축구공.png" 
            alt="" 
            width={112} 
            height={112}
            className="opacity-50 w-full h-full object-contain"
          />
        </motion.div>
        
        <div className="absolute top-[10%] right-[5%] sm:right-[8%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Image 
            src="/assets/symbols/트로피.png" 
            alt="" 
            width={160} 
            height={160}
            className="opacity-60 w-full h-full object-contain"
          />
        </div>
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] right-[5%] sm:right-[10%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
        >
          <Image 
            src="/assets/symbols/호루라기.png" 
            alt="" 
            width={128} 
            height={128}
            className="opacity-50 w-full h-full object-contain"
          />
        </motion.div>
        
        <div className="absolute top-[35%] right-[10%] sm:right-[15%] w-24 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24">
          <Image 
            src="/assets/symbols/도형11.png" 
            alt="" 
            width={144} 
            height={96}
            className="opacity-60 w-full h-full object-contain"
          />
        </div>
        
        {/* 작은 장식 도형들 */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[20%] sm:left-[25%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        >
          <Image 
            src="/assets/symbols/도형4.png" 
            alt="" 
            width={48} 
            height={48}
            className="opacity-40 w-full h-full object-contain"
          />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] right-[25%] sm:right-[30%] w-8 h-8 sm:w-10 sm:h-10"
        >
          <Image 
            src="/assets/symbols/도형4.png" 
            alt="" 
            width={40} 
            height={40}
            className="opacity-30 w-full h-full object-contain"
          />
        </motion.div>
        
        <div className="absolute top-[15%] right-[30%] sm:right-[35%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          <Image 
            src="/assets/symbols/도형5.png" 
            alt="" 
            width={64} 
            height={64}
            className="opacity-30 w-full h-full object-contain"
          />
        </div>
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[40%] left-[25%] sm:left-[30%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        >
          <Image 
            src="/assets/symbols/도형7.png" 
            alt="" 
            width={56} 
            height={56}
            className="opacity-40 w-full h-full object-contain"
          />
        </motion.div>
        
        <div className="absolute top-[45%] left-[2%] sm:left-[5%] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20">
          <Image 
            src="/assets/symbols/도형3.png" 
            alt="" 
            width={80} 
            height={80}
            className="opacity-35 w-full h-full object-contain"
          />
        </div>
        
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-[60%] right-[2%] sm:right-[5%] w-10 h-10 sm:w-12 sm:h-12"
        >
          <Image 
            src="/assets/symbols/도형6.png" 
            alt="" 
            width={48} 
            height={48}
            className="opacity-40 w-full h-full object-contain"
          />
        </motion.div>

        {/* 로고 - 완전히 고정 */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-4 z-50">
          <Image src="/assets/symbols/52g로고.png" alt="52g" width={50} height={25} className="h-5 sm:h-7 w-auto opacity-80" />
        </div>
        
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50">
          <Image src="/assets/symbols/GS로고.png" alt="GS" width={70} height={35} className="h-7 sm:h-9 w-auto opacity-80" />
        </div>
      </div>

      {/* 스크롤 가능한 콘텐츠 */}
      <div className="relative z-20 overflow-x-hidden">
        {/* 첫 번째 섹션 - 메인 히어로 */}
        <section className="h-screen flex items-center justify-center px-4 overflow-x-hidden">
          <div className="text-center relative w-full max-w-4xl mx-auto">
            {/* 상단 공간 유지 */}
            <div className="mb-16" />
            
            {/* 메인 타이틀 그룹 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-20"
            >
              {/* PLAI 타이틀 */}
              <h1 className="relative mb-12 inline-block">
                <Image 
                  src="/assets/PLAI-logo.png"
                  alt="PLAI"
                  width={448}
                  height={160}
                  className="block w-[14rem] sm:w-[18rem] md:w-[22rem] lg:w-[26rem] xl:w-[28rem] h-auto"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
                  }}
                />
                
                {/* 미소 캐릭터 - I의 오른쪽에 배치 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute block z-10"
                  style={{ 
                    right: '-18%',
                    bottom: '-5%',
                    width: '45%',
                    height: '45%'
                  }}
                >
                  <Image 
                    src="/assets/miso/miso-play.png" 
                    alt="Miso character" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15)) drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                    }}
                    priority
                  />
                </motion.div>
              </h1>
              
              {/* with 텍스트 */}
              <div 
                className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                <span className="font-medium text-gray-700 italic">with</span>
                <div className="relative">
                  <SimpleWordSwitcher 
                    words={switchWords}
                    className="font-black tracking-tight"
                  />
                  {/* 미니멀한 포인트 */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute bottom-0 left-0 h-[3px] bg-[#FF5500] origin-left"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* 부가 설명 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-2xl mx-auto"
              style={{ marginTop: '60px' }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium px-4" style={{ lineHeight: '1.8' }}>
                모두의 PLAI, <span className="font-bold text-gray-900">PLAI Everywhere</span> 🔥
              </p>
            </motion.div>

            {/* CTA 버튼 영역 */}
            <div style={{ marginTop: '60px', position: 'relative', zIndex: 30 }} className="sm:mt-24 md:mt-32">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://form.typeform.com/to/GX5MGuZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="relative transform -translate-y-2 transition-all duration-150 group-hover:translate-y-0 group-active:translate-y-1">
                    <div className="absolute inset-0 bg-gray-200 rounded-2xl transform translate-y-3 group-hover:translate-y-1 group-active:translate-y-0 transition-transform duration-150" />
                    <div className="relative bg-white rounded-2xl font-bold text-gray-900 text-sm sm:text-base border border-gray-100 overflow-hidden transition-all duration-150 group-hover:shadow-xl" style={{ padding: '16px 32px', minWidth: '160px' }}>
                      <span className="relative z-10 block text-center">참가 신청 하기</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </a>
                
                <button
                  onClick={() => setIsPlaiEventOpen(true)}
                  className="group relative"
                >
                  <div className="relative transform -translate-y-2 transition-all duration-150 group-hover:translate-y-0 group-active:translate-y-1">
                    <div className="absolute inset-0 bg-blue-200 rounded-2xl transform translate-y-3 group-hover:translate-y-1 group-active:translate-y-0 transition-transform duration-150" />
                    <div className="relative bg-blue-500 rounded-2xl font-bold text-white text-sm sm:text-base border border-blue-400 overflow-hidden transition-all duration-150 group-hover:shadow-xl" style={{ padding: '16px 32px', minWidth: '160px' }}>
                      <span className="relative z-10 block text-center">PLAI 이벤트</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </button>
              </div>
              
              {/* 카운트다운 타이머 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 text-center"
              >
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm mb-3">
                  <span className="text-gray-600 font-semibold">모집 마감까지</span>
                  <span className="text-gray-900 font-black">
                    {timeLeft.days}일 {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* 스크롤 인디케이터 - 화살표 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              className="text-gray-600"
            >
              <path 
                d="M7 13L12 18L17 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

      </div>
      
      {/* PLAI 이벤트 팝업 모달 */}
      {isPlaiEventOpen && portalElement && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 배경 오버레이 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsPlaiEventOpen(false)}
          />
          
          {/* 모달 컨텐츠 */}
          <div 
            className="relative bg-white/95 backdrop-blur-xl rounded-2xl w-[700px] max-w-full max-h-[90vh] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-white/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 - 프로젝트 톤앤매너 맞춤 */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-50/20 pointer-events-none"></div>
              
              <div className="relative px-6 py-5 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">PLAI 이벤트</h3>
                    <p className="text-sm text-white/80">나의 회사 생활 Vibe</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsPlaiEventOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* 모달 컨텐츠 */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
              
              {/* 메인 CTA 섹션 */}
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-700 uppercase tracking-wider">지금 참여하세요</span>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  요즘 나의 회사 생활을 AI로 표현해요!
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  PLAI Everywhere, PLAI Together!<br />
                  우리가 함께 PLAI하면, 그곳이 바로 플레이그라운드!
                </p>
                
                {/* CTA 버튼 */}
                <a
                  href="https://padlet.com/gs52group2/PLAIseason2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold px-8 py-4 rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 border border-slate-700"
                >
                  작품 제출하기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              {/* 핵심 정보 */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">응모 기간</p>
                  <p className="text-slate-700 font-medium">7/17 ~ 8/6</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">최대 상금</p>
                  <p className="text-slate-700 font-medium">30만원 상당</p>
                </div>
              </div>
              
              {/* 상세 정보 */}
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">참여 방법</h4>
                  </div>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">1</div>
                      <p>GenAI 툴로 <strong>이미지, 영상, 노래, 만화</strong> 등 자유 제작</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">2</div>
                      <p>제목에 <strong>소속회사/팀/이름</strong> 포함해서 업로드</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">3</div>
                      <p>개수 제한 없이 자유롭게 도전!</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🏆</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">시상 내역</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4 text-center flex flex-col justify-center min-h-[80px]">
                      <p className="font-semibold text-gray-900 text-sm mb-1">Best Video/Song/Picture</p>
                      <p className="text-xs text-slate-600">각 20만원 상당</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center flex flex-col justify-center min-h-[80px]">
                      <p className="font-semibold text-gray-900 text-sm mb-1">최다 하트 수상</p>
                      <p className="text-xs text-slate-600">30만원 상당</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center flex flex-col justify-center min-h-[80px]">
                      <p className="font-semibold text-gray-900 text-sm mb-1">발표</p>
                      <p className="text-xs text-slate-600">8/8(금)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 하단 안내 */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  * 작성 가이드를 준수하지 않으면 당첨에서 제외될 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </div>
  )
}