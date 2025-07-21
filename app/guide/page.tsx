'use client'

import Background from '@/components/ui/Background'
import PageTransition from '@/components/ui/PageTransition'

export default function GuidePage() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <PageTransition>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                사전가이드
              </h1>
              <div className="text-lg text-gray-600 max-w-2xl mx-auto">
                <p>
                  막막한 아이디어 고민이 있으신가요? <br></br> <span className="font-bold text-gray-800">지난 GS그룹 해커톤 케이스</span>와 <span className="font-bold text-gray-800">라이브러리</span>를 활용하여 영감을 얻어보세요.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              <iframe
                src="https://gshackathonguide.oopy.io/"
                style={{ width: '100%', height: '80vh', border: 'none' }}
                title="사전가이드"
              ></iframe>
            </div>
          </div>
        </div>
      </PageTransition>
    </main>
  )
} 