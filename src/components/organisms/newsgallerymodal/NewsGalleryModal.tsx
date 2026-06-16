import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import type { NewsGalleryItem } from '@/types/news.types'

type NewsGalleryModalProps = {
  item: NewsGalleryItem
  onClose: () => void
}

export function NewsGalleryModal({ item, onClose }: NewsGalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!item) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === 0 ? item.galleryImages.length - 1 : current - 1))
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === item.galleryImages.length - 1 ? 0 : current + 1))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  const activeImage = item.galleryImages[activeIndex] ?? item.imageUrl

  const goPrevious = () => {
    setActiveIndex((current) => (current === 0 ? item.galleryImages.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current === item.galleryImages.length - 1 ? 0 : current + 1))
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-surface-base/78 px-8 py-10 backdrop-blur-sm max-md:px-4"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative grid max-h-[88svh] w-full max-w-[1280px] overflow-hidden bg-white shadow-[0_30px_90px_rgba(0,0,0,0.32)] lg:grid-cols-[1fr_0.92fr]"
          exit={{ opacity: 0, scale: 0.97, y: 18 }}
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          onClick={(event) => event.stopPropagation()}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            aria-label="모달 닫기"
            className="absolute top-5 right-5 z-20 flex size-11 items-center justify-center rounded-full bg-white/90 text-text-inverse shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:bg-primary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            onClick={onClose}
            type="button"
          >
            <X className="size-5" strokeWidth={2.4} />
          </button>

          <div className="relative min-h-[520px] bg-gray-100 max-lg:min-h-[420px] max-md:min-h-[320px]">
            <img
              key={activeImage}
              alt={`${item.title} 행사 이미지 ${activeIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              src={activeImage}
            />

            <button
              aria-label="이전 이미지"
              className="absolute top-1/2 left-5 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-surface-base/18 text-text-primary backdrop-blur transition duration-300 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              onClick={goPrevious}
              type="button"
            >
              <ChevronLeft className="size-6" strokeWidth={2.4} />
            </button>
            <button
              aria-label="다음 이미지"
              className="absolute top-1/2 right-5 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-surface-base/18 text-text-primary backdrop-blur transition duration-300 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              onClick={goNext}
              type="button"
            >
              <ChevronRight className="size-6" strokeWidth={2.4} />
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {item.galleryImages.map((image, index) => (
                <button
                  aria-label={`${index + 1}번째 이미지 보기`}
                  className={`size-2.5 rounded-full transition duration-300 ${
                    activeIndex === index ? 'bg-white' : 'bg-white/42 hover:bg-white/70'
                  }`}
                  key={image}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="overflow-y-auto px-14 py-14 text-text-inverse max-lg:max-h-[48svh] max-md:px-6 max-md:py-8">
            <p className="text-xs font-black tracking-[0.26em] text-primary-gradient-start uppercase">
              {item.category}
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-black max-md:text-3xl">{item.title}</h2>

            <dl className="mt-10 grid gap-y-6 text-base">
              <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-5">
                <dt className="font-black text-gray-600">Client</dt>
                <dd className="font-semibold text-gray-700">{item.client}</dd>
              </div>
              <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-5">
                <dt className="font-black text-gray-600">Date</dt>
                <dd className="font-semibold text-gray-700">{item.date}</dd>
              </div>
              <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-5">
                <dt className="font-black text-gray-600">Place</dt>
                <dd className="font-semibold text-gray-700">{item.place}</dd>
              </div>
              <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-5 pt-7">
                <dt className="font-black text-gray-600">Content</dt>
                <dd className="leading-8 font-semibold text-gray-700">{item.content}</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
