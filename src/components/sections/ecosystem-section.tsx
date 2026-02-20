'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Building2,
  Map,
  Store,
  Wallet,
  GraduationCap,
  Truck,
  Shield,
} from 'lucide-react'

export function EcosystemSection() {
  const layers = [
    {
      id: 1,
      name: 'Node Desa Digital & Smart Village',
      icon: Building2,
      description:
        '83.763 desa menjadi node produksi global dengan IoT sensors, cold storage, dan digital hub.',
      features: ['IoT Monitoring', 'Cold Chain Storage', 'Digital Cadres', 'Master Farmers'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 2,
      name: 'Zonasi Komoditas Regional',
      icon: Map,
      description:
        'Pemetaan komoditas berbasis geospatial untuk optimalisasi produksi dan distribusi.',
      features: ['Commodity Mapping', 'Regional Hubs', 'Supply Chain Optimization', 'Demand Forecasting'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      id: 3,
      name: 'JP3 Global Marketplace',
      icon: Store,
      description:
        'Marketplace berbasis blockchain untuk B2B & B2C trading dengan smart contract dan escrow.',
      features: ['Blockchain Verified', 'Smart Contracts', 'B2B & B2C', 'Global Buyers'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 4,
      name: 'JP3 Pay E-Wallet',
      icon: Wallet,
      description:
        'Fintech layer dengan e-wallet, microloans, crop insurance, dan savings.',
      features: ['E-Wallet', 'Microloans', 'Crop Insurance', 'Instant Settlement'],
      color: 'from-sky-500 to-sky-600',
    },
    {
      id: 5,
      name: 'JE-P3 Academy',
      icon: GraduationCap,
      description:
        'Platform e-learning 3 tingkat dengan sertifikasi profesional untuk pengusaha desa.',
      features: ['3-Tier Learning', 'Certification', 'Local Language', 'Expert Trainers'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 6,
      name: 'JP3 Logistics 6.0',
      icon: Truck,
      description:
        'Sistem logistik terintegrasi dengan real-time tracking, cold chain monitoring, dan export documentation.',
      features: ['Real-time Tracking', 'Cold Chain', 'Export Docs', 'Route Optimization'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 7,
      name: 'Governance & Holding',
      icon: Shield,
      description:
        'Struktur tata kelola terintegrasi dengan transparency blockchain dan accountability.',
      features: ['Blockchain Audit', 'Multi-level Governance', 'Compliance', 'Trust System'],
      color: 'from-violet-500 to-violet-600',
    },
  ]

  return (
    <section
      id="ecosystem"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background dots: kirim ke belakang */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute inset-0 bg-dots-animated" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <Badge className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 animate-pop-in">
              Arsitektur Ekosistem
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent animate-text-reveal">
              7-Layer Super-Ekosistem
            </h2>
            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              JE-P3 mengoperasikan arsitektur tujuh lapis terintegrasi yang mencakup seluruh rantai
              nilai dari hulu ke hilir, dari desa ke global.
            </p>
          </div>

          {/* Kartu tiap layer */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {layers.map(layer => {
              const Icon = layer.icon
              return (
                <Card
                  key={layer.id}
                  className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* panel kiri: nomor & ikon */}
                    <div
                      className={`lg:w-64 p-6 bg-gradient-to-br ${layer.color} flex lg:flex-col items-center gap-4 lg:gap-3 relative overflow-hidden`}
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="text-3xl font-bold text-white/90">
                          {String(layer.id).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* konten kanan */}
                    <div className="flex-1 p-6 lg:p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {layer.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 space-y-4">
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          {layer.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {layer.features.map((feature, fIndex) => (
                            <Badge
                              key={fIndex}
                              variant="outline"
                              className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-xs md:text-sm text-gray-700 dark:text-gray-300 hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all cursor-default"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Info ekosistem tambahan */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Platform utama */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up">
                      Platform Utama
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 group cursor-pointer">
                        <div className="mt-1 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            pppdigital.id
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Super-platform utama ekosistem.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 group cursor-pointer">
                        <div className="mt-1 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            ppbbisnis.com
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Portal informasi & pendaftaran.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cakupan operasional */}
                  <div className="space-y-4">
                    <h3
                      className="text-xl md:text-2xl font-bold text-gradient-animate bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up"
                      style={{ animationDelay: '0.2s' }}
                    >
                      Cakupan Operasional
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          value: '83,763',
                          label: 'Desa',
                          color: 'text-emerald-600 dark:text-emerald-400',
                          border: 'border-emerald-200 dark:border-emerald-800',
                        },
                        {
                          value: '7,277',
                          label: 'Kecamatan',
                          color: 'text-amber-600 dark:text-amber-400',
                          border: 'border-amber-200 dark:border-amber-800',
                        },
                        {
                          value: '514',
                          label: 'Kab/Kota',
                          color: 'text-emerald-600 dark:text-emerald-400',
                          border: 'border-emerald-200 dark:border-emerald-800',
                        },
                        {
                          value: '38',
                          label: 'Provinsi',
                          color: 'text-amber-600 dark:text-amber-400',
                          border: 'border-amber-200 dark:border-amber-800',
                        },
                      ].map((stat, sIndex) => (
                        <div
                          key={sIndex}
                          className={`text-center p-4 bg-white dark:bg-gray-900 rounded-lg border-2 ${stat.border} hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer`}
                        >
                          <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
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
