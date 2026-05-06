'use client'
import { useState } from 'react'
import DocLayout, { DocSection } from '@/components/DocLayout'

function PaginationDemo() {
  const [page, setPage] = useState(4)
  const total = 12
  const pages = [1, 2, 3, '...', 11, 12]

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setPage(p => Math.max(1, p - 1))}
        disabled={page === 1}
        className="w-8 h-8 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary) disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7 2L3 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {[1, 2, 3, 4, 5].map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-8 h-8 flex items-center justify-center rounded-(--radius-s) text-xs font-medium transition-colors ${
            page === p
              ? 'bg-(--color-text-primary) text-white'
              : 'border border-(--color-border) text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary)'
          }`}
        >
          {p}
        </button>
      ))}
      <span className="w-8 h-8 flex items-center justify-center text-xs text-(--color-text-hint)">…</span>
      {[11, 12].map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-8 h-8 flex items-center justify-center rounded-(--radius-s) text-xs font-medium transition-colors border border-(--color-border) text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary)`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => setPage(p => Math.min(total, p + 1))}
        disabled={page === total}
        className="w-8 h-8 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary) disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  )
}

export default function PaginationPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Pagination"
      description="Pagination lets users navigate through multi-page content. It shows current position within a sequence and provides controls to move between pages — with smart truncation for large page counts."
    >
      <DocSection title="Interactive demo">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8 flex items-center justify-center">
          <PaginationDemo />
        </div>
      </DocSection>

      <DocSection title="Item states" description="Each item in the pagination strip has four interactive states. Disabled controls appear when the user is at the first or last page.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <div className="flex flex-wrap gap-8 items-start">
            {[
              { label: 'Default', el: <span className="w-8 h-8 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) text-xs text-(--color-text-secondary)">4</span> },
              { label: 'Hover', el: <span className="w-8 h-8 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-subtle) text-xs text-(--color-text-primary)">4</span> },
              { label: 'Active', el: <span className="w-8 h-8 flex items-center justify-center rounded-(--radius-s) bg-(--color-text-primary) text-xs font-medium text-white">4</span> },
              { label: 'Disabled', el: <span className="w-8 h-8 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) text-xs text-(--color-text-hint) opacity-30">4</span> },
              { label: 'Ellipsis', el: <span className="w-8 h-8 flex items-center justify-center text-xs text-(--color-text-hint)">…</span> },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                {s.el}
                <span className="text-[10px] text-(--color-text-hint)">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Truncation rules">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['≤ 7 pages', 'Show all pages. No ellipsis needed.'],
            ['8–20 pages', 'Show first 3, ellipsis, last 3. Current page ± 1 always visible.'],
            ['> 20 pages', 'Show first 1, ellipsis, current ± 1, ellipsis, last 1.'],
            ['Prev/Next', 'Always visible. Disabled (not hidden) at boundaries.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-5 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-mono text-(--color-text-primary) w-24 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
