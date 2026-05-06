import Link from 'next/link'

const items = [
  {
    title: 'Colors',
    href: '/foundations/colors',
    preview: (
      <div className="w-full h-full bg-[#F4F4F5] flex items-center justify-center gap-4 px-6">
        <div className="w-12 h-12 rounded-full bg-[#131316]" />
        <div className="w-12 h-12 rounded-full bg-[#21468B]" />
        <div className="w-12 h-12 rounded-full border border-[#D0D0D0] bg-[#FFF99F]" />
        <div className="w-12 h-12 rounded-full bg-[#34A891]" />
      </div>
    ),
  },
  {
    title: 'Typography',
    href: '/foundations/typography',
    preview: (
      <div className="w-full h-full bg-[#131316] flex items-center justify-center">
        <span className="font-display text-7xl font-bold text-white tracking-tight leading-none">Ag</span>
      </div>
    ),
  },
  {
    title: 'Spacing & Radius',
    href: '/foundations/spacing',
    preview: (
      <div className="w-full h-full bg-[#EBF0FA] flex flex-col items-start justify-center gap-2 px-8">
        {[120, 80, 60, 40, 24].map((w, i) => (
          <div key={i} className="h-2 rounded-full bg-[#21468B]" style={{ width: w }} />
        ))}
      </div>
    ),
  },
  {
    title: 'Effects',
    href: '/foundations/effects',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center gap-4 px-6">
        {[
          '0 2px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
          '0 4px 8px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.08)',
          '0 8px 16px rgba(0,0,0,0.10), 0 24px 48px rgba(0,0,0,0.10)',
        ].map((shadow, i) => (
          <div key={i} className="w-10 h-10 rounded-(--radius-m) bg-white" style={{ boxShadow: shadow }} />
        ))}
      </div>
    ),
  },
  {
    title: 'Grid',
    href: '/foundations/grid',
    preview: (
      <div className="w-full h-full bg-[#F4F4F5] flex items-center justify-center p-6">
        <div className="w-full grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-8 rounded bg-[#E4E4E7]" />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Icons',
    href: '/foundations/icons',
    preview: (
      <div className="w-full h-full bg-[#131316] flex items-center justify-center gap-5">
        {[
          <path key="s" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>,
          <path key="h" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>,
          <path key="u" d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="white" strokeWidth="1.5"/>,
        ].map((p, i) => (
          <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white opacity-80">{p}</svg>
        ))}
      </div>
    ),
  },
]

export default function FoundationsPage() {
  return (
    <div className="px-14 py-16">
      <h1 className="font-display text-[80px] font-bold tracking-tight leading-none text-(--color-text-primary) mb-16">
        FOUNDATIONS
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-(--radius-m) overflow-hidden border border-(--color-border) hover:border-(--color-border) transition-colors"
          >
            <div className="h-44 overflow-hidden">{item.preview}</div>
            <div className="px-4 py-3 bg-(--color-bg-surface)">
              <p className="text-sm font-semibold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
