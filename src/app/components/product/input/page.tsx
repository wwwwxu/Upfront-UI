import { codeToHtml } from 'shiki'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'
import { ComponentPreview } from '@/components/ComponentPreview'
import { CopyButton } from '@/components/CopyButton'

// ── Usage snippets (what callers write) ───────────────────────────────────────

const CODE_DEFAULT = `import { Input } from "@/components/ui/input"

<Input label="Email address" type="email" placeholder="you@example.com" />`

const CODE_FILLED = `import { Input } from "@/components/ui/input"

<Input label="Email address" type="email" defaultValue="hello@example.com" />`

const CODE_ERROR = `import { Input } from "@/components/ui/input"

<Input
  label="Email address"
  type="email"
  defaultValue="not-an-email"
  error="Enter a valid email address."
/>`

const CODE_DISABLED = `import { Input } from "@/components/ui/input"

<Input label="Email address" type="email" placeholder="you@example.com" disabled />`

const CODE_ICON_LEFT = `import { Input } from "@/components/ui/input"
import { SearchIcon } from "@/components/icons"

<Input label="Search" placeholder="Search…" leftIcon={<SearchIcon />} />`

const CODE_SUFFIX = `import { Input } from "@/components/ui/input"

<Input label="Amount" placeholder="0.00" suffix="CAD" />`

const CODE_ICON_RIGHT = `import { Input } from "@/components/ui/input"
import { EyeIcon } from "@/components/icons"

<Input
  label="Password"
  type="password"
  defaultValue="mysecretpassword"
  rightIcon={<EyeIcon />}
/>`

const CLI_COMMAND = 'npx shadcn@latest add https://ui-for-humans.upfront.nl/r/input.json'

const INPUT_SOURCE = `import * as React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  suffix?: string
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  suffix,
  className = '',
  disabled,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')

  const base =
    'w-full py-2 text-sm rounded-(--radius-s) border bg-(--color-bg-surface) ' +
    'text-(--color-text-primary) placeholder:text-(--color-text-hint) ' +
    'outline-none focus:border-(--color-border-medium) transition-colors'

  const stateClass = error
    ? 'border-(--color-error)'
    : disabled
    ? 'border-(--color-border) bg-(--color-bg-subtle) text-(--color-text-hint) cursor-not-allowed'
    : 'border-(--color-border)'

  const paddingClass = leftIcon ? 'pl-9' : 'pl-3'
  const paddingRightClass = rightIcon || suffix ? 'pr-9' : 'pr-3'

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className={\`block text-xs font-medium mb-1.5 \${
            disabled ? 'text-(--color-text-hint)' : 'text-(--color-text-secondary)'
          }\`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-text-hint)">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          className={\`\${base} \${stateClass} \${paddingClass} \${paddingRightClass} \${className}\`}
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-(--color-text-hint)">
            {suffix}
          </span>
        )}
        {rightIcon && !suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-hint)">
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-(--color-error)">{error}</p>
      )}
      {hint && !error && (
        <p className="mt-1.5 text-xs text-(--color-text-hint)">{hint}</p>
      )}
    </div>
  )
}`

// ── Helpers ───────────────────────────────────────────────────────────────────

