// src/app/bakornas/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Globe, Award, TrendingUp, Layers } from 'lucide-react'

// Data struktur organisasi (SUDAH UPDATE)
const strategicLeadership = [
  {
    title: 'Dewan Pelindung',
    name: 'Prof. Dr. Elan Masbulan',
    role: 'Pelindung strategis, penasihat kebijakan level nasional',
    icon: Award
  },
  {
    title: 'Dewan Pertimbangan',
    name: 'Dr. H. Sandiaga Salahuddin Uno',
    role: 'Pertimbangan kebijakan dan jejaring nasional & internasional',
    icon: Award
  },
  {
    title: 'Dewan Pertimbangan',
    name: 'Prof. Dr. Wirono',
    role: 'Penasehat strategis, expertise ekonomi pembangunan',
    icon: Award
  },
  {
    title: 'Dewan Pakar',
    name: 'Prof. Dr. Tedy Mantoro',
    role: 'Think-tank ekosistem, expertise teknologi & digitalisasi',
    icon: Award
  }
]

const governingBoard = [
  {
    position: 'Ketua Umum',
    name: 'Drs. H. Arif Rachman Hakim',
    responsibility: 'Koordinasi seluruh Bakornas, kebijakan strategis dan representasi nasional'
  },
  {
    position: 'Sekretaris Jenderal',
    name: 'M. Rafi',
    responsibility: 'Administrasi, surat-menyurat, dan tata kelola organisasi'
  },
  {
    position: 'Wakil Sekjen',
    name: 'M. Lutfi Azmi',
    responsibility: 'Digitalisasi administrasi, sistem manajemen, dan integrasi data'
  },
  {
    position: 'Bendahara Umum',
    name: 'Farroz Arif Al Fayed, SE',
    responsibility: 'Keuangan, treasury, dan pengelolaan kas organisasi'
  }
]

const waketumDirectorates = [
  {
    name: 'Bidang Holding',
    director: 'M. Lutfi Azmi',
    focus: 'Struktur holding, investasi, dan kemitraan strategis',
    color: 'amber',
    waketumLabel: 'Wakil Ketua Umum I',
    deputies: []
  },

  {
    name: 'Bidang Pangan',
    director: 'M. Rojalih, SE',
    focus: 'Pengembangan ekosistem pangan dan agro dari hulu ke hilir',
    color: 'emerald',
    waketumLabel: 'Wakil Ketua Umum II',
    deputies: []
  },
  {
    name: 'Bidang Jasa',
    director: 'M. Ilham',
    focus: 'Konsultansi, layanan pendukung, dan jasa keuangan mikro',
    color: 'purple',
    waketumLabel: 'Wakil Ketua Umum III',
    deputies: ['Heri']
  },
  {
    name: 'Bidang Digitalisasi',
    director: 'Dr. Endro Wuryanto',
    focus: 'Digitalisasi ekosistem, platform, dan inovasi teknologi',
    color: 'cyan',
    waketumLabel: 'Wakil Ketua Umum IV',
    deputies: []
  },
  {
    name: 'Bidang Logistik',
    director: 'Fajar Hadi Prabowo',
    focus: 'Transportasi, pergudangan, dan cold chain tracking',
    color: 'blue',
    waketumLabel: 'Wakil Ketua Umum II',
    deputies: ['Agung']
	},
  {
    name: 'Bidang Trading',
    director: 'M. Ongky Putra',
    focus: 'Perdagangan domestik & internasional, B2B/B2C',
    color: 'orange',
    waketumLabel: 'Wakil Ketua Umum VI',
    deputies: []
  },
  {
    name: 'Bidang Koperasi, UKM & Inklusi',
    director: 'Dr. Cecep Sumarno',
    focus: 'Pengembangan koperasi modern, UMKM, dan inklusi keuangan',
    color: 'pink',
    waketumLabel: 'Wakil Ketua Umum VII',
    deputies: []
  }
]

const territory = [
  { level: 'Bakornas', scope: '83,763 Desa (Indonesia)', lead: 'Drs. H. Arif Rachman Hakim' },
  { level: 'Bakorwil', scope: 'Regional (Provinsi)', lead: 'Nominasi per wilayah' },
  { level: 'Bakorcab', scope: 'Kota/Kabupaten', lead: 'Nominasi per cabang' },
  { level: 'Bakorancam', scope: 'Kecamatan', lead: 'Nominasi per kecamatan' },
  { level: 'Bakordeka', scope: 'Desa/Kelurahan', lead: 'Nominasi per desa' },
  { level: 'International Chapters', scope: '195 Negara Target', lead: 'Country Directors' }
]

// Animasi
const listVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' }
  }
}

export default function BakornasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-amber-50/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="container mx-auto px-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Bakornas JE-P3</h1>
              <p className="text-emerald-50 text-lg">Badan Koordinasi Nasional</p>
            </div>
          </div>
          <p className="text-xl max-w-3xl text-emerald-50">
            Struktur organisasi bertaraf internasional untuk Jaringan Ekosistem
            Pengusaha Persatuan Pembangunan yang menghubungkan 83,763 desa di Indonesia
            menuju 195 negara di dunia.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Strategic Leadership */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-slate-900">Kepemimpinan Strategis</h2>
          </div>
          <motion.div
            variants={listVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {strategicLeadership.map((leader, idx) => {
              const Icon = leader.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariant}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-amber-100 rounded-xl">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">
                        {leader.title}
                      </h3>
                      <p className="text-emerald-700 font-semibold mb-2">
                        {leader.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {leader.role}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* Governing Board */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">Pimpinan Harian Bakornas</h2>
          </div>
          <motion.div
            variants={listVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {governingBoard.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl shadow-md border border-emerald-100 p-6"
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full mb-2">
                    {member.position}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {member.responsibility}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Directorates + Wakil Ketua Umum per Bidang */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">
              Wakil Ketua Umum & Bidang
            </h2>
          </div>
          <motion.div
            variants={listVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {waketumDirectorates.map((dir, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`bg-white rounded-2xl shadow-md border-2 border-${dir.color}-200 p-6 hover:shadow-xl transition-all`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`inline-block px-3 py-1 bg-${dir.color}-100 text-${dir.color}-700 text-[11px] font-semibold rounded-full uppercase tracking-wide`}
                  >
                    {dir.waketumLabel}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {dir.name}
                </h3>
                <p className={`text-sm font-semibold text-${dir.color}-700 mb-2`}>
                  {dir.director}
                </p>
                {dir.deputies.length > 0 && (
                  <div className="mb-2">
                    <p className="text-xs text-slate-500 mb-1">Wakil / Anggota Inti:</p>
                    <ul className="text-xs text-slate-700 space-y-0.5">
                      {dir.deputies.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  {dir.focus}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Territorial Structure */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-slate-900">Struktur Teritorial</h2>
          </div>
          <motion.div
            variants={listVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-purple-200 p-8"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {territory.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariant}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <h4 className="font-bold text-purple-700 mb-2">{item.level}</h4>
                  <p className="text-sm text-slate-600 mb-2">{item.scope}</p>
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Koordinator:</span> {item.lead}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <TrendingUp className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan JE-P3</h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Menjadi bagian dari ekosistem bisnis terbesar yang menghubungkan desa hingga pasar global
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            Daftar Sekarang
          </button>
        </section>
      </div>
    </main>
  )
}
