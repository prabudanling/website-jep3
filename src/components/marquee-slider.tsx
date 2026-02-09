'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Rocket, TrendingUp, Zap, Globe } from 'lucide-react'

interface Slide {
  text: string
  icon: any
  highlight?: boolean
}

const slides: Slide[] = [
  {
    text: "JARINGAN EKOSISTEM PENGUSAHA PERSATUAN PEMBANGUNAN",
    icon: Globe,
    highlight: true
  },
  {
    text: "SELAMAT BERGABUNG DALAM REVOLUSI EKONOMI DIGITAL",
    icon: Sparkles,
    highlight: true
  },
  {
    text: "EKOSISTEM BARU: BISNIS DIGITAL 6.0 | WEB 3 | IOT | BLOCKCHAIN | AGI",
    icon: Zap,
    highlight: false
  },
  {
    text: "LOMPATAN TEKNOLOGI TRANSFORMASI BISNIS JE-P3 MENUJU MASA DEPAN",
    icon: Rocket,
    highlight: true
  },
  {
    text: "BISNIS FUTURISTIK: DARI DESA UNTUK DUNIA",
    icon: TrendingUp,
    highlight: false
  }
]

export function MarqueeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div
      className="bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 py-4 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dots-animated"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center min-h-[60px]">
          <div className="w-full max-w-6xl">
            <div className="relative overflow-hidden">
              {slides.map((slide, index) => {
                const Icon = slide.icon
                const isActive = index === currentSlide

                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out transform ${
                      isActive
                        ? 'opacity-100 translate-x-0 scale-100'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full scale-95 absolute inset-0'
                        : 'opacity-0 translate-x-full scale-95 absolute inset-0'
                    }`}
                    style={{
                      position: isActive ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <div className={`flex-shrink-0 p-2 rounded-full ${
                        slide.highlight
                          ? 'bg-white/30 animate-pulse-glow'
                          : 'bg-white/20'
                      }`}>
                        <Icon className={`w-6 h-6 text-white ${slide.highlight ? 'animate-bounce-subtle' : ''}`} />
                      </div>
                      <p
                        className={`text-center text-lg md:text-xl font-bold text-white ${
                          slide.highlight ? 'animate-text-reveal' : ''
                        }`}
                      >
                        {slide.text}
                      </p>
                      <div className={`flex-shrink-0 p-2 rounded-full ${
                        slide.highlight
                          ? 'bg-white/30 animate-pulse-glow'
                          : 'bg-white/20'
                      }`}>
                        <Icon className={`w-6 h-6 text-white ${slide.highlight ? 'animate-bounce-subtle' : ''}`} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-6 bg-white animate-pulse'
                      : 'w-2 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-600 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-600 to-transparent z-10"></div>
    </div>
  )
}
