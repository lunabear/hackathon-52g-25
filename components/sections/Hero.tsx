"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import SimpleWordSwitcher from "@/components/ui/SimpleWordSwitcher"
import EventModal from "@/components/ui/EventModal"
import { useParticipantCount } from "@/hooks/useParticipantCount"
import { MENU_CONFIG } from "@/lib/menuConfig"

const switchWords = ["GenAI", "Everyone", "Innovation", "Future", "Together", "Vibe"]

// 일정 데이터 정의
const schedules = [
  {
    name: "참여자 모집",
    startDate: new Date("2025-07-17T00:00:00+09:00"),
    endDate: new Date("2025-08-06T23:59:59+09:00"),
    label: "참여자 모집 마감까지",
  },
  {
    name: "확정자 발표",
    startDate: new Date("2025-08-11T00:00:00+09:00"),
    endDate: new Date("2025-08-11T23:59:59+09:00"),
    label: "확정자 발표까지",
  },
  {
    name: "리모트 리그",
    startDate: new Date("2025-08-13T00:00:00+09:00"),
    endDate: new Date("2025-08-27T23:59:59+09:00"),
    label: "리모트 리그 시작까지",
    description: "원하는 시간과 장소에서 PLAI⚽️",
  },
  {
    name: "필드 리그",
    startDate: new Date("2025-09-08T00:00:00+09:00"),
    endDate: new Date("2025-09-09T23:59:59+09:00"),
    label: "필드 리그 시작까지",
    description: "웨스틴 서울 파르나스에서 PLAI⚽️",
  },
  {
    name: "챔피언스리그",
    startDate: new Date("2025-09-29T00:00:00+09:00"),
    endDate: new Date("2025-09-29T23:59:59+09:00"),
    label: "챔피언스리그까지",
  },
]

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [currentSchedule, setCurrentSchedule] = useState<{
    name: string
    label: string
    isOngoing: boolean
    description?: string
  } | null>(null)

  // 신청자 수 데이터
  const { count: participantCount, isLoading: isLoadingCount } = useParticipantCount()

  // 이벤트 모달 상태
  const [showEventModal, setShowEventModal] = useState(false)

  // 이벤트 모달 자동 표시 (첫 방문 시) - 비활성화됨
  // useEffect(() => {
  //   const hasSeenModal = localStorage.getItem('plai-event-modal-shown')
  //   if (!hasSeenModal) {
  //     // 즉시 모달 표시
  //     setShowEventModal(true)
  //   }
  // }, [])

  // 모달 닫기 핸들러 (localStorage 저장하지 않음)
  const handleCloseEventModal = () => {
    setShowEventModal(false)
  }

  // "다시 보지 않음" 핸들러 (localStorage에 저장)
  const handleDontShowAgain = () => {
    setShowEventModal(false)
    localStorage.setItem("plai-event-modal-shown", "true")
  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()

      // 현재 진행 중이거나 다음 일정 찾기
      let targetSchedule = null
      let isOngoing = false

      for (const schedule of schedules) {
        if (now >= schedule.startDate && now <= schedule.endDate) {
          // 현재 진행 중인 일정
          targetSchedule = schedule
          isOngoing = true
          break
        } else if (now < schedule.startDate) {
          // 다음 일정
          targetSchedule = schedule
          isOngoing = false
          break
        }
      }

      if (!targetSchedule) {
        // 모든 일정이 종료됨
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setCurrentSchedule(null)
        return
      }

      // 목표 날짜 설정 (진행 중이면 종료일, 아니면 시작일)
      const targetDate = isOngoing ? targetSchedule.endDate : targetSchedule.startDate
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setCurrentSchedule({
          name: targetSchedule.name,
          label: targetSchedule.label,
          isOngoing,
          description: targetSchedule.description,
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

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
          <Image src="/assets/symbols/soccer-field.png" alt="" fill className="object-cover object-top opacity-70" />
        </div>

        {/* 3D 요소들 - 완전 고정 */}
        <div className="absolute top-[20%] left-[5%] sm:left-[10%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Image
            src="/assets/symbols/shape1.png"
            alt=""
            width={160}
            height={160}
            className="opacity-70 w-full h-full object-contain"
          />
        </div>

        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-[8%] left-[40%] sm:left-[45%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        >
          <Image
            src="/assets/symbols/flag.png"
            alt=""
            width={96}
            height={96}
            className="opacity-60 w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-[30%] left-[10%] sm:left-[15%] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        >
          <Image
            src="/assets/symbols/soccer-ball.png"
            alt=""
            width={112}
            height={112}
            className="opacity-50 w-full h-full object-contain"
          />
        </motion.div>

        <div className="absolute top-[10%] right-[5%] sm:right-[8%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Image
            src="/assets/symbols/trophy.png"
            alt=""
            width={160}
            height={160}
            className="opacity-60 w-full h-full object-contain"
          />
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-[25%] right-[5%] sm:right-[10%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
        >
          <Image
            src="/assets/symbols/whistle.png"
            alt=""
            width={128}
            height={128}
            className="opacity-50 w-full h-full object-contain"
          />
        </motion.div>

        <div className="absolute top-[35%] right-[10%] sm:right-[15%] w-24 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24">
          <Image
            src="/assets/symbols/shape11.png"
            alt=""
            width={144}
            height={96}
            className="opacity-60 w-full h-full object-contain"
          />
        </div>

        {/* 작은 장식 도형들 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-[30%] left-[20%] sm:left-[25%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        >
          <Image
            src="/assets/symbols/shape4.png"
            alt=""
            width={48}
            height={48}
            className="opacity-40 w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-[50%] right-[25%] sm:right-[30%] w-8 h-8 sm:w-10 sm:h-10"
        >
          <Image
            src="/assets/symbols/shape4.png"
            alt=""
            width={40}
            height={40}
            className="opacity-30 w-full h-full object-contain"
          />
        </motion.div>

        <div className="absolute top-[15%] right-[30%] sm:right-[35%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          <Image
            src="/assets/symbols/shape5.png"
            alt=""
            width={64}
            height={64}
            className="opacity-30 w-full h-full object-contain"
          />
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-[40%] left-[25%] sm:left-[30%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        >
          <Image
            src="/assets/symbols/shape7.png"
            alt=""
            width={56}
            height={56}
            className="opacity-40 w-full h-full object-contain"
          />
        </motion.div>

        <div className="absolute top-[45%] left-[2%] sm:left-[5%] w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20">
          <Image
            src="/assets/symbols/shape3.png"
            alt=""
            width={80}
            height={80}
            className="opacity-35 w-full h-full object-contain"
          />
        </div>

        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-[60%] right-[2%] sm:right-[5%] w-10 h-10 sm:w-12 sm:h-12"
        >
          <Image
            src="/assets/symbols/shape6.png"
            alt=""
            width={48}
            height={48}
            className="opacity-40 w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* 스크롤 가능한 콘텐츠 */}
      <div className="relative z-20 overflow-x-hidden">
        {/* 첫 번째 섹션 - 메인 히어로 */}
        <section className="min-h-screen px-4 overflow-x-hidden" style={{ minHeight: '100vh' }}>
          <div className="text-center relative w-full max-w-4xl mx-auto pt-24 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16">
            {/* 안전한 영역 확보 - 모바일에서 상단 잘림 방지 */}
            <div className="h-8 sm:h-8 md:h-12 lg:h-16" />

            {/* 메인 타이틀 그룹 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              {/* PLAI 타이틀 */}
              <h1 className="relative mb-8 sm:mb-12 inline-block">
                <Image
                  src="/assets/PLAI-logo.png"
                  alt="PLAI"
                  width={448}
                  height={160}
                  className="block w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem] xl:w-[26rem] h-auto"
                  style={{
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))",
                  }}
                />

                {/* 미소 캐릭터 - I의 오른쪽에 배치 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute block z-10"
                  style={{
                    right: "-21%",
                    bottom: "-5%",
                    width: "45%",
                    height: "45%",
                  }}
                >
                  <Image
                    src="/assets/miso/miso-play.png"
                    alt="Miso character"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15)) drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
                    }}
                    priority
                  />
                </motion.div>
              </h1>

              {/* with 텍스트 */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <span className="font-medium text-gray-700 italic">with</span>
                <div className="relative">
                  <SimpleWordSwitcher words={switchWords} className="font-black tracking-tight" />
                  {/* 미니멀한 포인트 */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
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
              style={{ marginTop: "30px" }}
            >
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium px-4 mb-6"
                style={{ lineHeight: "1.8" }}
              >
                <span className="font-bold text-gray-900">PLAI Everywhere, PLAI Together!</span>
              </p>
              
              {/* 갤러그 스타일 아케이드 카운터 */}
              <div className="flex justify-center mb-6">
                                <div className="relative arcade-display px-6 py-3 bg-red-600 border-2 border-red-700 rounded-lg">
                  {/* 미세한 텍스처 배경 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-lg"></div>
                  
                  <div className="relative z-10 flex items-center gap-3 text-center">
                    {/* LIVE 인디케이터 */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-white tracking-wide uppercase">
                        LIVE
                      </span>
                    </div>
                    
                    {/* 메인 카운터 */}
                    <div className="flex items-center gap-2">
                      {isLoadingCount ? (
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-white rounded-sm animate-bounce" 
                               style={{ animationDelay: '0ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-sm animate-bounce" 
                               style={{ animationDelay: '200ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-sm animate-bounce" 
                               style={{ animationDelay: '400ms' }}></div>
                        </div>
                      ) : (
                        <>
                          <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tabular-nums tracking-tight">
                            {participantCount.toLocaleString('ko-KR')}
                          </span>
                          <span className="text-sm font-bold text-white/90">
                            명 신청완료
                          </span>
                        </>
                      )}
                    </div>
                    
                    {/* 만명 돌파 배지 */}
                    {!isLoadingCount && participantCount > 10000 && (
                      <div className="flex items-center gap-1">
                        <span className="bg-yellow-400 text-red-800 text-xs font-black px-2 py-1 rounded-md">
                          🔥 만명 돌파!
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
                            {/* 클린한 빨간 배경 스타일 */}
              <style jsx>{`
                .arcade-display {
                  box-shadow: 
                    0 8px 32px rgba(220, 38, 38, 0.3),
                    0 4px 16px rgba(220, 38, 38, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
              `}</style>
            </motion.div>

            {/* CTA 버튼 영역 */}
            <div
              id="plai-event"
              style={{ marginTop: "24px", position: "relative", zIndex: 30 }}
              className="sm:mt-12 md:mt-16 lg:mt-20"
            >
              {/* 모든 버튼을 한 줄로 배치 */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4">
                {/* 주요 CTA - 참가 신청 버튼 */}
                <a
                  href="https://form.typeform.com/to/GX5MGuZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-64 lg:w-52"
                >
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 ease-out group-hover:from-slate-800 group-hover:to-slate-700 group-hover:shadow-2xl group-hover:-translate-y-1 group-active:translate-y-0 group-active:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-center block text-sm lg:text-base tracking-wide whitespace-nowrap">
                      참가 신청하기
                    </span>
                  </div>
                </a>

                {/* 사전 학습 가이드 버튼 - 조건부 렌더링 */}
                {MENU_CONFIG.SHOW_GUIDE && (
                  <Link href="/guide" className="group relative w-64 lg:w-52">
                    <div className="bg-white border-2 border-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 ease-out group-hover:border-slate-300 group-hover:bg-slate-50 group-hover:shadow-2xl group-hover:-translate-y-1 group-active:translate-y-0 group-active:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-center block text-sm lg:text-base tracking-wide whitespace-nowrap">
                        📚 사전 학습 가이드
                      </span>
                    </div>
                  </Link>
                )}

                {/* 디스코드 소통채널 버튼 */}
                <a
                  href="https://discord.gg/JvSFSU3e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-64 lg:w-52"
                >
                  <div className="bg-white border-2 border-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 ease-out group-hover:border-slate-300 group-hover:bg-slate-50 group-hover:shadow-2xl group-hover:-translate-y-1 group-active:translate-y-0 group-active:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-center block text-sm lg:text-base tracking-wide whitespace-nowrap flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      해커톤 소통채널
                    </span>
                  </div>
                </a>

                {/* PLAI Event 버튼 */}
                <Link href="/plai-event" className="group relative w-64 lg:w-52">
                  <div className="bg-white border-2 border-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 ease-out group-hover:border-slate-300 group-hover:bg-slate-50 group-hover:shadow-2xl group-hover:-translate-y-1 group-active:translate-y-0 group-active:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-center block text-sm lg:text-base tracking-wide whitespace-nowrap">
                      🎨 PLAI Event
                    </span>
                  </div>
                </Link>
              </div>

              {/* 카운트다운 타이머 */}
              {currentSchedule && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-6 text-center"
                >
                  {/* 카운트다운 표시 */}
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-gray-600 font-semibold">{currentSchedule.label}</span>
                    <span className="text-gray-900 font-black">
                      {timeLeft.days > 0 && `${timeLeft.days}일 `}
                      {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* 이벤트 모달 */}
      <EventModal isOpen={showEventModal} onClose={handleCloseEventModal} onDontShowAgain={handleDontShowAgain} />
    </div>
  )
}
