'use client'
import { useState } from 'react'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

function LineTabs({ items }: { items: string[] }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="flex border-b border-(--color-border)">
        {items.map((item, i) => (
          <button
            key={item}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              active === i
                ? 'border-(--color-text-primary) text-(--color-text-primary)'
                : 'border-transparent text-(--color-text-hint) hover:text-(--color-text-secondary)'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="pt-4 text-sm text-(--color-text-secondary)">
        Viewing: <span className="font-medium text-(--color-text-primary)">{items[active]}</span>
      </div>
    </div>
  )
}

function PillTabs({ items }: { items: string[] }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="flex gap-1 p-1 rounded-(--radius-m) bg-(--color-bg-subtle) w-fit">
        {items.map((item, i) => (
          <button
            key={item}
            onClick={() => setActive(i)}
            className={`px-4 py-1.5 text-sm font-medium rounded-(--radius-s) transition-colors ${
              active === i
                ? 'bg-(--color-text-primary) text-white'
                : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="pt-4 text-sm text-(--color-text-secondary)">
        Viewing: <span className="font-medium text-(--color-text-primary)">{items[active]}</span>
      </div>
    </div>
  )
}

export default function TabsPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Tabs"
      description="Tabs organise related content into labelled sections within a single view. Line tabs are best for top-level navigation between major views; Pill tabs work for in-context filtering and view switching within a page."
    >
      <DocSection title="Line tabs" description="Best for top-level navigation between major views. The 2px underline marks the active tab.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <LineTabs items={['Overview', 'Analytics', 'Settings', 'Billing']} />
        </div>
      </DocSection>

      <DocSection title="Pill tabs" description="Best for in-context filtering and view switching within a section. Filled black background marks the active tab.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <PillTabs items={['All', 'Active', 'Archived', 'Draft']} />
        </div>
      </DocSection>

      <DocSection title="States" description="Both variants share four states. The active indicator differs: Line uses a 2px underline; Pill uses a filled background.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <div className="mb-8">
            <p className="text-[10px] text-(--color-text-hint) uppercase tracking-widest mb-4">Line variant</p>
            <div className="flex gap-2">
              {['Default', 'Hover', 'Active', 'Disabled'].map((s, i) => (
                <span key={s} className={`px-4 py-2.5 text-xs font-medium border-b-2 ${
                  i === 2 ? 'border-(--color-text-primary) text-(--color-text-primary)'
                  : i === 3 ? 'border-transparent text-(--color-text-hint) opacity-40'
                  : i === 1 ? 'border-transparent text-(--color-text-secondary)'
                  : 'border-transparent text-(--color-text-hint)'
                }`}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-(--color-text-hint) uppercase tracking-widest mb-4">Pill variant</p>
            <div className="flex gap-1 p-1 rounded-(--radius-m) bg-(--color-bg-subtle) w-fit">
              {['Default', 'Hover', 'Active', 'Disabled'].map((s, i) => (
                <span key={s} className={`px-4 py-1.5 text-xs font-medium rounded-(--radius-s) ${
                  i === 2 ? 'bg-(--color-text-primary) text-white'
                  : i === 3 ? 'text-(--color-text-hint) opacity-40'
                  : i === 1 ? 'text-(--color-text-secondary) bg-(--color-bg-subtle)'
                  : 'text-(--color-text-hint)'
                }`}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="When to use each variant">
        <div className="space-y-0">
          {[
            ['Line tabs', 'Top-level page navigation — Overview, Analytics, Settings. Persistent across the view.'],
            ['Pill tabs', 'In-context filter or view toggle — All / Active / Archived. Scope is limited to a section.'],
          ].map(([label, desc]) => (
            <DocRow key={label as string} label={label as string}>
              <p className="text-sm text-(--color-text-secondary) leading-relaxed">{desc}</p>
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="Guidelines">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Label length', 'One or two words max. No icons unless the tab set is very dense and icons add meaningful context.'],
            ['Tab count', '2–6 tabs. More than 6 requires a different pattern (sidebar navigation, dropdown).'],
            ['Content visibility', 'Never hide critical content behind a tab that isn\'t selected by default.'],
            ['Don\'t nest', 'Avoid tabs within tabs. Two levels of tab navigation is disorienting.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-6 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-semibold text-(--color-text-primary) w-28 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
