'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const foundationItems = [
  { label: 'Colors',           href: '/foundations/colors' },
  { label: 'Typography',       href: '/foundations/typography' },
  { label: 'Spacing & Radius', href: '/foundations/spacing' },
  { label: 'Effects',          href: '/foundations/effects' },
  { label: 'Grid',             href: '/foundations/grid' },
  { label: 'Icons',            href: '/foundations/icons' },
]

const designAtWiseItems = [
  { label: 'Introduction', href: '/introduction' },
  { label: 'Principles',   href: '/principles' },
  { label: 'Updates',      href: '/updates' },
]

const productComponents = [
  { label: 'Button',           href: '/components/product/button' },
  { label: 'Input',            href: '/components/product/input' },
  { label: 'Chips',            href: '/components/product/chips' },
  { label: 'Tag',              href: '/components/product/tag' },
  { label: 'Accordion',        href: '/components/product/accordion' },
  { label: 'Radio & Checkbox', href: '/components/product/radio-checkbox' },
  { label: 'Progress',         href: '/components/product/progress' },
  { label: 'Carousel',         href: '/components/product/carousel' },
  { label: 'Pagination',       href: '/components/product/pagination' },
  { label: 'Tabs',             href: '/components/product/tabs' },
  { label: 'Empty State',      href: '/components/product/empty-state' },
]

function NavItem({ label, href }: { label: string; href: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={[
          'block px-3 py-1.5 text-base rounded-(--radius-s) transition-colors',
          isActive
            ? 'text-(--color-text-primary) font-medium'
            : 'text-(--color-text-secondary) hover:text-(--color-text-primary)',
        ].join(' ')}
      >
        {label}
      </Link>
    </li>
  )
}

function NavGroup({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => (
        <NavItem key={item.href} label={item.label} href={item.href} />
      ))}
    </ul>
  )
}

function ComponentsNav() {
  const pathname = usePathname()
  const isWebsite = pathname.startsWith('/components/website')
  const [tab, setTab] = useState<'product' | 'website'>(isWebsite ? 'website' : 'product')

  return (
    <div>
      {/* Toggle */}
      <div className="flex p-1 mb-5 rounded-(--radius-m) bg-(--color-bg-subtle)">
        {(['website', 'product'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={[
              'flex-1 py-1.5 text-xs font-medium rounded-(--radius-s) transition-colors capitalize',
              tab === t
                ? 'bg-(--color-bg-surface) text-(--color-text-primary) shadow-sm'
                : 'text-(--color-text-hint) hover:text-(--color-text-secondary)',
            ].join(' ')}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'product' ? (
        <NavGroup items={productComponents} />
      ) : (
        <p className="px-3 text-xs text-(--color-text-hint) leading-relaxed">
          Website components coming soon.
        </p>
      )}
    </div>
  )
}

export default function SectionSidebar() {
  const pathname = usePathname()

  const isFoundations = pathname.startsWith('/foundations')
  const isComponents  = pathname.startsWith('/components') || pathname.startsWith('/essentials')
  const isDesignAt    = pathname.startsWith('/design-at-wise') || ['/introduction', '/principles', '/updates'].some(p => pathname.startsWith(p))

  if (!isFoundations && !isComponents && !isDesignAt) return null

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-[220px] border-r border-(--color-border) bg-(--color-bg-surface) z-40 overflow-y-auto">
      <nav className="py-8 px-4">
        {isFoundations && <NavGroup items={foundationItems} />}
        {isDesignAt    && <NavGroup items={designAtWiseItems} />}
        {isComponents  && <ComponentsNav />}
      </nav>
    </aside>
  )
}
