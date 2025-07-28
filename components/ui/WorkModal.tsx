"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export interface WorkItem {
  id: string
  title: string
  author: string
  thumbnail: string
  type: string
  likes: number
  fileUrl: string
}

interface WorkModalProps {
  work: WorkItem | null
  isOpen: boolean
  onClose: () => void
}

export default function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
  if (!work) return null

  // 링크 타입에 따른 임베드 방식 결정
  const renderContent = () => {
    const { fileUrl, type, thumbnail, title } = work

    // 구글 드라이브 파일 처리
    if (fileUrl.includes('drive.google.com')) {
      const fileId = fileUrl.match(/\/d\/(.+?)\//)
      if (fileId) {
        const embedUrl = `https://drive.google.com/file/d/${fileId[1]}/preview`
        return (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )
      }
    }

    // 하이루오 AI 동영상
    if (fileUrl.includes('hailuoai.video')) {
      return (
        <iframe
          src={fileUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )
    }

    // Suno 음악
    if (fileUrl.includes('suno.com')) {
      return (
        <iframe
          src={fileUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )
    }

    // Padlet 링크
    if (fileUrl.includes('padlet.com')) {
      return (
        <iframe
          src={fileUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )
    }

    // 직접 이미지/미디어 URL
    if (fileUrl.includes('padletusercontent.com') || 
        fileUrl.match(/\.(jpg|jpeg|png|gif|webp|mp4|mov)$/i)) {
      if (type === 'video' || fileUrl.match(/\.(mp4|mov)$/i)) {
        return (
          <video
            src={fileUrl}
            className="w-full h-full object-contain"
            controls
            autoPlay
            loop
            muted
          />
        )
      } else {
        return (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Image
              src={fileUrl}
              alt={title}
              fill
              className="object-contain"
              unoptimized={fileUrl.endsWith('.gif')}
            />
          </div>
        )
      }
    }

    // 기본값: 썸네일 이미지 표시
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-contain"
          unoptimized={thumbnail.endsWith('.gif')}
        />
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 md:p-6 flex items-center justify-between z-10 border-b border-gray-100">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 truncate">
                  {work.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 truncate">
                  {work.author}
                </p>
              </div>
              
              {/* 카테고리 뱃지 */}
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  {work.type === 'video' && <span>🎬</span>}
                  {work.type === 'webtoon' && <span>📚</span>}
                  {work.type === 'image' && <span>🎨</span>}
                  {work.type === 'music' && <span>🎵</span>}
                  <span className="font-medium capitalize">
                    {work.type === 'webtoon' ? '웹툰' : 
                     work.type === 'image' ? '그림' :
                     work.type === 'music' ? '음악' : '영상'}
                  </span>
                </div>
                
                {/* 좋아요 */}
                <div className="bg-red-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span>❤️</span>
                  <span className="text-xs font-medium">{work.likes}</span>
                </div>
                
                {/* 닫기 버튼 */}
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* 콘텐츠 영역 */}
            <div className="w-full h-full pt-20 md:pt-24">
              {renderContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 