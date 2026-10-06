// Renderer.tsx
type Props = { body: string, className?: string }
//import {parseMarkdown} from '../utils'
import { marked } from 'marked'


export function Mk({ body, className }: Props) {

  return <span className={className} dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
}





//Approach below would be perfect if I ever required user input.
//Since ALL is hardcoded, no need for DOMPurify.
//Code below is still good future reference; usual pattern.
//
//type Props = { body: string, className?: string }
//import { marked } from 'marked'
//import DOMPurify from 'dompurify'
//
//
//export function Mk({ body, className }: Props) {
//
// const html = DOMPurify.sanitize(marked.parse(body, {async:false}), {
//    ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'h1', 'h2', 'h3', 'a', 'br'],
//    ALLOWED_ATTR: ['href'],
//  })
//
//
//  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
//}
