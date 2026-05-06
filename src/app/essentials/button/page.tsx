import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

export default function ButtonPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Button"
      description="Buttons trigger actions. They are the primary way users interact with the interface — submitting a form, navigating to a page, confirming a decision, or initiating a process. Each button has a defined variant that communicates its level of importance."
    >
      <DocSection title="Variants">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <div className="flex flex-wrap gap-3 items-center mb-8">
            <button className="px-4 py-2 text-sm font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) hover:opacity-80 transition-opacity">
              Primary
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:bg-(--color-bg-subtle) transition-colors">
              Secondary
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-(--radius-s) text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary) transition-colors">
              Ghost
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-(--radius-s) bg-red-600 text-white hover:bg-red-700 transition-colors">
              Danger
            </button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="px-4 py-2 text-sm font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              With icon
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:bg-(--color-bg-subtle) transition-colors" title="Icon button">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <div className="flex rounded-(--radius-s) overflow-hidden border border-(--color-border)">
              {['Left', 'Center', 'Right'].map((label, i) => (
                <button key={label} className={`px-4 py-2 text-sm font-medium text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary) transition-colors ${i > 0 ? 'border-l border-(--color-border)' : ''}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="When to use">
        <div className="space-y-0">
          {[
            ['Primary', 'One per section. The highest-weight action — confirm, submit, proceed. Never stack two primary buttons.'],
            ['Secondary', 'Supporting actions — cancel, go back, secondary CTA. Pairs with a primary button.'],
            ['Ghost', 'Low-emphasis actions in toolbars or dense UI. No background, no border.'],
            ['Danger', 'Destructive or irreversible actions — delete, remove, revoke. Requires confirmation.'],
            ['Icon button', 'Compact tool actions in toolbars. Always include a tooltip/aria-label.'],
            ['Button group', 'Mutually exclusive options where one selection is always active (e.g. view toggle, alignment).'],
          ].map(([variant, desc]) => (
            <DocRow key={variant as string} label={variant as string}>
              <p className="text-sm text-(--color-text-secondary) leading-relaxed">{desc}</p>
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="Guidelines">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Label text', 'Sentence case. Action-oriented verbs — "Save changes", not "OK". Be specific — "Delete project", not "Delete".'],
            ['Primary count', 'Use only one primary button per view to avoid competing calls to action.'],
            ['Leading icon', 'Optional. 16×16px. Visually reinforces the action — not purely decorative.'],
            ['Compact vs default', 'Default height: 36px. Use compact (28px) in dense UI like table rows. Never below 28px.'],
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
