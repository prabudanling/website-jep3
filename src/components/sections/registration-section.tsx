'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import {
  User,
  Building2,
  MapPin,
  Map,
  Phone,
  Mail,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Crown,
  Globe2,
  Trophy,
  Sparkles,
  TrendingUp,
  Clock,
  Shield,
  Award,
  Star,
  Zap,
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function RegistrationSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    village: '',
    district: '',
    province: '',
    description: '',
    membershipTier: '',
  })

  const formatRp = (price: number): string => {
    if (price === 0) return 'GRATIS'
    return 'Rp' + price.toLocaleString('id-ID')
  }

  const membershipTiers = [
    {
      id: 'petani',
      name: 'Petani Digital',
      price: 'GRATIS',
      originalPrice: undefined,
      discount: '',
      quota: '83.763 slot (1 per desa)',
      for: 'Petani & Pekebun Indonesia',
      icon: Sparkles,
      recommended: false,
      color: 'from-amber-400 to-amber-600',
      badge: 'BEASISWA DIGITAL',
      description: 'Subsidi Ekosistem untuk Petani & Pekebun',
      features: [
        'Akses pppbisnis.com Full',
        'Passport Blockchain Digital',
        'Dashboard Manajemen Hasil Panen',
        'Pelatihan Digital Farming',
        'Akses Marketplace Desa',
        'Sertifikasi Produk Ekspor',
        'Akses Komunitas Tani Digital',
        'Consultation Gratis Pakar Agrikultur',
      ],
    },
    {
      id: 'founding',
      name: 'Anggota Awal JE-P3',
      price: formatRp(250000),
      originalPrice: formatRp(1000000),
      discount: '75% OFF',
      quota: '10.000 slot eksklusif',
      for: 'Pengusaha Desa/Kota, Kader PPP, Non-PPP',
      icon: Crown,
      recommended: true,
      color: 'from-emerald-500 to-amber-500',
      badge: 'POPULER',
      description: 'Kuasai Cara Bertahan Hidup & Raup Cuan',
      features: [
        'Profil di direktori pengusaha JE-P3 nasional',
        'Akses marketplace & JP3 Pay',
        'Prioritas program pelatihan batch awal',
        'Badge "Founding Member" di profil & sertifikat digital',
        'Akses grup komunitas eksklusif',
        'Free Banner Profile JE-P3',
        'Akses Early-Stage Investment',
        'Priority Customer Support',
        'Exclusive Webinar Series',
        'Digital Marketing Kit',
      ],
    },
    {
      id: 'koperasi',
      name: 'Koperasi & BUMDes Aggregator',
      price: formatRp(2500000),
      originalPrice: formatRp(10000000),
      discount: '75% OFF',
      quota: '83.763 slot (1 per desa)',
      for: 'Pengurus Koperasi/BUMDes',
      icon: Building2,
      recommended: false,
      color: 'from-blue-500 to-cyan-500',
      badge: 'KOLEKTIF',
      description: 'Modal Rp10 Juta – Aggregator Produk Desa',
      features: [
        'Akses modul agregasi hasil produksi',
        'Slot prioritas sebagai hub utama di desa/kecamatan',
        'Undangan ke "Koperasi Digital Nasional" 2x setahun',
        'Fitur distribusi keuntungan otomatis',
        'Laporan keuangan terintegrasi blockchain',
        'Dashboard Multi-Desa Management',
        'Supply Chain Access Prioritas',
        'Grants & Funding Opportunities',
        'Training Kepemimpinan Digital',
        'Co-Branding Koperasi Digital',
        'API Integration Partners',
        'Monthly Performance Report',
      ],
    },
    {
      id: 'kecamatan',
      name: 'Regional Builder (Kecamatan)',
      price: formatRp(10000000),
      originalPrice: formatRp(40000000),
      discount: '75% OFF',
      quota: '7.213 kecamatan (1 per kecamatan)',
      for: 'Pengusaha Lokal, Tokoh Masyarakat, Pengusaha UMKM',
      icon: MapPin,
      recommended: false,
      color: 'from-purple-500 to-pink-500',
      badge: 'KECAMATAN',
      description: 'Level Kecamatan – Monopol Area Eksklusif',
      features: [
        'Eksklusif: "Channel Resmi Ekosistem" di wilayah',
        'Hak mengelola 10–20 desa di wilayahnya',
        'Akses langsung ke National Board',
        'Bagi hasil transaksi & pelatihan wilayah',
        'Desa Sponsorship Program (sponsor 5 desa)',
        'Logistics Hub Eksklusif Kecamatan',
        'Real-time Dashboard Analytics',
        'Territory Protection Guarantee',
        'Priority Export Access',
        'Custom Business Model Support',
        'Digital Transformation Workshop',
        'Regional Networking Events',
        'Annual Strategic Planning Session',
        'Branding & Marketing Material',
      ],
    },
    {
      id: 'kabupaten',
      name: 'Regional Builder (Kabupaten)',
      price: formatRp(15000000),
      originalPrice: formatRp(60000000),
      discount: '75% OFF',
      quota: '514 kabupaten/kota (1 per kabupaten)',
      for: 'Pengusaha Lokal/Koalisi, Bupati/Walikota, Tokoh Daerah',
      icon: Map,
      recommended: false,
      color: 'from-violet-500 to-fuchsia-500',
      badge: 'KABUPATEN',
      description: 'Level Kabupaten – Akses 10–100 Desa',
      features: [
        'Channel resmi untuk kota/kabupaten besar',
        'Koordinasi koperasi, BUMDes, & pengusaha lokal',
        'Implementasi smart village skala kota',
        'Akses program nasional & regional',
        'Leaderboard nasional & reward system',
        'Managing 10–100 Desa Access',
        'Distribution Hub Regional',
        'Cross-Region Trade Access',
        'Government Partnership Support',
        'Policy Advisory Services',
        'Infrastructure Development Planning',
        'Quarterly Business Review',
        'Exclusive Investor Network',
        'Global Market Access Priority',
        'AI-Powered Business Intelligence',
        'Custom Mobile App White-label',
        'Dedicated Account Manager',
      ],
    },
    {
      id: 'provinsi',
      name: 'Regional Builder (Provinsi)',
      price: formatRp(125000000),
      originalPrice: formatRp(500000000),
      discount: '75% OFF',
      quota: '38 provinsi (1 per provinsi)',
      for: 'Pengusaha Strategis, Gubernur, Konglomerat Daerah',
      icon: Globe2,
      recommended: false,
      color: 'from-rose-500 to-orange-500',
      badge: 'PROVINSI',
      description: 'Level Provinsi – Akses Multi-Kabupaten',
      features: [
        'Channel resmi untuk seluruh provinsi',
        'Akses dewan nasional JE-P3',
        'Perencanaan program regional bersama National Board',
        'Forum "Koperasi Digital Nasional"',
        'Jaringan investor & peluang bisnis regional',
        'Managing Multiple Kabupaten Access',
        'Provincial Trade Hub Authority',
        'National & International Export License',
        'Government Relations Support',
        'Strategic Partnership Allocation',
        'Blockchain-Based Province System',
        'Digital Economy Blueprint Access',
        'VIP Event Access (National/International)',
        'Private Equity Funding Opportunities',
        'Custom Province Ecosystem',
        'Dedicated Provincial Team',
        'Revenue Sharing Multi-Tier',
        'Technology Infrastructure Setup',
        'Legal & Compliance Advisory',
        'Media & PR Campaign Support',
      ],
    },
    {
      id: 'regional',
      name: 'National Strategic Partner',
      price: formatRp(1000000000),
      originalPrice: formatRp(4000000000),
      discount: '75% OFF',
      quota: '10 slot (invitation only)',
      for: 'Investor Global, Konglomerat Nasional, Sovereign Wealth Fund',
      icon: Trophy,
      recommended: false,
      color: 'from-amber-400 to-yellow-500',
      badge: 'STRATEGIS',
      description: 'Level Nasional – Domination Multi-Sector',
      features: [
        'Kursi di "National Economic Council" JE-P3',
        'Akses laporan dampak nasional teragregat',
        'Data strategis nasional (bukan individual)',
        'Co-branding program desa digital nasional',
        'Prioritas di semua program pilot nasional',
        'Access to 83.763 Villages Network',
        'Global Trade Partnership Authority',
        'Sovereign Data Access Right',
        'Multi-Billion Dollar Deal Flow',
        'National Infrastructure Participation',
        'Private Policy Advisory Board',
        'Custom Strategic Initiative',
        'Exclusive Boardroom Access',
        'International Summit Pass',
        'Dedicated Government Liaison',
        'Full Ecosystem Profit Sharing',
        'White-label Platform License',
        'Custom Blockchain Implementation',
        'National Media Partnership',
        'Annual National Economic Summit Host',
        'Legacy Digital Monument',
        'Lifetime Recognition Award',
        'Succession Planning Support',
        'Family Wealth Management Access',
      ],
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: 'Pendaftaran Berhasil!',
      description:
        'Terima kasih telah bergabung dengan JE-P3. Tim kami akan segera menghubungi Anda.',
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: '',
      village: '',
      district: '',
      province: '',
      description: '',
      membershipTier: '',
    })
    setSelectedTier(null)
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="registration" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <Badge className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 animate-pop-in">
              Bergabung Sekarang
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent animate-text-reveal">
              Jadilah Bagian dari JE-P3
            </h2>
            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Daftar sekarang dan mulai perjalanan transformasi ekonomi Anda bersama ekosistem
              pengusaha terbesar di Indonesia.
            </p>
          </div>

          {/* Banner Pre-launch */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-green-900 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden border-2 border-green-800">
              <div className="absolute inset-0 bg-green-800/30 animate-pulse" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <Crown className="w-8 h-8 text-amber-400 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Membership JE-P3 – Sekali Bayar Seumur Hidup
                  </h3>
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  Jadilah salah satu dari{' '}
                  <span className="font-bold text-amber-300">10.000 Founding Member</span> pertama
                  JE-P3!
                  <span className="block mt-1">
                    Diskon 75% – bayar sekali saja, akses seumur hidup.
                  </span>
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                  <Badge className="bg-amber-500/90 hover:bg-amber-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Sisa ~7.xxx slot
                  </Badge>
                  <Badge className="bg-amber-500/90 hover:bg-amber-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Promo berakhir 28 Februari 2026
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Membership tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {membershipTiers.map((tier, index) => {
              const TierIcon = tier.icon
              const isSelected = selectedTier === tier.id
              return (
                <Card
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`border-2 transition-all hover:shadow-2xl hover:-translate-y-1 card-3d-tilt card-hover-lift cursor-pointer scroll-fade-in visible ${
                    tier.recommended
                      ? 'border-amber-400 dark:border-amber-600 ring-2 ring-amber-200 dark:ring-amber-800 relative overflow-hidden'
                      : 'border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700'
                  } ${isSelected ? 'border-emerald-500 dark:border-emerald-500' : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 right-0">
                      <Badge className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg animate-pulse-glow">
                        Paling Populer
                      </Badge>
                    </div>
                  )}

                  <div className={`bg-gradient-to-br ${tier.color} p-4 -mt-6`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <TierIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-xs md:text-sm text-white/80">
                          {tier.price === 'GRATIS' ? 'Beasiswa Digital' : 'Promo Spesial'}
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                          {tier.price}
                        </p>
                        {tier.originalPrice && (
                          <p className="text-xs md:text-sm text-white/70 line-through opacity-70">
                            {tier.originalPrice}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-3 pt-4">
                    <CardTitle
                      className={`text-xl md:text-2xl font-bold text-gradient-animate leading-tight ${
                        tier.recommended
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      {tier.name}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs sm:text-sm font-semibold text-wrap break-words max-w-full"
                      >
                        {tier.badge}
                      </Badge>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {tier.quota}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tier.for}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {tier.discount && (
                      <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                        <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm md:text-base font-semibold text-emerald-700 dark:text-emerald-300">
                          Diskon promo: {tier.discount} • sekali bayar
                        </span>
                      </div>
                    )}

                    <div className="space-y-3">
                      {tier.features.slice(0, 3).map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3 group/feature">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 icon-hover-glow" />
                          <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 group-hover/feature:text-emerald-600 dark:group-hover/feature:text-emerald-400 transition-colors leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {tier.features.length > 3 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="w-full text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 py-3"
                      >
                        +{tier.features.length - 3} fitur lainnya
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Why join now – card harus selalu terlihat (tanpa section-fade) */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-amber-950/30 card-3d-tilt card-hover-lift cursor-pointer animate-shimmer">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="flex justify-center mb-4">
                    <Star className="w-12 h-12 text-amber-500 animate-pulse" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                    Mengapa Harus Gabung Sekarang?
                  </h3>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-left max-w-3xl mx-auto border-2 border-gray-100 dark:border-gray-700 space-y-4">
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        Bayangkan 5 tahun ke depan...
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Nama Anda tercatat sebagai salah satu dari{' '}
                      <span className="font-semibold text-amber-600 dark:text-amber-400">
                        10.000 founding member
                      </span>{' '}
                      yang berani pas pre-launch. Saat desa-desa mulai panen ekspor dan koperasi
                      menjadi hub global, Anda bisa berkata:
                    </p>
                    <p className="text-lg italic text-gray-900 dark:text-gray-100 font-semibold bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/50 px-6 py-4 rounded-lg">
                      "Saya ada di sana sejak baris pertama, bukan penonton belakangan."
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dengan Rp250.000 sekali bayar seumur hidup, Anda mengunci posisi di ekosistem
                      yang ditargetkan memiliki nilai transaksi Rp1 triliun lebih per tahun.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Crown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-gray-700 dark:text-gray-300">Founding Member</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-gray-700 dark:text-gray-300">Blockchain Passport</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-gray-700 dark:text-gray-300">Founding Congress</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form pendaftaran – card juga tanpa section-fade */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-emerald-950/30 card-3d-tilt card-glow-hover cursor-pointer animate-shimmer">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Benefit list */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gradient-animate bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent animate-fade-in-up">
                        Isi Formulir Pendaftaran
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Lengkapi data Anda untuk mendaftar ke JE-P3.
                      </p>
                    </div>

                    <div className="space-y-4 stagger-children">
                      {[
                        {
                          icon: Globe2,
                          title: 'Akses Pasar Global',
                          description: 'Terhubung langsung ke pembeli di 195 negara.',
                        },
                        {
                          icon: Building2,
                          title: 'Infrastruktur Digital Siap Pakai',
                          description: 'Marketplace, fintech, logistik, dan akademi dalam satu platform.',
                        },
                        {
                          icon: Briefcase,
                          title: 'Pendampingan & Pelatihan',
                          description: 'JE-P3 Academy dengan sertifikasi profesional bertingkat.',
                        },
                        {
                          icon: Shield,
                          title: 'Transparansi Blockchain',
                          description: 'Setiap transaksi tercatat dan dapat diverifikasi.',
                        },
                      ].map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={index}
                            className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-transform"
                          >
                            <div className="flex-shrink-0">
                              <AnimatedIcon
                                animation={index % 2 === 0 ? 'wiggle' : 'scale-pulse'}
                                delay={index * 120}
                                duration={2}
                              >
                                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full icon-hover-glow icon-hover-lift">
                                  <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </div>
                              </AnimatedIcon>
                            </div>
                            <div className="space-y-1">
                              <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <Input
                              id="name"
                              name="name"
                              required
                              placeholder="Nama lengkap Anda"
                              className="pl-10"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="email@contoh.com"
                              className="pl-10"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">No. Telepon *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <Input
                              id="phone"
                              name="phone"
                              required
                              placeholder="08xxxxxxxxxx"
                              className="pl-10"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Tipe Bisnis *</Label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <Input
                              id="businessType"
                              name="businessType"
                              required
                              placeholder="Petani / Koperasi / Eksportir"
                              className="pl-10"
                              value={formData.businessType}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessName">Nama Bisnis / Koperasi</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="businessName"
                            name="businessName"
                            placeholder="Nama bisnis Anda"
                            className="pl-10"
                            value={formData.businessName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="membershipTier">Pilih Paket Keanggotaan *</Label>
                        <div className="relative">
                          <Crown className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <select
                            id="membershipTier"
                            name="membershipTier"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            value={formData.membershipTier}
                            onChange={handleChange}
                          >
                            <option value="">Pilih Paket Keanggotaan</option>
                            <option value="founding-member">Founding Member – Rp250.000</option>
                            <option value="koperasi-partner">
                              Koperasi & BUMDes Partner – Rp1.000.000
                            </option>
                            <option value="regional-kecamatan">
                              Regional Builder (Kecamatan) – Rp2.500.000
                            </option>
                            <option value="regional-kabupaten">
                              Regional Builder (Kabupaten) – Rp6.250.000
                            </option>
                            <option value="regional-provinsi">
                              Regional Builder (Provinsi) – Rp25.000.000
                            </option>
                            <option value="national-strategic">
                              National Strategic Partner – Rp125.000.000
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="village">Desa *</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                            <Input
                              id="village"
                              name="village"
                              required
                              placeholder="Nama desa"
                              className="pl-10"
                              value={formData.village}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="district">Kecamatan *</Label>
                          <Input
                            id="district"
                            name="district"
                            required
                            placeholder="Kecamatan"
                            value={formData.district}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="province">Provinsi *</Label>
                          <Input
                            id="province"
                            name="province"
                            required
                            placeholder="Provinsi"
                            value={formData.province}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Ceritakan Tentang Bisnis Anda</Label>
                        <Textarea
                          id="description"
                          name="description"
                          rows={4}
                          placeholder="Jelaskan jenis produk, kapasitas produksi, dan target pasar Anda..."
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold btn-shine btn-bounce btn-glow magnetic-btn ripple-btn"
                    >
                      {isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}
                      {!isSubmitting && (
                        <AnimatedIcon animation="slide-in-right" duration={0.3}>
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </AnimatedIcon>
                      )}
                    </Button>

                    <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      Dengan mendaftar, Anda menyetujui{' '}
                      <a
                        href="#"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Syarat & Ketentuan
                      </a>{' '}
                      dan{' '}
                      <a
                        href="#"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Kebijakan Privasi
                      </a>{' '}
                      JE-P3.
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
