import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

export default function InputPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Input"
      description="Input fields let users enter and edit text. They appear in forms, search bars, and settings — always paired with a label and optional helper or error message. Variants cover six states and three optional slot decorators."
    >
      <DocSection title="States">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <div className="grid grid-cols-2 gap-5 max-w-lg">
            <div>
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Default</label>
              <input
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Hover</label>
              <input
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Filled</label>
              <input
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) outline-none"
                defaultValue="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Focus</label>
              <input
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) outline-none ring-2 ring-(--color-border) ring-opacity-20"
                defaultValue="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Error</label>
              <input
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) bg-(--color-bg-surface) text-(--color-text-primary) outline-none"
                style={{ border: '1px solid #C02020' }}
                defaultValue="invalid-email"
              />
              <p className="mt-1.5 text-xs" style={{ color: '#C02020' }}>Enter a valid email address.</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-(--color-text-hint) mb-1.5">Disabled</label>
              <input
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-subtle) text-(--color-text-hint) outline-none cursor-not-allowed"
                disabled
                placeholder="Disabled field"
              />
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Slot decorators">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8 flex flex-col gap-4 max-w-sm">
          <div>
            <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Left icon</label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-text-hint)" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <input className="w-full pl-9 pr-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none" placeholder="Search…" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Suffix</label>
            <div className="relative">
              <input className="w-full pl-3 pr-14 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none" placeholder="0.00" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-(--color-text-hint) font-medium">CAD</span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Right icon</label>
            <div className="relative">
              <input className="w-full pl-3 pr-9 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none" defaultValue="Password" type="password" />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-hint) cursor-pointer" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Anatomy">
        <div className="space-y-0">
          {[
            ['Label', 'text-xs font-medium · above the input', 'Required — always provide a label. Never rely on placeholder alone.'],
            ['Container', 'px-3 py-2 · border · rounded-(--radius-s)', 'Default height: 40px. Compact: 32px for dense layouts.'],
            ['Placeholder', 'text-(--color-text-hint)', 'Example value or format hint — not a label substitute.'],
            ['Left slot', 'Optional icon, 16×16px · absolute left-3', 'Search icon, category icon. Adds padding-left to input.'],
            ['Right slot / Suffix', 'Optional icon or text · absolute right-3', 'Currency, unit label, clear button, show/hide toggle.'],
            ['Helper text', 'text-xs · mt-1.5', 'Error message, hint text, or character count below the field.'],
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
