"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

// ChannelIO 타입 정의
declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void
  }
}

export default function MisoJourney() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"miso" | "vibe">("miso")
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Create portal element on mount
    const element = document.createElement("div")
    element.style.position = "fixed"
    element.style.top = "0"
    element.style.left = "0"
    element.style.zIndex = "9999"
    document.body.appendChild(element)
    setPortalElement(element)

    // Cleanup on unmount
    return () => {
      if (document.body.contains(element)) {
        document.body.removeChild(element)
      }
    }
  }, [])

  // 모달 열림/닫힘 시 채널톡 버튼 제어
  useEffect(() => {
    if (isModalOpen) {
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

    return () => {
      // 컴포넌트 언마운트 시 채널톡 버튼 복원 (메인 페이지에서만)
      if (window.ChannelIO && window.location.pathname === "/") {
        window.ChannelIO("showChannelButton")
      }
    }
  }, [isModalOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isModalOpen])

  return (
    <div className="mb-12 md:mb-16">
      <div className="text-center mb-16 md:mb-20 relative">
        {/* 섹션 라벨 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full mb-6 shadow-sm">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          <span className="text-xs font-semibold text-slate-700 tracking-wider uppercase">이미소 매니저의 이야기</span>
        </div>

        {/* 메인 타이틀 */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-slate-900">MISO</span>
          <span className="text-slate-600">와 함께하는</span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            해커톤 대모험!
          </span>
        </h3>

        {/* 서브 타이틀 */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed italic">
            아이디어만 있던 이미소 매니저가{" "}
            <span className="font-semibold text-purple-600 not-italic">해커톤 도전자</span>가 되기까지의 이야기
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Chapter 1: 이미소 매니저의 고민 */}
          <div
            className="text-center"
            style={{ fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif" }}
          >
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-medium text-sm">01</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">이미소 매니저의 고민</h4>
            </div>

            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image
                  src="/assets/miso/miso-no-idea.png"
                  alt="고민하는 이미소 매니저"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                &ldquo;프로그램 개발 지식이 없어서
                <br />
                개발자가 필요한데, 어떡하지?&rdquo;
              </p>
              <p className="text-base md:text-lg text-orange-500 italic">&ldquo;코딩도 할 줄 모르고...&rdquo;</p>
            </div>
          </div>

          {/* Chapter 2: AI를 만나다 */}
          <div
            className="text-center"
            style={{ fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif" }}
          >
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">02</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">AI를 만나다</h4>
            </div>

            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center relative">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image
                  src="/assets/miso/miso-play.png"
                  alt="신난 이미소 매니저"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />

                {/* 음표 애니메이션 */}
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <span className="text-2xl">♪</span>
                </div>
                <div className="absolute top-0 -left-6 animate-bounce" style={{ animationDelay: "0.2s" }}>
                  <span className="text-xl">♫</span>
                </div>
                <div className="absolute -bottom-2 -right-6 animate-bounce" style={{ animationDelay: "0.4s" }}>
                  <span className="text-lg">♬</span>
                </div>
                <div className="absolute bottom-4 -left-4 animate-bounce" style={{ animationDelay: "0.6s" }}>
                  <span className="text-xl">♪</span>
                </div>
              </div>
            </div>

            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                &ldquo;대박! AI가 코딩을 대신해준다고?&rdquo;
              </p>
              <p className="text-base md:text-lg text-blue-600 italic font-medium">
                &ldquo;해커톤에 나가면, MISO랑 바이브코딩으로
                <br />
                내가 원하는 걸 만들어볼 수 있다고?&rdquo;
              </p>
            </div>
          </div>

          {/* Chapter 3: 해커톤 도전 */}
          <div
            className="text-center"
            style={{ fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif" }}
          >
            {/* Chapter 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-medium text-sm">03</span>
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">해커톤에 도전하다</h4>
            </div>

            {/* 캐릭터 */}
            <div className="mb-10 flex justify-center">
              <div className="w-40 h-40 md:w-44 md:h-44 relative">
                <Image
                  src="/assets/miso/miso-friends.png"
                  alt="도전하는 이미소 매니저"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain scale-125 rounded-2xl"
                />
              </div>
            </div>

            {/* 스토리 내용 */}
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                &ldquo;동료들아! 나랑 같이 해커톤 나가자!&rdquo;
              </p>
              <p className="text-base md:text-lg text-emerald-600 italic font-semibold">
                &ldquo;우리의 엄청난 아이디어로
                <br />
                GS의 미래를 바꿔보자고!&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 정보 버튼 */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-green-600 text-white rounded-full hover:from-purple-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 h-12"
          >
            <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-semibold">MISO & 바이브코딩이란?</span>
          </button>
        </div>

        {/* 팟캐스트 섹션 - 프로젝트 톤앤매너 일치 */}
        <div
          className="max-w-6xl mx-auto mt-16 md:mt-20 px-6"
          style={{ fontFamily: "Pretendard Variable, Pretendard, -apple-system, sans-serif" }}
        >
          {/* 제목 */}
          <div className="text-center mb-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
                어떤 문제를 풀어볼 수 있을지 아직{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  감이 안잡히시나요?
                </span>
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          {/* 2열 그리드 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* 좌측: 팟캐스트 */}
            <div className="flex flex-col h-full">
              <div className="space-y-4 mb-6">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  다양한 사례로 GS계열사 담당자와의 <span className="font-semibold text-emerald-600">가상 인터뷰</span>를 AI로 만들어봤어요!
                </p>
                <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                  <span className="font-semibold text-emerald-600">해커톤 스페셜 팟캐스트</span>를 통해 <span className="font-bold text-emerald-600">나도 할 수 있다!</span>는 가능성을 상상해봐요
                </p>
              </div>

              {/* 이미지와 버튼 2열 배치 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center flex-grow">
                {/* 팟캐스트 이미지 - 축소된 크기 */}
                <div className="relative group">
                  <div className="bg-transparent rounded-xl overflow-hidden">
                    <Image
                      src="/assets/miso/miso-podcast.png"
                      alt="GS그룹 해커톤 스페셜 팟캐스트"
                      width={400}
                      height={267}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* CTA 버튼 */}
                <div className="flex justify-center sm:justify-start items-center h-full">
                  <a
                    href="https://www.podbbang.com/channels/1793063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 ease-out hover:from-slate-800 hover:to-slate-700 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:shadow-lg relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span className="text-xl">🎧</span>
                      <span className="text-base tracking-wide">귀로 듣는 유즈케이스</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* 우측: 유튜브 영상 */}
            <div className="flex flex-col h-full">
              <div className="space-y-4 mb-6">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  해커톤에 대한 내용이 더 궁금하신 분들을 위해 <span className="font-semibold text-emerald-600">특별히 준비</span>했어요!
                </p>
                <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                  7/29(화) 진행했던 <span className="font-semibold text-emerald-600">온라인 설명회 영상</span>을 통해, <span className="font-bold text-emerald-600">궁금증을 해결</span>해보세요
                </p>
              </div>

              {/* 유튜브 영상 임베드 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg flex-grow min-h-[200px] md:min-h-[250px]">
                <iframe
                  src="https://www.youtube.com/embed/6cfKrnFgcUc"
                  title="제4회 GS그룹 해커톤 온라인 설명회"
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 - Portal로 document.body에 렌더링 */}
      {isModalOpen &&
        portalElement &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* 배경 오버레이 - 전체 화면 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

            {/* 모달 컨텐츠 - viewport 중앙 */}
            <div
              className="relative bg-white rounded-2xl w-[900px] max-w-[95vw] max-h-[90vh] shadow-2xl border border-slate-100 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 모달 헤더 */}
              <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">GenAI 도구 가이드</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 탭 네비게이션 */}
              <div className="sticky top-[73px] bg-white border-b border-slate-100 px-0 py-0 z-10">
                <div className="flex w-full">
                  <button
                    onClick={() => setActiveTab("miso")}
                    className={`flex-1 px-4 py-4 font-medium text-sm transition-all duration-200 border-b-2 ${
                      activeTab === "miso"
                        ? "text-purple-600 border-purple-600 bg-purple-50/50"
                        : "text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-lg">🤖</span>
                      <span className="whitespace-nowrap">MISO</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("vibe")}
                    className={`flex-1 px-4 py-4 font-medium text-sm transition-all duration-200 border-b-2 ${
                      activeTab === "vibe"
                        ? "text-green-600 border-green-600 bg-green-50/50"
                        : "text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-lg">💻</span>
                      <span className="whitespace-nowrap">바이브코딩</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* 탭 컨텐츠 */}
              <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                {/* MISO 탭 */}
                {activeTab === "miso" && (
                  <div className="space-y-8">
                    {/* 메인 소개 */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🤖</span>
                      </div>
                      <h3 className="text-3xl font-black text-purple-600 mb-2">MISO</h3>
                      <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-base">
                        GS 구성원을 위한 안전하고 쉬운 GenAI Playground
                      </p>
                    </div>

                    {/* 동영상 임베드 */}
                    <div className="aspect-video bg-white overflow-hidden shadow-sm">
                      <iframe
                        src="https://drive.google.com/file/d/1J8ycNPOBs7j94hlzSvTRl14QtE-US6YK/preview"
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="w-full h-full"
                      />
                    </div>

                    {/* 핵심 가치 */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-slate-900 text-center mb-6">핵심 가치</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🛠️</span>
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">누구나 쉽게</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            다양한 도구와 모델을 지원해 누구나 GenAI를 활용할 수 있어요
                          </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-2xl">🔒</span>
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">안전한 보호</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            데이터 외부 유출 걱정 없이 안전하게 GenAI를 활용할 수 있어요
                          </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-2xl">💡</span>
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">맞춤형 챗봇</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            우리 회사 데이터를 활용하는 맞춤형 GPT 챗봇을 사용할 수 있어요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 바이브코딩 탭 */}
                {activeTab === "vibe" && (
                  <div className="space-y-6 sm:space-y-8">
                    {/* 메인 소개 */}
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <span className="text-3xl sm:text-4xl">💻</span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-black text-green-600 mb-3 sm:mb-4">바이브코딩</h3>
                      <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
                        말로 설명하면 웹사이트가 나온다!
                      </h4>
                      <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-sm sm:text-lg px-4 sm:px-0">
                        코딩을 몰라도 괜찮아요! 자연어로 설명만 하면
                        <br className="hidden sm:block" />
                        AI가 바로 동작하는 웹사이트를 만들어드립니다.
                      </p>
                    </div>

                    {/* 바이브코딩 작동 방식 */}
                    <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-green-200/50">
                      <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                        이렇게 간단해요!
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <span className="text-lg sm:text-2xl font-bold text-blue-600">1</span>
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
                            말로 설명하기
                          </h5>
                          <div className="bg-white/80 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                            <p className="text-xs sm:text-sm text-slate-600 italic">
                              &ldquo;로그인 버튼이 있는 페이지를 만들어줘&rdquo;
                            </p>
                          </div>
                          <p className="text-xs text-slate-500">원하는 기능을 자연어로 설명</p>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <span className="text-lg sm:text-2xl font-bold text-green-600">2</span>
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
                            AI가 만들기
                          </h5>
                          <div className="bg-white/80 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                            <div className="flex items-center justify-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                          <p className="text-xs text-slate-500">AI가 자동으로 코드 생성</p>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <span className="text-lg sm:text-2xl font-bold text-purple-600">3</span>
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">바로 완성!</h5>
                          <div className="bg-white/80 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                            <div className="w-full h-6 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-xs flex items-center justify-center">
                              웹사이트 완성!
                            </div>
                          </div>
                          <p className="text-xs text-slate-500">실시간으로 결과 확인</p>
                        </div>
                      </div>
                    </div>

                    {/* 주요 특징 */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
                        주요 특징
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="text-xl sm:text-2xl">🎨</span>
                            <h5 className="font-semibold text-slate-900 text-sm sm:text-base">디자인도 자동으로</h5>
                          </div>
                          <p className="text-slate-600 text-sm sm:text-base">
                            &ldquo;깔끔한 디자인으로 만들어줘&rdquo;라고 하면 예쁜 UI를 자동으로 만들어줘요
                          </p>
                        </div>

                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="text-xl sm:text-2xl">⚡</span>
                            <h5 className="font-semibold text-slate-900 text-sm sm:text-base">실시간 미리보기</h5>
                          </div>
                          <p className="text-slate-600 text-sm sm:text-base">
                            바로바로 결과를 확인하고 수정할 수 있어요
                          </p>
                        </div>

                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="text-xl sm:text-2xl">🔧</span>
                            <h5 className="font-semibold text-slate-900 text-sm sm:text-base">쉬운 수정</h5>
                          </div>
                          <p className="text-slate-600 text-sm sm:text-base">
                            &ldquo;버튼 색을 빨간색으로 바꿔줘&rdquo;처럼 말로 수정 요청하면 바로 변경돼요
                          </p>
                        </div>

                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="text-xl sm:text-2xl">📱</span>
                            <h5 className="font-semibold text-slate-900 text-sm sm:text-base">모바일도 자동</h5>
                          </div>
                          <p className="text-slate-600 text-sm sm:text-base">
                            PC와 모바일 모두에서 잘 보이는 웹사이트를 만들어줘요
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          portalElement,
        )}
    </div>
  )
}
