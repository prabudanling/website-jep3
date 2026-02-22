// app/api/register-member/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { full_name, email, phone, membership_tier_id } = body

    if (!full_name || !email || !phone || !membership_tier_id) {
      return NextResponse.json(
        { message: 'Field wajib tidak lengkap' },
        { status: 400 }
      )
    }

    const { error } = await supabase.from('member_profiles').insert([
      {
        full_name,
        email,
        phone,
        membership_tier_id,
        status: 'PENDING', // bisa dihilangkan kalau default di DB sudah PENDING
      },
    ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { message: 'Gagal menyimpan data pendaftaran' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: 'Terjadi kesalahan di server' },
      { status: 500 }
    )
  }
}
