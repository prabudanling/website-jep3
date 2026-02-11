'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  Globe2,
  Sparkles,
  Users,
  GraduationCap,
  Crown,
  Tv,
  Home,
  Leaf,
  Truck,
  Wrench,
  Building2,
  ShoppingCart,
  Map,
  MapPin,
  Monitor,
  Code,
  Award,
  Star,
  Gem,
  Share2,
  Newspaper,
  TrendingUp,
  DollarSign,
  FileText,
  ArrowRight,
  Layers,
  Network
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// Main menu categories - lebih terorganisir
const menuCategories = [
  {
    label: 'Beranda',
    items: [
      { name: 'Beranda', href: '#hero', icon: Home, description: 'Halaman utama' },
      { name: 'Struktur Ekosistem', href: '#ecosystem', icon: Layers, description: '7-Layer Ekosistem' },
      { name: 'Fitur & Layanan', href: '#features', icon: Network, description: 'Platform lengkap' },
      { name: 'Dampak Ekonomi', href: '#impact', icon: TrendingUp, description: 'Proyeksi 2026-2030' },
    ]
  },
  {
    label: 'Ekosistem',
    items: [
      { name: 'Pangan', href: '#pangan', icon: Leaf, description: 'Agrikultur digital' },
      { name: 'Logistik', href: '#logistik', icon: Truck, description: 'Cold chain tracking' },
      { name: 'Jasa', href: '#jasa', icon: Wrench, description: 'Layanan pendukung' },
      { name: 'Holding', href: '#holding', icon: Building2, description: 'Grup usaha' },
      { name: 'Trading', href: '#trading', icon: ShoppingCart, description: 'B2B & B2C' },
    ]
  },
  {
    label: 'Pimpinan',
    items: [
      { name: 'Bakornas', href: '#bakornas', icon: Building2, description: 'Badan Koordinasi Nasional' },
      { name: 'Bakorwil', href: '#bakorwil', icon: Map, description: 'Badan Koordinasi Wilayah' },
      { name: 'Bakorcab', href: '#bakorcab', icon: MapPin, description: 'Badan Koordinasi Cabang' },
      { name: 'Bakorancam', href: '#bakorancam', icon: MapPin, description: 'Badan Koordinasi Kecamatan' },
      { name: 'Bakordeka', href: '#bakordeka', icon: Users, description: 'Badan Koordinasi Desa' },
    ]
  },
  {
    label: 'Edukasi',
    items: [
      { name: 'Diklat PPP', href: '#diklat', icon: GraduationCap, description: 'Program pendidikan' },
      { name: 'Pendidikan Digital', href: '#pendidikan-digital', icon: Monitor, description: 'Kursus online' },
      { name: 'Pelatihan Digital', href: '#pelatihan-digital', icon: Code, description: 'Praktik & workshop' },
      { name: 'Sertifikasi', href: '#sertifikasi', icon: Award, description: 'Sertifikat profesional' },
    ]
  },
  {
    label: 'Member',
    items: [
      { name: 'Daftar Member', href: '#registration', icon: Crown, description: 'Join JE-P3' },
      { name: 'Standar', href: '#standar', icon: Star, description: 'Membership basic' },
      { name: 'Gold', href: '#gold', icon: Crown, description: 'Membership premium' },
      { name: 'Diamond', href: '#diamond', icon: Gem, description: 'Membership elite' },
    ]
  },
  {
    label: 'Media',
    items: [
      { name: 'Media JE-P3', href: '#media', icon: Tv, description: 'Pusat informasi' },
      { name: 'TV JE-P3', href: '#tv-jep3', icon: Tv, description: 'Video konten' },
      { name: 'Medsos JE-P3', href: '#medsos-jep3', icon: Share2, description: 'Social media' },
      { name: 'Berita', href: '#news', icon: Newspaper, description: 'Update terkini' },
    ]
  },
  {
    label: 'Investor',
    items: [
      { name: 'Peluang Investasi', href: '#investor', icon: TrendingUp, description: 'Invest & grow' },
      { name: 'Proyeksi Keuangan', href: '#financial', icon: DollarSign, description: 'ROI projections' },
      { name: 'Dokumen', href: '#documents', icon: FileText, description: 'Pitch deck & more' },
    ]
  }
]

