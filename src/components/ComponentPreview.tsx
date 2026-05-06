'use client'

import { useState } from 'react'

interface ComponentPreviewProps {
  label?: string
  codeHtml: string
  children: React.ReactNode
}

const DARK_BG   = '#0d1117'
const DARK_BAR  = '#161b22'
const DARK_LINE = '#2d2d2d'

export function ComponentPreview({ label, codeHtml, children }: ComponentPreviewProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const isDark = tab === 'code'

  return (
    <div
      className="rounded-(--radius-m) overflow-hidden"
      style={{
        border: isDark ? `1px solid ${DARK_LINE}` : '1px solid var(--color-border)',
      }}
    >
      {/* Tab bar */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b"
        style={{
          backgroundColor: isDark ? DARK_BAR : 'var(--color-bg-subtle)',
          borderBottomColor: isDark ? DARK_LINE : 'var(--color-border)',
        }}
      >
        {/* Pill toggle */}
        <div
          className="flex items-center gap-0.5 rounded-(--radius-s) border p-0.5"
          style={{
            backgroundColor: isDark ? DARK_BG : 'var(--color-bg-page)',
            borderColor: isDark ? DARK_LINE : 'var(--color-border)',
          }}
        >
          {(['preview', 'code'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-3 py-1 text-xs font-medium rounded-(--radius-sm) capitalize transition-colors"
              style={
                tab === t
                  ? { backgroundColor: isDark ? '#30363d' : 'var(--color-text-primary)', color: '#ffffff' }
                  : { color: isDark ? '#768390' : 'var(--color-text-hint)' }
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* Variant label */}
        {label && (
          <span
            className="text-xs"
            style={{ color: isDark ? '#768390' : 'var(--color-text-hint)' }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Content */}
      {tab === 'preview' ? (
        <div className="px-8 py-6 bg-(--color-bg-page) flex items-center justify-start">
          {children}
        </div>
      ) : (
        <div
          className="[&_.shiki]:rounded-none [&_.shiki]:border-0 [&_.shiki]:m-0"
          dangerouslySetInnerHTML={{ __html: codeHtml }}
        />
      )}
    </div>
  )
}
