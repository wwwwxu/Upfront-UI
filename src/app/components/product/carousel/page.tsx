'use client'
import { useState } from 'react'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

const slides = [
  { num: '01 / 04', title: 'Design Systems Done Right', desc: 'How consistent tokens and components enable teams to move faster without losing coherence.' },
  { num: '02 / 04', title: 'Motion & Microinteractions', desc: 'The micro-interactions worth copying aren\'t the ones that look satisfying — they\'re the ones that reduce doubt.' },
  { num: '03 / 04', title: 'Typography at Scale', desc: 'From hero headings to product labels — stress-testing a typeface across every surface.' },
  { num: '04 / 04', title: 'Data-Dense but Readable', desc: 'Dense and readable isn\'t a contradiction — it\'s a design challenge worth solving.' },
]

function CarouselDemo() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  return (
    <div className="relative rounded-(--radius-m) border border-(--color-border) overflow-hidden bg-(--color-bg-dark) text-white" style={{ minHeight: 200 }}>
      <div className="p-8">
        <p className="text-[12px] font-mono text-white/40 mb-4">{slide.num}</p>
        <h3 className="text-2xl font-bold font-display tracking-tight leading-tight mb-3">{slide.title}</h3>
        <p className="text-sm text-white/60 leading-relaxed max-w-[400px]">{slide.desc}</p>
      </div>
      {/* Dot indicator */}
      <div className="absolute bottom-4 left-8 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/30'}`}
          />
        ))}
      </div>
      {/* Prev/next */}
      <div className="absolute bottom-3 right-5 flex gap-2">
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7 2L3 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  )
}

export default function CarouselPage() {
  return (
    <DocLayout
      breadcrumb="Components"
      title="Carousel"
      description="Carousels display a sequence of content cards that users can navigate through. Desktop variants include prev/next controls; mobile variants use swipe navigation with a dot indicator only."
    >
      <DocSection title="Interactive demo">
        <CarouselDemo />
      </DocSection>

      <DocSection title="Variants" description="Two layout variants adapt the carousel to context. Desktop includes navigation controls; Mobile removes them for swipe interaction, showing only the progress indicator.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Desktop', 'Includes prev/next arrow controls. Full keyboard navigation. Dot indicator + counter label (e.g. "01 / 04").'],
            ['Mobile', 'Swipe gesture only. No visible arrow buttons. Dot indicator centered at bottom. Full bleed card layout.'],
          ].map(([label, desc]) => (
            <div key={label as string} className="flex gap-6 px-5 py-4 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-20 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Anatomy">
        <div className="space-y-0">
          {[
            ['Slide container', 'overflow-hidden · rounded-(--radius-m)', 'Clips slides to the card boundary.'],
            ['Counter label', 'text-[12px] font-mono · top-left', '"01 / 04" — contextualizes position within the sequence.'],
            ['Dot indicator', 'Active dot: wider pill. Inactive: small circle.', 'Touch target for direct navigation on both variants.'],
            ['Prev/Next buttons', 'Bottom-right, desktop only · 32×32px', 'Circular border buttons. Hidden on mobile.'],
          ].map(([layer, token, note]) => (
            <DocRow key={layer as string} label={layer as string} description={note as string}>
              <code className="text-[12px] font-mono text-(--color-text-secondary) bg-(--color-bg-subtle) px-2 py-1 rounded">{token}</code>
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="Guidelines">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Item count', '2–8 slides. More than 8 items is disorienting — use a list or grid instead.'],
            ['Autoplay', 'Never autoplay without user control. Carousels that advance automatically disorient users and fail WCAG 2.1 2.2.2.'],
            ['Content parity', 'Don\'t hide critical content in later slides. Each slide should stand alone.'],
            ['Accessibility', 'Each slide must be keyboard-focusable. Provide aria-labels for all controls. Respect prefers-reduced-motion.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-6 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-28 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
