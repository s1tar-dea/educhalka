'use client'

import { useEffect, useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Upload, Star, BookOpen, User, Check, Loader2, Trash2 } from 'lucide-react'
import { AnimatedThemeToggle } from '@/components/ui/animated-theme-toggle'

// Define the subjects
const SUBJECTS = [
  { id: 'algebra', title: 'Алгебра', color: '#1e9df1' },
  { id: 'geometry', title: 'Геометрия', color: '#00b87a' },
  { id: 'physics', title: 'Физика', color: '#10B981' },
  { id: 'history', title: 'История', color: '#EA580C' },
  { id: 'chemistry', title: 'Химия', color: '#D946EF' },
  { id: 'geography', title: 'География', color: '#14B8A6' },
]

export default function ProfilePage() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form states
  const [fullName, setFullName] = useState('')
  const [favoriteSubject, setFavoriteSubject] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)

      const [{ data: prof }, { data: bms }] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', user.id).single(),
        supabase.from('bookmarks').select('*').order('created_at', { ascending: false })
      ])

      if (prof) {
        setProfile(prof)
        setFullName(prof.full_name || '')
        setFavoriteSubject(prof.favorite_subject || null)
      }
      if (bms) {
        setBookmarks(bms)
      }
      setLoading(false)
    }
    loadData()
  }, [supabase, router])

  const handleSave = async () => {
    if (!user) return
    setSaving(true)
    await supabase.from('profiles').update({
      full_name: fullName,
      favorite_subject: favoriteSubject,
      updated_at: new Date().toISOString()
    }).eq('id', user.id)
    setSaving(false)
    router.refresh()
  }

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) return
    const file = e.target.files[0]
    setUploading(true)

    const fileExt = file.name.split('.').pop()
    const fileName = `${user.id}-${Math.random()}.${fileExt}`
    const filePath = `${user.id}/${fileName}`

    // Upload to avatars bucket
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file)

    if (uploadError) {
      console.error('Error uploading avatar:', uploadError)
      setUploading(false)
      return
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(filePath)

    // Update profile
    await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id)
    
    setProfile({ ...profile, avatar_url: publicUrl })
    setUploading(false)
    router.refresh()
  }

  const removeBookmark = async (topicId: string) => {
    await supabase.from('bookmarks').delete().match({ topic_id: topicId })
    setBookmarks(bookmarks.filter(b => b.topic_id !== topicId))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col">
      {/* Background Dot Pattern (matches KnowledgeBase) */}
      <div className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 2px, transparent 2px)',
          backgroundSize: '32px 32px',
          opacity: 0.1,
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
        }}
      />

      <header className="relative z-10 flex items-center justify-between h-16 px-6 border-b border-border bg-background/50 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold dm-sans-title">Профиль</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto relative z-10 p-6 sm:p-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">
          
          {/* Left Column: Avatar & Basic Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="relative group mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl bg-muted flex items-center justify-center">
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-muted-foreground opacity-50" />
                  )}
                </div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="absolute bottom-0 right-0 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
                >
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleAvatarUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
              <h2 className="text-xl font-bold mb-1">{profile?.full_name || 'Пользователь'}</h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Настройки
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Имя</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Любимый предмет</label>
                  <div className="flex flex-col gap-2">
                    {SUBJECTS.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setFavoriteSubject(s.id)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${favoriteSubject === s.id ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:bg-accent hover:text-foreground'}`}
                        style={favoriteSubject === s.id ? { borderColor: s.color, color: s.color, backgroundColor: `${s.color}15` } : {}}
                      >
                        {s.title}
                        {favoriteSubject === s.id && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={handleSave}
                  disabled={saving}
                  className="w-full mt-2 py-3 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {saving ? 'Сохранение...' : 'Сохранить изменения'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bookmarks */}
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-xl">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <h2 className="text-xl font-bold">Избранные темы</h2>
                <span className="ml-auto bg-muted px-2 py-1 rounded-full text-xs font-bold text-muted-foreground">
                  {bookmarks.length}
                </span>
              </div>

              {bookmarks.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {bookmarks.map((bm) => (
                    <div key={bm.id} className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background/50 hover:border-primary/30 transition-colors group">
                      <div className="flex-1 min-w-0">
                        <Link href={`/?subject=${bm.subject_id}&topic=${bm.topic_id}`} className="block truncate font-semibold hover:text-primary transition-colors">
                          {bm.topic_title}
                        </Link>
                      </div>
                      <button 
                        onClick={() => removeBookmark(bm.topic_id)}
                        className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Удалить из избранного"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-muted-foreground opacity-30" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Пока пусто</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Сохраняйте важные темы и формулы, нажимая на звездочку при чтении материалов.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      {/* Theme Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatedThemeToggle className="rounded-full w-12 h-12 shadow-lg shadow-black/10" />
      </div>
    </div>
  )
}
