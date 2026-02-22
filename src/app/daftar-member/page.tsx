// app/daftar-member/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type MembershipTier = {
  id: string
  code: string
  name: string
  price_promo: number
  price_normal: number
}

export default function DaftarMemberPage() {
  const [tiers, setTiers] = useState<MembershipTier[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [membershipTierId, setMembershipTierId] = useState('')

  useEffect(() => {
    const fetchTiers = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('membership_tiers')
        .select('id, code, name, price_promo, price_normal')
        .eq('is_active', true)
        .order('price_promo', { ascending: true })

      if (error) {
        console.error(error)
        setError('Gagal memuat paket membership')
      } else {
        setTiers(data || [])
      }
      setLoading(false)
    }

    fetchTiers()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!fullName || !email || !phone || !membershipTierId) {
      setError('Semua field wajib diisi')
      return
    }

    const res = await fetch('/api/register-member', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        email,
        phone,
        membership_tier_id: membershipTierId,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.message || 'Terjadi kesalahan saat mendaftar')
      return
    }

    setSuccess('Pendaftaran berhasil, silakan tunggu persetujuan admin.')
    setFullName('')
    setEmail('')
    setPhone('')
    setMembershipTierId('')
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 16 }}>
      <h1>Pendaftaran Member JE-P3</h1>
      <p>Silakan isi formulir berikut untuk bergabung sebagai member.</p>

      {loading && <p>Sedang memuat paket membership...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      {!loading && tiers.length === 0 && (
        <p>Tidak ada paket membership aktif.</p>
      )}

      {!loading && tiers.length > 0 && (
        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <div style={{ marginBottom: 12 }}>
            <label>
              Nama Lengkap<br />
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                style={{ width: '100%', padding: 8 }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label>
              Email<br />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', padding: 8 }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label>
              No. HP (WhatsApp)<br />
              <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{ width: '100%', padding: 8 }}
                required
              />
            </label>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label>
              Pilih Paket Membership<br />
              <select
                value={membershipTierId}
                onChange={e => setMembershipTierId(e.target.value)}
                style={{ width: '100%', padding: 8 }}
                required
              >
                <option value="">-- Pilih Paket --</option>
                {tiers.map(tier => (
                  <option key={tier.id} value={tier.id}>
                    {tier.name} ({tier.code}) - Promo Rp{tier.price_promo.toLocaleString('id-ID')}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button type="submit" style={{ padding: '8px 16px' }}>
            Daftar
          </button>
        </form>
      )}
    </div>
  )
}
