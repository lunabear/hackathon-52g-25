'use client'

import { useState } from 'react'

interface TabItem {
  id: string
  label: string
  embedUrl: string
}

const SAMPLE_TABS: TabItem[] = [
  {
    id: 'sample1',
    label: '샘플1',
    embedUrl: 'https://padlet.com/gs52group2/plai-ai-fqu4auq6jbr6ladw'
  },
  {
    id: 'sample2',
    label: '샘플2',
    embedUrl: 'https://www.youtube.com/embed/QH2-TGUlwu4'
  },
  {
    id: 'sample3',
    label: '샘플3',
    embedUrl: 'https://www.youtube.com/embed/HcjR6ZngQcw'
  },
  {
    id: 'sample4',
    label: '샘플4',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.729518654231!2d127.02706811531!3d37.51426997980749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9b0a66e4f%3A0x6d4a5c4e6294e4a3!2sGS%20Tower!5e0!3m2!1sen!2skr!4v1635825216548!5m2!1sen!2skr'
  },
  {
    id: 'sample5',
    label: '샘플5',
    embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTVfXWLJG9Rck_X3ZgzQ-XNQO0Kp7A_FqmFVNf9h3_kT_9H6M3rT9eQnM0AJXZwKJ_oSGgCqJGGbxNz/embed?start=false&loop=false&delayms=3000'
  }
]

export default function EmbedTabs() {
  const [activeTab, setActiveTab] = useState(SAMPLE_TABS[0].id)
  const activeItem = SAMPLE_TABS.find(tab => tab.id === activeTab)

  return (
    <div className="w-full">
      {/* 탭 네비게이션 */}
      <div className="mb-4">
        {/* 모바일: 가로 스크롤, PC: 중앙 정렬 */}
        <div className="overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-1 min-w-max md:justify-start">
            {SAMPLE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium whitespace-nowrap
                  transition-all duration-200
                  ${activeTab === tab.id 
                    ? 'text-gray-900 bg-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                  rounded-lg
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 임베드 콘텐츠 */}
      <div className="relative bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden border border-gray-100">
        <div className="h-[calc(100vh-280px)] sm:h-[calc(100vh-240px)] md:h-[calc(100vh-260px)]">
          {activeItem && (
            <iframe
              key={activeItem.id}
              src={activeItem.embedUrl}
              title={activeItem.label}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  )
}
