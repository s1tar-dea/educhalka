import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import KnowledgeBase from '@/components/knowledge/KnowledgeBase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educhalka — Алгебра, Геометрия, Физика',
  description: 'Школьная база знаний: 55+ тем по алгебре, геометрии и физике. Программа 7–11 класс.',
}

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, avatar_url')
    .eq('id', user.id)
    .single()

  return (
    <KnowledgeBase
      user={{
        id: user.id,
        email: user.email,
        full_name: profile?.full_name ?? undefined,
        avatar_url: profile?.avatar_url ?? undefined,
      }}
    />
  )
}
