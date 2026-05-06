import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

function EmptyStateDemo({
  variant = 'default',
}: {
  variant?: 'default' | 'minimal' | 'title-only'
}) {
  const icon = (
    <div className="w-12 h-12 rounded-(--radius-m) bg-(--color-bg-subtle) flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-(--color-text-hint)">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )

  return (
    <div className="p-10 rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-surface) flex flex-col items-center text-center gap-4 max-w-xs mx-auto">
      {icon}
      <div className="space-y-1">
        <p className="text-sm font-medium text-(--color-text-primary) font-display">Nothing here yet</p>
        {variant !== 'title-only' && (
          <p className="text-xs text-(--color-text-secondary) leading-relaxed">
            {variant === 'default' ? 'Create your first item to get started.' : 'Items will appear here once added.'}
          </p>
        )}
      </div>
      {variant === 'default' && (
        <button className="px-4 py-2 text-xs font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) transition-opacity hover:opacity-80">
          Get started
        </button>
      )}
    </div>
  )
}

export default function EmptyStatePage() {
  return (
    <DocLayout
      breadcrumb="Components"
      title="Empty State"
      badge="NEW"
      description="Empty states communicate that a section has no content yet. They reduce confusion and guide users toward the next action."
    >
      <DocSection title="When to use">
        <div className="space-y-0">
          {[
            ['No results', 'After a search or filter returns nothing. Explain why and offer a way to reset.'],
            ['First-time experience', 'A user has not created any items yet. Use a CTA to guide them forward.'],
            ['Error state', 'Content failed to load. Communicate clearly and offer a retry action.'],
            ['Permissions', 'The user cannot access this section. Explain why without technical jargon.'],
          ].map(([label, desc]) => (
            <DocRow key={label as string} label={label as string}>
              <p className="text-sm text-(--color-text-secondary)">{desc}</p>
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="Variants">
        <div className="grid grid-cols-3 gap-4">
          {(['default', 'minimal', 'title-only'] as const).map((v) => (
            <div key={v}>
              <EmptyStateDemo variant={v} />
              <p className="mt-3 text-center text-xs font-medium text-(--color-text-secondary) capitalize">
                {v.replace('-', ' ')}
              </p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Anatomy">
        <div className="space-y-0">
          {[
            ['Icon', '48×48px · rounded-(--radius-m) · bg-(--color-bg-subtle)', 'Illustrates the context — not decorative'],
            ['Title', 'text-sm font-semibold · font-display', 'Brief — 3–5 words max'],
            ['Description', 'text-xs · text-(--color-text-hint) · max 2 lines', 'Explain what is missing and what to do'],
            ['CTA', 'Primary button · optional', 'Only in Default variant. Single action.'],
          ].map(([layer, token, note]) => (
            <DocRow key={layer as string} label={layer as string} description={note as string}>
              <code className="text-[12px] font-mono text-(--color-text-secondary) bg-(--color-bg-subtle) px-2 py-1 rounded">
                {token}
              </code>
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="Content rules">
        <div className="space-y-0">
          {[
            ['Title', 'Use a noun phrase, not a sentence. "No projects" not "You have no projects yet."'],
            ['Description', 'State what the user can do, not what is missing. "Create a project to get started."'],
            ['CTA label', 'Match the action — "Add item", "Create project", not just "Get started".'],
            ['Icon', 'Use context-specific icons. Avoid generic images that add no meaning.'],
          ].map(([label, rule]) => (
            <DocRow key={label as string} label={label as string}>
              <p className="text-sm text-(--color-text-secondary)">{rule}</p>
            </DocRow>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
