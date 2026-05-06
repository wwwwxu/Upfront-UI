import DocLayout, { DocSection } from '@/components/DocLayout'

const spacingTokens = [
  { figma: 'spacing-none', css: '--spacing-0',  px: 0 },
  { figma: 'spacing-xs',   css: '--spacing-1',  px: 4 },
  { figma: 'spacing-sm',   css: '--spacing-2',  px: 8 },
  { figma: 'spacing-md',   css: '--spacing-3',  px: 12 },
  { figma: 'spacing-base', css: '--spacing-4',  px: 16 },
  { figma: 'spacing-lg',   css: '--spacing-5',  px: 20 },
  { figma: 'spacing-xl',   css: '--spacing-6',  px: 24 },
  { figma: '—',            css: '--spacing-7',  px: 30 },
  { figma: 'spacing-3xl',  css: '--spacing-8',  px: 40 },
  { figma: 'spacing-4xl',  css: '--spacing-9',  px: 60 },
  { figma: 'spacing-5xl',  css: '--spacing-10', px: 80 },
  { figma: 'spacing-6xl',  css: '--spacing-11', px: 120 },
  { figma: '—',            css: '--spacing-32', px: 32 },
  { figma: '—',            css: '--spacing-48', px: 48 },
  { figma: '—',            css: '--spacing-56', px: 56 },
  { figma: '—',            css: '--spacing-64', px: 64 },
]

const widthTokens = [
  { name: 'width-sm',  px: 480,  use: 'Narrow column, modals' },
  { name: 'width-md',  px: 672,  use: 'Reading column, long-form body text' },
  { name: 'width-lg',  px: 768,  use: 'Wide reading column' },
  { name: 'width-xl',  px: 960,  use: 'Content section max-width' },
  { name: 'width-2xl', px: 1280, use: 'Full content area' },
  { name: 'width-max', px: 1400, use: 'Page container max-width' },
]

const radii = [
  { name: '--radius-none',   value: '0px',   label: 'None',   use: 'Full-bleed sections, page-level frames' },
  { name: '--radius-sm',     value: '2px',   label: 'SM',     use: 'Small tags, tight chips, dense inline badges' },
  { name: '--radius-s',      value: '4px',   label: 'S',      use: 'Buttons, inputs, standard tags and chips' },
  { name: '--radius-m',      value: '8px',   label: 'M',      use: 'Standard card radius' },
  { name: '--radius-l',      value: '12px',  label: 'L',      use: 'Large cards, modals, section containers' },
  { name: '--radius-pill',   value: '64px',  label: 'Pill',   use: 'Pills, icon buttons — never on cards or CTAs' },
  { name: '--radius-circle', value: '999px', label: 'Circle', use: 'Avatars and circular controls only' },
]

const MAX_SPACING = 120

export default function SpacingPage() {
  return (
    <DocLayout
      breadcrumb="Foundations"
      title="Spacing & Radius"
      description="Working from a defined spacing system allows you to move faster and more consistently. Consistent spacing eliminates guesswork in design and development."
    >
      <DocSection title="Spacing scale" description="Pre-defined spacing values for gaps, padding, and margin across all components. Figma token names (spacing-xs etc.) are the semantic names; CSS tokens (--spacing-N) are what components reference in code.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <div className="grid grid-cols-[160px_160px_52px_1fr] px-5 py-2 bg-(--color-bg-subtle)">
            {['Figma name', 'CSS token', 'px', ''].map((h) => (
              <span key={h} className="text-xs font-medium text-(--color-text-secondary)">{h}</span>
            ))}
          </div>
          {spacingTokens.map((t) => (
            <div key={t.css} className="grid grid-cols-[160px_160px_52px_1fr] items-center px-5 py-2.5 bg-(--color-bg-surface)">
              <span className="text-xs text-(--color-text-secondary)">{t.figma}</span>
              <code className="text-[12px] font-mono text-(--color-text-secondary)">{t.css}</code>
              <span className="text-xs text-(--color-text-secondary)">{t.px}</span>
              <div className="pr-8">
                {t.px > 0 && (
                  <div
                    className="h-1.5 bg-(--color-text-primary) rounded-full"
                    style={{ width: `${(t.px / MAX_SPACING) * 100}%` }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Max widths" description="Pre-defined widths for wrapping content. Useful for defining max widths on text sections, page headings, and content containers.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <div className="flex items-center gap-5 px-5 py-2 bg-(--color-bg-subtle)">
            <span className="text-xs font-medium text-(--color-text-secondary) w-24 shrink-0">Token</span>
            <span className="text-xs font-medium text-(--color-text-secondary) w-14 shrink-0">px</span>
            <span className="text-xs font-medium text-(--color-text-secondary) flex-1">Use</span>
            <span className="text-xs font-medium text-(--color-text-secondary) w-40 shrink-0">Scale</span>
          </div>
          {widthTokens.map((t) => (
            <div key={t.name} className="flex items-center gap-5 px-5 py-2.5 bg-(--color-bg-surface)">
              <code className="text-[12px] font-mono text-(--color-text-secondary) w-24 shrink-0">{t.name}</code>
              <span className="text-xs text-(--color-text-secondary) w-14 shrink-0">{t.px}</span>
              <span className="text-xs text-(--color-text-secondary) flex-1">{t.use}</span>
              <div className="w-40 h-1.5 bg-(--color-bg-subtle) rounded-full overflow-hidden shrink-0">
                <div
                  className="h-full bg-(--color-text-primary) rounded-full"
                  style={{ width: `${(t.px / 1400) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Border radius" description="Upfront uses a sharp, angular radius scale. Large radii make UI feel consumer-app soft — not the Upfront character. When in doubt, go smaller.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <div className="flex items-center gap-5 px-5 py-2 bg-(--color-bg-subtle)">
            <div className="w-10 shrink-0" />
            <span className="text-xs font-medium text-(--color-text-secondary) w-36 shrink-0">Token</span>
            <span className="text-xs font-medium text-(--color-text-secondary) w-12 shrink-0">Value</span>
            <span className="text-xs font-medium text-(--color-text-secondary)">Use</span>
          </div>
          {radii.map((r) => (
            <div key={r.name} className="flex items-center gap-5 px-5 py-3 bg-(--color-bg-surface)">
              <div
                className="w-10 h-10 shrink-0 bg-(--color-bg-subtle) border border-(--color-border)"
                style={{ borderRadius: r.value }}
              />
              <code className="text-[12px] font-mono text-(--color-text-secondary) w-36 shrink-0">{r.name}</code>
              <span className="text-xs text-(--color-text-secondary) w-12 shrink-0">{r.value}</span>
              <span className="text-xs text-(--color-text-secondary)">{r.use}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Radius rules">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Button, input, tag', '--radius-s (4px)', 'Controls use 2–4px. Never 8px or higher.'],
            ['Panel, card', '--radius-m (8px)', '8px is reserved for panels and cards, not controls.'],
            ['Large panel / modal', '--radius-l (12px)', 'Only when the surface is visually large enough that 8px reads as sharp.'],
            ['Pill / icon button', '--radius-pill (64px)', 'Fully rounded. Never on standard buttons or cards.'],
            ['Avatar', '--radius-circle (999px)', 'Avatars and circular controls only.'],
          ].map(([element, token, rule]) => (
            <div key={element as string} className="flex items-start gap-5 px-5 py-3 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-36 shrink-0 pt-px">{element}</span>
              <code className="text-[12px] font-mono text-(--color-text-secondary) w-40 shrink-0 pt-px">{token}</code>
              <p className="text-xs text-(--color-text-secondary)">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
