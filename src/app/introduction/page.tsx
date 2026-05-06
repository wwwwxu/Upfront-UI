import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

export default function IntroductionPage() {
  return (
    <DocLayout
      title="Introduction"
      description="Design System is a design system built for clarity, consistency, and delight — across three product lines, one unified token foundation."
    >
      <DocSection title="What is this?">
        <p className="text-sm text-(--color-text-secondary) leading-relaxed max-w-[600px]">
          Design System is the design language powering UPFRONT — a platform spanning an e-commerce storefront, a foodstore experience, and an internal operational system (Alaska). All three share the same token system and component library, adapted per product line.
        </p>
      </DocSection>

      <DocSection title="Three product lines">
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: 'E-commerce', color: '#121212', textColor: '#FFFFFF', desc: 'Storefront, product pages & checkout. Foundation: Black & White.' },
            { name: 'Foodstore', color: '#FFF99F', textColor: '#121212', desc: 'Physical store. Brand accent: Hopeful Yellow.' },
            { name: 'Alaska', color: '#21468B', textColor: '#FFFFFF', desc: 'Internal dashboards & tooling. Primary: Alaska Blue.' },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-(--radius-m) overflow-hidden border border-(--color-border)"
            >
              <div className="h-16 flex items-end px-4 pb-3" style={{ backgroundColor: p.color }}>
                <span className="text-sm font-medium font-display" style={{ color: p.textColor }}>{p.name}</span>
              </div>
              <div className="p-4 bg-(--color-bg-surface)">
                <p className="text-xs text-(--color-text-secondary) leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="How to use">
        <div className="space-y-0">
          {[
            ['Figma library', 'Source of truth for all visual specs, tokens, and component variants.', ''],
            ['Token system', 'All design decisions are encoded as variables — colors, typography, spacing, radius, effects.', ''],
            ['Component docs', 'Each component page covers usage guidelines, variant specs, anatomy, and states.', ''],
          ].map(([label, desc]) => (
            <DocRow key={label} label={label as string} description={desc as string}>
              <div />
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="Stack">
        <div className="flex flex-wrap gap-2">
          {['Figma', 'Next.js 16', 'Tailwind CSS v4', 'TypeScript', 'Framer Motion', 'Blender Typeface'].map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-medium rounded-full bg-(--color-bg-subtle) text-(--color-text-secondary) border border-(--color-border)"
            >
              {item}
            </span>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
