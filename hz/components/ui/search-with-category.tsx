"use client"

import { useId } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchWithCategoryProps {
  query: string
  onQueryChange: (query: string) => void
  category: string
  onCategoryChange: (category: string) => void
  onSearch: () => void
}

export default function SearchWithCategory({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  onSearch,
}: SearchWithCategoryProps) {
  const id = useId()

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex rounded-xl shadow-lg border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
        {/* Category selector */}
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-11 w-[130px] rounded-none border-0 border-r border-border bg-transparent text-sm text-muted-foreground focus:ring-0 focus:ring-offset-0 focus:outline-none">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border text-foreground">
            <SelectItem value="all">Все</SelectItem>
            <SelectItem value="subject">📚 Предмет</SelectItem>
            <SelectItem value="topic">📝 Тема</SelectItem>
            <SelectItem value="grade">🎓 Класс</SelectItem>
          </SelectContent>
        </Select>

        {/* Search input */}
        <Input
          id={id}
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="Поиск по базе знаний…"
          className="h-11 flex-1 rounded-none border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-0 shadow-none"
        />

        {/* Search button */}
        <Button
          type="button"
          onClick={onSearch}
          className="h-11 rounded-none px-4 bg-primary hover:bg-primary/90 text-primary-foreground border-0"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
