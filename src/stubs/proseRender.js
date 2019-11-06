// TODO: prism highlight
import MarkdownIt from 'markdown-it'
import { aside, blockquote, codeblock, grid, heading, details } from './prose-plugins'

const md = new MarkdownIt({
        html: true,
        linkify: true,
      }),
      plugins = [aside, blockquote, codeblock, grid, heading, details]

plugins.forEach(plugin => md.use(plugin))

export default function(preRendered, loader) {
  const { frontMatter, stats } = preRendered,
        { attributes, body } = frontMatter

  return {
    attributes,
    stats,
    markup: md.render(body),
  }
}
