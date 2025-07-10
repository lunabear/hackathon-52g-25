'use client'

import Image from 'next/image'

export default function FloatingButton() {
  const handleClick = () => {
    // 클릭 시 원하는 액션 추가
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
    >
      <Image
        src="/assets/miso/miso-walk.png"
        alt="미소 캐릭터"
        width={120}
        height={120}
        className="object-contain"
      />
    </button>
  )
}