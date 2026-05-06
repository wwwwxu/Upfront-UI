interface DocLayoutProps {
  breadcrumb?: string
  title: string
  description?: string
  badge?: string
  children: React.ReactNode
}

export default function DocLayout({ breadcrumb, title, description, badge, children }: DocLayoutProps) {
  return (
    <div className="max-w-[860px] mx-auto px-10 py-12">
      {/* Header */}
      <div className="mb-10 pb-8 border-b border-(--color-border)">
        {breadcrumb && (
          <p className="mb-3 text-xs text-(--color-text-secondary) tracking-tight">{breadcrumb}</p>
        )}
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-4xl font-bold text-(--color-text-primary) tracking-tight font-display leading-none">
            {title}
          </h1>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium rounded bg-(--color-bg-subtle) text-(--color-text-secondary)">
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-base text-(--color-text-secondary) leading-relaxed max-w-[580px]">
            {description}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="space-y-12">{children}</div>
    </div>
  )
}

/* ── Section wrapper ─────────────────────────────────────────── */
interface DocSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-(--color-text-primary) tracking-tight leading-tight mb-1.5">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-(--color-text-secondary) leading-relaxed">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

/* ── Two-column prose section (like the Figma doc) ──────────── */
interface DocRowProps {
  label: string
  description?: string
  children: React.ReactNode
}

export function DocRow({ label, description, children }: DocRowProps) {
  return (
    <div className="flex gap-12 py-8 border-b border-(--color-border) last:border-0">
      <div className="w-52 shrink-0">
        <p className="text-sm font-medium text-(--color-text-primary)">{label}</p>
        {description && (
          <p className="mt-1 text-xs text-(--color-text-secondary) leading-relaxed">{description}</p>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
