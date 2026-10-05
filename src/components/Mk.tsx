// Renderer.tsx
type Props = { body: string, className?: string }
import {parseMarkdown} from '../utils'


export function Mk({ body, className }: Props) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: parseMarkdown(body) }} />
}
