import DocLayout, { DocSection } from '@/components/DocLayout'

export default function IconsPage() {
  return (
    <DocLayout
      breadcrumb="Foundations"
      title="Icons"
      description="Icon guidelines for the design system. Icons are sourced directly from the Figma file and used as inline SVGs."
    >
      <DocSection title="Usage">
        <p className="text-sm text-(--color-text-secondary) leading-relaxed max-w-[580px]">
          All icons are exported from the Figma source file. Do not install icon packages — use assets provided directly from the design file or as inline SVGs. Icons scale with the surrounding text and should be sized at <code className="font-mono text-(--color-text-primary) bg-(--color-bg-subtle) px-1.5 py-0.5 rounded">16px</code> or <code className="font-mono text-(--color-text-primary) bg-(--color-bg-subtle) px-1.5 py-0.5 rounded">24px</code> by default.
        </p>
      </DocSection>

      <DocSection title="Guidelines">
        <div className="space-y-0 rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Size', 'Use 16px icons in dense UI (labels, table rows). Use 24px in navigation and standalone contexts.'],
            ['Color', 'Icons inherit color via currentColor. Use text-* utilities to tint icons.'],
            ['Accessibility', 'Decorative icons get aria-hidden="true". Meaningful icons need an aria-label.'],
            ['Source', 'Export SVGs from the Figma file. Do not use external icon libraries.'],
          ].map(([label, desc]) => (
            <div key={label as string} className="flex gap-6 px-5 py-4 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-24 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
