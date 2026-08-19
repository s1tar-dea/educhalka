'use client'
import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, BookOpen, ChevronRight, Star, Search } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import algebraData from '@/data/algebra'
import geometryData from '@/data/geometry'
import physicsData from '@/data/physics'
import historyData from '@/data/history'
import chemistryData from '@/data/chemistry'
import geographyData from '@/data/geography'
import SearchWithCategory from '@/components/ui/search-with-category'
import { AnimatedThemeToggle } from '@/components/ui/animated-theme-toggle'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import type { SubjectData, SubjectKey, SearchResult, Topic, Section } from '@/data/types'

const ALL_DATA: Record<SubjectKey, SubjectData> = {
  algebra: algebraData,
  geometry: geometryData,
  physics: physicsData,
  history: historyData,
  chemistry: chemistryData,
  geography: geographyData,
}

// Build flat search index
const SEARCH_INDEX: SearchResult[] = []
for (const [subjectKey, subject] of Object.entries(ALL_DATA) as [SubjectKey, SubjectData][]) {
  for (const section of subject.sections) {
    for (const topic of section.topics) {
      SEARCH_INDEX.push({
        subjectKey,
        subjectTitle: subject.title,
        subjectColor: subject.color,
        subjectIcon: subject.icon,
        sectionId: section.id,
        sectionTitle: section.title,
        topicId: topic.id,
        topicTitle: topic.title,
        grade: topic.grade,
      })
    }
  }
}

function highlight(text: string, query: string) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    text.slice(0, idx) +
    `<mark style="background:rgba(234,170,80,0.25);color:inherit;border-radius:3px;padding:0 2px">${text.slice(idx, idx + query.length)}</mark>` +
    text.slice(idx + query.length)
  )
}

interface UserInfo {
  id: string
  email?: string
  full_name?: string
  avatar_url?: string
}

