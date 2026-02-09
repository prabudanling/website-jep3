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
    <footer className="bg-gray-950 dark:bg-black text-white border-t border-emerald-900/40">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: About JE-P3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-emerald-500 via-amber-500 to-emerald-600 rounded-lg shadow-lg shadow-emerald-500/30">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200 bg-clip-text text-transparent">
                  JE-P3<span className="align-super text-[10px] ml-0.5">™</span>
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/80">
                  Jaringan Ekosistem Pengusaha Persatuan Pembangunan
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Super-ekosistem bisnis dari desa untuk dunia: menghubungkan
              pengusaha, koperasi, BUMDes, dan investor dalam jaringan nilai
              yang terukur dan berkelanjutan.
            </p>

            <div className="space-y-1 text-xs text-gray-500">
              <p>Fokus: Desa Digital • Smart Village • Ekspor • Ekonomi Hijau.</p>
              <p>Mandat: Mengangkat 83.763 desa ke panggung ekonomi global.</p>
            </div>
          </div>

          {/* Column 2: Ekosistem JE-P3 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 text-emerald-400">
              Ekosistem JE-P3
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#ecosystem"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  Peta Ekosistem &amp; Pilar Bisnis
                </Link>
              </li>
              <li>
                <Link
                  href="/pppbisnis"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  PPPBisnis.com – Portal Bisnis JE-P3
                </Link>
              </li>
              <li>
                <Link
                  href="/pppdigital"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  PPPDigital.id – Infrastruktur Kader &amp; Organisasi
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">•</span>
                  Tata Kelola &amp; Standar 39 Dokumen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Zona Layanan Strategis */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 text-amber-400">
              Zona Layanan Strategis
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400 flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Haji &amp; Umroh – Manajemen Bisnis End-to-End
                </span>
              </li>
              <li>
                <span className="text-gray-400 flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Pangan &amp; Logistik – Rantai Pasok Desa ↔ Kota ↔ Global
                </span>
              </li>
              <li>
                <span className="text-gray-400 flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Smart Village &amp; Desa Digital – Infrastruktur &amp; Data
                </span>
              </li>
              <li>
                <span className="text-gray-400 flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  JE-P3 Academy – Kurikulum Pengusaha Kelas Dunia
                </span>
              </li>
            </ul>

            <Link
              href="#registration"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-500 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-emerald-500/30 hover:opacity-90 transition"
            >
              Gabung Sebagai Member JE-P3
            </Link>
          </div>

          {/* Column 4: Kontak & Sosial */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 text-emerald-400">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>
                  Jakarta, Indonesia
                  <br />
                  <span className="text-xs text-gray-500">
                    Menghubungkan 83.763 desa ke ekonomi digital &amp; ekspor.
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
      <div className="border-t border-gray-800/80 bg-black/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
            <p className="text-gray-500">
              © {currentYear} JE-P3<span className="align-super text-[10px] ml-0.5">™</span>. 
              Seluruh hak cipta dilindungi.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-500">
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Syarat &amp; Ketentuan
              </Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                FAQ
              </Link>
              <span className="text-gray-600">
                Dikembangkan oleh{' '}
                <span className="text-emerald-400 font-semibold">
                  PT Digital Bisnis Manajemen
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
