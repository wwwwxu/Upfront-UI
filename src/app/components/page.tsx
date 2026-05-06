import Link from 'next/link'

const productComponents = [
  {
    title: 'Button',
    href: '/components/product/button',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center gap-3">
        <span className="px-4 py-2 text-xs font-semibold rounded-[6px] bg-[#131316] text-white">Primary</span>
        <span className="px-4 py-2 text-xs font-semibold rounded-[6px] border border-[#E4E4E7] bg-white text-[#131316]">Secondary</span>
        <span className="px-4 py-2 text-xs font-semibold rounded-[6px] text-[#6B6B76]">Ghost</span>
      </div>
    ),
  },
  {
    title: 'Input',
    href: '/components/product/input',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center px-8">
        <div className="w-full">
          <div className="w-full px-3 py-2 rounded-[6px] border border-[#E4E4E7] bg-white text-xs text-[#A1A1AA]">Your email</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Chips',
    href: '/components/product/chips',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center gap-2 px-5 flex-wrap">
        {['Plan a trip', 'Search the web', 'Create image'].map((c) => (
          <span key={c} className="px-3 py-1 text-[10px] font-medium rounded-full border border-[#E4E4E7] bg-white text-[#6B6B76]">{c}</span>
        ))}
      </div>
    ),
  },
  {
    title: 'Tag',
    href: '/components/product/tag',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center gap-2">
        <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#EBF0FA] text-[#21468B] border border-[#C5D3EF]">Info</span>
        <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#EDFAF7] text-[#1E6C5C] border border-[#C8F2E8]">Success</span>
        <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#FFF0F0] text-[#A00808] border border-[#FFD5D5]">Error</span>
      </div>
    ),
  },
  {
    title: 'Accordion',
    href: '/components/product/accordion',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex flex-col justify-center px-6 gap-2">
        {['How do I get started?', 'What payment methods?', 'Can I cancel?'].map((q, i) => (
          <div key={q} className={`flex items-center justify-between px-3 py-2 rounded-[6px] bg-white border border-[#E4E4E7] text-[10px] ${i === 0 ? 'text-[#131316]' : 'text-[#6B6B76]'}`}>
            <span>{q}</span>
            <span>{i === 0 ? '−' : '+'}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Radio & Checkbox',
    href: '/components/product/radio-checkbox',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center gap-8">
        <div className="flex flex-col gap-2.5">
          {[true, false, false].map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-3.5 h-3.5 rounded border ${c ? 'bg-[#131316] border-[#131316]' : 'border-[#D0D0D0] bg-white'}`} />
              <div className="w-16 h-2 rounded-full bg-[#E4E4E7]" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          {[true, false, false].map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${c ? 'border-[#131316]' : 'border-[#D0D0D0] bg-white'}`}>
                {c && <div className="w-2 h-2 rounded-full bg-[#131316]" />}
              </div>
              <div className="w-16 h-2 rounded-full bg-[#E4E4E7]" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Progress',
    href: '/components/product/progress',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex flex-col justify-center px-8 gap-3">
        {[
          { w: '60%', bg: '#131316', track: '#E4E4E7' },
          { w: '100%', bg: '#34A891', track: '#EDFAF7' },
          { w: '80%', bg: '#FF5A00', track: '#FFF5F0' },
        ].map((p, i) => (
          <div key={i} className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: p.track }}>
            <div className="h-full rounded-full" style={{ width: p.w, backgroundColor: p.bg }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Carousel',
    href: '/components/product/carousel',
    preview: (
      <div className="w-full h-full bg-[#131316] flex flex-col justify-end p-5">
        <p className="text-[10px] font-mono text-white/40 mb-1">01 / 04</p>
        <p className="text-sm font-bold text-white font-display tracking-tight">Design Systems Done Right</p>
        <div className="flex gap-1 mt-3">
          {[true, false, false, false].map((a, i) => (
            <div key={i} className={`h-1 rounded-full bg-white ${a ? 'w-4' : 'w-1.5 opacity-30'}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Pagination',
    href: '/components/product/pagination',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex items-center justify-center gap-1">
        {['‹', '1', '2', '3', '4', '5', '…', '12', '›'].map((p, i) => (
          <span key={i} className={`w-7 h-7 flex items-center justify-center rounded-[6px] text-xs border ${i === 4 ? 'bg-[#131316] text-white border-[#131316]' : 'border-[#E4E4E7] bg-white text-[#6B6B76]'}`}>{p}</span>
        ))}
      </div>
    ),
  },
  {
    title: 'Tabs',
    href: '/components/product/tabs',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex flex-col justify-center px-6 gap-5">
        <div className="flex border-b border-[#E4E4E7]">
          {['Overview', 'Analytics', 'Settings'].map((t, i) => (
            <span key={t} className={`px-3 py-2 text-[10px] font-medium border-b-2 ${i === 0 ? 'border-[#131316] text-[#131316]' : 'border-transparent text-[#A1A1AA]'}`}>{t}</span>
          ))}
        </div>
        <div className="flex gap-1 p-1 rounded-[8px] bg-[#E4E4E7] w-fit">
          {['All', 'Active', 'Done'].map((t, i) => (
            <span key={t} className={`px-3 py-1 text-[10px] font-medium rounded-[6px] ${i === 0 ? 'bg-white text-[#131316]' : 'text-[#6B6B76]'}`}>{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Empty State',
    href: '/components/product/empty-state',
    preview: (
      <div className="w-full h-full bg-[#F8F8FA] flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-[8px] bg-[#E4E4E7] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <div className="text-center">
          <p className="text-[11px] font-semibold text-[#131316]">Nothing here yet</p>
          <p className="text-[10px] text-[#A1A1AA] mt-0.5">Get started to see content</p>
        </div>
      </div>
    ),
  },
]

function CardGrid({ items }: { items: typeof productComponents }) {
  return (
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
  )
}

export default function ComponentsPage() {
  return (
    <div className="px-14 py-16">
      <h1 className="font-display text-[80px] font-bold tracking-tight leading-none text-(--color-text-primary) mb-16">
        COMPONENTS
      </h1>

      <section className="mb-14">
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-(--color-text-hint)">Product</h2>
          <p className="text-sm text-(--color-text-hint)">Core UI components for all product surfaces</p>
        </div>
        <CardGrid items={productComponents} />
      </section>

      <section>
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-(--color-text-hint)">Website</h2>
          <p className="text-sm text-(--color-text-hint)">E-commerce and marketing surface components</p>
        </div>
        <div className="rounded-(--radius-m) border border-(--color-border) border-dashed p-12 flex items-center justify-center">
          <p className="text-sm text-(--color-text-hint)">Coming soon — website components will be added here.</p>
        </div>
      </section>
    </div>
  )
}
