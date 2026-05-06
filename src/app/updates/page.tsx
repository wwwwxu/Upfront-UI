import DocLayout from '@/components/DocLayout'

const updates = [
  {
    version: '1.0',
    date: 'April 2025',
    tag: 'Initial release',
    items: [
      'Published Figma token system: Color, Typography, Spacing & Radius',
      'Added Foundations: Colors, Typography, Spacing, Effects, Grid, Icons',
      'Added Essentials: Button, Input, Chips, Tag, Accordion, Radio & Checkbox, Progress, Carousel, Pagination, Tabs, Empty State',
    ],
  },
]

export default function UpdatesPage() {
  return (
    <DocLayout
      title="Updates"
      description="A changelog of new components, tokens, and design decisions."
    >
      <div className="space-y-10">
        {updates.map((release) => (
          <div key={release.version}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-semibold text-(--color-text-primary) font-display">
                v{release.version}
              </span>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-(--color-accent-bg) text-(--color-accent)">
                {release.tag}
              </span>
              <span className="text-sm text-(--color-text-hint)">{release.date}</span>
            </div>
            <ul className="space-y-2">
              {release.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-(--color-text-secondary)">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-(--color-text-hint) shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DocLayout>
  )
}
