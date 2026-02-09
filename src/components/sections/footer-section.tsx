'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Linkedin,
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  Wallet,
  Truck,
  Shield
} from 'lucide-react'

export function FooterSection() {
  const portals = [
    { name: 'pppdigital.id', desc: 'Super-Platform Utama', url: 'https://pppdigital.id', icon: Globe },
    { name: 'Marketplace', desc: 'B2B & B2C Trading', url: '#', icon: Building2 },
    { name: 'JP3 Pay', desc: 'E-Wallet & Fintech', url: '#', icon: Wallet },
    { name: 'JE-P3 Academy', desc: 'E-Learning & Sertifikasi', url: '#', icon: GraduationCap },
    { name: 'Logistics 6.0', desc: 'Tracking & Cold Chain', url: '#', icon: Truck },
    { name: 'Member Hub', desc: 'Networking & Komunitas', url: '#', icon: Users },
    { name: 'Investor Portal', desc: 'Impact & Financial Reports', url: '#', icon: Shield },
  ]

  const quickLinks = [
    { name: 'Tentang Kami', url: '#' },
    { name: 'Visi & Misi', url: '#' },
    { name: 'Dewan Pengurus', url: '#' },
    { name: 'Karir', url: '#' },
    { name: 'Berita & Media', url: '#' },
    { name: 'Hubungi Kami', url: '#' },
  ]

  const resources = [
    { name: 'Whitepaper JE-P3 7.0', url: '#' },
    { name: 'Dokumen Bisnis', url: '#' },
    { name: 'Panduan Ekspor', url: '#' },
    { name: 'FAQ', url: '#' },
    { name: 'Bantuan', url: '#' },
  ]

  const legal = [
    { name: 'Syarat & Ketentuan', url: '#' },
    { name: 'Kebijakan Privasi', url: '#' },
    { name: 'Kebijakan Cookie', url: '#' },
    { name: 'Disclaimer', url: '#' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">
                  JE-P3
                </h3>
                <p className="text-lg text-emerald-400 font-medium">
                  Jaringan Ekosistem Pengusaha Persatuan Pembangunan
                </p>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Super-ekosistem pengusaha multinasional terbesar di dunia yang lahir dari desa, dibangun oleh rakyat, dan menguasai pasar global. Menghubungkan 83.763 desa Indonesia dengan 195 negara.
              </p>
              
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 rounded-full border border-emerald-800">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">
                  Desa Digital → Go Global
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Jakarta, Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a href="mailto:info@jep3.id" className="text-sm hover:text-emerald-400 transition-colors">
                    info@jep3.id
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">
                    +62 21 1234 5678
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-400" />
                Navigasi Cepat
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-emerald-400 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-400" />
                Sumber Daya
              </h4>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-emerald-400 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-400" />
                Legal
              </h4>
              <ul className="space-y-3">
                {legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-emerald-400 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portals Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h4 className="text-white font-semibold text-lg">
                  Platform JE-P3
                </h4>
                <p className="text-sm text-gray-400">
                  Akses seluruh layanan ekosistem dalam satu tempat
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {portals.map((portal, index) => {
                  const Icon = portal.icon
                  return (
                    <a
                      key={index}
                      href={portal.url}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-emerald-900/50 border border-gray-700 hover:border-emerald-700 rounded-lg transition-all group"
                    >
                      <Icon className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
                      <span className="text-sm font-medium">
                        {portal.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">
                  Berlangganan Update
                </h4>
                <p className="text-sm text-gray-400">
                  Dapatkan berita terbaru dan peluang bisnis langsung ke inbox Anda
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email Anda"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold">
                  Ikuti Kami
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="p-3 bg-gray-800 hover:bg-emerald-900/50 border border-gray-700 hover:border-emerald-700 rounded-lg transition-all group"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500 text-center md:text-left">
                <p>© 2026 JE-P3 - Jaringan Ekosistem Pengusaha Persatuan Pembangunan</p>
                <p className="mt-1">
                  Version JE-P3 Transformation 7.0 — Post-JP3 Era
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">
                  Made with ❤️ for Indonesia
                </Badge>
                <Badge className="bg-emerald-900/50 text-emerald-400 border-emerald-800 text-xs">
                  Desa Digital → Go Global
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
