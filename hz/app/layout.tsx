import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Educhalka — Алгебра, Геометрия, Физика',
  description: 'Школьная база знаний по алгебре, геометрии и физике. Программа 7–11 класс с формулами и задачами.',
  keywords: ['алгебра', 'геометрия', 'физика', 'школа', 'формулы', 'задачи'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@1979&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
        <Script id="mathjax-config" strategy="beforeInteractive">{`
          window.MathJax = {
            tex: {
              inlineMath: [['\\\\(', '\\\\)']],
              displayMath: [['$$', '$$']],
            },
            options: { skipHtmlTags: ['script','noscript','style','textarea','pre'] },
            startup: { typeset: false },
          };
        `}</Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="h-full bg-background text-foreground overflow-hidden transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