// Mobile Menu Component with Portal
function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeMenu,
  handleMenuClick,
  menuCategories,
  handleCategoryHover,
  closeAllMenus,
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  activeMenu: string | null
  handleMenuClick: (menu: string) => void
  menuCategories: typeof menuCategories
  handleCategoryHover: (category: string) => void
  closeAllMenus: () => void
}) {
  if (!mobileMenuOpen) return null

  return createPortal(
    <>
      {/* Backdrop - z-index sangat tinggi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileMenuOpen(false)}
        style={{ zIndex: 999998 }}
      />

      {/* Menu Content - z-index paling tinggi */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 lg:hidden overflow-y-auto shadow-2xl"
        style={{ zIndex: 999999 }}
      >
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-lg">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">JE-P3</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Menu Navigasi</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            {menuCategories.map((category) => (
              <div key={category.label}>
                <button
                  onClick={() => handleMenuClick(category.label)}
                 className="w-full flex items-center justify-between p-5 rounded-xl hover:bg-green-50 dark:hover:bg-green-950/30 transition-all group border-2 border-transparent hover:border-green-200 dark:hover:border-green-800"
                >
                                    <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      category.label === 'Beranda' ? 'bg-green-600 dark:bg-green-500 text-white' :
                      category.label === 'Ekosistem' ? 'bg-blue-600 dark:bg-blue-500 text-white' :
                      category.label === 'Pimpinan' ? 'bg-purple-600 dark:bg-purple-500 text-white' :
                      category.label === 'Edukasi' ? 'bg-cyan-600 dark:bg-cyan-500 text-white' :
                      category.label === 'Member' ? 'bg-amber-600 dark:bg-amber-500 text-white' :
                      category.label === 'Media' ? 'bg-pink-600 dark:bg-pink-500 text-white' :
                      'bg-violet-600 dark:bg-violet-500 text-white'
                    }`}>
                      {category.label === 'Beranda' && <Home className="w-6 h-6" />}
                      {category.label === 'Ekosistem' && <Layers className="w-6 h-6" />}
                      {category.label === 'Pimpinan' && <Users className="w-6 h-6" />}
                      {category.label === 'Edukasi' && <GraduationCap className="w-6 h-6" />}
                      {category.label === 'Member' && <Crown className="w-6 h-6" />}
                      {category.label === 'Media' && <Tv className="w-6 h-6" />}
                      {category.label === 'Investor' && <DollarSign className="w-6 h-6" />}
                    </div>
                    <div className="text-left">
                        <span className="font-extrabold text-gray-900 dark:text-gray-100 text-lg">
                        {category.label}
                      </span>
                      <span className="block text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {category.items.length} menu
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      activeMenu === category.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Submenu Items */}
                <AnimatePresence>
                  {activeMenu === category.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-4 py-2 space-y-1">
                        {category.items.map((item, idx) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => {
                                closeAllMenus()
                                setMobileMenuOpen(false)
                              }}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group/item"
                            >
                              <Icon className="w-4 h-4 text-gray-400 group-hover/item:text-emerald-600 transition-colors" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-emerald-600 transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <Button
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
                setMobileMenuOpen(false)
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              <Crown className="w-4 h-4 mr-2" />
              Join JE-P3
            </Button>
          </div>
        </div>
      </motion.div>
    </>,
    document.body
  )
}

export function JEP3Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category)
    setActiveMenu(null) // Reset active menu when changing category
  }

  const handleMenuClick = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null)
      setActiveCategory(null)
    } else {
      setActiveMenu(menu)
    }
  }

  const closeAllMenus = () => {
    setActiveCategory(null)
    setActiveMenu(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-emerald-100 dark:border-emerald-900/50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar - Brand Info */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span className="text-gray-600 dark:text-gray-400">
                83,763 Desa Terhubung
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span className="text-gray-600 dark:text-gray-400">
                195 Negara Target
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#investor" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Investor Relations
            </a>
            <a href="#news" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Berita
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={closeAllMenus}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative p-2.5 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Globe2 className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-600 bg-clip-text text-transparent leading-tight">
                JE-P3
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuCategories.map((category, idx) => (
              <div
                key={category.label}
                className="relative group/menu"
                onMouseEnter={() => handleCategoryHover(category.label)}
                onMouseLeave={closeAllMenus}
              >
                <Button
                  variant="ghost"
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    activeCategory === category.label || activeMenu === category.label
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => handleMenuClick(category.label)}
                >
                  {idx === 0 && <Home className="w-4 h-4" />}
                  {idx === 1 && <Layers className="w-4 h-4" />}
                  {idx === 2 && <Users className="w-4 h-4" />}
                  {idx === 3 && <GraduationCap className="w-4 h-4" />}
                  {idx === 4 && <Crown className="w-4 h-4" />}
                  {idx === 5 && <Tv className="w-4 h-4" />}
                  {idx === 6 && <DollarSign className="w-4 h-4" />}
                  <span>{category.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === category.label ? 'rotate-180' : 'group-hover/menu:rotate-180'
                    }`}
                  />
                </Button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {(activeCategory === category.label || activeMenu === category.label) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {category.items.map((item, itemIdx) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              onClick={closeAllMenus}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-amber-50 dark:hover:from-emerald-950/30 dark:hover:to-amber-950/30 transition-all group/item"
                            >
                              <div className={`p-2 rounded-lg ${
                                idx % 2 === 0 
                                  ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400' 
                                  : 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400'
                              } group-hover/item:scale-110 transition-transform`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                  {item.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                            </Link>
                          )
                        })}
                      </div>
                      {category.label === 'Utama' && (
                        <div className="px-4 py-3 bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/30 border-t border-gray-100 dark:border-gray-800">
                          <Link
                            href="#registration"
                            onClick={closeAllMenus}
                            className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                          >
                            <Sparkles className="w-4 h-4" />
                            Daftar Sekarang
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => {
                document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Join JE-P3
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-95 bg-white dark:bg-gray-900 shadow-md"
            aria-label="Toggle menu"
            style={{ zIndex: 999999, position: 'relative' }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Portal - renders outside header */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
        menuCategories={menuCategories}
        handleCategoryHover={handleCategoryHover}
        closeAllMenus={closeAllMenus}
      />
    </header>
  )
}
