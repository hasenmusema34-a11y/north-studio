import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import type { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const tokenHash = url.searchParams.get('token_hash')
  const type = url.searchParams.get('type')

  if (!tokenHash || type !== 'email') {
    return NextResponse.redirect(new URL('/login?error=confirmation', url.origin))
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.verifyOtp({
    token_hash: tokenHash,
    type: type as EmailOtpType,
  })

  if (error) {
    return NextResponse.redirect(new URL('/login?error=confirmation', url.origin))
  }

  return NextResponse.redirect(new URL('/library', url.origin))
}