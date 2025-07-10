'use client'

import { useEffect, useState, useRef } from 'react'

export default function SimpleWordSwitcher({ 
  words, 
  className = '' 
}: { 
  words: string[]
  className?: string 
}) {
  const [displayText, setDisplayText] = useState(words[0])
  const indexRef = useRef(0)
  
  useEffect(() => {
    const animateText = () => {
      indexRef.current = (indexRef.current + 1) % words.length
      const targetWord = words[indexRef.current]
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'
      
      let iteration = 0
      const scrambleInterval = setInterval(() => {
        setDisplayText(
          targetWord
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return targetWord[index]
              }
              return letters[Math.floor(Math.random() * letters.length)]
            })
            .join('')
        )
        
        if (iteration >= targetWord.length) {
          clearInterval(scrambleInterval)
          setDisplayText(targetWord)
        }
        
        iteration += 0.4
      }, 30)
    }
    
    const mainInterval = setInterval(animateText, 2500)
    
    return () => clearInterval(mainInterval)
  }, [words])
  
  return (
    <span className={`inline-block font-bold text-[#FF5500] ${className}`}>
      {displayText}
    </span>
  )
}