import type { Metadata } from 'next'
import Topnav from '@/components/Topnav'
import SectionSidebar from '@/components/SectionSidebar'
import MainContent from '@/components/MainContent'
import './globals.css'

export const metadata: Metadata = {
  title: 'Upfront Design System',
  description: 'The official Upfront design system — components, foundations, and guidelines.',
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
