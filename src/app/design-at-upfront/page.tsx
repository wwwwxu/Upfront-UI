import Link from 'next/link'

const items = [
  {
    title: 'Introduction',
    href: '/introduction',
    desc: 'What is this design system, how to use it, and what it covers.',
    preview: 'bg-[#131316]',
    label: 'Start here',
  },
  {
    title: 'Principles',
    href: '/principles',
    desc: 'The four beliefs that guide every design decision in this system.',
    preview: 'bg-[#21468B]',
    label: '4 principles',
  },
  {
    title: 'Updates',
    href: '/updates',
    desc: 'Changelog of new components, tokens, and design decisions.',
    preview: 'bg-[#F4F4F5]',
    label: 'v1.0',
    dark: false,
  },
]

export default function DesignAtUpfrontPage() {
  return (
    <div className="px-14 py-16">
      <h1 className="font-display text-[80px] font-bold tracking-tight leading-none text-(--color-text-primary) mb-4">
        DESIGN AT
      </h1>
      <h1 className="font-display text-[80px] font-bold tracking-tight leading-none text-(--color-text-primary) mb-16">
        UPFRONT
      </h1>
      <p className="text-base text-(--color-text-secondary) leading-relaxed max-w-[560px] mb-12">
        Brand philosophy, design principles, and the thinking behind the design system powering the UPFRONT platform.
      </p>
      <div className="grid grid-cols-3 gap-5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-(--radius-m) overflow-hidden border border-(--color-border) hover:border-(--color-border) transition-colors"
          >
            <div className={`h-44 flex items-center justify-center ${item.preview}`}>
              <span className={`text-xs font-medium px-3 py-1.5 rounded-full border ${item.dark === false ? 'border-[#E4E4E7] text-[#131316]' : 'border-white/20 text-white'}`}>
                {item.label}
              </span>
            </div>
            <div className="px-4 py-4 bg-(--color-bg-surface)">
              <p className="text-sm font-semibold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors mb-1">
                {item.title}
              </p>
              <p className="text-xs text-(--color-text-hint) leading-relaxed">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
