'use client'
import { useState } from 'react'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

function AccordionItem({ label, children, defaultOpen = false }: { label: string; children: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-(--color-border) last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-(--color-text-primary) hover:bg-(--color-bg-subtle) transition-colors text-left"
      >
        {label}
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          className={`text-(--color-text-hint) transition-transform shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-(--color-text-secondary) leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function AccordionPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Accordion"
      description="A vertically stacked list of items that expand and collapse to reveal or hide associated content. Used to organize dense information into digestible, on-demand sections."
    >
      <DocSection title="Interactive demo">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden bg-(--color-bg-surface)">
          <AccordionItem label="How do I get started?" defaultOpen>
            This product is designed to help you organize and manage your workflow efficiently. It integrates with your existing tools and requires no setup beyond signing in.
          </AccordionItem>
          <AccordionItem label="What payment methods are accepted?">
            We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual plans. All payments are processed securely via Stripe.
          </AccordionItem>
          <AccordionItem label="Can I cancel my subscription?">
            Yes. You can cancel at any time from your account settings. Your plan remains active until the end of the current billing period — no partial refunds.
          </AccordionItem>
          <AccordionItem label="Is there a free trial?">
            All new accounts include a 14-day free trial with full access. No credit card required.
          </AccordionItem>
        </div>
      </DocSection>

      <DocSection title="When to use" description="Accordions reduce cognitive load by hiding content until needed. They work well when users scan for a specific section, not when they need all content at once.">
        <div className="space-y-0">
          {[
            ['FAQ', 'Frequently asked questions — users scan for their specific question without reading everything.'],
            ['Settings panel', 'Group related settings by category. Collapsed by default to reduce visual noise.'],
            ['Product details', 'Specifications, shipping info, return policy — secondary content below the primary CTA.'],
            ['Long-form content', 'Documentation or help articles where sections are independently scannable.'],
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
            ['Minimum items', 'Use at least 3 items. Fewer than 3 sections don\'t benefit from the collapsed pattern — just show the content.'],
            ['Default state', 'Start all items collapsed unless there\'s a strong reason to open one. Opening the first item can help orient users.'],
            ['Side-by-side comparison', 'Avoid accordions when users need to compare content across sections simultaneously.'],
            ['Label clarity', 'Accordion triggers should be self-explanatory. Users decide whether to open without seeing the content.'],
            ['Single vs multi-expand', 'Default to single-expand (opening one closes others). Multi-expand is acceptable for settings panels.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-6 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-36 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
