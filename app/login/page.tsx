
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleGoogleLogin() {
    setMessage('')
    setLoading(true)

    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-bold">
        Welcome to Roki
      </h1>

      <p className="mt-3 text-gray-600">
        Sign in with Google to access your learning resources.
      </p>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="mt-8 w-full rounded-lg border px-4 py-3 font-semibold disabled:opacity-50"
      >
        {loading ? 'Connecting to Google...' : 'Continue with Google'}
      </button>

      {message && (
        <p role="alert" className="mt-5 text-sm text-red-600">
          {message}
        </p>
      )}
    </main>
  )
}
