"use client"

import { useState, useEffect, useCallback } from "react"
import Background from "@/components/ui/Background"
import PageTransition from "@/components/ui/PageTransition"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import WorkModal, { WorkItem } from "@/components/ui/WorkModal"
import EventModal from "@/components/ui/EventModal"

// ChannelIO 타입 정의
declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void
  }
}

// 출품작 타입 정의는 WorkModal에서 import

// 구글 시트 데이터 타입
interface SheetData {
  Category: string
  Name: string
  File: string
  Like: number
}

// 카테고리 데이터
const categories = [
  {
    id: "video",
    title: "영상 만들기",
    subtitle: "오늘은 내가 인급동 유튜버",
    description: "AI와 함께 브이로그부터 광고 영상까지!\n누구나 쉽게 크리에이터가 될 수 있어요",
    image: "/assets/miso/miso-team.gif",
    embedUrl: "https://padlet.com/gs52group2/PLAIvideo",
    bgColor: "bg-blue-50",
  },
  {
    id: "webtoon",
    title: "웹툰 그리기",
    subtitle: "오늘은 내가 웹툰작가",
    description: "스토리만 있으면 OK!\nAI가 그림 실력 걱정은 덜어드릴게요",
    image: "/assets/miso/miso-protagonist.png",
    embedUrl: "https://padlet.com/gs52group2/PLAIcartoon",
    bgColor: "bg-purple-50",
  },
  {
    id: "music",
    title: "음악 만들기",
    subtitle: "오늘은 내가 케이팝 데몬헌터스",
    description: "흥얼거리던 멜로디가 진짜 노래로!\n당신의 감성을 AI가 완성해드려요",
    image: "/assets/miso/miso-music.png",
    embedUrl: "https://padlet.com/gs52group2/PLAImusic",
    bgColor: "bg-green-50",
  },
  {
    id: "image",
    title: "그림 그리기",
    subtitle: "오늘은 내가 화가!",
    description: "상상하는 모든 걸 그림으로!\n붓을 들지 않아도 작품이 완성돼요",
    image: "/assets/miso/miso-picaso.png",
    embedUrl: "https://padlet.com/gs52group2/PLAIpicture",
    bgColor: "bg-orange-50",
  },
]

