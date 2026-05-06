import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

const variants = [
  { name: 'Default', desc: 'Loading, upload, general progress', bg: '#131316', track: '#E4E4E7', value: 60 },
  { name: 'Success', desc: 'Completed successfully, approved', bg: '#34A891', track: '#EDFAF7', value: 100 },
  { name: 'Warning', desc: 'Nearing limit, needs attention', bg: '#FF5A00', track: '#FFF5F0', value: 80 },
  { name: 'Error', desc: 'Failed, limit exceeded', bg: 'var(--color-error)', track: '#FFF0F0', value: 45 },
]

function ProgressBar({ value, bg, track }: { value: number; bg: string; track: string }) {
  return (
    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: track }}>
      <div className="h-full rounded-full transition-all" style={{ width: `${value}%`, backgroundColor: bg }} />
    </div>
  )
}

export default function ProgressPage() {
  return (
    <DocLayout
      breadcrumb="Essentials"
      title="Progress"
      description="Progress bars communicate the completion status of a task or process. They give users a clear sense of where they are and how much remains — reducing uncertainty during loading, uploading, or multi-step flows."
    >
      <DocSection title="Variants" description="Four semantic color variants map to different task states. Choose the style that matches the outcome of the process being tracked.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {variants.map((v) => (
            <div key={v.name} className="px-5 py-5 bg-(--color-bg-surface)">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs font-medium text-(--color-text-primary)">{v.name}</span>
                  <span className="text-xs text-(--color-text-secondary) ml-3">{v.desc}</span>
                </div>
                <span className="text-xs text-(--color-text-secondary)">{v.value}%</span>
              </div>
              <ProgressBar value={v.value} bg={v.bg} track={v.track} />
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Indeterminate">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <p className="text-xs text-(--color-text-secondary) mb-3">Use when duration is unknown — the bar animates continuously to signal activity.</p>
          <div className="w-full h-2 rounded-full overflow-hidden bg-(--color-bg-subtle)">
            <div
              className="h-full w-1/3 rounded-full bg-(--color-text-primary)"
              style={{ animation: 'indeterminate 1.4s ease-in-out infinite' }}
            />
          </div>
          <style>{`@keyframes indeterminate { 0% { transform: translateX(-100%) scaleX(1); } 50% { transform: translateX(150%) scaleX(1.5); } 100% { transform: translateX(400%) scaleX(1); } }`}</style>
        </div>
      </DocSection>

      <DocSection title="Anatomy">
        <div className="space-y-0">
          {[
            ['Track', 'Full-width container · h-2 · rounded-full · bg-[track color]', 'Background rail showing the remaining distance.'],
            ['Fill', 'h-full · rounded-full · transition-all · width controlled by value%', 'Colored fill representing completion.'],
            ['Label (optional)', 'text-xs · positioned above or beside the bar', 'Contextual label or percentage — not always needed.'],
          ].map(([layer, token, note]) => (
            <DocRow key={layer as string} label={layer as string} description={note as string}>
              <code className="text-[12px] font-mono text-(--color-text-secondary) bg-(--color-bg-subtle) px-2 py-1 rounded">{token}</code>
            </DocRow>
          ))}
        </div>
      </DocSection>

      <DocSection title="When to use">
        <div className="space-y-0">
          {[
            ['Determinate', 'Use when total duration or steps are known. Show percentage or step count alongside the bar.'],
            ['Indeterminate', 'Use for operations of unknown duration — server requests, processing, waiting for external response.'],
            ['Inline progress', 'In table rows or card footers for per-item progress (upload batch, sync status).'],
            ['Step indicator', 'Multi-step forms — combine progress bar with step labels for orientation.'],
          ].map(([label, desc]) => (
            <DocRow key={label as string} label={label as string}>
              <p className="text-sm text-(--color-text-secondary) leading-relaxed">{desc}</p>
            </DocRow>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
