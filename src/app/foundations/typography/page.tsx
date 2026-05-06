import DocLayout, { DocSection } from '@/components/DocLayout'

const typeScale = [
  { name: 'Display 4xl', token: '--font-size-4xl', size: 64, lh: 70,  ls: '-0.02em', weight: 900, role: 'Hero / poster — ALL CAPS only' },
  { name: 'Display 3xl', token: '--font-size-3xl', size: 48, lh: 53,  ls: '-0.02em', weight: 700, role: 'H1 (desktop) — page title' },
  { name: 'Display 2xl', token: '--font-size-2xl', size: 40, lh: 44,  ls: '-0.02em', weight: 700, role: 'H1 (mobile) / H2' },
  { name: 'Display xl',  token: '--font-size-xl',  size: 32, lh: 36,  ls: '-0.02em', weight: 500, role: 'H2 — Medium 500, not Bold' },
  { name: 'Display lg',  token: '--font-size-lg',  size: 24, lh: 28,  ls: '-0.02em', weight: 500, role: 'H3 / card title' },
  { name: 'Text lg',     token: '--font-size-md',  size: 18, lh: 25,  ls: '-0.02em', weight: 400, role: 'H4 / body (desktop) — Body: 400, H4: 500' },
  { name: 'Text md',     token: '--font-size-base',size: 16, lh: 22,  ls: '-0.02em', weight: 400, role: 'Body (mobile) — minimum body size' },
  { name: 'Text sm',     token: '--font-size-sm',  size: 14, lh: 20,  ls: '-0.02em', weight: 500, role: 'UI labels, nav, buttons — minimum UI size' },
  { name: 'Text xs',     token: '--font-size-xs',  size: 12, lh: 18,  ls: '+0.05em', weight: 500, role: 'Captions, badges — ALL CAPS + wide tracking only' },
]

const weightLabels: Record<number, string> = { 400: 'Book', 500: 'Medium', 700: 'Bold', 900: 'Strong' }

const typeRoles = [
  { role: 'Display / poster', figma: 'Display 4xl', size: 64, weight: 900, lh: 70, tracking: '-0.02em', notes: 'ALL CAPS, hero moments only' },
  { role: 'H1 (desktop)',      figma: 'Display 3xl', size: 48, weight: 700, lh: 53, tracking: '-0.02em', notes: 'Page title' },
  { role: 'H1 (mobile)',       figma: 'Display 2xl', size: 40, weight: 700, lh: 44, tracking: '-0.02em', notes: 'Page section heading' },
  { role: 'H2',                figma: 'Display xl',  size: 32, weight: 500, lh: 36, tracking: '-0.02em', notes: 'Sub-section — Medium, not Bold' },
  { role: 'H3 / card title',   figma: 'Display lg',  size: 24, weight: 500, lh: 28, tracking: '-0.02em', notes: 'Module, card, widget header' },
  { role: 'H4',                figma: 'Text lg',     size: 18, weight: 500, lh: 25, tracking: '-0.02em', notes: 'Same size as body — weight signals role' },
  { role: 'Body (desktop)',    figma: 'Text lg',     size: 18, weight: 400, lh: 25, tracking: '-0.02em', notes: 'Default reading size' },
  { role: 'Body (mobile)',     figma: 'Text md',     size: 16, weight: 400, lh: 22, tracking: '-0.02em', notes: 'Minimum body size — never go below 16px for copy' },
  { role: 'UI / nav / buttons',figma: 'Text sm',     size: 14, weight: 500, lh: 20, tracking: '-0.02em', notes: 'Minimum UI size — never use 12px for interactive labels' },
  { role: 'Caption / badge',   figma: 'Text xs',     size: 12, weight: 500, lh: 18, tracking: '+0.05em', notes: 'ALL CAPS only. Decorative only — not for readable labels' },
]

