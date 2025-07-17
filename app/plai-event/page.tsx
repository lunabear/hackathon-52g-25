'use client'

import { motion } from 'framer-motion'
import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'

export default function PlaiEventPage() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="text-xl">🎨</span>
                <span className="text-sm font-medium text-gray-700">PLAI Event</span>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              나의 회사 생활 Vibe
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              GenAI로 표현하는 우리의 일상
            </motion.p>
          </div>
          
          {/* 이벤트 헤더 카드 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8"
          >
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=300&fit=crop&crop=center"
                alt="PLAI Event"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">요즘 나의 회사 생활을 AI로 표현해요!</h2>
                <p className="text-blue-100">PLAI Everywhere, PLAI Together!</p>
              </div>
            </div>
          </motion.div>

          {/* 핵심 정보 카드들 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">응모 기간</h3>
              <p className="text-2xl font-bold text-blue-600">7/17 ~ 8/6</p>
              <p className="text-sm text-gray-500 mt-2">총 21일간</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">최대 상금</h3>
              <p className="text-2xl font-bold text-purple-600">30만원</p>
              <p className="text-sm text-gray-500 mt-2">다양한 상품</p>
            </motion.div>
          </div>
              
          {/* 참여 방법 카드 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              참여 방법
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold text-gray-900 mb-2">GenAI 툴로 콘텐츠 제작</h4>
                <p className="text-sm text-gray-600">이미지, 영상, 노래, 만화 등 형식 자유</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold text-gray-900 mb-2">제목 형식 준수</h4>
                <p className="text-sm text-gray-600">소속회사/팀/이름 포함하여 업로드</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold text-gray-900 mb-2">제한 없이 도전</h4>
                <p className="text-sm text-gray-600">여러 작품 제출 가능</p>
              </div>
            </div>
          </motion.div>
              
          {/* 시상 내역 카드 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-3xl">🏅</span>
              시상 내역
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🥇</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Best Video/Song/Picture</h4>
                <p className="text-2xl font-bold text-amber-600">각 20만원 상당</p>
                <p className="text-sm text-gray-600 mt-2">카테고리별 최우수작</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-100 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">❤️</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">최다 하트 수상</h4>
                <p className="text-2xl font-bold text-red-600">30만원 상당</p>
                <p className="text-sm text-gray-600 mt-2">가장 많은 공감을 받은 작품</p>
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-700">
                <span className="font-medium">발표일:</span> 8월 8일(금)
              </p>
            </div>
          </motion.div>
              
          {/* CTA 버튼 카드 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
          >
            <a
              href="https://padlet.com/gs52group2/PLAIseason2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-500 text-white font-medium px-8 py-4 rounded-xl hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              작품 제출하러 가기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <p className="mt-6 text-sm text-gray-500">
              * 작성 가이드를 준수하지 않으면 당첨에서 제외될 수 있습니다
            </p>
          </motion.div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}