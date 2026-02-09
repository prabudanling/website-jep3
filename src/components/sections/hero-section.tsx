'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedIcon } from '@/components/ui/animated-icon'

import { ArrowRight, Globe2, Network, Sparkles, TrendingUp, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number, delay: number, duration: number}>>([])
  const [isMounted, setIsMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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


  const marqueeSlides = [
    {
      text: "JARINGAN EKOSISTEM Pengusaha Persatuan Pembangunan",
      icon: Globe2,
    },
    {
      text: "Selamat Bergabung di JE-P3 - Transformasi Ekonomi Digital Indonesia",
      icon: Sparkles,
    },
    {
      text: "EKOSISTEM BARU: BISNIS DIGITAL 6.0 • WEB 3 • IOT • BLOCKCHAIN • AGI",
      icon: TrendingUp,
    },
    {
      text: "LONCATAN TEKNOLOGI TRANSFORMASI BISNIS JE-P3 MENUJU BISNIS FUTURISTIK",
      icon: Network,
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
    { value: '83,763', label: 'Desa Terhubung', icon: Network },
    { value: '195', label: 'Negara Target Ekspor', icon: Globe2 },
    { value: 'Rp25T', label: 'Target Ekspor/Tahun', icon: TrendingUp },
    { value: '10M+', label: 'Pengusaha Aktif', icon: Sparkles },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Marquee Slider */}
      <div
        className="bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 py-3 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-6xl">
              <div className="relative overflow-hidden">
                {marqueeSlides.map((slide, index) => {
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
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex-shrink-0 p-1.5 rounded-full bg-white/20">
                          <Icon className="w-4 h-4 text-white animate-bounce-subtle" />
                        </div>
                        <p className="text-center text-base md:text-lg font-bold text-white">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-1.5 mt-2">
                {marqueeSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-6 bg-white animate-pulse'
                        : 'w-1.5 bg-white/50 hover:bg-white/70'
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

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800 transition-all duration-700 animate-pop-in">
            <AnimatedIcon animation="pulse-glow" duration={2}>
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </AnimatedIcon>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Super-Ekosistem Terobosan 2026–2030
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent leading-tight animate-gradient-text">
              JE-P3
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-tight animate-text-reveal">
              Jaringan Ekosistem Pengusaha{' '}
              <span className="text-emerald-600 dark:text-emerald-400">Persatuan Pembangunan</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-typewriter">
              Desa Digital → Go Global
            </p>
          </div>

          {/* Vision Statement */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="max-w-5xl mx-auto border-2 border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-3d-tilt card-hover-lift card-glow-hover cursor-pointer section-fade">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all btn-shine btn-bounce btn-glow magnetic-btn ripple-btn animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Bergabung Sekarang
              <AnimatedIcon animation="slide-in-right" duration={0.5}>
                <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedIcon>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30 px-8 py-6 text-lg font-semibold btn-bounce btn-glow magnetic-btn ripple-btn animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={index}
                    className="border-2 border-emerald-100 dark:border-emerald-900 bg-white/90 dark:bg-gray-900/90 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all hover:scale-105 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-fade-in visible"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <AnimatedIcon
                        animation={index % 2 === 0 ? 'float' : 'bounce-subtle'}
                        delay={index * 100}
                        duration={3 + index * 0.5}
                      >
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full icon-hover-lift icon-hover-glow">
                          <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            )}
            </div>

            {/* Portal Links */}
            <div className="mt-12 p-6 bg-gradient-to-r from-emerald-100 to-amber-100 dark:from-emerald-950/50 dark:to-amber-950/50 rounded-2xl border border-emerald-200 dark:border-emerald-800 transition-all duration-1000 card-glow-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <Button
              variant="ghost"
              size="icon"
              className="text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 btn-glow magnetic-btn"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <ChevronDown className="w-8 h-8 animate-bounce-subtle" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
