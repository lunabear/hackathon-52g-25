'use client'

import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'

export default function ReferencePage() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                사전 학습 가이드
              </h1>
              <div className="text-lg text-gray-600 max-w-2xl mx-auto">
                <p className="mb-2">
                  해커톤을 준비하는 <span className="font-bold text-gray-800">모든 플레이메이커</span>를 위한 실전 노하우와 인사이트가 담긴 공간입니다.
                </p>
                <p>
                  막막한 아이디어 고민? <span className="font-bold text-gray-800">제3회 GS그룹 해커톤 케이스</span>와 <span className="font-bold text-gray-800">다양한 프로젝트</span>로 영감을 얻어보세요.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              <iframe
                src="https://gshackathonusecase.oopy.io/"
                style={{ width: '100%', height: '80vh', border: 'none' }}
                title="사전 학습 가이드"
              ></iframe>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
}

/*
// Legacy Code
'use client'

import { motion } from 'framer-motion'
import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'

interface ProjectCard {
  id: string
  title: string
  company: string
  description: string
  tags: string[]
  category: 'ai' | 'service' | 'tool'
  imageUrl: string
}

const projects: ProjectCard[] = [
  {
    id: '1',
    title: 'NewGenS',
    company: 'GS리테일',
    description: '자연어 기반 상품 검색 서비스로 고객의 쇼핑 경험을 혁신적으로 개선한 프로젝트',
    tags: ['GenAI', '자연어처리', '검색최적화'],
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop&crop=center'
  },
  {
    id: '2',
    title: 'I Care U',
    company: 'GS건설',
    description: 'AI 기반 건설 현장 안전 관리 시스템으로 작업자의 안전을 실시간으로 모니터링',
    tags: ['컴퓨터비전', '안전관리', 'IoT'],
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=240&fit=crop&crop=center'
  },
  {
    id: '3',
    title: 'Athena',
    company: 'GS칼텍스',
    description: '회의 효율성을 극대화하는 AI 회의록 및 액션아이템 관리 도구',
    tags: ['음성인식', '자동요약', '협업도구'],
    category: 'tool',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=240&fit=crop&crop=center'
  },
  {
    id: '4',
    title: 'MISO Helper',
    company: 'GS ITM',
    description: 'MISO 플랫폼 활용을 돕는 AI 어시스턴트로 개발 생산성 향상',
    tags: ['플랫폼', 'AI어시스턴트', '개발도구'],
    category: 'tool',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=240&fit=crop&crop=center'
  },
  {
    id: '5',
    title: 'Energy Optimizer',
    company: 'GS에너지',
    description: 'AI 기반 에너지 사용량 예측 및 최적화 시스템',
    tags: ['머신러닝', '최적화', '에너지'],
    category: 'service',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop&crop=center'
  },
  {
    id: '6',
    title: 'Smart Inventory',
    company: 'GS글로벌',
    description: '실시간 재고 관리 및 수요 예측 AI 솔루션',
    tags: ['예측분석', '자동화', '물류'],
    category: 'service',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=240&fit=crop&crop=center'
  }
]

const categoryIcons = {
  ai: '🤖',
  service: '🚀',
  tool: '🛠️'
}

export default function ReferencePage() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                프로젝트 쇼케이스
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                이전 해커톤에서 탄생한 혁신적인 프로젝트들을 만나보세요
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                    
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                          {categoryIcons[project.category]} {project.company}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 text-center"
            >
              <div className="inline-flex items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="text-2xl">💡</span>
                <p className="text-gray-700 font-medium">
                  여러분의 아이디어도 현실이 될 수 있습니다
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </PageTransition>
    </main>
  )
}
*/