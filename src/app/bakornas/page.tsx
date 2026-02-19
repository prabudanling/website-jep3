'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Award,
  Users,
  Layers,
  Globe,
  ChevronRight
} from 'lucide-react'

const strategicLeadership = [
  {
    title: 'Dewan Pelindung',
    name: 'Prof. Dr. Elan Masbulan',
    role: 'Pelindung strategis dan penjaga arah besar Bakornas JE-P3.'
  },
  {
    title: 'Dewan Pertimbangan',
    name: 'Dr. H. Sandiaga Salahuddin Uno',
    role: 'Pertimbangan kebijakan dan jejaring nasional & internasional.'
  },
  {
    title: 'Dewan Pertimbangan',
    name: 'Prof. Dr. Wirono',
    role: 'Pertimbangan akademik dan ekonomi pembangunan.'
  },
  {
    title: 'Dewan Pakar',
    name: 'Prof. Dr. Tedy Mantoro',
    role: 'Think-tank teknologi, digitalisasi, dan inovasi ekosistem.'
  }
]

const dailyLeadership = [
  {
    position: 'Ketua Umum',
    name: 'Drs. H. Arif Rachman Hakim',
    desc: 'Memimpin Bakornas JE-P3 secara keseluruhan dan menjadi representasi utama.'
  },
  {
    position: 'Sekretaris Jenderal',
    name: 'M. Rafi',
    desc: 'Mengelola administrasi, surat-menyurat, dan tata kelola organisasi.'
  },
  {
    position: 'Wakil Sekjen',
    name: 'M. Lutfi Azmi',
    desc: 'Integrasi administrasi dan sistem digital organisasi.'
  },
  {
    position: 'Bendahara Umum',
    name: 'Farroz Arif Al Fayed, SE',
    desc: 'Mengelola keuangan, pelaporan, dan tata kelola kas organisasi.'
  }
]

const waketumFields = [
  {
    code: 'I',
    field: 'Bidang Pangan',
    position: 'Wakil Ketua Umum I',
    name: 'M. Rojalih, SE',
    support: [],
    color: 'emerald'
  },
  {
    code: 'II',
    field: 'Bidang Logistik',
    position: 'Wakil Ketua Umum II',
    name: 'Fajar Hadi Prabowo',
    support: ['Agung'],
    color: 'sky'
  },
  {
    code: 'III',
    field: 'Bidang Jasa',
    position: 'Wakil Ketua Umum III',
    name: 'M. Ilham',
    support: ['Heri'],
    color: 'violet'
  },
  {
    code: 'IV',
    field: 'Bidang Digitalisasi',
    position: 'Wakil Ketua Umum IV',
    name: 'Dr. Endro Wuryanto',
    support: [],
    color: 'cyan'
  },
  {
    code: 'V',
    field: 'Bidang Holding',
    position: 'Wakil Ketua Umum V',
    name: 'M. Lutfi Azmi',
    support: [],
    color: 'amber'
  },
  {
    code: 'VI',
    field: 'Bidang Trading',
    position: 'Wakil Ketua Umum VI',
    name: 'M. Ongky Putra',
    support: [],
    color: 'orange'
  },
  {
    code: 'VII',
    field: 'Bidang Koperasi / UKM',
    position: 'Wakil Ketua Umum VII',
    name: 'Dr. Cecep Sumarno',
    support: [],
    color: 'rose'
  }
]

const territory = [
  { level: 'Bakornas', scope: 'Koordinasi Nasional', lead: 'Drs. H. Arif Rachman Hakim' },
  { level: 'Bakorwil', scope: 'Koordinasi Wilayah (Provinsi/Klaster)', lead: 'Koordinator Wilayah' },
  { level: 'Bakorcab', scope: 'Koordinasi Cabang (Kota/Kabupaten)', lead: 'Koordinator Cabang' },
  { level: 'Bakorancam', scope: 'Koordinasi Kecamatan', lead: 'Koordinator Kecamatan' },
  { level: 'Bakordeka', scope: 'Koordinasi Desa/Kelurahan', lead: 'Koordinator Desa' },
  { level: 'International Chapters', scope: 'Perwakilan di 195 negara', lead: 'Country Director' }
]

