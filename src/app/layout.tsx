import type { Metadata } from 'next'
import Topnav from '@/components/Topnav'
import SectionSidebar from '@/components/SectionSidebar'
import MainContent from '@/components/MainContent'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design System — Upfront',
  description: 'A design system built for clarity, consistency, and delight.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-(--color-bg-page)" suppressHydrationWarning>
        <Topnav />
        <SectionSidebar />
        <MainContent>{children}</MainContent>
      </body>
    </html>
  )
}
