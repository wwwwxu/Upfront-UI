'use client'
import { useState } from 'react'
import DocLayout, { DocSection, DocRow } from '@/components/DocLayout'

function Checkbox({ checked, label, disabled = false }: { checked: boolean; label: string; disabled?: boolean }) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 ${
        checked ? 'bg-(--color-text-primary) border-(--color-text-primary)' : 'border-(--color-border) bg-(--color-bg-surface)'
      }`}>
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className="text-sm text-(--color-text-primary)">{label}</span>
    </label>
  )
}

function RadioBtn({ selected, label, disabled = false }: { selected: boolean; label: string; disabled?: boolean }) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
        selected ? 'border-(--color-text-primary)' : 'border-(--color-border) bg-(--color-bg-surface)'
      }`}>
        {selected && <div className="w-2 h-2 rounded-full bg-(--color-text-primary)" />}
      </div>
      <span className="text-sm text-(--color-text-primary)">{label}</span>
    </label>
  )
}

function CheckboxDemo() {
  const [checked, setChecked] = useState([true, false, false])
  const options = ['Multiple items can be selected at once', 'User opts in or out of a setting', '"Select all" master control is needed']
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt, i) => (
        <div key={opt} onClick={() => { const n = [...checked]; n[i] = !n[i]; setChecked(n) }}>
          <Checkbox checked={checked[i]} label={opt} />
        </div>
      ))}
    </div>
  )
}

function RadioDemo() {
  const [sel, setSel] = useState(0)
  const options = ['Monthly billing', 'Annual billing (save 20%)', 'Enterprise plan']
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt, i) => (
        <div key={opt} onClick={() => setSel(i)}>
          <RadioBtn selected={sel === i} label={opt} />
        </div>
      ))}
    </div>
  )
}

export default function RadioCheckboxPage() {
  return (
    <DocLayout
      breadcrumb="Components"
      title="Radio & Checkbox"
      description="Radio buttons and checkboxes are fundamental form controls for selecting options. Use radio buttons when only one option can be chosen; use checkboxes when multiple selections are allowed."
    >
      <DocSection title="Checkbox" description="Allows users to select one or more options independently. Each checkbox operates on its own — checking one does not affect others.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <CheckboxDemo />
        </div>
      </DocSection>

      <DocSection title="Radio" description="Allows users to select exactly one option from a set. Selecting one radio button deselects all others in the group.">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <RadioDemo />
        </div>
      </DocSection>

      <DocSection title="States">
        <div className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) p-8">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-medium text-(--color-text-secondary) mb-4">Checkbox</p>
              <div className="flex flex-col gap-3">
                <Checkbox checked={false} label="Default" />
                <Checkbox checked={true} label="Checked" />
                <Checkbox checked={false} label="Disabled" disabled />
                <Checkbox checked={true} label="Checked + disabled" disabled />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-(--color-text-secondary) mb-4">Radio</p>
              <div className="flex flex-col gap-3">
                <RadioBtn selected={false} label="Default" />
                <RadioBtn selected={true} label="Selected" />
                <RadioBtn selected={false} label="Disabled" disabled />
                <RadioBtn selected={true} label="Selected + disabled" disabled />
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="When to use each">
        <div className="space-y-0">
          {[
            ['Checkbox', 'Multiple items can be selected. User opts in/out. "Select all" master control needed.'],
            ['Radio', 'Exactly one option from a mutually exclusive set. Irreversible once submitted (e.g. plan selection).'],
            ['Toggle instead', 'Binary on/off settings that take immediate effect (no confirm step). Prefer toggle over checkbox for single-item opt-in.'],
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
            ['Label positioning', 'Label always to the right of the control. Never above, never below.'],
            ['Minimum 2 options', 'Radio groups require at least 2 options. A single radio makes no sense — use a checkbox.'],
            ['Default selection', 'Radio groups should have a default selection (the most common or safest option). Empty radio groups cause form errors.'],
            ['Touch target', 'Minimum 44×44px touch target including label. The label click area extends to include the input.'],
            ['Group spacing', 'gap-3 (12px) between options in a vertical list. Horizontal grouping: max 3–4 options.'],
          ].map(([label, rule]) => (
            <div key={label as string} className="flex gap-6 px-5 py-3.5 bg-(--color-bg-surface)">
              <span className="text-xs font-medium text-(--color-text-primary) w-36 shrink-0 pt-px">{label}</span>
              <p className="text-xs text-(--color-text-secondary) leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
