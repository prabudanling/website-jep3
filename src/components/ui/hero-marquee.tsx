'use client'

import { useEffect, useState } from 'react'

export function HeroMarquee() {
  const [currentText, setCurrentText] = useState(0)
  
  const marqueeTexts = [
    {
      text: "JARINGAN EKOSISTEM Pengusaha Persatuan Pembangunan",
      highlight: "JARINGAN EKOSISTEM"
    },
    {
      text: "Selamat Bergabung di JE-P3 - Transformasi Ekonomi Digital Indonesia",
      highlight: "Selamat Bergabung"
    },
    {
      text: "EKOSISTEM BARU BISNIS DIGITAL 6.0 • WEB 3 • IoT • BLOCKCHAIN • AGI",
      highlight: "EKOSISTEM BARU"
    },
    {
      text: "LONCATAN TEKNOLOGI TRANSFORMASI BISNIS JE-P3 Menuju Masa Depan Digital",
      highlight: "LONCATAN TEKNOLOGI"
    },
    {
      text: "MENUJU BISNIS FUTURISTIK Dari Desa Digital ke Global Markets",
      highlight: "BISNIS FUTURISTIK"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % marqueeTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dots-animated"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10">
        <div className="flex items-center justify-center min-h-[60px] px-4">
          <div className="text-center">
            {marqueeTexts.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  currentText === index 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95 absolute'
                }`}
                style={{
                  animation: currentText === index ? 'fadeInUp 0.5s ease-out' : 'none'
                }}
              >
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-relaxed">
                  {item.text.split(item.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-yellow-200 drop-shadow-lg">
                          {item.highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 pb-2">
          {marqueeTexts.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentText === index
                  ? 'w-8 bg-yellow-300 shadow-lg shadow-yellow-300/50'
                  : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
