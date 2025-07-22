'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* 깔끔한 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF] via-[#E3F2FD] to-[#BBDEFB]" />
      
      {/* 심플한 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      
      {/* 축구장 배경 - 하단에 배치 */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%]">
        <Image 
          src="/assets/symbols/soccer-field.png" 
          alt="" 
          fill
          className="object-cover object-top opacity-70"
        />
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
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
        transition={{ duration: 3, repeat: Infinity }}
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
  )
}