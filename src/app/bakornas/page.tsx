// src/app/bakornas/page.tsx
'use client'

import { Building2, Users, Globe, Award, TrendingUp, Layers } from 'lucide-react'

// Data struktur organisasi
const strategicLeadership = [
  {
    title: 'Dewan Pelindung',
    name: 'Prof. Dr. Elan Masbulan',
    role: 'Pelindung strategis, penasihat kebijakan level nasional',
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
    name: 'Drs.H. Arif Rachman Hakim',
    responsibility: 'Koordinasi seluruh Bakornas, kebijakan strategis'
  },
  {
    position: 'Wakil Sekjen',
    name: 'M. Lutfi Azmi',
    responsibility: 'Digitalisasi administrasi, sistem manajemen'
  },
  {
    position: 'Bendahara Umum',
    name: 'Fawwaz Arif Al Jabbar, SE, MM',
    responsibility: 'Keuangan, treasury, investasi kas'
  }
]

const directorates = [
  {
    name: 'Ketua Bidang Pangan & Agroekosistem',
    director: 'M. Ilham, SE',
    focus: 'Supply chain pangan, cold chain, standar kualitas',
    color: 'emerald'
  },
  {
    name: 'Ketua Bidang Logistik & Infrastruktur',
    director: 'Heri',
    deputy: 'Agung',
    focus: 'Transportasi, pergudangan, cold chain tracking',
    color: 'blue'
  },
  {
    name: 'Ketua Bidang Jasa & Layanan Bisnis',
    director: '(Belum diisi)',
    focus: 'Konsultansi, pendampingan UMKM, jasa keuangan',
    color: 'purple'
  },
  {
    name: 'Ketua Bidang Digitalisasi, Inovasi, Holding',
    director: 'M. Lutfi Azmi',
    focus: 'Struktur Holding, Platform digital, AI/data science, sistem IT',
    color: 'cyan'
  },
  {
    name: 'Investasi & Kemitraan',
    director: 'Dr. Cecep Sumarno',
    focus: 'investment deal, PPP projects',
    color: 'amber'
  },
  {
    name: 'Ketua Bidang Trading & Market Development',
    director: 'M. Ongky Putra',
    focus: 'Perdagangan domestik & internasional, B2B/B2C',
    color: 'orange'
  },
  {
    name: 'Ketua Bidang Koperasi, UKM & Inklusi',
    director: 'Dr. Cecep Sumarno',
    focus: 'Pengembangan koperasi modern, capacity building',
    color: 'pink'
  }
]

export default function BakornasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-amber-50/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Strategic Leadership */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-slate-900">Kepemimpinan Strategis</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {strategicLeadership.map((leader, idx) => {
              const Icon = leader.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 hover:shadow-xl transition-shadow"
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
                </div>
              )
            })}
          </div>
        </section>

        {/* Governing Board */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">Dewan Pengurus Pusat</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {governingBoard.map((member, idx) => (
              <div
                key={idx}
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
              </div>
            ))}
          </div>
        </section>

        {/* Directorates */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Ketua Bidang Bidang</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directorates.map((dir, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-md border-2 border-${dir.color}-200 p-6 hover:shadow-xl transition-all hover:scale-105`}
              >
                <div className={`inline-block px-3 py-1 bg-${dir.color}-100 text-${dir.color}-700 text-xs font-semibold rounded-lg mb-3`}>
                  Ketua Bidang {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {dir.name}
                </h3>
                <div className="mb-3 pb-3 border-b border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Direktur</p>
                  <p className={`font-semibold text-${dir.color}-700`}>
                    {dir.director}
                  </p>
                  {dir.deputy && (
                    <>
                      <p className="text-xs text-slate-500 mt-2 mb-1">Wakil Direktur</p>
                      <p className={`font-semibold text-${dir.color}-600`}>
                        {dir.deputy}
                      </p>
                    </>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dir.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Territorial Structure */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-slate-900">Struktur Teritorial</h2>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-purple-200 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { level: 'Bakornas', scope: '83,763 Desa (Indonesia)', lead: 'Drs. Arif Rachman Hakim' },
                { level: 'Bakorwil', scope: 'Regional (Provinsi)', lead: 'Nominasi per wilayah' },
                { level: 'Bakorcab', scope: 'Kota/Kabupaten', lead: 'Nominasi per cabang' },
                { level: 'Bakorancam', scope: 'Kecamatan', lead: 'Nominasi per kecamatan' },
                { level: 'Bakordeka', scope: 'Desa/Kelurahan', lead: 'Nominasi per desa' },
                { level: 'International Chapters', scope: '195 Negara Target', lead: 'Country Directors' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-purple-700 mb-2">{item.level}</h4>
                  <p className="text-sm text-slate-600 mb-2">{item.scope}</p>
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Koordinator:</span> {item.lead}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