// 구글 드라이브 링크를 썸네일 URL로 변환
const getDriveThumbnail = (driveUrl: string): string => {
  const fileIdMatch = driveUrl.match(/\/d\/(.+?)\//)
  if (fileIdMatch) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w400`
  }
  return driveUrl
}

// 카테고리 매핑
const mapCategoryToType = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'picture':
      return 'image'
    case 'video':
      return 'video'
    case 'cartoon':
      return 'webtoon'
    case 'song':
      return 'music'
    default:
      return 'image'
  }
}

// CSV 파싱 헬퍼 함수
const parseCSVLine = (line: string): string[] => {
  const result: string[] = []
  let current = ''
  let inQuotes = false
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"' && (i === 0 || line[i - 1] === ',')) {
      inQuotes = true
    } else if (char === '"' && inQuotes) {
      if (i + 1 < line.length && line[i + 1] === '"') {
        current += '"'
        i++ // 다음 따옴표 건너뛰기
      } else {
        inQuotes = false
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  
  result.push(current.trim())
  return result
}

// 구글 시트에서 데이터 가져오기
const fetchGoogleSheetData = async (): Promise<WorkItem[]> => {
  try {
    // 구글 시트를 CSV로 가져오기
    const sheetId = '1SngtFML7WHPa_pTI6DrSECzRw8AeUm-QcuIAlac5q4Q'
    const response = await fetch(`https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`)
    
    if (!response.ok) {
      throw new Error('시트 데이터를 가져올 수 없습니다.')
    }
    
    const csvText = await response.text()
    const lines = csvText.split('\n').filter(line => line.trim())
    
    if (lines.length < 2) {
      console.warn('데이터가 충분하지 않습니다.')
      return []
    }
    
    const data: SheetData[] = []
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue
      
      const values = parseCSVLine(line)
      if (values.length >= 4) {
        // 빈 값 체크
        const category = values[0]?.trim()
        const name = values[1]?.trim()
        const file = values[2]?.trim()
        const like = parseInt(values[3]?.trim()) || 0
        
        if (category && name && file) {
          data.push({
            Category: category,
            Name: name,
            File: file,
            Like: like
          })
        }
      }
    }
    
    console.log(`구글 시트에서 ${data.length}개의 출품작을 불러왔습니다.`)
    
    // WorkItem 형태로 변환
    const workItems: WorkItem[] = data
      .map((item, index) => {
        const type = mapCategoryToType(item.Category)
        let thumbnail = ''
        
        // 썸네일 URL 결정
        if (type === 'music') {
          // 음악은 항상 음반 이미지 사용 (인덱스에 따라 번갈아가며)
          thumbnail = index % 2 === 0 ? "/assets/vinyl-record.png" : "/assets/vinyl-record2.png"
        } else if (item.File.includes('drive.google.com')) {
          thumbnail = getDriveThumbnail(item.File)
        } else if (item.File.includes('padletusercontent.com')) {
          thumbnail = item.File
        } else {
          // 기본 이미지 사용 
          const defaultImages = {
            video: "/assets/miso/miso-team.gif",
            webtoon: "/assets/miso/miso-protagonist.png", 
            image: "/assets/miso/miso-picaso.png",
            music: "/assets/vinyl-record.png" // 기본값
          }
          thumbnail = defaultImages[type as keyof typeof defaultImages] || "/assets/miso/miso-no-idea.png"
        }
        
        // 이름에서 제목과 작성자 분리
        const nameParts = item.Name.split('_')
        const title = nameParts.length > 1 ? nameParts[nameParts.length - 1] : item.Name
        const author = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '익명'
        
        return {
          id: `${type}-${index}-${Date.now()}`,
          title,
          author,
          thumbnail,
          type,
          likes: item.Like,
          fileUrl: item.File
        }
      })
    
    return workItems
  } catch (error) {
    console.error('구글 시트 데이터 로드 실패:', error)
    return []
  }
}

export default function PlaiEventPage() {
  const [showGuideModal, setShowGuideModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[0] | null>(null)
  const [showEventEndModal, setShowEventEndModal] = useState(false)
  
  // 당첨자 발표 모달 상태
  const [showWinnerModal, setShowWinnerModal] = useState(false)
  
  // 동적 데이터 상태
  const [works, setWorks] = useState<WorkItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  // 작품 모달 상태
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)
  const [showWorkModal, setShowWorkModal] = useState(false)

  // 이미지 로딩 상태
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  // 작품 클릭 핸들러
  const handleWorkClick = (work: WorkItem) => {
    // 음악은 새창으로 열기
    if (work.type === 'music') {
      window.open(work.fileUrl, '_blank', 'noopener,noreferrer')
      return
    }
    
    // 다른 타입은 모달로 열기
    setSelectedWork(work)
    setShowWorkModal(true)
  }

  const handleCloseWorkModal = () => {
    setShowWorkModal(false)
    setSelectedWork(null)
  }

  // 이미지 프리로딩 함수
  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new window.Image()
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(src))
        resolve()
      }
      img.onerror = () => resolve() // 에러가 나도 계속 진행
      img.src = src
    })
  }, [])

  // 주변 이미지들 프리로딩
  const preloadAdjacentImages = useCallback((currentIndex: number, maxWorks: number) => {
    const videoWorks = works.filter(work => work.type === 'video')
    const webtoonWorks = works.filter(work => work.type === 'webtoon')
    const imageWorks = works.filter(work => work.type === 'image')
    const musicWorks = works.filter(work => work.type === 'music')
    
    const categoriesToPreload = [
      { works: videoWorks, name: 'video' },
      { works: webtoonWorks, name: 'webtoon' },
      { works: imageWorks, name: 'image' },
      { works: musicWorks, name: 'music' }
    ]

    // 현재 + 앞뒤 2개씩 총 5개 인덱스
    const indexesToPreload = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + maxWorks) % maxWorks
      indexesToPreload.push(index)
    }

    indexesToPreload.forEach(index => {
      categoriesToPreload.forEach(category => {
        if (category.works.length > 0) {
          const work = category.works[index % category.works.length]
          if (work?.thumbnail) {
            preloadImage(work.thumbnail)
          } else if (category.name === 'music') {
            // 음악 카테고리는 기본 이미지를 인덱스에 따라 번갈아가며 프리로딩
            const vinylImage = index % 2 === 0 ? "/assets/vinyl-record.png" : "/assets/vinyl-record2.png"
            preloadImage(vinylImage)
          }
        }
      })
    })
  }, [works, preloadImage])
  
  // 모든 카테고리가 동시에 전환되도록 하나의 인덱스 상태 사용
  const [currentIndex, setCurrentIndex] = useState(0)

  // D-DAY 카운트다운 상태
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // 당첨자 발표 모달 자동 표시 (이미지 로딩과 무관하게 즉시)
  useEffect(() => {
    const hasSeenWinnerModal = localStorage.getItem('plai-event-winner-modal-shown')
    if (!hasSeenWinnerModal) {
      setShowWinnerModal(true)
    }
  }, [])

  // 구글 시트 데이터 로드
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      const data = await fetchGoogleSheetData()
      setWorks(data)
      setIsLoading(false)
      
      // 카테고리 이미지들 프리로딩
      categories.forEach(category => {
        if (category.image) {
          preloadImage(category.image)
        }
      })
      
      // 음반 이미지들 프리로딩
      preloadImage("/assets/vinyl-record.png")
      preloadImage("/assets/vinyl-record2.png")
    }
    
    loadData()
    
    // 5분마다 데이터 새로고침
    const interval = setInterval(loadData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [preloadImage])

  // 카테고리별 작품 분류
  const worksByCategory = {
    video: works.filter(work => work.type === 'video'),
    webtoon: works.filter(work => work.type === 'webtoon'),
    image: works.filter(work => work.type === 'image'),
    music: works.filter(work => work.type === 'music'),
  }

  // D-DAY 카운트다운 로직
  useEffect(() => {
    const calculateTimeLeft = () => {
      // 8월 6일 자정
      const targetDate = new Date("2025-08-06T23:59:59+09:00")
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
        // 이벤트 종료 시 모달 표시 (localStorage로 한 번만 표시되도록 관리)
        const hasShownEndModal = localStorage.getItem('plai-event-end-modal-shown')
        if (!hasShownEndModal) {
          setShowEventEndModal(true)
          localStorage.setItem('plai-event-end-modal-shown', 'true')
        }
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // 자동 슬라이드 효과 (카테고리별 최대 작품 수에 맞춰)
  useEffect(() => {
    const maxWorks = Math.max(
      worksByCategory.video.length,
      worksByCategory.webtoon.length,
      worksByCategory.image.length,
      worksByCategory.music.length
    )
    
    if (maxWorks > 0) {
      // 초기 프리로딩
      preloadAdjacentImages(currentIndex, maxWorks)
      
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % maxWorks
          // 다음 인덱스로 변경하기 전에 주변 이미지들 프리로딩
          preloadAdjacentImages(nextIndex, maxWorks)
          return nextIndex
        })
      }, 7000) // 4초에서 7초로 증가
      return () => clearInterval(timer)
    }
  }, [works, preloadAdjacentImages, currentIndex, worksByCategory.video.length, worksByCategory.webtoon.length, worksByCategory.image.length, worksByCategory.music.length])

  // 가이드 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (showGuideModal) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO("hideChannelButton")
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [showGuideModal])

  // 카테고리 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (selectedCategory) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO("hideChannelButton")
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [selectedCategory])

  // 작품 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (showWorkModal) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO("hideChannelButton")
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [showWorkModal])

  // 이벤트 종료 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (showEventEndModal) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO("hideChannelButton")
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [showEventEndModal])

  // 당첨자 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (showWinnerModal) {
      // 모달 열림 시 채널톡 버튼 숨기기
      if (window.ChannelIO) {
        window.ChannelIO("hideChannelButton")
      }
    } else {
      // 모달 닫힘 시 채널톡 버튼 다시 보이기 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [showWinnerModal])

  // 당첨자 모달 핸들러들
  const handleCloseWinnerModal = () => {
    setShowWinnerModal(false)
  }

  const handleDontShowWinnerModalAgain = () => {
    setShowWinnerModal(false)
    localStorage.setItem('plai-event-winner-modal-shown', 'true')
  }

  return (
    <main
      className="min-h-screen relative"
      style={{ fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif" }}
    >
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-7xl mx-auto">
            {/* 헤더 */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                🖼️ PLAI 갤러리: <br className="sm:hidden" />
                내가 만든 AI작품을 자랑해보세요! 🎨
              </h1>
              {/* 설명과 버튼 레이아웃 */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="space-y-2 md:space-y-3">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed">
                        📢 &ldquo;웃기고 짠하고 할 말 많은 우리네 회사생활, AI로 보여주세요!&rdquo;
                      </p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed">
                        총 상금 💸100만원이 쏟아지는 PLAI이벤트! 나도 김햄찌가 될 수 있다!
                      </p>
                    </div>
                  </div>

                  {/* 구분선 */}
                  <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                  {/* 작성 가이드 보기 버튼 */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setShowGuideModal(true)}
                      className="group relative inline-flex items-center gap-2 md:gap-3 bg-slate-900 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden text-sm md:text-base"
                    >
                      {/* 미묘한 샤인 효과 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10 text-base md:text-lg">🗓️</span>
                      <span className="relative z-10">이벤트 가이드</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 이벤트 출품작 섹션 - 3열 슬라이드로 고도화 */}
            <div className="max-w-7xl mx-auto mt-12 md:mt-16 mb-12 md:mb-16">
              {/* D-DAY 카운트다운 / 이벤트 종료 안내 */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl px-4 py-2 mb-6">
                  <span className="text-lg">🎉</span>
                  {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
                    <>
                      <span className="text-sm font-medium text-red-600">이벤트 마감까지</span>
                      <div className="flex items-center gap-1 text-sm font-black text-red-700">
                        {timeLeft.days > 0 && (
                          <>
                            <span>{timeLeft.days}일</span>
                            <span className="text-red-400">:</span>
                          </>
                        )}
                        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                        <span className="text-red-400">:</span>
                        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                        <span className="text-red-400">:</span>
                        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                      </div>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowWinnerModal(true)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-4 decoration-amber-300/70 hover:decoration-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-sm px-0 py-0"
                    >
                      <span>당첨자 확인하기</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.42 6.63 7.02.61-5.24 4.54 1.6 6.97L12 17.77 6.2 20.75l1.6-6.97L2.56 9.24l7.02-.61L12 2z" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* 구분선 */}
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    🎨 이벤트 출품작
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 font-medium">
                    동료들의 창의적인 AI 작품들을 감상해보세요
                  </p>
                </motion.div>
              </div>

              {/* PC: 3열 그리드 / 모바일: 1열 슬라이드 */}
              <div className="relative">
                {/* 로딩 상태 */}
                {isLoading && (
                  <div className="flex items-center justify-center py-12">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-600 font-medium">출품작을 불러오는 중...</span>
                    </div>
                  </div>
                )}

                {/* 데이터가 없을 때 */}
                {!isLoading && works.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎭</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">아직 출품작이 없습니다</h3>
                    <p className="text-gray-600">첫 번째 출품자가 되어보세요!</p>
                  </div>
                )}

                {/* PC 버전 - 3열 그리드 */}
                {!isLoading && works.length > 0 && (
                  <div className="hidden md:grid md:grid-cols-4 gap-6">
                    {/* 영상 카테고리 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="gallery-item"
                    >
                      <div className="h-auto flex items-center">
                        {worksByCategory.video.length > 0 ? (
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              className="w-full"
                            >
                              <div 
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer work-card aspect-square relative shadow-sm"
                                onClick={() => worksByCategory.video[currentIndex % worksByCategory.video.length] && handleWorkClick(worksByCategory.video[currentIndex % worksByCategory.video.length])}
                              >
                                <div className="relative h-full overflow-hidden bg-gray-100">
                                  {/* 로딩 스켈레톤 */}
                                  {!loadedImages.has(worksByCategory.video[currentIndex % worksByCategory.video.length]?.thumbnail || '') && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                                  )}
                                  
                                  {/* 동영상 자동재생을 위한 조건부 렌더링 */}
                                  {worksByCategory.video[currentIndex % worksByCategory.video.length]?.fileUrl?.includes('hailuoai.video') ? (
                                    <iframe
                                      src={worksByCategory.video[currentIndex % worksByCategory.video.length]?.fileUrl}
                                      className="w-full h-full object-cover"
                                      frameBorder="0"
                                      allow="autoplay; encrypted-media"
                                      allowFullScreen
                                    />
                                  ) : (
                                    <Image
                                      src={worksByCategory.video[currentIndex % worksByCategory.video.length]?.thumbnail || "/assets/miso/miso-no-idea.png"}
                                      alt={worksByCategory.video[currentIndex % worksByCategory.video.length]?.title || "No Title"}
                                      fill
                                      className={`object-cover object-top group-hover:scale-105 transition-all duration-500 ${
                                        loadedImages.has(worksByCategory.video[currentIndex % worksByCategory.video.length]?.thumbnail || '') 
                                          ? 'opacity-100' 
                                          : 'opacity-0'
                                      }`}
                                      unoptimized={worksByCategory.video[currentIndex % worksByCategory.video.length]?.thumbnail?.endsWith('.gif')}
                                      priority={currentIndex < 3}
                                      onLoad={() => {
                                        const src = worksByCategory.video[currentIndex % worksByCategory.video.length]?.thumbnail
                                        if (src) setLoadedImages(prev => new Set(prev).add(src))
                                      }}
                                    />
                                  )}
                                  {/* 제목 태그 - 좌측 상단 */}
                                  <div className="absolute top-3 left-3">
                                    <div className="bg-black/80 backdrop-blur-md text-white px-3 py-2 rounded-lg">
                                      <h5 className="font-bold text-sm">{worksByCategory.video[currentIndex % worksByCategory.video.length]?.title || "No Title"}</h5>
                                    </div>
                                  </div>

                                  {/* 재생 오버레이 */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-0 h-0 border-l-[7px] border-l-blue-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1"></div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* 카테고리 태그 - 좌측 하단 */}
                                  <div className="absolute bottom-3 left-3">
                                    <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                      <span>🎬</span>
                                      <span className="font-medium">영상</span>
                                    </div>
                                  </div>

                                  {/* 좋아요 태그 - 우측 하단 */}
                                  <div className="absolute bottom-3 right-3">
                                    <div className="bg-red-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-red-400/50">
                                      <div className="flex items-center gap-1.5 text-xs font-medium">
                                        <span>❤️</span>
                                        <span>{worksByCategory.video[currentIndex % worksByCategory.video.length]?.likes || 0}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        ) : (
                          <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl mb-2">🎬</div>
                              <p className="text-sm text-gray-500">영상 작품을 기다리는 중...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* 웹툰 카테고리 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="gallery-item"
                    >
                      <div className="h-auto flex items-center">
                        {worksByCategory.webtoon.length > 0 ? (
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              className="w-full"
                            >
                              <div 
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer work-card aspect-square relative shadow-sm"
                                onClick={() => worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length] && handleWorkClick(worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length])}
                              >
                                <div className="relative h-full overflow-hidden bg-gray-100">
                                  {/* 로딩 스켈레톤 */}
                                  {!loadedImages.has(worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.thumbnail || '') && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                                  )}
                                  
                                  <Image
                                    src={worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.thumbnail || "/assets/miso/miso-no-idea.png"}
                                    alt={worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.title || "No Title"}
                                    fill
                                    className={`object-cover object-top group-hover:scale-105 transition-all duration-500 ${
                                      loadedImages.has(worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.thumbnail || '') 
                                        ? 'opacity-100' 
                                        : 'opacity-0'
                                    }`}
                                    priority={currentIndex < 3}
                                    onLoad={() => {
                                      const src = worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.thumbnail
                                      if (src) setLoadedImages(prev => new Set(prev).add(src))
                                    }}
                                  />
                                  {/* 제목 태그 - 좌측 상단 */}
                                  <div className="absolute top-3 left-3">
                                    <div className="bg-black/80 backdrop-blur-md text-white px-3 py-2 rounded-lg">
                                      <h5 className="font-bold text-sm">{worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.title || "No Title"}</h5>
                                    </div>
                                  </div>

                                  {/* 재생 오버레이 */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-0 h-0 border-l-[7px] border-l-purple-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1"></div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* 카테고리 태그 - 좌측 하단 */}
                                  <div className="absolute bottom-3 left-3">
                                    <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                      <span>📚</span>
                                      <span className="font-medium">웹툰</span>
                                    </div>
                                  </div>

                                  {/* 좋아요 태그 - 우측 하단 */}
                                  <div className="absolute bottom-3 right-3">
                                    <div className="bg-red-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-red-400/50">
                                      <div className="flex items-center gap-1.5 text-xs font-medium">
                                        <span>❤️</span>
                                        <span>{worksByCategory.webtoon[currentIndex % worksByCategory.webtoon.length]?.likes || 0}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        ) : (
                          <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl mb-2">📚</div>
                              <p className="text-sm text-gray-500">웹툰 작품을 기다리는 중...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* 그림 카테고리 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="gallery-item"
                    >
                      <div className="h-auto flex items-center">
                        {worksByCategory.image.length > 0 ? (
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              className="w-full"
                            >
                              <div 
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer work-card aspect-square relative shadow-sm"
                                onClick={() => worksByCategory.image[currentIndex % worksByCategory.image.length] && handleWorkClick(worksByCategory.image[currentIndex % worksByCategory.image.length])}
                              >
                                <div className="relative h-full overflow-hidden bg-gray-100">
                                  {/* 로딩 스켈레톤 */}
                                  {!loadedImages.has(worksByCategory.image[currentIndex % worksByCategory.image.length]?.thumbnail || '') && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                                  )}
                                  
                                  <Image
                                    src={worksByCategory.image[currentIndex % worksByCategory.image.length]?.thumbnail || "/assets/miso/miso-no-idea.png"}
                                    alt={worksByCategory.image[currentIndex % worksByCategory.image.length]?.title || "No Title"}
                                    fill
                                    className={`object-cover object-top group-hover:scale-105 transition-all duration-500 ${
                                      loadedImages.has(worksByCategory.image[currentIndex % worksByCategory.image.length]?.thumbnail || '') 
                                        ? 'opacity-100' 
                                        : 'opacity-0'
                                    }`}
                                    priority={currentIndex < 3}
                                    onLoad={() => {
                                      const src = worksByCategory.image[currentIndex % worksByCategory.image.length]?.thumbnail
                                      if (src) setLoadedImages(prev => new Set(prev).add(src))
                                    }}
                                  />
                                  {/* 제목 태그 - 좌측 상단 */}
                                  <div className="absolute top-3 left-3">
                                    <div className="bg-black/80 backdrop-blur-md text-white px-3 py-2 rounded-lg">
                                      <h5 className="font-bold text-sm">{worksByCategory.image[currentIndex % worksByCategory.image.length]?.title || "No Title"}</h5>
                                    </div>
                                  </div>

                                  {/* 확대 오버레이 */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  {/* 카테고리 태그 - 좌측 하단 */}
                                  <div className="absolute bottom-3 left-3">
                                    <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                      <span>🎨</span>
                                      <span className="font-medium">그림</span>
                                    </div>
                                  </div>

                                  {/* 좋아요 태그 - 우측 하단 */}
                                  <div className="absolute bottom-3 right-3">
                                    <div className="bg-red-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-red-400/50">
                                      <div className="flex items-center gap-1.5 text-xs font-medium">
                                        <span>❤️</span>
                                        <span>{worksByCategory.image[currentIndex % worksByCategory.image.length]?.likes || 0}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        ) : (
                          <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl mb-2">🎨</div>
                              <p className="text-sm text-gray-500">그림 작품을 기다리는 중...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* 음악 카테고리 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="gallery-item"
                    >
                      <div className="h-auto flex items-center">
                        {worksByCategory.music.length > 0 ? (
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              className="w-full"
                            >
                              <div 
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer work-card aspect-square relative shadow-sm"
                                onClick={() => worksByCategory.music[currentIndex % worksByCategory.music.length] && handleWorkClick(worksByCategory.music[currentIndex % worksByCategory.music.length])}
                              >
                                <div className="relative h-full overflow-hidden bg-gray-100">
                                  {/* 로딩 스켈레톤 */}
                                  {!loadedImages.has(worksByCategory.music[currentIndex % worksByCategory.music.length]?.thumbnail || 
                                    (currentIndex % 2 === 0 ? "/assets/vinyl-record.png" : "/assets/vinyl-record2.png")) && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                                  )}
                                  
                                  <Image
                                    src={worksByCategory.music[currentIndex % worksByCategory.music.length]?.thumbnail || 
                                      (currentIndex % 2 === 0 ? "/assets/vinyl-record.png" : "/assets/vinyl-record2.png")}
                                    alt={worksByCategory.music[currentIndex % worksByCategory.music.length]?.title || "No Title"}
                                    fill
                                    className={`object-cover object-top group-hover:scale-105 transition-all duration-500 ${
                                      loadedImages.has(worksByCategory.music[currentIndex % worksByCategory.music.length]?.thumbnail || '') 
                                        ? 'opacity-100' 
                                        : 'opacity-0'
                                    }`}
                                    priority={currentIndex < 3}
                                    onLoad={() => {
                                      const src = worksByCategory.music[currentIndex % worksByCategory.music.length]?.thumbnail || 
                                        (currentIndex % 2 === 0 ? "/assets/vinyl-record.png" : "/assets/vinyl-record2.png")
                                      if (src) setLoadedImages(prev => new Set(prev).add(src))
                                    }}
                                  />
                                  {/* 제목 태그 - 좌측 상단 */}
                                  <div className="absolute top-3 left-3">
                                    <div className="bg-black/80 backdrop-blur-md text-white px-3 py-2 rounded-lg">
                                      <h5 className="font-bold text-sm">{worksByCategory.music[currentIndex % worksByCategory.music.length]?.title || "No Title"}</h5>
                                    </div>
                                  </div>

                                  {/* 바로가기 아이콘 - 항상 표시 */}
                                  <div className="absolute top-3 right-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    </div>
                                  </div>

                                  {/* 카테고리 태그 - 좌측 하단 */}
                                  <div className="absolute bottom-3 left-3">
                                    <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                      <span>🎵</span>
                                      <span className="font-medium">음악</span>
                                    </div>
                                  </div>

                                  {/* 좋아요 태그 - 우측 하단 */}
                                  <div className="absolute bottom-3 right-3">
                                    <div className="bg-red-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-red-400/50">
                                      <div className="flex items-center gap-1.5 text-xs font-medium">
                                        <span>❤️</span>
                                        <span>{worksByCategory.music[currentIndex % worksByCategory.music.length]?.likes || 0}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        ) : (
                          <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl mb-2">🎵</div>
                              <p className="text-sm text-gray-500">음악 작품을 기다리는 중...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 모바일 버전 - 1열 슬라이드 */}
                {!isLoading && works.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:hidden"
                  >
                    <Carousel 
                      className="w-full"
                      plugins={[Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]}
                    >
                      <CarouselContent>
                        {/* 모든 작품을 하나의 슬라이드로 합침 */}
                        {[...worksByCategory.video, ...worksByCategory.webtoon, ...worksByCategory.image, ...worksByCategory.music].map((work, index) => (
                          <CarouselItem key={work.id} className="basis-full pl-4">
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.05 }}
                              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                              onClick={() => handleWorkClick(work)}
                                                          >
                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                  {/* 로딩 스켈레톤 */}
                                  {!loadedImages.has(work.thumbnail || '') && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                                  )}
                                  
                                  {/* 동영상 자동재생을 위한 조건부 렌더링 */}
                                  {work.type === 'video' && work.fileUrl?.includes('hailuoai.video') ? (
                                  <iframe
                                    src={work.fileUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                  />
                                ) : (
                                  <Image
                                    src={work.thumbnail}
                                    alt={work.title}
                                    fill
                                    className={`object-cover object-top group-hover:scale-105 transition-all duration-500 ${
                                      loadedImages.has(work.thumbnail || '') 
                                        ? 'opacity-100' 
                                        : 'opacity-0'
                                    }`}
                                    unoptimized={work.thumbnail?.endsWith('.gif')}
                                    priority={index < 5}
                                    onLoad={() => {
                                      if (work.thumbnail) setLoadedImages(prev => new Set(prev).add(work.thumbnail))
                                    }}
                                  />
                                )}
                                
                                {/* 제목 태그 - 좌측 상단 */}
                                <div className="absolute top-3 left-3">
                                  <div className="bg-black/80 backdrop-blur-md text-white px-3 py-2 rounded-lg">
                                    <h5 className="font-bold text-sm">{work.title}</h5>
                                  </div>
                                </div>

                                {/* 타입별 상호작용 표시 */}
                                {work.type === 'music' ? (
                                  <div className="absolute top-3 right-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                        {work.type === 'video' && (
                                          <div className="w-0 h-0 border-l-[8px] border-l-blue-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                                        )}
                                        {work.type === 'webtoon' && (
                                          <div className="w-0 h-0 border-l-[8px] border-l-purple-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                                        )}
                                        {work.type === 'image' && (
                                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                          </svg>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* 카테고리 태그 - 좌측 하단 */}
                                <div className="absolute bottom-3 left-3">
                                  <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                    {work.type === 'video' && (
                                      <>
                                        <span>🎬</span>
                                        <span className="font-medium">영상</span>
                                      </>
                                    )}
                                    {work.type === 'webtoon' && (
                                      <>
                                        <span>📚</span>
                                        <span className="font-medium">웹툰</span>
                                      </>
                                    )}
                                    {work.type === 'image' && (
                                      <>
                                        <span>🎨</span>
                                        <span className="font-medium">그림</span>
                                      </>
                                    )}
                                    {work.type === 'music' && (
                                      <>
                                        <span>🎵</span>
                                        <span className="font-medium">음악</span>
                                      </>
                                    )}
                                  </div>
                                </div>

                                {/* 좋아요 태그 - 우측 하단 */}
                                <div className="absolute bottom-3 right-3">
                                  <div className="bg-red-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-red-400/50">
                                    <div className="flex items-center gap-1.5 text-xs font-medium">
                                      <span>❤️</span>
                                      <span>{work.likes}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </motion.div>
                )}
              </div>
            </div>

            {/* 참여 유도 섹션 */}
            <div className="text-center mb-12 md:mb-16 mt-20 md:mt-24">
              {/* 구분선 */}
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  🚀 지금 바로 참여하세요!
                </h3>
                <p className="text-base md:text-lg text-gray-600 font-medium">
                  원하는 분야를 선택하고 나만의 AI 작품을 만들어보세요
                </p>
              </motion.div>
            </div>

            {/* 카테고리 그리드 - 이벤트 출품작과 동일한 스타일 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-50/50 flex items-center justify-center">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={120}
                      height={120}
                      className={`w-28 h-28 object-contain object-top group-hover:scale-105 transition-all duration-500 ${
                        category.image.includes("miso-protagonist") ||
                        category.image.includes("miso-music") ||
                        category.image.includes("miso-picaso")
                          ? "rounded-xl"
                          : ""
                      } ${
                        loadedImages.has(category.image || '') 
                          ? 'opacity-100' 
                          : 'opacity-0'
                      }`}
                      priority
                      onLoad={() => {
                        if (category.image) setLoadedImages(prev => new Set(prev).add(category.image))
                      }}
                    />
                    
                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-0 h-0 border-l-[6px] border-l-gray-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 컴팩트한 텍스트 영역 */}
                  <div className="p-4">
                    <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-2 line-clamp-1">
                      {category.subtitle}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>

      {/* 이벤트 가이드 모달 */}
      {showGuideModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center z-[100] md:p-4">
          <div className="bg-white rounded-t-3xl md:rounded-3xl max-w-4xl w-full h-[85vh] md:h-[90vh] md:max-h-[90vh] shadow-2xl flex flex-col">
            <div className="bg-white rounded-t-3xl md:rounded-t-3xl border-b border-gray-100 p-4 md:p-6 flex-shrink-0">
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">이벤트 가이드</h2>
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-gray-600 text-lg md:text-xl">×</span>
                </button>
              </div>
            </div>

            <div className="p-4 md:p-8 overflow-y-auto flex-1">
              {/* 핵심 정보 */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
                <div className="bg-blue-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">📅</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">참여 기간</h3>
                  <p className="text-sm md:text-lg font-bold text-blue-700">7.21 ~ 8.6 자정</p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">🏆</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">총 상금</h3>
                  <p className="text-sm md:text-lg font-bold text-purple-700">100만원</p>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4 md:p-6 text-center">
                  <span className="text-2xl md:text-3xl mb-2 block">🎯</span>
                  <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">발표일</h3>
                  <p className="text-sm md:text-lg font-bold text-emerald-700">8.11(월)</p>
                </div>
              </div>

              {/* 참여 방법 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  📝 참여 방법
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">
                        영상 / 만화 / 노래 / 그림 중 분야를 선택합니다
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">(분야별 중복 지원 가능!)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">AI로 나만의 작품을 제작합니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">패들릿에 작품을 업로드합니다</p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">
                        이벤트 등록화면 하단에 +버튼을 누르면 바로 업로드 가능합니다
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">회사/팀/이름 기재 필수!</p>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">시상을 위해 반드시 포함해주세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      5
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm md:text-base font-medium">
                        내 작품 링크를 널리 널리 공유합니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 일정 및 안내 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  📅 일정 및 안내
                </h3>
                <div className="bg-blue-50 rounded-xl p-4 md:p-6 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">참여기간</h4>
                    <p className="text-gray-700 text-sm md:text-base">7월 21일(월) ~ 8월 6일(화) 자정</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">수상작 발표</h4>
                    <p className="text-gray-700 text-sm md:text-base">8월 11일(월)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">당첨자 안내방법</h4>
                    <ul className="text-gray-700 text-sm md:text-base space-y-1">
                      <li>• 패들릿에 수상작 공지</li>
                      <li>• 상품은 회사/팀/이름 기준으로 크루에게 연락처를 받아 별도 안내 및 전달예정</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 선정 기준 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  🎯 선정 기준
                </h3>

                {/* Best 작품 */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">🥇 Best 작품</h4>
                  <div className="bg-amber-50 rounded-xl p-4 md:p-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      독창성, 공감성, 전달력을 고려하여 사내 심사위원단의 정성 평가를 거쳐 최종 선정합니다.
                    </p>
                    <p className="text-amber-700 text-xs md:text-sm font-medium">
                      📌 Best 작품은 부문별 콘텐츠로 수여됩니다.
                    </p>
                  </div>
                </div>

                {/* 대상 */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    🏆 선정 대상 (Best PLAI)
                  </h4>
                  <div className="bg-purple-50 rounded-xl p-4 md:p-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      독창성, 공감성, 전달력에 완성도를 포함하여 종합적으로 평가하며, 전사 구성원에게 가장 깊은 공감과
                      울림을 준 콘텐츠에 수여됩니다.
                    </p>
                    <p className="text-purple-700 text-xs md:text-sm font-medium">
                      📌 Best 작품과의 중복 수상은 불가합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 시상 내역 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  🏆 시상 내역
                </h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 md:p-6">
                  <p className="text-gray-700 text-sm md:text-base mb-4">
                    수상자: 카테고리별 베스트 작품 1개 선정하여 수상(1인)
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Video</span>
                      <span className="font-bold text-blue-600">30만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Cartoon</span>
                      <span className="font-bold text-purple-600">20만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Song</span>
                      <span className="font-bold text-green-600">10만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                      <span className="font-semibold text-gray-900">Best Picture</span>
                      <span className="font-bold text-orange-600">10만원 상당</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg border-2 border-purple-200">
                      <span className="font-semibold text-gray-900">Best PLAI</span>
                      <span className="font-bold text-purple-600">30만원 상당</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-red-700 text-sm font-medium">
                      🛑 우승자가 중복될 경우, 하나의 분야에서만 수상됩니다
                    </p>
                  </div>
                </div>
              </div>

              {/* 유의사항 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  📌 유의사항
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                    <span className="text-blue-600 text-lg">📢</span>
                    <p className="text-gray-700 text-sm md:text-base">
                      제출작은 해커톤 진행 기간 중 홍보에 활용될 수 있어요
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-xl">
                    <span className="text-red-600 text-lg">⚠️</span>
                    <p className="text-gray-700 text-sm md:text-base">
                      패들릿에 회사/팀/이름 미기재 시 선발이 어려울 수 있어요
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                    <span className="text-orange-600 text-lg">🚫</span>
                    <p className="text-gray-700 text-sm md:text-base">중복 수상은 불가! (가장 잘한 분야 1개만 시상)</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <span className="text-green-600 text-lg">🎨</span>
                    <p className="text-gray-700 text-sm md:text-base">
                      툴은 자유! 추천 툴은 참고만 하시고, 본인이 편한 AI툴로 마음껏 만들어주세요 :)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 전체화면 모달 */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 모달 헤더 */}
              <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 md:p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900">{selectedCategory.title}</h2>
                  <p className="text-sm md:text-base font-medium text-gray-600">{selectedCategory.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 임베드 콘텐츠 */}
              <div className="w-full h-full pt-20">
                <iframe
                  src={selectedCategory.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 이벤트 종료 모달 */}
      <AnimatePresence>
        {showEventEndModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowEventEndModal(false)}
            />
            
            {/* 토스 스타일 모달 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-white rounded-[28px] w-full max-w-[420px] max-h-[90vh] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 헤더 */}
              <div className="relative px-6 pt-6 pb-4 flex-shrink-0">
                {/* 닫기 버튼 */}
                <button
                  onClick={() => setShowEventEndModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* 상단 콘텐츠 */}
                <div className="flex items-center gap-4">
                  {/* 좌측 미소 이미지 */}
                  <div className="flex-shrink-0">
                    <Image 
                      src="/assets/miso/miso-event.png" 
                      alt="Miso Event End" 
                      width={120} 
                      height={120}
                      className="w-20 h-20 object-contain drop-shadow-sm"
                    />
                  </div>
                
                  {/* 우측 텍스트 */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[18px] font-bold text-gray-900 leading-tight mb-1">
                      아쉽지만, 이벤트가 종료되었어요! 😢
                    </h2>
                    <p className="text-sm text-gray-500 font-medium">
                      참여해주신 모든 분께 감사드려요 🙌
                    </p>
                  </div>
                </div>
              </div>

              {/* 메인 콘텐츠 */}
              <div className="flex-1 px-6 pb-6 overflow-y-auto">
                {/* 안내 메시지 */}
                <div className="bg-blue-50 rounded-[20px] p-5 mb-6">
                  <p className="text-center text-gray-700 font-medium">
                    AI작품은 자유롭게 구경하실 수 있어요
                  </p>
                </div>

                {/* 당첨자 발표 안내 */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-[20px] border border-amber-200">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🗓</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-800 mb-1">당첨자 발표: 8월 11일(월)</p>
                      <p className="text-xs text-amber-700">이벤트 페이지에서 확인하실 수 있어요!</p>
                    </div>
                  </div>
                </div>

                {/* 수상작 & 상품 안내 */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">🏆 수상작 & 상품 안내</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                      <span className="text-sm">🧠</span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900">베스트 PLAI</span>
                        <span className="text-xs text-gray-500 ml-2">— 애플워치 SE 🎉</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                      <span className="text-sm">🎥</span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900">베스트 영상</span>
                        <span className="text-xs text-gray-500 ml-2">— 애플워치 SE 🎉</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                      <span className="text-sm">📚</span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900">베스트 만화</span>
                        <span className="text-xs text-gray-500 ml-2">— 에어팟4 🎧</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                      <span className="text-sm">🎵</span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900">베스트 노래</span>
                        <span className="text-xs text-gray-500 ml-2">— 네스프레소 버츄오팝 ☕</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100">
                      <span className="text-sm">🖼</span>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900">베스트 이미지</span>
                        <span className="text-xs text-gray-500 ml-2">— 네스프레소 버츄오팝 ☕</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA 버튼 */}
                <div className="space-y-3 mb-4">
                  <button
                    onClick={() => setShowEventEndModal(false)}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-[16px] transition-all duration-200"
                  >
                    작품 구경하러 가기 🎨
                  </button>
                </div>

                {/* 하단 메시지 */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 font-medium">다음 이벤트에서 또 만나요! 💙</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 작품 상세 모달 */}
      <WorkModal 
        work={selectedWork}
        isOpen={showWorkModal}
        onClose={handleCloseWorkModal}
      />

      {/* 당첨자 발표 모달 */}
      <EventModal 
        isOpen={showWinnerModal}
        onClose={handleCloseWinnerModal}
        onDontShowAgain={handleDontShowWinnerModalAgain}
      />
    </main>
  )
}

