'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedIcon } from '@/components/ui/animated-icon'

import { Calendar, TrendingUp, Users, Target, Lightbulb, Rocket } from 'lucide-react'

export function AboutSection() {
  const timeline = [
    {
      year: '2016–2019',
      era: 'bisnisPPP',
      focus: 'Networking pengusaha PPP.',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      year: '2020–2025',
      era: 'JP3',
      focus: 'Ekosistem Digital 6.0, Whitepaper Nasional–Global.',
      icon: TrendingUp,
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    },
    {
      year: '2026–2030',
      era: 'JE-P3',
      focus: 'Super-Ekosistem Multinasional, Desa Digital Go Global.',
      icon: Rocket,
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    },
  ]

  const problems = [
    {
      icon: Target,
      title: '173 Kabupaten Terisolasi',
      description: 'Masih terputus total dari pasar ekspor dengan potensi Rp2–3 triliun per tahun.',
    },
    {
      icon: Users,
      title: '17 Juta Petani Tidak Terbankir',
      description: 'Kesulitan akses modal dan layanan keuangan formal.',
    },
    {
      icon: Calendar,
      title: '40% Hasil Panen Terbuang',
      description: 'Cold chain tidak memadai menyebabkan kerugian besar.',
    },
    {
      icon: Lightbulb,
      title: '5–15 Perantara',
      description: 'Rantai pasokan panjang memakan hingga 80% margin petani.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background dots diberi -z-10 supaya tidak nutup konten */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute inset-0 bg-dots-animated" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <Badge className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 animate-pop-in">
              Tentang JE-P3
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 animate-text-reveal">
              Sejarah & Evolusi
            </h2>
            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Dari bisnisPPP (2016) → JP3 (2020) → JE-P3 (2026): satu dekade membangun arsitektur
              peradaban ekonomi dari desa untuk dunia.
            </p>
          </div>

          {/* Timeline evolusi */}
          <div
            className="grid md:grid-cols-3 gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className={`border-2 hover:shadow-xl transition-all hover:-translate-y-1 scroll-slide-left card-3d-tilt card-hover-lift card-glow-hover cursor-pointer visible ${
                    index === 2
                      ? 'border-amber-300 dark:border-amber-700 ring-2 ring-amber-200 dark:ring-amber-800'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs md:text-sm font-semibold">
                        {item.year}
                      </Badge>
                      <AnimatedIcon
                        animation={index === 2 ? 'pulse-glow' : 'scale-pulse'}
                        delay={index * 200}
                        duration={2.5}
                      >
                        <div
                          className={`p-3 rounded-full ${item.color} icon-hover-bounce icon-hover-glow`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gradient-animate bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                      {item.era}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.focus}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Masalah yang diselesaikan */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in-up">
                Masalah yang Kami Selesaikan
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                JE-P3 hadir untuk menjawab tantangan ekonomi desa Indonesia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 stagger-children">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <Card
                    key={index}
                    className="border-2 border-red-100 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-700 transition-all scroll-scale-in card-3d-tilt card-hover-lift cursor-pointer visible"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <AnimatedIcon animation="wiggle" delay={index * 150} duration={2}>
                          <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full icon-hover-glow icon-hover-lift">
                            <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                          </div>
                        </AnimatedIcon>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                          {problem.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Narasi brand / origin story */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/30 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up">
                    Narasi Brand
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium animate-pop-in neon-text">
                    "Dari Desa Untuk Dunia"
                  </p>
                </div>
                <blockquote className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify border-l-4 border-emerald-500 dark:border-emerald-600 pl-6 italic">
                  JE-P3 lahir dari satu dekade perjuangan membangun ekonomi kerakyatan digital. Dari
                  bisnisPPP yang sederhana di 2016, menjadi JP3 yang visioner di 2020, hingga JE-P3
                  yang revolusioner di 2026. Kami bukan sekadar jaringan pengusaha — kami adalah
                  ekosistem peradaban ekonomi baru Indonesia, di mana setiap desa adalah pusat, setiap
                  pengusaha adalah pahlawan, dan setiap produk lokal adalah brand global.
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
