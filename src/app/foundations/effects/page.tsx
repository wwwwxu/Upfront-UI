import DocLayout, { DocSection } from '@/components/DocLayout'

const elevationLevels = [
  {
    label: 'Surface',
    bg: '--color-bg-surface',
    border: '--color-border',
    borderValue: '#EEEEEE',
    desc: 'Default resting state — cards, panels',
    token: '--border-default',
  },
  {
    label: 'Hover',
    bg: '--color-bg-surface',
    border: '--color-border',
    borderValue: '#D0D0D0',
    desc: 'On hover — interactive surfaces',
    token: '--border-medium',
  },
  {
    label: 'Focus / Selected',
    bg: '--color-bg-surface',
    border: '--color-border',
    borderValue: '#121212',
    desc: 'Active, focused, or selected state',
    token: '--border-strong',
  },
]

const motionTokens = [
  { token: '--motion-fast', value: '120ms', easing: 'ease-out', use: 'Hover, active, focus — immediate state changes' },
  { token: '--motion-base', value: '200ms', easing: 'ease-out', use: 'Appearance of new elements, panel transitions' },
]

const focusRings = [
  { element: 'Button (primary)', rule: '2px solid var(--border-strong), offset 2px', note: 'Black ring — matches border-strong' },
  { element: 'Input', rule: 'border-color → var(--border-strong)', note: 'Border shift only, no separate ring' },
  { element: 'Any invalid field', rule: 'border-color → var(--color-error)', note: 'Error red on aria-invalid="true"' },
]

