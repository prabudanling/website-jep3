'use client'

import { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import { 
  TrendingUp, 
  Users, 
  Globe, 
  DollarSign, 
  Building2,
  Leaf,
  Award,
  Target
} from 'lucide-react'

export function ImpactSection() {
  const impacts = [
    {
      icon: Building2,
      value: '83,763',
      label: 'Desa Tertransformasi',
      subtext: 'Menjadi smart village terkoneksi pasar global',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      progress: 10,
      progressLabel: 'Target: 100% by 2030',
    },
    {
      icon: Users,
      value: '2M+',
      label: 'Petani Terhubung',
      subtext: 'Terintegrasi ke value chains global',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      progress: 12,
      progressLabel: 'Dari 17M petani Indonesia',
    },
    {
      icon: Target,
      value: '2-3M',
      label: 'Lapangan Kerja Baru',
      subtext: 'Dibuat melalui ekosistem JE-P3',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      progress: 15,
      progressLabel: '518,231 posisi langsung',
    },
    {
      icon: DollarSign,
      value: 'Rp25T',
      label: 'Target Ekspor/Tahun',
      subtext: 'By 2030',
      color: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      progress: 8,
      progressLabel: 'Saat ini: Rp1.25T baseline',
    },
    {
      icon: Leaf,
      value: '60-70M',
      label: 'Orang Terangkat',
      subtext: 'Dari kemiskinan melalui ekonomi digital',
      color: 'text-pink-600 dark:text-pink-400',
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      progress: 20,
      progressLabel: 'Dampak langsung & tidak langsung',
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Negara Ekspor',
      subtext: 'Target penembusan pasar global',
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
      progress: 5,
      progressLabel: 'Saat ini: fokus ASEAN',
    },
  ]

  const farmerImpact = [
    { metric: 'Pendapatan Rata-rata', baseline: 'Rp12M', target: 'Rp75M', growth: '+525%', year: '2030' },
    { metric: 'Top 20% Performers', baseline: 'Rp25M', target: 'Rp200M', growth: '+700%', year: '2030' },
    { metric: 'Share Harga Jual', baseline: '20%', target: '60-70%', growth: '+200-250%', year: '2030' },
    { metric: 'Akses Pasar', baseline: 'Lokal', target: '195 Negara', growth: 'Global', year: '2030' },
  ]

  const investment = [
    { phase: 'Foundation', period: '2026 Q1-Q2', amount: 'Rp500B', cumulative: 'Rp500B' },
    { phase: 'Pilot', period: '2026 Q3-Q4', amount: 'Rp4T', cumulative: 'Rp4.5T' },
    { phase: 'Scale Year 1', period: '2027', amount: 'Rp8T', cumulative: 'Rp12.5T' },
    { phase: 'Scale Year 2', period: '2028', amount: 'Rp12T', cumulative: 'Rp24.5T' },
    { phase: 'Scale Year 3', period: '2029', amount: 'Rp8T', cumulative: 'Rp32.5T' },
    { phase: 'Maturation', period: '2030', amount: 'Rp10T', cumulative: 'Rp42.5T' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-animated"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-4 `}>
            <Badge className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 animate-pop-in">
              Dampak & Proyeksi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent animate-text-reveal">
              Dampak Ekonomi Nyata
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Investasi total Rp42,5 triliun (2026-2030) dengan proyeksi dampak transformatif untuk ekonomi desa Indonesia
            </p>
          </div>

          {/* Impact Cards */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children `}>
            {impacts.map((impact, index) => {
              const Icon = impact.icon
              return (
                <Card
                  key={index}
                  className={`border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-fade-in visible`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <AnimatedIcon
                        animation={index % 2 === 0 ? 'pulse-glow' : 'float'}
                        delay={index * 100}
                        duration={3}
                      >
                        <div className={`p-3 rounded-xl ${impact.bg} icon-hover-lift icon-hover-glow`}>
                          <Icon className={`w-6 h-6 ${impact.color}`} />
                        </div>
                      </AnimatedIcon>
                      <Badge variant="outline" className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all cursor-default animate-pop-in" style={{ animationDelay: `${index * 100 + 150}ms` }}>
                        {impact.progressLabel}
                      </Badge>
                    </div>
                    <div>
                      <p className={`text-3xl md:text-4xl font-bold text-gradient-animate ${impact.color}`}>
                        {impact.value}
                      </p>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {impact.label}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {impact.subtext}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className={`font-semibold ${impact.color} animate-pulse-glow`} style={{ animationDuration: '2s' }}>{impact.progress}%</span>
                      </div>
                      <Progress value={impact.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Farmer Impact Table */}
          <div className={`transition-all duration-1000 `}>
            <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer section-fade">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <AnimatedIcon animation="pulse-glow" duration={2}>
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-full icon-hover-bounce icon-hover-glow">
                          <TrendingUp className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-animate bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up">
                      Dampak Langsung ke Petani
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Transformasi pendapatan dan akses pasar
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200 dark:border-gray-800">
                          <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-gray-100">Metrik</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-gray-100">Baseline 2025</th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-gray-100">Target 2030</th>
                          <th className="text-center py-4 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Pertumbuhan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {farmerImpact.map((item, index) => (
                          <tr key={index} className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="py-4 px-4 font-medium text-gray-900 dark:text-gray-100">
                              {item.metric}
                            </td>
                            <td className="text-center py-4 px-4 text-gray-600 dark:text-gray-400">
                              {item.baseline}
                            </td>
                            <td className="text-center py-4 px-4 font-semibold text-emerald-600 dark:text-emerald-400">
                              {item.target}
                            </td>
                            <td className="text-center py-4 px-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 animate-pop-in hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors cursor-default" style={{ animationDelay: `${index * 100}ms` }}>
                                {item.growth}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Timeline */}
          <div className={`transition-all duration-1000 `}>
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer section-fade">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <AnimatedIcon animation="shine" duration={2.5}>
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full icon-hover-glow">
                          <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up">
                      Rencana Investasi 2026-2030
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Total investasi: Rp42,5 triliun
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
                    {investment.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer card-hover-lift scroll-scale-in animate-pop-in"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors">
                              {item.period}
                            </Badge>
                            <span className="text-2xl font-bold text-gradient-animate text-emerald-600 dark:text-emerald-400">
                              {item.amount}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                            {item.phase}
                          </h4>
                          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Kumulatif: <span className="font-semibold text-gray-900 dark:text-gray-100">{item.cumulative}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Funding Sources */}
          <div className={`transition-all duration-1000 `}>
            <Card className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer animate-shimmer section-fade">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gradient-animate bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
                    Sumber Pendanaan
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4 stagger-children">
                    {[
                      { source: 'Pemerintah', percentage: 40, color: 'bg-emerald-500', hover: 'hover:bg-emerald-600' },
                      { source: 'Development Banks', percentage: 25, color: 'bg-blue-500', hover: 'hover:bg-blue-600' },
                      { source: 'Sektor Swasta', percentage: 20, color: 'bg-amber-500', hover: 'hover:bg-amber-600' },
                      { source: 'Koperasi', percentage: 15, color: 'bg-violet-500', hover: 'hover:bg-violet-600' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{item.source}</span>
                          <span className={`font-bold text-gray-900 dark:text-gray-100 animate-pulse-glow`} style={{ animationDuration: '2s', animationDelay: `${index * 0.2}s` }}>{item.percentage}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} ${item.hover} ease-out rounded-full animate-pop-in`} style={{ width: `${item.percentage}%`, animationDelay: `${0.3 + index * 0.1}s` }}></div>
                        </div>
                      </div>
                    ))}
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