// Variants animasi umum
const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const listVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export default function BakornasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="container mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-24"
        >
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 mb-4">
                <Building2 className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-semibold tracking-wide text-emerald-200">
                  BAKORNAS JE-P3 • ORGANIGRAM
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Struktur Organisasi Bakornas <span className="text-emerald-300">JE-P3</span>
              </h1>
              <p className="text-slate-300/90 text-sm md:text-base max-w-2xl mb-6">
                Desain organisasi bertaraf internasional yang menghubungkan kepemimpinan
                strategis, pimpinan harian, dan tujuh bidang utama ekosistem:
                pangan, logistik, jasa, digitalisasi, holding, trading, dan koperasi/UKM.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-300">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/40">
                  <Globe className="w-4 h-4 text-emerald-300" />
                  195 Negara Target
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/40">
                  <Users className="w-4 h-4 text-emerald-300" />
                  83.763 Desa Terhubung
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-emerald-900/80 p-6 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-4">
                  CORE LEADERSHIP
                </p>
                <p className="text-sm text-emerald-50/90 mb-4">
                  “Bakornas JE-P3 bertugas mengorkestrasi jaringan ekosistem pengusaha
                  dari akar rumput hingga panggung global, dengan tata kelola modern
                  dan berbasis data.”
                </p>
                <div className="flex items-center justify-between text-xs text-emerald-200">
                  <span>Susunan pengurus periode awal</span>
                  <span className="inline-flex items-center gap-1">
                    Lihat struktur lengkap
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="absolute inset-0 rounded-3xl border border-emerald-500/40 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 pb-16 space-y-14 md:space-y-20">
        {/* DEWAN STRATEGIS */}
        <motion.section
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Award className="w-7 h-7 text-amber-300" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Kepemimpinan Strategis</h2>
              <p className="text-sm text-slate-300">
                Dewan pelindung, pertimbangan, dan pakar yang memberikan arah jangka panjang.
              </p>
            </div>
          </div>

          <motion.div
            variants={listVariant}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {strategicLeadership.map((leader, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-900/70 p-5 shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400" />
                <p className="text-[11px] font-semibold text-emerald-200 mb-2 tracking-wide uppercase">
                  {leader.title}
                </p>
                <p className="text-sm font-bold text-slate-50 mb-2 leading-snug">
                  {leader.name}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* PIMPINAN HARIAN */}
        <motion.section
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Users className="w-7 h-7 text-emerald-300" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Pimpinan Harian Bakornas</h2>
              <p className="text-sm text-slate-300">
                Ketua Umum beserta jajaran Sekretariat dan Keuangan.
              </p>
            </div>
          </div>

          <motion.div
            variants={listVariant}
            className="grid md:grid-cols-4 gap-5"
          >
            {dailyLeadership.map((m, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-md"
              >
                <span className="inline-flex px-3 py-1 mb-3 rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-200 uppercase tracking-wide">
                  {m.position}
                </span>
                <p className="text-sm font-bold mb-2">{m.name}</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* WAKETUM + BIDANG */}
        <motion.section
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Layers className="w-7 h-7 text-sky-300" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Wakil Ketua Umum & Bidang</h2>
              <p className="text-sm text-slate-300">
                Setiap Wakil Ketua Umum sekaligus memimpin satu bidang strategis ekosistem.
              </p>
            </div>
          </div>

          <motion.div
            variants={listVariant}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {waketumFields.map((b, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-lg"
              >
                <div
                  className={`
                    absolute inset-0 opacity-20 pointer-events-none
                    bg-gradient-to-br
                    ${
                      b.color === 'emerald' ? 'from-emerald-500/40 via-slate-900 to-emerald-900' :
                      b.color === 'sky' ? 'from-sky-500/40 via-slate-900 to-sky-900' :
                      b.color === 'violet' ? 'from-violet-500/40 via-slate-900 to-violet-900' :
                      b.color === 'cyan' ? 'from-cyan-500/40 via-slate-900 to-cyan-900' :
                      b.color === 'amber' ? 'from-amber-500/40 via-slate-900 to-amber-900' :
                      b.color === 'orange' ? 'from-orange-500/40 via-slate-900 to-orange-900' :
                      'from-rose-500/40 via-slate-900 to-rose-900'
                    }
                  `}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-600 text-[10px] font-semibold uppercase tracking-wide text-slate-200">
                      WAKETUM {b.code}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-1">{b.position}</p>
                  <p className="text-sm font-bold text-slate-50 mb-3">{b.name}</p>
                  <div className="mb-3 pb-3 border-b border-slate-700/80">
                    <p className="text-xs font-semibold text-slate-200">
                      {b.field}
                    </p>
                  </div>
                  {b.support.length > 0 && (
                    <div className="mb-3">
                      <p className="text-[11px] text-slate-300 mb-1">Wakil / Anggota Inti:</p>
                      <ul className="text-[11px] text-slate-200 space-y-0.5">
                        {b.support.map((s) => (
                          <li key={s}>• {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* STRUKTUR TERITORIAL */}
        <motion.section
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 mb-4"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-7 h-7 text-purple-300" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Struktur Teritorial</h2>
              <p className="text-sm text-slate-300">
                Jaringan koordinasi dari tingkat nasional hingga desa dan perwakilan luar negeri.
              </p>
            </div>
          </div>

          <motion.div
            variants={listVariant}
            className="grid md:grid-cols-3 gap-4"
          >
            {territory.map((t, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-2xl border border-purple-500/30 bg-slate-900/80 p-4 shadow-md"
              >
                <p className="text-xs font-semibold text-purple-200 mb-1 uppercase tracking-wide">
                  {t.level}
                </p>
                <p className="text-sm text-slate-50 mb-1">{t.scope}</p>
                <p className="text-[11px] text-slate-300">
                  <span className="font-semibold">Koordinator:</span> {t.lead}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </main>
  )
}
