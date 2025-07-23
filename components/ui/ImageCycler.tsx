'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/assets/miso/miso-team.gif',
  '/assets/miso/miso-team-caltex.gif',
  '/assets/miso/miso-team-plant.gif',
  '/assets/miso/miso-team-retail.gif'
]

export default function ImageCycler() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000) // 7초마다 전환

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 opacity-20">
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={`${src}?t=${index}`} // 캐시 방지로 각 GIF 재시작
            alt=""
            fill
            sizes="100vw"
            className={`object-cover transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
