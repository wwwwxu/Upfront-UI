import { codeToHtml } from 'shiki'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'
import { ComponentPreview } from '@/components/ComponentPreview'
import { CopyButton } from '@/components/CopyButton'

// ── Usage snippets (what callers write) ───────────────────────────────────────

const CODE_PRIMARY = `import { Button } from "@/components/ui/button"

<Button>Save changes</Button>`

const CODE_SECONDARY = `import { Button } from "@/components/ui/button"

<Button variant="secondary">Cancel</Button>`

const CODE_GHOST = `import { Button } from "@/components/ui/button"

<Button variant="ghost">Learn more</Button>`

const CODE_DANGER = `import { Button } from "@/components/ui/button"

<Button variant="danger">Delete project</Button>`

const CODE_SIZES = `import { Button } from "@/components/ui/button"

<Button>Save changes</Button>
<Button size="sm">Save changes</Button>`

const CODE_ICON_LABEL = `import { Button } from "@/components/ui/button"
import { PlusIcon } from "@/components/icons"

<Button>
  <PlusIcon />
  Add item
</Button>`

const CODE_ICON_ONLY = `import { Button } from "@/components/ui/button"
import { PlusIcon } from "@/components/icons"

<Button size="icon" variant="secondary" aria-label="Add item">
  <PlusIcon />
</Button>`

const CODE_GROUP = `import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button"

<ButtonGroup>
  <ButtonGroupItem>List</ButtonGroupItem>
  <ButtonGroupItem>Grid</ButtonGroupItem>
  <ButtonGroupItem>Board</ButtonGroupItem>
</ButtonGroup>`

const CLI_COMMAND = 'npx shadcn@latest add https://ds.upfront.nl/r/button.json'

const BUTTON_SOURCE = `import * as React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size    = 'default' | 'sm' | 'icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ' +
  'disabled:pointer-events-none disabled:opacity-40'

const variants: Record<Variant, string> = {
  primary:   'bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) hover:opacity-80',
  secondary: 'border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:bg-(--color-bg-subtle)',
  ghost:     'text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary)',
  danger:    'bg-(--color-error) text-white hover:opacity-90',
}

const sizes: Record<Size, string> = {
  default: 'h-9 px-4 py-2 text-sm rounded-(--radius-s)',
  sm:      'h-7 px-3 text-xs rounded-(--radius-s)',
  icon:    'h-9 w-9 rounded-(--radius-s)',
}

export function Button({
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={\`\${base} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    />
  )
}`

// ── Helpers ───────────────────────────────────────────────────────────────────

async function hi(code: string) {
  return codeToHtml(code, { lang: 'tsx', theme: 'github-dark' })
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ButtonPage() {
  const [
    htmlPrimary,
    htmlSecondary,
    htmlGhost,
    htmlDanger,
    htmlSizes,
    htmlIconLabel,
    htmlIconOnly,
    htmlGroup,
    htmlSource,
  ] = await Promise.all([
    hi(CODE_PRIMARY),
    hi(CODE_SECONDARY),
    hi(CODE_GHOST),
    hi(CODE_DANGER),
    hi(CODE_SIZES),
    hi(CODE_ICON_LABEL),
    hi(CODE_ICON_ONLY),
    hi(CODE_GROUP),
    hi(BUTTON_SOURCE),
  ])

  return (
    <DocLayout
      breadcrumb="Components"
      title="Button"
      description="Buttons trigger actions. They are the primary way users interact with the interface — submitting a form, navigating to a page, confirming a decision, or initiating a process. Each button has a defined variant that communicates its level of importance."
    >
      {/* Variants */}
      <DocSection title="Variants">
        <div className="space-y-3">

          <ComponentPreview label="Primary" codeHtml={htmlPrimary}>
            <button className="h-9 px-4 text-sm font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) hover:opacity-80 transition-opacity">
              Save changes
            </button>
          </ComponentPreview>

          <ComponentPreview label="Secondary" codeHtml={htmlSecondary}>
            <button className="h-9 px-4 text-sm font-medium rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:bg-(--color-bg-subtle) transition-colors">
              Cancel
            </button>
          </ComponentPreview>

          <ComponentPreview label="Ghost" codeHtml={htmlGhost}>
            <button className="h-9 px-4 text-sm font-medium rounded-(--radius-s) text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary) transition-colors">
              Learn more
            </button>
          </ComponentPreview>

          <ComponentPreview label="Danger" codeHtml={htmlDanger}>
            <button className="h-9 px-4 text-sm font-medium rounded-(--radius-s) text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--color-error, #D90000)' }}>
              Delete project
            </button>
          </ComponentPreview>

        </div>
      </DocSection>

      {/* Sizes */}
      <DocSection title="Sizes">
        <ComponentPreview codeHtml={htmlSizes}>
          <div className="flex items-center gap-4">
            <button className="h-9 px-4 text-sm font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) hover:opacity-80 transition-opacity">
              Default
            </button>
            <button className="h-7 px-3 text-xs font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) hover:opacity-80 transition-opacity">
              Small
            </button>
          </div>
        </ComponentPreview>
      </DocSection>

      {/* Icon usage */}
      <DocSection title="Icon">
        <div className="space-y-3">

          <ComponentPreview label="With label" codeHtml={htmlIconLabel}>
            <button className="h-9 px-4 text-sm font-medium rounded-(--radius-s) bg-(--color-btn-primary-bg) text-(--color-btn-primary-text) flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Add item
            </button>
          </ComponentPreview>

          <ComponentPreview label="Icon only" codeHtml={htmlIconOnly}>
            <button className="h-9 w-9 flex items-center justify-center rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:bg-(--color-bg-subtle) transition-colors" title="Add" aria-label="Add item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </ComponentPreview>

        </div>
      </DocSection>

      {/* Button group */}
      <DocSection title="Button group">
        <ComponentPreview codeHtml={htmlGroup}>
          <div className="flex rounded-(--radius-s) overflow-hidden border border-(--color-border)">
            {['List', 'Grid', 'Board'].map((label, i) => (
              <button key={label} className={`h-9 px-4 text-sm font-medium text-(--color-text-secondary) hover:bg-(--color-bg-subtle) hover:text-(--color-text-primary) transition-colors ${i > 0 ? 'border-l border-(--color-border)' : ''}`}>
                {label}
              </button>
            ))}
          </div>
        </ComponentPreview>
      </DocSection>

      {/* Installation */}
      <DocSection title="Installation">
        <div className="rounded-(--radius-m) border border-(--color-border) overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-(--color-bg-subtle) border-b border-(--color-border)">
            <span className="text-xs font-medium text-(--color-text-hint)">Terminal</span>
            <CopyButton text={CLI_COMMAND} />
          </div>
          <div className="px-4 py-3.5 bg-(--color-bg-page)">
            <code className="text-sm font-mono text-(--color-text-primary)">{CLI_COMMAND}</code>
          </div>
        </div>
      </DocSection>

      {/* Source */}
      <DocSection title="Source">
        <div className="rounded-(--radius-m) overflow-hidden border border-[#2d2d2d]">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2d2d2d]" style={{ backgroundColor: '#161b22' }}>
            <span className="text-xs font-medium text-[#768390]">components/ui/button.tsx</span>
            <CopyButton text={BUTTON_SOURCE} />
          </div>
          <div
            className="[&_.shiki]:rounded-none [&_.shiki]:border-0 [&_.shiki]:m-0"
            dangerouslySetInnerHTML={{ __html: htmlSource }}
          />
        </div>
      </DocSection>

      {/* When to use */}
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

      {/* Guidelines */}
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
