import DocLayout, { DocSection } from '@/components/DocLayout'

const principles = [
  {
    num: '01',
    icon: '/principles/icon-minimalism.svg',
    title: 'Functional minimalism',
    description:
      'Every element needs a reason to be there — it carries meaning or it guides action. Removing things to look clean is aesthetic minimalism. That\'s not what this is. We remove things that compete for attention without earning it.',
  },
  {
    num: '02',
    icon: '/principles/icon-language.svg',
    title: 'One shared language',
    description:
      'Defined spacing, type, and color means designers and developers aren\'t renegotiating the same things on every project. Tokens don\'t just enforce consistency — they reduce the back-and-forth that slows work down.',
  },
  {
    num: '03',
    icon: '/principles/icon-patterns.svg',
    title: 'Patterns, not exceptions',
    description:
      'Every component works on its own and as part of a larger system. New features start from a defined base. Patterns get reused, not reinvented. Consistency at scale isn\'t something you maintain through effort — it\'s something the structure handles for you.',
  },
  {
    num: '04',
    icon: '/principles/icon-hierarchy.svg',
    title: 'Hierarchy over density',
    description:
      'Users don\'t want less data. They want data that\'s easier to read. Typographic hierarchy, clear grouping, and progressive disclosure are what make complex interfaces navigable. Without them, more information just means more confusion.',
  },
]

export default function PrinciplesPage() {
  return (
    <DocLayout
      breadcrumb="Design at Upfront"
      title="Principles"
      description="The beliefs that guide every decision — from token naming to component behaviour. Not rules to follow, but truths to return to."
    >
      <DocSection title="Core principles">
        <div className="grid grid-cols-2 gap-4">
          {principles.map((p) => (
            <div
              key={p.num}
              className="rounded-(--radius-m) border border-(--color-border) bg-(--color-bg-page) overflow-hidden"
            >
              {/* Icon area */}
              <div
                className="h-44 flex items-center justify-center relative"
                style={{ backgroundColor: '#F3F3F3' }}
              >
                <span className="absolute top-4 left-4 text-xs font-medium text-(--color-text-secondary) tracking-tight">
                  {p.num}
                </span>
                <img
                  src={p.icon}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Content */}
              <div className="px-5 pt-5 pb-6">
                <div className="w-7 h-0.5 mb-3.5" style={{ backgroundColor: '#121212' }} />
                <h3 className="font-display text-lg font-medium text-(--color-text-primary) leading-tight mb-2.5 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>
    </DocLayout>
  )
}
