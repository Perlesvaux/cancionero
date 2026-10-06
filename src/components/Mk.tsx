// Renderer.tsx
type Props = { body: string, className?: string }
//import {parseMarkdown} from '../utils'
import { marked } from 'marked'


export function Mk({ body, className }: Props) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
}