export default function KnowledgeBase({ user }: { user: UserInfo }) {
  const router = useRouter()
  const supabase = createClient()

  const [currentSubject, setCurrentSubject] = useState<SubjectKey | null>(null)
  const [currentTopic, setCurrentTopic] = useState<{ sectionId: string; topicId: string } | null>(null)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCategory, setSearchCategory] = useState('all')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())
  const contentRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const lastRandomTopicRef = useRef<string | null>(null)

  // Initial load from URL
  useEffect(() => {
    const s = searchParams.get('subject') as SubjectKey
    const t = searchParams.get('topic')
    if (s && t && ALL_DATA[s]) {
      setCurrentSubject(s)
      // Find section for this topic
      for (const sec of ALL_DATA[s].sections) {
        if (sec.topics.some(top => top.id === t)) {
          setCurrentTopic({ sectionId: sec.id, topicId: t })
          setOpenSections(prev => new Set(prev).add(sec.id))
          break
        }
      }
    }
  }, [searchParams])

  // Load bookmarks on mount
  useEffect(() => {
    supabase.from('bookmarks').select('topic_id').then(({ data }) => {
      if (data) setBookmarks(new Set(data.map(b => b.topic_id)))
    })
  }, [supabase])

  const toggleBookmark = async (subjectId: string, sectionId: string, topicId: string, topicTitle: string) => {
    const isBookmarked = bookmarks.has(topicId)
    
    // Optimistic UI update
    const newBookmarks = new Set(bookmarks)
    if (isBookmarked) newBookmarks.delete(topicId)
    else newBookmarks.add(topicId)
    setBookmarks(newBookmarks)

    if (isBookmarked) {
      await supabase.from('bookmarks').delete().match({ user_id: user.id, topic_id: topicId })
    } else {
      await supabase.from('bookmarks').insert({
        user_id: user.id,
        subject_id: subjectId,
        section_id: sectionId,
        topic_id: topicId,
        topic_title: topicTitle
      })
    }
  }

  // MathJax typeset when topic DOM node mounts
  const topicRef = useCallback((node: HTMLDivElement | null) => {
    if (node && window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([node]).catch(() => {})
    }
  }, [])

  const doSearch = useCallback(() => {
    const q = searchQuery.trim()
    if (!q) { setSearchResults([]); setShowResults(false); return }
    const results = SEARCH_INDEX.filter(item => {
      const matchesQuery =
        item.topicTitle.toLowerCase().includes(q.toLowerCase()) ||
        item.sectionTitle.toLowerCase().includes(q.toLowerCase()) ||
        item.subjectTitle.toLowerCase().includes(q.toLowerCase()) ||
        String(item.grade).includes(q)

      if (!matchesQuery) return false

      if (searchCategory === 'subject') {
        return item.subjectTitle.toLowerCase().includes(q.toLowerCase())
      }
      if (searchCategory === 'topic') {
        return item.topicTitle.toLowerCase().includes(q.toLowerCase()) ||
               item.sectionTitle.toLowerCase().includes(q.toLowerCase())
      }
      if (searchCategory === 'grade') {
        return String(item.grade).includes(q)
      }
      return true // 'all'
    }).slice(0, 12)
    setSearchResults(results)
    setShowResults(true)
  }, [searchQuery, searchCategory])

  // Live search as user types
  useEffect(() => {
    doSearch()
  }, [searchQuery, searchCategory, doSearch])

  const selectSubject = useCallback((key: SubjectKey) => {
    setCurrentSubject(key)
    setCurrentTopic(null)
    setOpenSections(new Set())
    setShowResults(false)
  }, [])

  const loadTopic = useCallback((subjectKey: SubjectKey, sectionId: string, topicId: string) => {
    if (currentSubject !== subjectKey) setCurrentSubject(subjectKey)
    setCurrentTopic({ sectionId, topicId })
    setOpenSections(prev => new Set([...prev, sectionId]))
    setSearchQuery('')
    setSearchResults([])
    setShowResults(false)
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentSubject])

  const handleRandomTopic = useCallback(() => {
    if (SEARCH_INDEX.length === 0) return
    let randomItem
    do {
      randomItem = SEARCH_INDEX[Math.floor(Math.random() * SEARCH_INDEX.length)]
    } while (SEARCH_INDEX.length > 1 && randomItem.topicId === lastRandomTopicRef.current)
    
    lastRandomTopicRef.current = randomItem.topicId
    loadTopic(randomItem.subjectKey as SubjectKey, randomItem.sectionId, randomItem.topicId)
  }, [loadTopic])

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  const subject = currentSubject ? ALL_DATA[currentSubject] : null

  let activeTopic: Topic | null = null
  let activeSection: Section | null = null
  if (subject && currentTopic) {
    activeSection = subject.sections.find(s => s.id === currentTopic.sectionId) ?? null
    activeTopic = activeSection?.topics.find(t => t.id === currentTopic.topicId) ?? null
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden transition-colors duration-300 relative">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 2px, transparent 2px)',
          backgroundSize: '32px 32px',
          opacity: 0.1,
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
        }}
      />

      {/* ── Header ── */}
      <header className="fixed top-0 inset-x-0 h-14 z-50 hidden md:flex items-center gap-3 px-4 bg-background/80 backdrop-blur-md border-b border-border">
        {/* Logo */}
        <button onClick={() => { setCurrentSubject(null); setCurrentTopic(null); setShowResults(false) }}
          className="flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity">
          <img src="/favicon.ico" alt="Educhalka Logo" className="w-8 h-8 object-contain" />
        </button>

        {/* Subject nav (Desktop only) */}
        <nav className="hidden md:flex gap-1 flex-shrink-0">
          {(Object.entries(ALL_DATA) as [SubjectKey, SubjectData][]).map(([key, s]) => (
            <InteractiveHoverButton key={key} onClick={() => selectSubject(key)}
              className={`flex items-center w-auto gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all whitespace-nowrap
                ${currentSubject === key
                  ? ''
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-accent'}`}
              style={currentSubject === key ? {
                borderColor: s.color,
                color: s.color,
                background: `${s.color}20`,
              } : {}}
              text={
                <>
                  <span>{s.icon}</span>
                  <span className="hidden md:inline">{s.title}</span>
                </>
              }
            />
          ))}
        </nav>

        {/* Spacer + User + logout (Desktop only) */}
        <div className="ml-auto hidden md:flex items-center gap-4 flex-shrink-0">
          <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden border border-border hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary ring-offset-background ring-offset-2">
            {user.avatar_url ? (
              <img src={user.avatar_url} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold uppercase">
                {(user.full_name || user.email || '?')[0]}
              </div>
            )}
          </Link>
          <button onClick={handleLogout} title="Выйти"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 pt-14 pb-16 md:pb-0 overflow-hidden w-full relative">
        {/* Main content */}
        <main ref={contentRef} className="flex-1 overflow-y-auto overflow-x-hidden relative w-full">
          <AnimatePresence mode="wait">
            {!currentSubject ? (
              <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center min-h-full pb-[15vh] px-4 text-center">

                {/* Title + subtitle */}
                <div className="climate-crisis-title hidden md:block text-8xl md:text-9xl lg:text-[10rem] tracking-widest text-primary mb-6">
                  EDUCHALKA
                </div>
                <img src="/favicon.ico" alt="Educhalka Logo" className="w-32 h-32 md:hidden mb-6 drop-shadow-xl" />
                <p className="text-muted-foreground mb-8 text-lg md:text-xl font-bold">Школьная программа · 7–11 класс · 55+ тем с формулами и задачами</p>

                <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="hidden md:block">
                    <InteractiveHoverButton 
                      text="Выбрать предмет" 
                      onClick={() => document.getElementById('subjects-grid')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-48 py-3"
                    />
                  </div>
                  <div className="block md:hidden">
                    <InteractiveHoverButton 
                      text="Выбери за меня 💫" 
                      onClick={handleRandomTopic}
                      className="w-48 py-3"
                    />
                  </div>
                </div>

                {/* ── Search Bar ── */}
                <div className="w-full max-w-lg mb-8 relative">
                  <SearchWithCategory
                    query={searchQuery}
                    onQueryChange={setSearchQuery}
                    category={searchCategory}
                    onCategoryChange={setSearchCategory}
                    onSearch={doSearch}
                  />

                  {/* Search results dropdown */}
                  <AnimatePresence>
                    {showResults && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto"
                      >
                        {searchResults.map(item => (
                          <button key={`${item.subjectKey}-${item.sectionId}-${item.topicId}`}
                            onClick={() => loadTopic(item.subjectKey, item.sectionId, item.topicId)}
                            className="w-full text-left px-4 py-3 hover:bg-accent border-b border-border last:border-0 transition-colors">
                            <div className="text-sm text-foreground font-medium"
                              dangerouslySetInnerHTML={{ __html: highlight(item.topicTitle, searchQuery) }} />
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                                style={{ background: `${item.subjectColor}25`, color: item.subjectColor }}>
                                {item.subjectIcon} {item.subjectTitle}
                              </span>
                              <span className="text-xs text-muted-foreground">{item.grade} кл.</span>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                    {showResults && searchQuery.trim() && searchResults.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl p-6 text-center z-50"
                      >
                        <p className="text-muted-foreground text-sm">Ничего не найдено по запросу «{searchQuery}»</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subject cards */}
                <div id="subjects-grid" className="flex gap-4 flex-wrap justify-center pt-8">
                  {(Object.entries(ALL_DATA) as [SubjectKey, SubjectData][]).map(([key, s]) => (
                    <motion.button key={key} onClick={() => selectSubject(key)}
                      whileHover={{ translateY: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-44 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left group"
                    >
                      <div className="text-3xl mb-3">{s.icon}</div>
                      <div className="font-bold text-foreground mb-1">{s.title}</div>
                      <div className="text-xs text-muted-foreground">{s.sections.reduce((acc, sec) => acc + sec.topics.length, 0)} тем</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : !activeTopic ? (
              <motion.div key="subject" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}
                className="max-w-[1000px] mx-auto px-6 sm:px-10 py-12 pb-20 w-full"
              >
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8 flex-wrap">
                  <button onClick={() => { setCurrentSubject(null); setCurrentTopic(null) }}
                    className="hover:text-foreground transition-colors">Главная</button>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-foreground/70 truncate max-w-48">{subject?.title}</span>
                </nav>

                {/* Subject Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="text-5xl" style={{ filter: `drop-shadow(0 0 20px ${subject?.color}40)` }}>{subject?.icon}</div>
                  <h1 className="text-4xl font-bold dm-sans-title" style={{ color: subject?.color }}>{subject?.title}</h1>
                </div>
                
                {/* Sections and Topics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {subject?.sections.map(section => (
                    <div key={section.id} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <h2 className="text-lg font-semibold mb-4 text-foreground flex items-center justify-between">
                        {section.title}
                        <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">{section.topics.length} тем</span>
                      </h2>
                      <div className="flex flex-col gap-1.5">
                        {section.topics.map(topic => (
                          <button key={topic.id} onClick={() => loadTopic(currentSubject!, section.id, topic.id)}
                            className="text-left px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex items-start gap-3 group"
                          >
                            <span className="flex-1 leading-snug group-hover:text-primary transition-colors">{topic.title}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground mt-0.5 flex-shrink-0">
                              {topic.grade}кл
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key={activeTopic.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}
                className="max-w-[860px] mx-auto px-6 sm:px-10 py-8 pb-20 w-full">
                <div className="flex items-center justify-between mb-6">
                  {/* Breadcrumbs */}
                  <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
                    <button onClick={() => { setCurrentSubject(null); setCurrentTopic(null) }}
                      className="hover:text-foreground transition-colors">Главная</button>
                    <ChevronRight className="w-3 h-3" />
                    <button onClick={() => setCurrentTopic(null)}
                      className="hover:text-foreground transition-colors">{subject?.icon} {subject?.title}</button>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-foreground/70 truncate max-w-48">{activeTopic.title}</span>
                  </nav>

                  {/* Bookmark Button */}
                  <button 
                    onClick={() => toggleBookmark(currentSubject!, currentTopic!.sectionId, currentTopic!.topicId, activeTopic!.title)}
                    className="text-muted-foreground hover:text-yellow-500 transition-colors group flex items-center justify-center p-2 rounded-full hover:bg-yellow-500/10"
                    title={bookmarks.has(currentTopic!.topicId) ? "Убрать из избранного" : "Добавить в избранное"}
                  >
                    <Star className={`w-5 h-5 transition-transform group-hover:scale-110 ${bookmarks.has(currentTopic!.topicId) ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                  </button>
                </div>

                {/* Optional Banner Image */}
                {activeTopic.image && (
                  <div className="w-full relative h-64 md:h-80 mb-8 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={activeTopic.image}
                      alt={activeTopic.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                {/* Topic HTML content */}
                <div ref={topicRef} className="knowledge-content"
                  dangerouslySetInnerHTML={{ __html: activeTopic.content }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Theme toggle — fixed bottom right ── */}
          <div className="fixed bottom-20 md:bottom-6 right-6 z-40">
            <AnimatedThemeToggle className="rounded-full w-12 h-12 shadow-lg shadow-black/10" />
          </div>
        </main>
      </div>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-background/90 backdrop-blur-md border-t border-border z-50 flex items-center justify-around px-2 pb-safe">
        <button onClick={() => { setCurrentSubject(null); setCurrentTopic(null); setShowResults(false) }} 
          className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${!currentSubject && !searchQuery ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
          <BookOpen className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Главная</span>
        </button>
        <button onClick={() => { setSearchQuery(' '); setShowResults(true); setCurrentSubject(null); setCurrentTopic(null) }} 
          className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${searchQuery ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
          <Search className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Поиск</span>
        </button>
        <Link href="/profile" className="flex flex-col items-center justify-center w-16 h-full text-muted-foreground hover:text-foreground transition-colors">
          <div className="w-6 h-6 mb-1 rounded-full overflow-hidden border border-current">
            {user.avatar_url ? (
              <img src={user.avatar_url} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold uppercase text-[10px]">
                {(user.full_name || user.email || '?')[0]}
              </div>
            )}
          </div>
          <span className="text-[10px] font-medium">Профиль</span>
        </Link>
        <button onClick={handleLogout} className="flex flex-col items-center justify-center w-16 h-full text-muted-foreground hover:text-red-500 transition-colors">
          <LogOut className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Выйти</span>
        </button>
      </nav>
    </div>
  )
}

// Augment global for MathJax
declare global {
  interface Window {
    MathJax: {
      typesetPromise?: (nodes: HTMLElement[]) => Promise<void>
    }
  }
}
