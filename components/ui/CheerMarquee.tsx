'use client'

import { CHEER_MESSAGES } from '@/lib/cheerMessages'

export default function CheerMarquee() {
  // 메시지를 두 번 반복하여 끊김 없는 애니메이션 구현
  const doubledMessages = [...CHEER_MESSAGES, ...CHEER_MESSAGES]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-black border-b border-gray-800">
      <div className="marquee-container">
        <div className="marquee-content">
          {doubledMessages.map((msg, index) => (
            <span key={index} className="marquee-item text-orange-500">
              <span className="cheer-message">{msg.message}</span>
              <span className="cheer-divider mx-2">|</span>
              <span className="cheer-author">{msg.company} {msg.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}