// Renderer.tsx
type Props = { body: string }
import {parseMarkdown} from '../utils'


export function Mk({ body }: Props) {
  return <span dangerouslySetInnerHTML={{ __html: parseMarkdown(body) }} />
}
