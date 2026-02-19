'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedIcon } from '@/components/ui/animated-icon'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ReactNode } from 'react'

interface MarqueeSlide {
  text: string
  content?: ReactNode
}

export function HeroSection() {
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number, delay: number, duration: number}>>([])
  const [isMounted, setIsMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [typingStarted, setTypingStarted] = useState(false)

  const fullText = 'Super-Ekosistem Terobosan 2026–2030'

  // Typewriter effect
  useEffect(() => {
    // Start typing after a small delay
    const startDelay = setTimeout(() => {
      setTypingStarted(true)
    }, 500)

    return () => clearTimeout(startDelay)
  }, [])

  useEffect(() => {
    if (!typingStarted) return

    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100) // Kecepatan mengetik: 100ms per karakter

    return () => clearInterval(typingInterval)
  }, [typingStarted])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500) // Cursor berkedip setiap 500ms

    return () => clearInterval(cursorInterval)
  }, [])

  // Generate particles only on client after mount
  useEffect(() => {
    // Defer state updates to avoid synchronous setState warning
    requestAnimationFrame(() => {
      setIsMounted(true)
      const particleData = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
      }))
      setParticles(particleData)
    })
  }, [])


  const marqueeSlides: MarqueeSlide[] = [
    {
      text: "JARINGAN EKOSISTEM Pengusaha Persatuan Pembangunan",
      content: (
        <>
          JARINGAN EKOSISTEM
          <br />
          <span className="text-green-400">Pengusaha Persatuan Pembangunan</span>
        </>
      ),
    },
    {
      text: "Selamat Bergabung di JE-P3 - Transformasi Ekonomi Digital Indonesia",
    },
    {
      text: "EKOSISTEM BARU: BISNIS DIGITAL 6.0 • WEB 3 • IOT • BLOCKCHAIN • AGI",
    },
    {
      text: "LONCATAN TEKNOLOGI TRANSFORMASI BISNIS JE-P3 MENUJU BISNIS FUTURISTIK",
    }
  ]

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % marqueeSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused, marqueeSlides.length])
  const stats = [
    { value: '83,763', label: 'Desa Terhubung' },
    { value: '195', label: 'Negara Target Ekspor' },
    { value: 'Rp25T', label: 'Target Ekspor/Tahun' },
    { value: '10M+', label: 'Pengusaha Aktif' },
  ]

  return (
    <section className="relative min-h-[70vh] flex flex-col overflow-hidden">
      {/* Marquee Slider */}
      <div
        className="bg-green-900 py-4 md:py-5 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-7xl">
              <div className="relative overflow-hidden min-h-[80px] md:min-h-[100px]">
                {marqueeSlides.map((slide, index) => {
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
                      <div className="flex items-center justify-center gap-4 md:gap-6">
                        <Image
                          src="/logo-jep3-uploaded.png"
                          alt="JE-P3 Logo"
                          width={80}
                          height={80}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                        <p className="text-center text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                          {slide.content || slide.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 md:gap-3 mt-3 md:mt-4">
                {marqueeSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 md:w-12 bg-white animate-pulse'
                        : 'w-2 md:w-2.5 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-emerald-950 dark:via-gray-900 dark:to-amber-950 animate-gradient-flow">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-animated"></div>
        </div>

        {/* Floating Orbs Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl floating-orb"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl floating-orb" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl floating-orb" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl floating-orb" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Floating Particles */}
        {isMounted && particles.length > 0 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-particle-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            {/* Badge - Simple & Professional dengan Typewriter Effect */}
            <div className="inline-flex items-center gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-white dark:bg-gray-800 rounded-2xl border-2 border-green-600 dark:border-green-400 shadow-xl transition-all duration-700 animate-pop-in">
              <AnimatedIcon animation="pulse-glow" duration={2}>
                <Image
                  src="/logo-jep3-uploaded.png"
                  alt="JE-P3 Logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                />
              </AnimatedIcon>
              <span className="text-lg md:text-xl lg:text-2xl font-extrabold text-green-800 dark:text-green-300 tracking-tight">
                {typedText}
                {showCursor && typingStarted && (
                  <span className="inline-block w-1 h-5 md:h-6 lg:h-7 bg-green-600 dark:bg-green-400 ml-1 animate-pulse"></span>
                )}
              </span>
            </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent leading-tight animate-gradient-text">
              JE-P3
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-tight animate-text-reveal">
              Jaringan Ekosistem Pengusaha{' '}
              <span className="text-emerald-600 dark:text-emerald-400">Persatuan Pembangunan</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-typewriter">
              Desa Digital → Go Global
            </p>
          </div>

          {/* Vision Statement */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="max-w-4xl mx-auto border-2 border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-3d-tilt card-hover-lift card-glow-hover cursor-pointer section-fade">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 neon-text">Visi:</span> Menjadi{' '}
                  <span className="font-semibold text-gradient-animate bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent">Super-Ekosistem Pengusaha Multinasional Terbesar di Dunia</span>{' '}
                  yang Lahir dari Desa, Dibangun oleh Rakyat, dan Menguasai Pasar Global — Menghubungkan{' '}
                  <span className="font-semibold text-amber-600 dark:text-amber-400">83.763 Desa Indonesia</span>{' '}
                  dengan <span className="font-semibold text-amber-600 dark:text-amber-400">195 Negara</span>{' '}
                  Melalui Infrastruktur Digital, Blockchain, AI, dan Kearifan Lokal.
                </p>
              </CardContent>
            </Card>
          </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all btn-shine btn-bounce btn-glow magnetic-btn ripple-btn animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Bergabung Sekarang
              <AnimatedIcon animation="slide-in-right" duration={0.5}>
                <ArrowRight className="ml-2 w-4 h-4" />
              </AnimatedIcon>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30 px-6 py-4 text-base font-semibold btn-bounce btn-glow magnetic-btn ripple-btn animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-2 border-emerald-100 dark:border-emerald-900 bg-white/90 dark:bg-gray-900/90 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:scale-105 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-fade-in visible"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="flex justify-center">
                      <AnimatedIcon
                        animation={index % 2 === 0 ? 'float' : 'bounce-subtle'}
                        delay={index * 100}
                        duration={3 + index * 0.5}
                      >
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full icon-hover-lift icon-hover-glow">
                          <Image
                            src="/logo-jep3-uploaded.png"
                            alt="JE-P3 Logo"
                            width={40}
                            height={40}
                            className="w-6 h-6 md:w-7 md:h-7 object-contain"
                          />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Portal Links */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-100 to-amber-100 dark:from-emerald-950/50 dark:to-amber-950/50 rounded-2xl border border-emerald-200 dark:border-emerald-800 transition-all duration-1000 card-glow-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 font-semibold">
              Platform JE-P3:
            </p>
            <div className="flex flex-wrap gap-3 justify-center stagger-children">
              {[
                { name: 'pppdigital.id', desc: 'Super-Platform Utama', primary: true, link: '#registration' },
                { name: 'Marketplace', desc: 'B2B & B2C Trading', link: '#features' },
                { name: 'JP3 Pay', desc: 'E-Wallet & Fintech', link: '#features' },
                { name: 'JE-P3 Academy', desc: 'E-Learning & Sertifikasi', link: '#features' },
                { name: 'Logistics 6.0', desc: 'Tracking & Cold Chain', link: '#features' },
              ].map((portal, index) => (
                <Button
                  key={index}
                  variant={portal.primary ? 'default' : 'outline'}
                  className={`${portal.primary ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500' : 'border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950/30'} transition-all hover:scale-105 btn-bounce glow-pulse-hover magnetic-btn`}
                  onClick={() => {
                    const element = document.querySelector(portal.link)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {portal.name}
                  {portal.primary && (
                    <AnimatedIcon animation="slide-in-right" duration={0.5}>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </AnimatedIcon>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <Button
              variant="ghost"
              size="icon"
              className="text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 btn-glow magnetic-btn"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
