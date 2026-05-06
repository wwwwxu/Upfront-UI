'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Design at Upfront',
    href: '/design-at-wise',
    matches: ['/design-at-wise', '/introduction', '/principles', '/updates'],
  },
  {
    label: 'Foundations',
    href: '/foundations',
    matches: ['/foundations'],
  },
  {
    label: 'Components',
    href: '/components',
    matches: ['/components', '/essentials'],
  },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <Image
        src="/upfront-logo.svg"
        alt="Upfront"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        priority
      />
      <span className="text-sm font-semibold text-(--color-text-primary) tracking-tight leading-none uppercase">
        Upfront Design System
      </span>
    </Link>
  )
}

export default function Topnav() {
  const pathname = usePathname()

  function isActive(item: (typeof navItems)[0]) {
    return item.matches.some((m) => pathname === m || pathname.startsWith(m + '/'))
  }

  return (
    <header className="fixed inset-x-0 top-0 h-14 z-50 bg-(--color-bg-surface) border-b border-(--color-border) flex items-center px-6">
      <Logo />
      <nav className="ml-auto flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={[
              'px-3.5 py-1.5 text-sm rounded-(--radius-s) transition-colors',
              isActive(item)
                ? 'font-semibold text-(--color-text-primary)'
                : 'text-(--color-text-secondary) hover:text-(--color-text-primary)',
            ].join(' ')}
          >
            {item.label}
          </Link>
        ))}
        <button className="ml-2 p-1.5 text-(--color-text-hint) hover:text-(--color-text-primary) transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    </header>
  )
}
