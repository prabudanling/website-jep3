'use client'

import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import {
  TrendingUp,
  DollarSign,
  Globe,
  BarChart3,
  FileText,
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react'

export function InvestorSection() {
  const kpis = [
    { metric: 'Target Revenue 2030', value: 'Rp850B-1T', growth: '+1000%', icon: DollarSign },
    { metric: 'Desa Target', value: '83,763', growth: '100% coverage', icon: Globe },
    { metric: 'Active Users', value: '10M+', growth: 'by 2030', icon: TrendingUp },
    { metric: 'Ekspor/Tahun', value: 'Rp25T+', growth: '+2000%', icon: BarChart3 },
  ]

  const revenueStreams = [
    { stream: 'Marketplace Fees', percentage: 12, amount: 'Rp100B+' },
    { stream: 'Logistics Services', percentage: 59, amount: 'Rp500B+' },
    { stream: 'Financial Services', percentage: 12, amount: 'Rp100B+' },
    { stream: 'Training/Certification', percentage: 6, amount: 'Rp50B+' },
    { stream: 'Data Analytics', percentage: 6, amount: 'Rp50B+' },
    { stream: 'Tech Licensing', percentage: 6, amount: 'Rp50B+' },
  ]

  const documents = [
    { name: 'Whitepaper JE-P3 7.0', type: 'PDF', size: '2.5 MB', date: '2026-02-08' },
    { name: 'Financial Projection 2026-2030', type: 'PDF', size: '1.8 MB', date: '2026-02-01' },
    { name: 'Investor Presentation Q1 2026', type: 'PPTX', size: '5.2 MB', date: '2026-01-15' },
    { name: 'ESG Impact Report', type: 'PDF', size: '3.1 MB', date: '2026-01-01' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots-animated"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-4 `}>
            <Badge className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 animate-pop-in">
              Investor Relations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-animate bg-gradient-to-r from-amber-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent animate-text-reveal">
              Investor Portal
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Peluang investasi dalam super-ekosistem yang akan mengubah lanskap ekonomi desa Indonesia
            </p>
          </div>

          {/* Key Metrics */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children `}>
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon
              return (
                <Card key={index} className="border-2 hover:shadow-2xl transition-all hover:-translate-y-1 card-3d-tilt card-hover-lift card-glow-hover cursor-pointer scroll-fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 space-y-3">
                    <AnimatedIcon
                      animation={index % 2 === 0 ? 'pulse-glow' : 'float'}
                      delay={index * 100}
                      duration={3}
                    >
                      <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-full w-fit icon-hover-lift icon-hover-glow">
                        <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                    </AnimatedIcon>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-gradient-animate text-amber-600 dark:text-amber-400">
                        {kpi.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {kpi.metric}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs animate-pulse-glow" style={{ animationDuration: '2s', animationDelay: `${index * 150}ms` }}>
                      {kpi.growth}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Investment Highlights */}
          <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Investment Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    Market Opportunity
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Addressable market: 287.6 juta orang</li>
                    <li>• 83,763 desa dengan potensi ekonomi belum dimanfaatkan</li>
                    <li>• First-mover advantage di agri-tech Indonesia</li>
                    <li>• Network effects yang semakin kuat seiring waktu</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    Financial Metrics
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Platform cash-flow positive: Tahun 3 (2028)</li>
                    <li>• Full ROI: Tahun 6-8 (2031-2033)</li>
                    <li>• LTV/CAC Ratio: 10-75x (sangat sehat)</li>
                    <li>• Payback period: 12-18 bulan per desa</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  Revenue Streams 2030
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {revenueStreams.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{item.stream}</span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{item.amount}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents & Resources */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Documents */}
            <Card className="border-2 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Dokumen Investor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {documents.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded">
                        <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {doc.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA & Contact */}
            <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Hubungi Tim Investor Relations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Kami menyambut baik pertanyaan dari investor yang tertarik berpartisipasi dalam transformasi ekonomi desa Indonesia melalui JE-P3.
                </p>

                <div className="space-y-3">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Request Investor Deck
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30">
                    Jadwalkan Meeting
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-gray-100">Email:</span>{' '}
                    investor@jep3.id
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-gray-100">Phone:</span>{' '}
                    +62 21 1234 5678
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Funding Sources Info */}
          <Card className="border-2 border-violet-200 dark:border-violet-800">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Struktur Pendanaan
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  JE-P3 membutuhkan sinergi multi-stakeholder untuk mencapai visi transformasi 83.763 desa
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: 'Pemerintah', value: '40%', color: 'bg-emerald-500' },
                    { label: 'Development Banks', value: '25%', color: 'bg-blue-500' },
                    { label: 'Sektor Swasta', value: '20%', color: 'bg-amber-500' },
                    { label: 'Koperasi', value: '15%', color: 'bg-violet-500' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {item.value}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
