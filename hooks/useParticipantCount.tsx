"use client"

import { useEffect, useState } from "react"

export function useParticipantCount() {
  const [count, setCount] = useState(18745) // 기본값
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        console.log("Apps Script 응답 데이터:", data) // 디버깅용
        
        // 데이터 구조에 따라 신청자 수 추출
        if (data.values && Array.isArray(data.values) && data.values.length > 0) {
          // 첫 번째 행에서 숫자 찾기
          const firstRow = data.values[0]
          if (Array.isArray(firstRow)) {
            // 첫 번째 열에서 숫자 추출 (실제 데이터 위치)
            const participantCount = Number(firstRow[0])
            if (!isNaN(participantCount) && participantCount > 0) {
              console.log("추출된 참가자 수:", participantCount) // 디버깅용
              setCount(participantCount)
            } else {
              console.warn("유효하지 않은 참가자 수:", firstRow[0])
            }
          }
        } else {
          console.warn("예상하지 못한 데이터 구조:", data)
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

  return { count, isLoading, error }
} 