export default function TypographyPage() {
  return (
    <DocLayout
      breadcrumb="Foundations"
      title="Typography"
      description="Blender is the primary typeface across every Upfront surface. Three additional typefaces serve specific roles: LED Counter 7 for data displays, P22 Mackinac Pro for editorial moments, and Monospace Neon Var for code only."
    >
      <DocSection title="Typefaces">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: 'Blender',
              role: 'Primary — all UI text',
              note: 'All headings, body, labels, buttons, and UI controls across every product surface. Book 400 for reading, Medium 500 for labels, Bold 700 for headings, Strong 900 for hero display. Self-hosted in /public/fonts/.',
              class: 'font-display',
              bundled: true,
            },
            {
              name: 'LED Counter 7',
              role: 'Display / data',
              note: 'Hero numbers, countdowns, product quantities, and key metrics that need a raw digital character. Token: var(--font-family-display-led). Never use for body text or labels.',
              class: 'font-mono',
              bundled: false,
            },
            {
              name: 'P22 Mackinac Pro',
              role: 'Editorial accent',
              note: 'Pull quotes, campaign headlines, and brand moments that need warmth and humanity. Token: var(--font-family-editorial). Use sparingly — not for UI elements. Requires font file from design team.',
              class: 'font-sans',
              bundled: false,
            },
            {
              name: 'Monospace Neon Var',
              role: 'Code only',
              note: 'Exclusively for code blocks, inline code, terminals, and syntax-highlighted output. Token: var(--font-family-mono). Never use for body text, labels, or any non-code UI.',
              class: 'font-mono',
              bundled: false,
            },
          ].map((f) => (
            <div key={f.name} className="p-5 rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-surface)">
              <div className="flex items-start justify-between gap-2 mb-3">
                <p className={`text-3xl font-bold text-(--color-text-primary) ${f.class} tracking-tight`}>{f.name}</p>
                {f.bundled && (
                  <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-(--color-bg-subtle) text-(--color-text-secondary) shrink-0 mt-1">Bundled</span>
                )}
              </div>
              <p className="text-xs font-medium text-(--color-text-secondary) mb-1">{f.role}</p>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{f.note}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Weights" description="Blender renders visually smaller than system fonts at the same px size — approximately 2px smaller. Compensate by sizing up slightly in dense UI.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            { weight: 400, style: 'Book', use: 'Body text and descriptions. Default for continuous reading.' },
            { weight: 500, style: 'Medium', use: 'Labels, navigation, tags, UI controls. Signals interactivity without shouting.' },
            { weight: 700, style: 'Bold', use: 'Headings and section titles. Visual hierarchy — not inline emphasis.' },
            { weight: 900, style: 'Strong', use: 'Display and hero only. Always renders ALL-CAPS. Never apply to mixed-case text.' },
          ].map((w) => (
            <div key={w.weight} className="flex items-center gap-6 px-5 py-4 bg-(--color-bg-surface)">
              <span
                className="text-3xl font-display text-(--color-text-primary) w-16 shrink-0"
                style={{ fontWeight: w.weight, letterSpacing: '-0.02em' }}
              >
                Aa
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-(--color-text-primary)">{w.style} {w.weight}</p>
                <p className="text-xs text-(--color-text-secondary) leading-relaxed mt-0.5 max-w-[400px]">{w.use}</p>
              </div>
              <span className="text-xs text-(--color-text-secondary) shrink-0">--font-weight-{w.style.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Type scale" description="All 9 steps with exact values from the Figma specimen. Use these — do not invent sizes between steps. All Blender text uses -2% letter spacing.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {typeScale.map((t) => (
            <div key={t.name} className="px-5 py-5 bg-(--color-bg-surface)">
              <div
                className="font-display text-(--color-text-primary) mb-3 truncate"
                style={{ fontSize: t.size, lineHeight: `${t.lh}px`, letterSpacing: t.ls, fontWeight: t.weight }}
              >
                {t.name}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                <span className="text-xs text-(--color-text-secondary)">{t.token}</span>
                <span className="text-xs text-(--color-text-secondary)">{t.size}px</span>
                <span className="text-xs text-(--color-text-secondary)">lh {t.lh}px</span>
                <span className="text-xs text-(--color-text-secondary)">ls {t.ls}</span>
                <span className="text-xs text-(--color-text-secondary)">{weightLabels[t.weight]}</span>
              </div>
              <p className="text-xs text-(--color-text-secondary) mt-1.5">{t.role}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Type role recipes" description="Hand-set values for each named role. Use this table — don't infer from the scale alone.">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden">
          <div className="grid grid-cols-[160px_120px_60px_50px_50px_80px_1fr] gap-0 px-5 py-2.5 bg-(--color-bg-subtle) border-b border-(--color-border)">
            {['Role', 'Figma name', 'Size', 'Weight', 'L.H.', 'Tracking', 'Notes'].map((h) => (
              <span key={h} className="text-xs font-medium text-(--color-text-secondary)">{h}</span>
            ))}
          </div>
          <div className="divide-y divide-(--color-border)">
            {typeRoles.map((r) => (
              <div key={r.role} className="grid grid-cols-[160px_120px_60px_50px_50px_80px_1fr] gap-0 px-5 py-2.5 bg-(--color-bg-surface)">
                <span className="text-xs font-medium text-(--color-text-primary)">{r.role}</span>
                <span className="text-xs text-(--color-text-secondary)">{r.figma}</span>
                <span className="text-xs text-(--color-text-secondary)">{r.size}px</span>
                <span className="text-xs text-(--color-text-secondary)">{r.weight}</span>
                <span className="text-xs text-(--color-text-secondary)">{r.lh}px</span>
                <span className="text-xs text-(--color-text-secondary)">{r.tracking}</span>
                <span className="text-xs text-(--color-text-secondary) leading-relaxed">{r.notes}</span>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="Rules">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden divide-y divide-(--color-border)">
          {[
            ['Letter spacing', 'All Blender text uses -0.02em. Never override to 0. The only exception is Text xs (captions/badges) which uses +0.05em when ALL CAPS.'],
            ['ALL CAPS', 'Reserved exclusively for the 64px Display variant (font-weight 900). Not for table headers, chips, badges, navigation, or any other UI element.'],
            ['Body minimum', '16px (Text md). Text sm (14px) and Text xs (12px) are for labels, captions, and metadata only — never for continuous reading.'],
            ['UI minimum', '14px. Never use 12px for any text a user needs to read. If it looks too big at 14px, reduce weight — not size.'],
            ['H2 weight', 'Medium 500 — not Bold. This is the most common mistake. Bold is H1 only.'],
            ['Strong (900)', 'Always renders ALL-CAPS in Blender. Never apply to mixed-case text.'],
            ['Headings', 'Sentence case, never Title Case. A heading is the first word capitalized — that’s it.'],
            ['Monospace', 'Monospace Neon Var is the only monospace font. Only in code blocks and code UI — never for data values, labels, or non-code text.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-6 px-5 py-4 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-28 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
