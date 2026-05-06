import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

const tagStyles = [
  { label: 'Default',  bg: '#F4F4F5', text: '#3F3F46', border: '#E4E4E7', desc: 'Generic classification, categories' },
  { label: 'Info',     bg: '#EBF0FA', text: '#21468B', border: '#C5D3EF', desc: 'Informational, active filters, type labels' },
  { label: 'Success',  bg: '#EDFAF7', text: '#1E6C5C', border: '#C8F2E8', desc: 'Success, approved, live, active states' },
  { label: 'Danger',   bg: '#FFF0F0', text: '#A00808', border: '#FFD5D5', desc: 'Error, danger, deleted, destructive context' },
  { label: 'Warning',  bg: '#FFFDE0', text: '#6B5A00', border: '#FFFBC1', desc: 'Warning, pending, in-progress states' },
  { label: 'Outline',  bg: 'transparent', text: '#6B6B76', border: '#E4E4E7', desc: 'Subtle secondary labels, inactive or disabled context' },
]

function Tag({ label, bg, text, border, size = 'md' }: { label: string; bg: string; text: string; border: string; size?: 'sm' | 'md' }) {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'}`}
      style={{ backgroundColor: bg, color: text, borderColor: border }}
    >
      {label}
    </span>
  )
}

export default function TagPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Tag"
      description="Tags are compact, non-interactive labels used to classify, categorize, or annotate content. They communicate attributes at a glance — such as status, category, or type — without requiring user action."
    >
      <DocSection title="Styles" description="Six styles available. Use semantic colors purposefully — Blue for informational, Green for success, Red for danger, Yellow for warnings. Neutral and Outline for generic labels.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {tagStyles.map((s) => (
            <div key={s.label} className="flex items-center gap-5 px-5 py-3.5 bg-(--color-bg-surface)">
              <Tag label={s.label} bg={s.bg} text={s.text} border={s.border} />
              <p className="text-xs text-(--color-text-secondary) flex-1">{s.desc}</p>
              <div className="flex gap-1.5 items-center">
                <span className="text-xs text-(--color-text-secondary)">{s.bg}</span>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Sizes" description="MD is the default for most contexts. Use SM in dense layouts — tables, sidebars, tag lists — where multiple tags appear in a confined space.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8 flex items-center gap-8">
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs text-(--color-text-secondary)">SM</span>
            <div className="flex gap-2">
              {tagStyles.slice(0, 4).map((s) => (
                <Tag key={s.label} label={s.label} bg={s.bg} text={s.text} border={s.border} size="sm" />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs text-(--color-text-secondary)">MD (default)</span>
            <div className="flex gap-2">
              {tagStyles.slice(0, 4).map((s) => (
                <Tag key={s.label} label={s.label} bg={s.bg} text={s.text} border={s.border} size="md" />
              ))}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="States" description="Tags have three states. Default is the resting state. Hover applies when a tag is within an interactive element. Disabled indicates a value that cannot be changed.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            { state: 'Default', desc: 'Resting state — read-only or informational', opacity: 1 },
            { state: 'Hover', desc: 'Parent element is hovered — typically for dismissible tags', opacity: 0.8 },
            { state: 'Disabled', desc: 'Non-interactive; value cannot be changed or removed', opacity: 0.4 },
          ].map((row) => (
            <div key={row.state} className="flex items-center gap-5 px-5 py-4 bg-(--color-bg-surface)">
              <div className="w-32 shrink-0" style={{ opacity: row.opacity }}>
                <div className="flex gap-2">
                  <Tag label="Design" bg="#F4F4F5" text="#3F3F46" border="#E4E4E7" />
                  <Tag label="Info" bg="#EBF0FA" text="#21468B" border="#C5D3EF" />
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-(--color-text-primary)">{row.state}</p>
                <p className="text-xs text-(--color-text-secondary) mt-0.5">{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Use cases" description="Tags appear across content systems, status dashboards, and data tables to communicate attributes quickly without requiring user interaction.">
        <div className="space-y-0">
          {[
            ['Content categories', 'Blog posts, knowledge base articles — topic tags like "Design System", "Engineering", "Product".'],
            ['Status badges', 'Data tables — "Published", "Draft", "Archived", "Pending review".'],
            ['Filter labels', 'Active filter chips showing applied criteria — dismissible when interactive.'],
            ['Type labels', 'Classify records by type — "Bug", "Feature", "Improvement".'],
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
            ['Semantic color', 'Match the tag style to its semantic meaning. Never use Red for a non-error state.'],
            ['Label length', '1–3 words max. Tags are not sentences. "In progress" not "This task is currently in progress".'],
            ['Interactivity', 'Tags are non-interactive by default. If a tag triggers an action (dismiss, filter), it becomes an interactive element and must have appropriate hover/focus states.'],
            ['Avoid stacking', 'Do not stack more than 4–5 tags in a single cell or context — use truncation if needed.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-6 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-32 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