async function hi(code: string) {
  return codeToHtml(code, { lang: 'tsx', theme: 'github-dark' })
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function InputPage() {
  const [
    htmlDefault,
    htmlFilled,
    htmlError,
    htmlDisabled,
    htmlIconLeft,
    htmlSuffix,
    htmlIconRight,
    htmlSource,
  ] = await Promise.all([
    hi(CODE_DEFAULT),
    hi(CODE_FILLED),
    hi(CODE_ERROR),
    hi(CODE_DISABLED),
    hi(CODE_ICON_LEFT),
    hi(CODE_SUFFIX),
    hi(CODE_ICON_RIGHT),
    hi(INPUT_SOURCE),
  ])

  return (
    <DocLayout
      breadcrumb="Components"
      title="Input"
      description="Input fields let users enter and edit text. They appear in forms, search bars, and settings — always paired with a label and optional helper or error message."
    >
      {/* States */}
      <DocSection title="States">
        <div className="space-y-3">

          <ComponentPreview label="Default" codeHtml={htmlDefault}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none focus:border-(--color-border-medium) transition-colors"
              />
            </div>
          </ComponentPreview>

          <ComponentPreview label="Filled" codeHtml={htmlFilled}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Email address</label>
              <input
                type="email"
                defaultValue="hello@example.com"
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) outline-none focus:border-(--color-border-medium) transition-colors"
              />
            </div>
          </ComponentPreview>

          <ComponentPreview label="Error" codeHtml={htmlError}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Email address</label>
              <input
                type="email"
                defaultValue="not-an-email"
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) bg-(--color-bg-surface) text-(--color-text-primary) outline-none border border-(--color-error)"
              />
              <p className="mt-1.5 text-xs text-(--color-error)">Enter a valid email address.</p>
            </div>
          </ComponentPreview>

          <ComponentPreview label="Disabled" codeHtml={htmlDisabled}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-hint) mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                disabled
                className="w-full px-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-subtle) text-(--color-text-hint) outline-none cursor-not-allowed"
              />
            </div>
          </ComponentPreview>

        </div>
      </DocSection>

      {/* Slot decorators */}
      <DocSection title="Decorators">
        <div className="space-y-3">

          <ComponentPreview label="Left icon" codeHtml={htmlIconLeft}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Search</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-(--color-text-hint)" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  placeholder="Search…"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none focus:border-(--color-border-medium) transition-colors"
                />
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview label="Suffix text" codeHtml={htmlSuffix}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Amount</label>
              <div className="relative">
                <input
                  placeholder="0.00"
                  className="w-full pl-3 pr-14 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) placeholder:text-(--color-text-hint) outline-none focus:border-(--color-border-medium) transition-colors"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-(--color-text-hint)">CAD</span>
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview label="Right icon" codeHtml={htmlIconRight}>
            <div className="w-72">
              <label className="block text-xs font-medium text-(--color-text-secondary) mb-1.5">Password</label>
              <div className="relative">
                <input
                  type="password"
                  defaultValue="mysecretpassword"
                  className="w-full pl-3 pr-9 py-2 text-sm rounded-(--radius-s) border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) outline-none focus:border-(--color-border-medium) transition-colors"
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-hint) cursor-pointer hover:text-(--color-text-secondary) transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </ComponentPreview>

        </div>
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
            <span className="text-xs font-medium text-[#768390]">components/ui/input.tsx</span>
            <CopyButton text={INPUT_SOURCE} />
          </div>
          <div
            className="[&_.shiki]:rounded-none [&_.shiki]:border-0 [&_.shiki]:m-0"
            dangerouslySetInnerHTML={{ __html: htmlSource }}
          />
        </div>
      </DocSection>

      {/* Anatomy */}
      <DocSection title="Anatomy">
        <div className="space-y-0">
          {[
            ['Label', 'text-xs font-medium · above the input', 'Required — always provide a label. Never rely on placeholder alone.'],
            ['Container', 'px-3 py-2 · border · rounded-(--radius-s)', 'Default height: 36px. Compact: 28px for dense layouts.'],
            ['Placeholder', 'text-(--color-text-hint)', 'Example value or format hint — not a label substitute.'],
            ['Left slot', 'Optional icon, 14×14px · absolute left-3', 'Search icon, category icon. Adds padding-left to input.'],
            ['Right slot / Suffix', 'Optional icon or text · absolute right-3', 'Currency, unit label, clear button, show/hide toggle.'],
            ['Helper text', 'text-xs · mt-1.5', 'Error message, hint text, or character count below the field.'],
          ].map(([layer, token, note]) => (
            <DocRow key={layer as string} label={layer as string} description={note as string}>
              <code className="text-xs font-mono text-(--color-text-secondary) bg-(--color-bg-subtle) px-2 py-1 rounded">{token}</code>
            </DocRow>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
