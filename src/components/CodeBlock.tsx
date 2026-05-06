import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  lang?: string
}

export default async function CodeBlock({ code, lang = 'tsx' }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    theme: 'github-dark',
  })

  return (
    <div
      className="overflow-x-auto rounded-(--radius-m) border border-[#2d2d2d]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
