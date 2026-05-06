import DocLayout, { DocSection } from '@/components/DocLayout'

const gridBreakpoints = [
  { bp: 'Desktop 1920px', cols: 12, gap: '12px', margin: '30px' },
  { bp: 'Desktop 1440px', cols: 12, gap: '12px', margin: '32px' },
  { bp: 'Tablet 834px',   cols:  8, gap: '12px', margin: '32px' },
  { bp: 'Mobile 390px',   cols:  8, gap:  '4px', margin: '12px' },
]

export default function GridPage() {
  return (
    <DocLayout
      breadcrumb="Foundations"
      title="Grid"
      description="Upfront uses a 12-column desktop grid and 8-column mobile grid. Column gaps are narrow (12px) with side margins from Figma — do not substitute other values."
    >
      <DocSection title="Product grid" description="These are the Figma-defined grid specs for all product surfaces. Note: column gap is 12px (not 24–30px), desktop side margin is 32px (not 20px). Page max-width is 1440px.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden">
          <div className="grid grid-cols-4 gap-0 px-5 py-2.5 bg-(--color-bg-subtle) border-b border-(--color-border)">
            {['Breakpoint', 'Columns', 'Column gap', 'Side margin'].map((h) => (
              <span key={h} className="text-xs font-medium text-(--color-text-hint)">{h}</span>
            ))}
          </div>
          <div className="divide-y divide-(--color-border)">
            {gridBreakpoints.map((r) => (
              <div key={r.bp} className="grid grid-cols-4 gap-0 px-5 py-3 bg-(--color-bg-surface)">
                <span className="text-xs font-medium text-(--color-text-primary)">{r.bp}</span>
                <span className="text-xs font-mono text-(--color-text-hint)">{r.cols}</span>
                <span className="text-xs font-mono text-(--color-text-hint)">{r.gap}</span>
                <span className="text-xs font-mono text-(--color-text-hint)">{r.margin}</span>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Grid tokens">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            { token: '--grid-page-max-width',    value: '1440px', use: 'Maximum page container width' },
            { token: '--grid-container-desktop', value: '20px',   use: 'Desktop horizontal padding' },
            { token: '--grid-container-mobile',  value: '15px',   use: 'Mobile horizontal padding' },
            { token: '--grid-gap-desktop',        value: '30px',   use: 'Desktop column gap' },
            { token: '--grid-gap-mobile',         value: '12px',   use: 'Mobile column gap' },
          ].map((t) => (
            <div key={t.token} className="flex items-center gap-5 px-5 py-2.5 bg-(--color-bg-surface)">
              <code className="text-xs font-mono text-(--color-text-primary) w-56 shrink-0">{t.token}</code>
              <span className="text-xs font-mono text-(--color-text-hint) w-16 shrink-0">{t.value}</span>
              <span className="text-xs text-(--color-text-secondary)">{t.use}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Grid visualization — Desktop 1440px">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden">
          <div className="bg-(--color-bg-subtle) px-5 py-3 border-b border-(--color-border)">
            <p className="text-xs font-mono text-(--color-text-hint)">12 columns · 12px gap · 32px margin · max-width 1440px</p>
          </div>
          <div className="p-4 bg-(--color-bg-surface)">
            <div className="flex gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 h-12 bg-(--color-accent-bg) rounded-sm flex items-center justify-center">
                  <span className="text-xs font-mono text-(--color-accent)">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Docs site layout" description="The documentation site itself uses this fixed layout — this is not the product grid.">
        <div className="space-y-4 text-sm text-(--color-text-secondary)">
          <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden">
            <div className="bg-(--color-bg-subtle) px-5 py-3 border-b border-(--color-border)">
              <p className="text-xs font-mono text-(--color-text-hint)">Docs layout structure</p>
            </div>
            <div className="flex h-32 divide-x divide-(--color-border)">
              <div className="w-16 bg-(--color-accent-bg) flex items-center justify-center shrink-0">
                <span className="text-xs font-medium text-(--color-accent) -rotate-90 whitespace-nowrap">Sidebar 256px</span>
              </div>
              <div className="flex-1 flex items-center justify-center bg-(--color-bg-surface)">
                <span className="text-xs text-(--color-text-hint)">Content area · max-w-[860px] · px-10</span>
              </div>
            </div>
          </div>
        </div>
      </DocSection>
    </DocLayout>
  )
}
