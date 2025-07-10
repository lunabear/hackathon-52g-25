'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import SimpleWordSwitcher from '@/components/ui/SimpleWordSwitcher'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  // 패럴랙스 효과
  const y1 = useTransform(scrollY, [0, 500], [0, 80])
  const y2 = useTransform(scrollY, [0, 500], [0, -60])
  const y3 = useTransform(scrollY, [0, 500], [0, 40])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const switchWords = ['GenAI', 'Everyone', 'Innovation', 'Future', 'Together', 'PLAI']

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* 깔끔한 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF] via-[#E3F2FD] to-[#BBDEFB]" />
      
      {/* 심플한 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      
      {/* 축구장 배경 - 하단에 배치 */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] z-0">
        <Image 
          src="/assets/symbols/축구장.png" 
          alt="" 
          fill
          className="object-cover object-top opacity-70"
        />
      </div>
      
      {/* 3D 요소들 - 단순화 */}
      {/* 초록색 도형 - 왼쪽 중앙 */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[20%] left-[10%] w-40 h-40 z-10"
      >
        <Image 
          src="/assets/symbols/도형1.png" 
          alt="" 
          width={160} 
          height={160}
          className="opacity-70"
        />
      </motion.div>
      
      {/* 파란색 깃발 - 상단 중앙 */}
      <motion.div 
        style={{ y: y2 }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] left-[45%] w-24 h-24 z-10"
      >
        <Image 
          src="/assets/symbols/깃발.png" 
          alt="" 
          width={96} 
          height={96}
          className="opacity-60"
        />
      </motion.div>
      
      <motion.div 
        style={{ y: y2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[30%] left-[15%] w-28 h-28 z-10"
      >
        <Image 
          src="/assets/symbols/축구공.png" 
          alt="" 
          width={112} 
          height={112}
          className="opacity-50"
        />
      </motion.div>
      
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[10%] right-[8%] w-40 h-40 z-10"
      >
        <Image 
          src="/assets/symbols/트로피.png" 
          alt="" 
          width={160} 
          height={160}
          className="opacity-60"
        />
      </motion.div>
      
      {/* 호루라기 - 오른쪽 하단 */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[25%] right-[10%] w-32 h-32 z-10"
      >
        <Image 
          src="/assets/symbols/호루라기.png" 
          alt="" 
          width={128} 
          height={128}
          className="opacity-50"
        />
      </motion.div>
      
      {/* 빨간색/주황색 도형 - 오른쪽 중앙 */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[35%] right-[15%] w-36 h-24 z-10"
      >
        <Image 
          src="/assets/symbols/도형11.png" 
          alt="" 
          width={144} 
          height={96}
          className="opacity-60"
        />
      </motion.div>
      
      {/* 작은 장식 도형들 */}
      {/* 별 모양들 */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[25%] w-12 h-12 z-10"
      >
        <Image 
          src="/assets/symbols/도형4.png" 
          alt="" 
          width={48} 
          height={48}
          className="opacity-40"
        />
      </motion.div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[30%] w-10 h-10 z-10"
      >
        <Image 
          src="/assets/symbols/도형4.png" 
          alt="" 
          width={40} 
          height={40}
          className="opacity-30"
        />
      </motion.div>
      
      {/* 원형 도형들 */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[15%] right-[35%] w-16 h-16 z-10"
      >
        <Image 
          src="/assets/symbols/도형5.png" 
          alt="" 
          width={64} 
          height={64}
          className="opacity-30"
        />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[40%] left-[30%] w-14 h-14 z-10"
      >
        <Image 
          src="/assets/symbols/도형7.png" 
          alt="" 
          width={56} 
          height={56}
          className="opacity-40"
        />
      </motion.div>
      
      {/* 삼각형 도형 */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[45%] left-[5%] w-20 h-20 z-10"
      >
        <Image 
          src="/assets/symbols/도형3.png" 
          alt="" 
          width={80} 
          height={80}
          className="opacity-35"
        />
      </motion.div>
      
      {/* 추가 작은 도형들 */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-[60%] right-[5%] w-12 h-12 z-10"
      >
        <Image 
          src="/assets/symbols/도형6.png" 
          alt="" 
          width={48} 
          height={48}
          className="opacity-40"
        />
      </motion.div>
      
      {/* 메인 콘텐츠 */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        {/* 로고 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-8 left-8 flex items-center gap-4"
        >
          <Image src="/assets/symbols/52g로고.png" alt="52g" width={50} height={25} className="h-7 w-auto opacity-80" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-8 right-8"
        >
          <Image src="/assets/symbols/GS로고.png" alt="GS" width={70} height={35} className="h-9 w-auto opacity-80" />
        </motion.div>
        
        {/* 메인 타이틀 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
          className="text-center relative"
        >
          {/* 상단 텍스트 */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-tight mb-16"
          >
            제4회 GS그룹 해커톤
          </motion.p>
          
          {/* 메인 타이틀 그룹 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            {/* PLAI 타이틀 */}
            <h1 className="relative mb-12">
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[10rem] md:text-[12rem] lg:text-[14rem] font-black leading-[0.8] tracking-tighter"
                style={{
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #4a4a4a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                PLAI
              </motion.span>
              
            </h1>
            
            {/* with 텍스트 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center gap-6 text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="font-light text-gray-600 italic">with</span>
              <div className="relative">
                <SimpleWordSwitcher 
                  words={switchWords}
                  className="font-black tracking-tight"
                />
                {/* 미니멀한 포인트 */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-0 left-0 h-[3px] bg-[#FF5500] origin-left"
                />
              </div>
            </motion.div>
          </motion.div>
          
          
          {/* 부가 설명 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="max-w-2xl mx-auto mb-12"
            style={{ marginTop: '60px' }}
          >
            <p className="text-xl md:text-2xl text-gray-600 font-light" style={{ lineHeight: '2' }}>
              우리가 함께 PLAI하면, <span className="font-semibold text-gray-800">그곳이 바로 플레이그라운드</span>
            </p>
          </motion.div>
        </motion.div>
        
        {/* CTA 버튼 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-6">
            {/* 메인 CTA 버튼 */}
            <motion.a
              href="https://form.typeform.com/to/GX5MGuZ9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-[#FF5500] text-white rounded-full font-bold text-xl transition-all hover:bg-[#FF4400] shadow-2xl"
              style={{
                boxShadow: '0 20px 40px rgba(255, 85, 0, 0.3)'
              }}
            >
              <span>지금 신청하기</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                →
              </motion.span>
              
              {/* 버튼 광택 효과 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                style={{ clipPath: 'inset(0 round 9999px)' }}
              />
            </motion.a>
            
            {/* 부가 정보 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-sm text-gray-600"
            >
              참가 신청 마감: 8월 6일(수)
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}