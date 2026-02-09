import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: About JE-P3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-lg">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                JE-P3
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Jaringan Ekosistem Pengusaha Persatuan Pembangunan.
              Super-ekosistem bisnis digital dari desa untuk dunia.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500" />
                Dibuat dengan cinta untuk Indonesia
              </span>
            </div>
          </div>

          {/* Column 2: Tentang Kami */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Tentang Kami</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  Tentang JE-P3
                </Link>
              </li>
              <li>
                <Link
                  href="/visi-misi"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link
                  href="/dewan-pengurus"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  Dewan Pengurus
                </Link>
              </li>
              <li>
                <Link
                  href="#ecosystem"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  Ekosistem
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#registration"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-amber-500">•</span>
                  Pendaftaran Member
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-amber-500">•</span>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-amber-500">•</span>
                  JE-P3 Academy
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-amber-500">•</span>
                  JP3 Pay
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>
                  Jakarta, Indonesia<br/>
                  <span className="text-sm text-gray-500">
                    83.763 Desa Terkoneksi
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>+62 21 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>info@pppbisnis.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} JE-P3. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
