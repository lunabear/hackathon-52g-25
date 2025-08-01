"use client"

import { useEffect, useState } from "react"

export function useParticipantCount() {
  const [count, setCount] = useState(0) // 기본값 제거
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [shouldDisplay, setShouldDisplay] = useState(false) // 현황판 노출 여부

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyvx07zbyPsazKh-cxPXBhS_PWvGoF-K5zC382zbFx6Om9V0m42atyFxBQxkWbyzyy_gA/exec?range=A1:B2"
        )
        
        if (!response.ok) {
          throw new Error("데이터를 가져올 수 없습니다")
        }
        
        const data = await response.json()
        
        // 데이터 구조에 따라 신청자 수 및 표시 여부 추출
        if (data.values && Array.isArray(data.values) && data.values.length > 0) {
          
          // 첫 번째 행에서 참가자 수 추출 (A1)
          const firstRow = data.values[0]
          if (Array.isArray(firstRow)) {
            const participantCount = Number(firstRow[0])
            if (!isNaN(participantCount) && participantCount > 0) {
              setCount(participantCount)
            }
          }
          
          // 두 번째 행에서 표시 여부 추출 (A2)
          if (data.values.length > 1) {
            const secondRow = data.values[1]
            if (Array.isArray(secondRow) && secondRow.length > 0) {
              const displayFlag = secondRow[0]
              // boolean 또는 문자열로 올 수 있음
              const shouldShow = displayFlag === true || displayFlag === "TRUE" || displayFlag === "true"
              setShouldDisplay(shouldShow)
            }
          }
        }
        
        setError(null)
      } catch (err) {
        console.error("참가자 수 데이터 가져오기 실패:", err)
        setError(err instanceof Error ? err.message : "알 수 없는 오류")
        // 오류 시 기본값 유지
      } finally {
        setIsLoading(false)
      }
    }

    // 처음 한 번 실행
    fetchCount()

    // 5분마다 업데이트
    const interval = setInterval(fetchCount, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return { count, isLoading, error, shouldDisplay }
} 