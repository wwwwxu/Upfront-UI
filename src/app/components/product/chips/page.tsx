'use client'
import { useState } from 'react'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

const useCaseGroups = [
  { label: 'Inspiration', chips: ['Make an App', 'Create an image', 'Plan a trip'] },
  { label: 'Plan & Organize', chips: ['Plan a trip', 'Schedule my week', 'Set a reminder', 'Make a to-do list'] },
  { label: 'Search & Analyze', chips: ['Search the web', 'Summarize this', 'Analyze data', 'Translate text'] },
  { label: 'Communicate & Social', chips: ['Reply to message', 'Post to social', 'Send a report'] },
  { label: 'Life', chips: ['Find a restaurant', 'Order groceries', 'Book a flight', 'Check the weather'] },
]

function ChipDemo() {
  const [selected, setSelected] = useState<string | null>('Plan a trip')
  const chips = ['Make an App', 'Create an image', 'Plan a trip', 'Schedule my week', 'Search the web']
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <button
          key={c}
          onClick={() => setSelected(selected === c ? null : c)}
          className={[
            'px-3.5 py-1.5 text-xs font-medium rounded-full border transition-colors',
            selected === c
              ? 'bg-(--color-text-primary) text-(--color-btn-primary-text) border-(--color-text-primary)'
              : 'bg-(--color-bg-surface) text-(--color-text-secondary) border-(--color-border) hover:border-(--color-border) hover:text-(--color-text-primary)',
          ].join(' ')}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

export default function ChipsPage() {
  return (
    <DocLayout
      breadcrumb="Components"
      title="Chips"
      description="Compact, tappable suggestion pills that surface quick-start actions. Each chip pairs a short label with an optional icon, helping users discover common tasks without typing. Chips appear as a horizontal scrollable row at the start of a conversation or context switch."
    >
      <DocSection title="Interactive demo">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <ChipDemo />
        </div>
      </DocSection>

      <DocSection title="Use case groups" description="Chips are organized into thematic groups that match common user intent categories.">
        <div className="space-y-4">
          {useCaseGroups.map((group) => (
            <div key={group.label} className="flex gap-4 py-4 border-b border-(--color-border) last:border-0">
              <span className="text-xs font-semibold text-(--color-text-hint) w-40 shrink-0 pt-1">{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-secondary)"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="States">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8 flex flex-wrap gap-4 items-start">
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[10px] text-(--color-text-hint) uppercase tracking-widest">Default</span>
            <span className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-secondary)">Plan a trip</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[10px] text-(--color-text-hint) uppercase tracking-widest">Hover</span>
            <span className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-(--color-border) bg-(--color-bg-subtle) text-(--color-text-primary)">Plan a trip</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[10px] text-(--color-text-hint) uppercase tracking-widest">Selected</span>
            <span className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-(--color-text-primary) text-white border border-(--color-text-primary)">Plan a trip</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[10px] text-(--color-text-hint) uppercase tracking-widest">Disabled</span>
            <span className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-(--color-border) bg-(--color-bg-subtle) text-(--color-text-hint) cursor-not-allowed">Plan a trip</span>
          </div>
        </div>
      </DocSection>

      <DocSection title="Anatomy">
        <div className="space-y-0">
          {[
            ['Container', 'px-3.5 py-1.5 · rounded-full · border', 'Pill shape always. Height: 32px default.'],
            ['Label', 'text-xs font-medium', '2–4 words max. No punctuation.'],
            ['Leading icon', 'Optional · 14×14px · mr-1.5', 'Reinforces category — not required.'],
            ['Horizontal row', 'flex gap-2 · overflow-x-auto on mobile', 'Chips scroll horizontally on narrow viewports.'],
          ].map(([layer, token, note]) => (
            <DocRow key={layer as string} label={layer as string} description={note as string}>
              <code className="text-xs font-mono text-(--color-text-secondary) bg-(--color-bg-subtle) px-2 py-1 rounded">{token}</code>
            </DocRow>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
