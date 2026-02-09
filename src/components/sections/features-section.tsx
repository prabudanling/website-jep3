'use client'

import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedIcon } from '@/components/ui/animated-icon'

import { 
  ShoppingCart, 
  Wallet, 
  GraduationCap, 
  LineChart, 
  Truck, 
  Shield, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export function FeaturesSection() {

  const features = [
    {
      icon: ShoppingCart,
      title: 'JE-P3 Marketplace',
      description: 'Platform B2B & B2C trading dengan smart contract, escrow blockchain, dan verifikasi kualitas AI',
      benefits: [
        'Listing produk dengan blockchain certificate',
        'Smart contract otomatis untuk transaksi aman',
        'Escrow payment via JP3 Pay',
        'AI quality assessment & fraud detection'
      ],
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      badge: 'Core Platform',
    },
    {
      icon: Wallet,
      title: 'JP3 Pay E-Wallet',
      description: 'Fintech layer lengkap dengan e-wallet, microloans, crop insurance, dan savings',
      benefits: [
        'Pembayaran instan & settlement otomatis',
        'Microloans hingga Rp10M',
        'Crop insurance dengan parametric payout',
        'Savings & investment products'
      ],
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
      badge: 'Fintech',
    },
    {
      icon: GraduationCap,
      title: 'JE-P3 Academy',
      description: 'Platform e-learning 3 tingkat dengan sertifikasi profesional untuk pengusaha desa',
      benefits: [
        'Tingkat 1: Literasi Digital (Gratis)',
        'Tingkat 2: Keterampilan Bisnis',
        'Tingkat 3: Penguasaan Ekspor',
        'Sertifikasi bertingkat & employment guarantee'
      ],
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      badge: 'Education',
    },
    {
      icon: LineChart,
      title: 'Smart Village Dashboard',
      description: 'Dashboard monitoring IoT real-time untuk weather, soil, dan production data per desa',
      benefits: [
        'IoT sensors monitoring 24/7',
        'Weather forecast & advisory',
        'Soil health analysis',
        'Production data analytics'
      ],
      color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      badge: 'IoT & Data',
    },
    {
      icon: Truck,
      title: 'Logistics Tracker',
      description: 'Real-time shipment tracking dengan cold chain monitoring dan ETA prediction',
      benefits: [
        'Real-time shipment tracking',
        'Cold chain temperature monitoring',
        'Route optimization AI',
        'Export documentation auto-generated'
      ],
      color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
      badge: 'Logistics',
    },
    {
      icon: Shield,
      title: 'Blockchain Explorer',
      description: 'Transparency layer untuk setiap transaksi yang bisa diverifikasi publik',
      benefits: [
        'Transparansi farm-to-fork',
        'Verifikasi compliance EUDR',
        'Audit trail immutable',
        'Trust score system'
      ],
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      badge: 'Blockchain',
    },
    {
      icon: Users,
      title: 'Member Hub',
      description: 'Platform networking, forum komunitas, event calendar, dan peer mentoring',
      benefits: [
        'Profil anggota & portfolio',
        'Forum komunitas aktif',
        'Event calendar & registration',
        'Peer mentoring system'
      ],
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      badge: 'Community',
    },
    {
      icon: Globe,
      title: 'AI Advisor',
      description: 'Sistem rekomendasi AI untuk komoditas, pricing, dan demand forecasting',
      benefits: [
        'Rekomendasi komoditas berbasis geo-spatial',
        'Dynamic pricing suggestion',
        'Demand forecasting per desa',
        'Risk assessment & mitigation'
      ],
      color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      badge: 'AI/ML',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots-animated"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <Badge className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 animate-pop-in">
              Fitur & Layanan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent animate-text-reveal">
              Super-Platform Lengkap
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              JE-P3 menyediakan seluruh infrastruktur digital yang dibutuhkan pengusaha desa untuk bertransformasi menjadi eksportir global
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-fade-in visible"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <AnimatedIcon
                        animation={index % 3 === 0 ? 'scale-pulse' : index % 3 === 1 ? 'float' : 'bounce-subtle'}
                        delay={index * 100}
                        duration={2.5}
                      >
                        <div className={`p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform icon-hover-lift icon-hover-glow`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </AnimatedIcon>
                      <Badge variant="outline" className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all cursor-default animate-pop-in" style={{ animationDelay: `${index * 100 + 150}ms` }}>
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gradient-animate bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-amber-600 dark:group-hover:from-emerald-400 dark:group-hover:to-amber-400 transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-start gap-2 group/benefit">
                          <AnimatedIcon
                            animation="pop-in"
                            delay={bIndex * 50}
                            duration={0.6}
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 icon-hover-glow" />
                          </AnimatedIcon>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/benefit:text-emerald-600 dark:group-hover/benefit:text-emerald-400 transition-colors">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Platforms */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer section-fade">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up">
                    Platform Tambahan untuk Stakeholder
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
                    {[
                      {
                        name: 'Investor Portal',
                        description: 'Impact dashboard, financial reports, deal flow',
                        icon: LineChart,
                        color: 'bg-emerald-100 dark:bg-emerald-900/50',
                      },
                      {
                        name: 'Government Interface',
                        description: 'KPI desa, dana desa tracking, compliance',
                        icon: Shield,
                        color: 'bg-amber-100 dark:bg-amber-900/50',
                      },
                      {
                        name: 'Export Desk',
                        description: 'Documentation, trade finance, buyer matching',
                        icon: Globe,
                        color: 'bg-blue-100 dark:bg-blue-900/50',
                      },
                      {
                        name: 'Cooperative Hub',
                        description: 'Aggregasi, sertifikasi, volume management',
                        icon: Users,
                        color: 'bg-violet-100 dark:bg-violet-900/50',
                      },
                    ].map((platform, index) => {
                      const Icon = platform.icon
                      return (
                        <Card
                          key={index}
                          className="border border-gray-200 dark:border-gray-800 hover:border-emerald-400 dark:hover:border-emerald-700 transition-all card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-scale-in visible"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <CardContent className="p-6 text-center space-y-3">
                            <div className="flex justify-center">
                              <AnimatedIcon
                                animation="wiggle"
                                delay={index * 150}
                                duration={2}
                              >
                                <div className={`p-3 ${platform.color} rounded-full icon-hover-glow icon-hover-lift`}>
                                  <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                              </AnimatedIcon>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                              {platform.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {platform.description}
                            </p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
