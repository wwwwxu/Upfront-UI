import DocLayout, { DocSection } from '@/components/DocLayout'

function Swatch({ value, border = false }: { value: string; border?: boolean }) {
  return (
    <div
      className="w-9 h-9 rounded-(--radius-s) shrink-0"
      style={{ backgroundColor: value, border: border ? '1px solid #E4E4E7' : undefined }}
    />
  )
}

function SwatchRow({ label, hex, desc }: { label: string; hex: string; desc: string }) {
  return (
    <div className="flex items-center gap-4 px-5 py-3 bg-(--color-bg-surface)">
      <Swatch value={hex} border={hex === '#FFFFFF' || hex === '#FAFAFA' || hex === '#F3F3F3' || hex === '#F6F6F6'} />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-(--color-text-primary)">{label}</p>
        <p className="text-xs text-(--color-text-hint) mt-0.5 truncate">{desc}</p>
      </div>
      <span className="text-xs font-mono text-(--color-text-hint)">{hex}</span>
    </div>
  )
}

function ScaleRow({ step, hex }: { step: string; hex: string }) {
  const isLight = ['#FFFFFF','#FAFAFA','#F3F3F3','#EEEEEE','#EBF0FA','#C5D3EF','#FFFEED','#FFFDE0','#FFFCC9','#FFFBC1'].includes(hex)
  return (
    <div className="flex items-center gap-3 px-5 py-2 bg-(--color-bg-surface)">
      <div className="w-7 h-7 rounded shrink-0" style={{ backgroundColor: hex, border: isLight ? '1px solid #E4E4E7' : undefined }} />
      <span className="text-xs font-mono text-(--color-text-hint) w-10">{step}</span>
      <span className="text-xs font-mono text-(--color-text-primary)">{hex}</span>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <DocLayout
      breadcrumb="Foundations"
      title="Colors"
      description="Three product directions — one unified token system. Each brand color anchors its product line, with shared neutrals and utilities across all surfaces."
    >
      <DocSection title="Brand directions">
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: 'E-commerce', bg: '#121212', fg: '#FFFFFF', desc: 'Foundation of the UPFRONT store. Drives all text, backgrounds, dividers and UI chrome.' },
            { name: 'Highlight', bg: '#FFF99F', fg: '#121212', desc: 'Physical store accent. Bring the natural and origin lifestyle.' },
            { name: 'Internal System', bg: '#21468B', fg: '#FFFFFF', desc: 'Primary interface hue for all internal tooling, dashboards and operational interfaces.' },
          ].map((b) => (
            <div key={b.name} className="rounded-(--radius-m) overflow-hidden border border-(--color-border)">
              <div className="h-20" style={{ backgroundColor: b.bg }} />
              <div className="p-4 bg-(--color-bg-surface)">
                <p className="text-xs font-semibold text-(--color-text-primary) mb-1">{b.name}</p>
                <p className="text-xs text-(--color-text-secondary) leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Alaska Blue scale" description="Primary interface color for all internal tooling & dashboards.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['50','#EBF0FA'], ['100','#C5D3EF'], ['200','#9DB5E4'], ['300','#7097D9'],
            ['400','#4A7ACE'], ['500','#2C5DB0'], ['600','#21468B'], ['700','#1A3870'],
            ['800','#132A55'], ['900','#0C1C3A'], ['950','#060E1D'],
          ].map(([step, hex]) => <ScaleRow key={step} step={step} hex={hex} />)}
        </div>
      </DocSection>

      <DocSection title="Wood (Hopeful Yellow) scale" description="Campaign and Highlight direction accent. A spark, not a field — yellow should appear on at most one element per screen outside the Highlight theme.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['50','#FFFEED'], ['100','#FFFDE0'], ['200','#FFFCC9'], ['300','#FFFBC1'],
            ['400','#FFFAAF'], ['500','#FFF99F'], ['600','#F6F0A0'], ['700','#EBE594'],
            ['800','#DDD787'], ['900','#CBC576'], ['950','#BBB56A'],
          ].map(([step, hex]) => <ScaleRow key={step} step={step} hex={hex} />)}
        </div>
      </DocSection>

      <DocSection title="Neutral Gray scale" description="Foundation of the E-commerce site — all text, backgrounds, dividers and UI chrome.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['White','#FFFFFF'], ['50','#FAFAFA'], ['100','#F3F3F3'], ['200','#EEEEEE'],
            ['300','#E4E4E4'], ['400','#C0C0C0'], ['500','#9A9A9A'], ['600','#6B7280'],
            ['700','#4B5563'], ['800','#30363C'], ['900','#242833'], ['950','#121212'],
          ].map(([step, hex]) => <ScaleRow key={step} step={step} hex={hex} />)}
        </div>
      </DocSection>

      <DocSection title="Shared utilities" description="Status colors used across all three product lines. Reserved exclusively for system feedback — error, warning, and success. Never use as brand or layout colors.">
        <div className="grid grid-cols-1 gap-4">
          {[
            { label: 'Teal — Success & confirmations', tokens: [['50','#EDFAF7'],['200','#99E7D2'],['400','#45C7AD'],['600','#288A75'],['900','#0D302A']] },
            { label: 'Orange — Warning', tokens: [['50','#FFF5F0'],['200','#FFD0B0'],['400','#FF8038'],['600','#E05000'],['900','#732800']] },
            { label: 'Red — Error & danger', tokens: [['50','#FFF0F0'],['200','#FFB0B0'],['400','#E05050'],['600','#A00808'],['900','#500001']] },
          ].map((group) => (
            <div key={group.label} className="rounded-(--radius-m) border border-(--color-border) overflow-hidden">
              <div className="px-5 py-2.5 bg-(--color-bg-subtle) border-b border-(--color-border)">
                <p className="text-xs font-medium text-(--color-text-secondary)">{group.label}</p>
              </div>
              <div className="flex divide-x divide-(--color-border)">
                {group.tokens.map(([step, hex]) => (
                  <div key={step} className="flex-1 flex flex-col items-center gap-2 px-3 py-4 bg-(--color-bg-surface)">
                    <div className="w-8 h-8 rounded" style={{ backgroundColor: hex }} />
                    <span className="text-xs font-mono text-(--color-text-hint)">{step}</span>
                    <span className="text-xs font-mono text-(--color-text-primary)">{hex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Semantic tokens — Text" description="What components read. Reference these in all new code — never use primitive values directly.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <SwatchRow label="--text-primary" hex="#121212" desc="All body copy, headings, labels" />
          <SwatchRow label="--text-secondary" hex="#30363C" desc="Supporting text one step below primary" />
          <SwatchRow label="--text-muted" hex="#6B6D76" desc="Descriptions, timestamps, secondary metadata" />
          <SwatchRow label="--text-hint" hex="#8D8D8D" desc="Placeholder text, inactive labels" />
          <SwatchRow label="--text-disabled" hex="#B3B3B3" desc="Disabled controls — never for active UI" />
          <SwatchRow label="--text-on-button" hex="#FFFFFF" desc="Text sitting on a filled primary button" />
        </div>
      </DocSection>

      <DocSection title="Semantic tokens — Background" description="Background layers build depth without shadows. Layer from page → surface → subtle.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <SwatchRow label="--background-page" hex="#FAFAFA" desc="Page / app shell — the outermost layer" />
          <SwatchRow label="--background-surface" hex="#FFFFFF" desc="Cards, panels, elevated surfaces" />
          <SwatchRow label="--background-subtle" hex="#F3F3F3" desc="Recessed zones, table rows, input fill" />
          <SwatchRow label="--background-cream" hex="#F9F2ED" desc="Warm accent surface (campaigns, callouts)" />
          <SwatchRow label="--background-dark" hex="#242833" desc="Dark hero sections, CTA bars, footer" />
          <SwatchRow label="--background-cta-bar" hex="#252525" desc="Sticky bottom bar, persistent CTA strip" />
        </div>
      </DocSection>

      <DocSection title="Semantic tokens — Border" description="Border shifts express hover, focus, and selection states. No shadows — depth comes from these transitions.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <SwatchRow label="--border-subtle" hex="#F6F6F6" desc="Hairline separation, almost invisible" />
          <SwatchRow label="--border-default" hex="#EEEEEE" desc="Cards, table dividers, most surfaces" />
          <SwatchRow label="--border-medium" hex="#D0D0D0" desc="Input idle state, medium emphasis" />
          <SwatchRow label="--border-strong" hex="#121212" desc="Input focus, selected state, heavy outlines" />
        </div>
      </DocSection>

      <DocSection title="Semantic tokens — Interactive" description="Theme-swappable interactive tokens. Apply a theme-* class to <body> or a section to switch between brand directions.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <SwatchRow label="--interactive-button-primary" hex="#000000" desc="Primary CTA fill — automatically changes with theme" />
          <SwatchRow label="--interactive-button-secondary" hex="#30363C" desc="Secondary / ghost button" />
          <SwatchRow label="--interactive-accent" hex="#000000" desc="Accent ink, links, active indicators" />
          <SwatchRow label="--brand-primary (wood-500)" hex="#FFF99F" desc="Yellow accent — hover states, selection highlight" />
          <SwatchRow label="--brand-blue (blue-500)" hex="#334FB4" desc="Internal System brand color — used sparingly" />
          <SwatchRow label="--color-error" hex="#D90000" desc="Errors, validation failures, destructive actions" />
          <SwatchRow label="--color-success" hex="#1CC286" desc="Success, completion, confirmed states" />
        </div>
      </DocSection>
    </DocLayout>
  )
}
