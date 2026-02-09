'use client'

import { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import { Calendar, ArrowRight, TrendingUp, Award, Globe } from 'lucide-react'

export function NewsSection() {
  
  const news = [
    {
      category: 'Milestone',
      icon: Award,
      iconColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
      title: 'JE-P3 Resmi Diluncurkan: Transformasi JP3 Menjadi Super-Ekosistem',
      excerpt: 'Setelah satu dekade perjalanan dari bisnisPPP ke JP3, kini JE-P3 hadir sebagai ekosistem multinasional yang menghubungkan 83.763 desa dengan 195 negara.',
      date: '9 Februari 2026',
      readTime: '5 min baca',
      featured: true,
    },
    {
      category: 'Ekspansi',
      icon: Globe,
      iconColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      title: '5.000 Desa Pilot Akan Terhubung ke Ekosistem JE-P3 Tahun Ini',
      excerpt: 'Program pilot akan dimulai di Jawa, Sumatra, dan Sulawesi dengan fokus pada komoditas kopi, coklat, dan rempah premium.',
      date: '8 Februari 2026',
      readTime: '4 min baca',
      featured: false,
    },
    {
      category: 'Partnership',
      icon: TrendingUp,
      iconColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      title: 'JE-P3 Jalin Kerjasama Strategis dengan Bank Himbara',
      excerpt: 'Kerjasama ini akan memfasilitasi akses modal untuk 17 juta petani yang belum terbankir melalui JP3 Pay dan microloans.',
      date: '7 Februari 2026',
      readTime: '3 min baca',
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots-animated"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className={`text-center space-y-4 `}>
            <Badge className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 animate-pop-in">
              Berita & Update
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent animate-text-reveal">
              Kabar Terbaru
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ikuti perkembangan terbaru JE-P3 dalam membangun super-ekosistem pengusaha desa Indonesia
            </p>
          </div>

          {/* Featured News */}
          <div className={`transition-all duration-1000 `}>
            {news.filter(n => n.featured).map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30 hover:shadow-2xl transition-all card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-fade-in animate-shimmer" style={{ transitionDelay: `${index * 150}ms` }}>
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-amber-500 text-white animate-pulse-glow" style={{ animationDuration: '2s' }}>
                            {item.category}
                          </Badge>
                          <AnimatedIcon animation="bounce-subtle" duration={2}>
                            <div className={`p-2 rounded-lg ${item.iconColor} icon-hover-glow icon-hover-lift`}>
                              <Icon className="w-4 h-4" />
                            </div>
                          </AnimatedIcon>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gradient-animate bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent animate-fade-in-up">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                            <span>•</span>
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6 flex flex-col justify-center">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.excerpt}
                        </p>
                        <Button className="w-fit bg-amber-500 hover:bg-amber-600 text-white btn-bounce btn-glow magnetic-btn ripple-btn">
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Other News */}
          <div className={`grid md:grid-cols-2 gap-6 stagger-children `}>
            {news.filter(n => !n.featured).map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-1 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-slide-left animate-pop-in" style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all cursor-default animate-pop-in" style={{ animationDelay: `${index * 100}ms` }}>
                        {item.category}
                      </Badge>
                      <AnimatedIcon
                        animation="pulse-glow"
                        delay={index * 150}
                        duration={2}
                      >
                        <div className={`p-2 rounded-lg ${item.iconColor} icon-hover-glow icon-hover-lift`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 btn-bounce magnetic-btn">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Newsletter Signup */}
          <div className={`transition-all duration-1000 `}>
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-emerald-950/30 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer section-fade">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                  <div className="flex justify-center">
                    <AnimatedIcon animation="pulse-glow" duration={2}>
                      <div className="p-4 bg-emerald-100 dark:bg-emerald-900/50 rounded-full icon-hover-glow icon-hover-lift">
                        <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </AnimatedIcon>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up">
                      Berlangganan Newsletter JE-P3
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dapatkan update terbaru tentang perkembangan ekosistem, tips bisnis, dan peluang ekspor langsung ke inbox Anda
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Masukkan email Anda"
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/50 transition-all hover:border-emerald-300 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30"
                    />
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white whitespace-nowrap btn-shine btn-bounce btn-glow magnetic-btn ripple-btn">
                      Berlangganan
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Kami menghargai privasi Anda. Berhenti berlangganan kapan saja.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
