
import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

async function LibraryContent() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">
        Your Roki Learning Library
      </h1>

      <p className="mt-4 text-gray-600">
        You are signed in as {user.email}.
      </p>

      <p className="mt-6">
        Your digital learning resources will appear here.
      </p>
    </main>
  )
}

export default function LibraryPage() {
  return (
    <Suspense fallback={<p className="p-8">Loading your library...</p>}>
      <LibraryContent />
    </Suspense>
  )
}
