'use client'

import { usePathname } from 'next/navigation'

const SIDEBAR_PATHS = ['/foundations', '/components', '/essentials', '/design-at-wise', '/introduction', '/principles', '/updates']

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hasSidebar = SIDEBAR_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))

  return (
    <main
      className={`pt-14 min-h-screen transition-[margin] ${hasSidebar ? 'ml-[220px]' : ''}`}
    >
      {children}
    </main>
  )
}
