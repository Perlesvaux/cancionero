import type {Cancion} from '../types'


// Sort songs in alphabetical order
export const alfabetico = (a:Cancion, b:Cancion) => a.nombre.localeCompare(b.nombre, 'es')

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')



// markdown.ts
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&#39;')

export function parseMarkdown(src: string): string {
  const escaped = escapeHtml(src)

  return escaped
    // **bold**  (must run before *italic*)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // *italic*  or  _italic_
    .replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/(^|[^_])_([^_\n]+?)_(?!_)/g, '$1<em>$2</em>')
    // `code`
    .replace(/`([^`\n]+?)`/g, '<code>$1</code>')
    // line breaks
    .replace(/\n/g, '<br />')
}