export default function EffectsPage() {
  return (
    <DocLayout
      breadcrumb="Foundations"
      title="Effects"
      description="Upfront uses no shadows and no gradients. Depth comes from layering surfaces with border shifts. This keeps the UI flat, fast, and consistent across light and dark contexts."
    >
      <DocSection title="No shadows — intentional" description="Box shadows and drop shadows are not part of the Upfront visual language. They add visual noise and behave inconsistently across themes. Every layer of depth is expressed through background and border steps instead.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['box-shadow', 'Never', 'Use border + background shift for elevation'],
            ['drop-shadow', 'Never', 'Use border + background shift for elevation'],
            ['linear-gradient', 'Never', 'Flat color only — use --background-* tokens'],
            ['text-shadow', 'Never', 'Adjust font-weight or color instead'],
            ['filter: blur()', 'Glass surfaces only', 'backdrop-filter on floating panels (not structural elements)'],
          ].map(([prop, status, alt]) => (
            <div key={prop as string} className="flex items-start gap-5 px-5 py-3 bg-(--color-bg-surface)">
              <code className="text-[12px] font-mono text-(--color-text-primary) w-36 shrink-0 pt-px">{prop}</code>
              <span className={`text-xs font-medium w-28 shrink-0 pt-px ${status === 'Never' ? 'text-red-600' : 'text-(--color-text-secondary)'}`}>{status as string}</span>
              <p className="text-xs text-(--color-text-secondary)">{alt as string}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Elevation via border shifts" description="Three levels of elevation — all expressed as border-color changes, not shadows. Combine with background steps for additional depth.">
        <div className="grid grid-cols-3 gap-4">
          {elevationLevels.map((l) => (
            <div
              key={l.label}
              className="p-5 rounded-(--radius-m) bg-(--color-bg-surface) flex flex-col gap-3"
              style={{ border: `1px solid ${l.borderValue}` }}
            >
              <div>
                <p className="text-xs font-medium text-(--color-text-primary) mb-0.5">{l.label}</p>
                <p className="text-xs text-(--color-text-secondary) leading-relaxed">{l.desc}</p>
              </div>
              <code className="text-[12px] font-mono text-(--color-text-secondary) bg-(--color-bg-subtle) px-2 py-1 rounded self-start">
                border: {l.borderValue}
              </code>
              <p className="text-xs text-(--color-text-secondary)">{l.token}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          <div className="flex items-center gap-5 px-5 py-3 bg-(--color-bg-subtle) border-b border-(--color-border)">
            <span className="text-xs font-medium text-(--color-text-secondary) w-36 shrink-0">Background zone</span>
            <span className="text-xs font-medium text-(--color-text-secondary) flex-1">Token</span>
            <span className="text-xs font-medium text-(--color-text-secondary) w-24">Value</span>
          </div>
          {[
            ['Page shell', '--background-page', '#FAFAFA'],
            ['Surface / card', '--background-surface', '#FFFFFF'],
            ['Recessed / subtle', '--background-subtle', '#F3F3F3'],
            ['Dark section', '--background-dark', '#242833'],
          ].map(([zone, token, value]) => (
            <div key={token as string} className="flex items-center gap-5 px-5 py-2.5 bg-(--color-bg-surface)">
              <span className="text-xs text-(--color-text-secondary) w-36 shrink-0">{zone as string}</span>
              <code className="text-[12px] font-mono text-(--color-text-primary) flex-1">{token as string}</code>
              <span className="text-xs text-(--color-text-secondary) w-24">{value as string}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Focus rings" description="Focus states signal keyboard navigation. Upfront uses border-color shifts for inputs and outline rings for buttons — always 2px, always visible.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {focusRings.map((f) => (
            <div key={f.element} className="flex items-start gap-5 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-36 shrink-0 pt-px">{f.element}</span>
              <code className="text-[12px] font-mono text-(--color-text-secondary) flex-1 pt-px">{f.rule}</code>
              <span className="text-xs text-(--color-text-secondary) w-52 shrink-0 pt-px">{f.note}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-3 p-4 rounded-(--radius-s) bg-(--color-bg-surface) border-2 border-(--color-bg-dark)" style={{ outline: '2px solid #121212', outlineOffset: '2px' }}>
            <span className="text-xs font-medium text-(--color-text-primary)">Focused button</span>
          </div>
          <div className="flex items-center">
            <input
              className="px-3 py-2 text-xs rounded-(--radius-s) bg-(--color-bg-surface) text-(--color-text-primary) outline-none"
              style={{ border: '1px solid #121212' }}
              defaultValue="Focused input"
              readOnly
            />
          </div>
          <div className="flex items-center">
            <input
              className="px-3 py-2 text-xs rounded-(--radius-s) bg-(--color-bg-surface) text-(--color-text-primary) outline-none"
              style={{ border: '1px solid #D90000' }}
              defaultValue="Invalid field"
              readOnly
            />
          </div>
        </div>
      </DocSection>

      <DocSection title="Motion" description="Transitions are short and direct. 120ms for immediate state changes, 200ms for structural transitions. No bounce, no spring — ease-out only.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {motionTokens.map((m) => (
            <div key={m.token} className="flex items-center gap-5 px-5 py-3.5 bg-(--color-bg-surface)">
              <code className="text-[12px] font-mono text-(--color-text-primary) w-36 shrink-0">{m.token}</code>
              <span className="text-xs text-(--color-text-secondary) w-16 shrink-0">{m.value}</span>
              <span className="text-xs text-(--color-text-secondary) w-20 shrink-0">{m.easing}</span>
              <span className="text-xs text-(--color-text-secondary)">{m.use}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Hover state', 'transition: border-color var(--motion-fast) var(--ease-out)', 'Border shifts on hover'],
            ['Button press', 'transition: background-color var(--motion-fast) var(--ease-out)', 'Background on active'],
            ['Panel appear', 'transition: opacity var(--motion-base) var(--ease-out)', 'Dropdowns, tooltips'],
          ].map(([label, css, note]) => (
            <div key={label as string} className="flex items-start gap-5 px-5 py-3 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-28 shrink-0 pt-px">{label as string}</span>
              <code className="text-[12px] font-mono text-(--color-text-secondary) flex-1 pt-px">{css as string}</code>
              <span className="text-xs text-(--color-text-secondary) w-36 shrink-0 pt-px">{note as string}</span>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
