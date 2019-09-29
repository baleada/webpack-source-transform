import MarkdownIt from 'markdown-it'
import fm from 'front-matter'
import { getOptions } from 'loader-utils'
import { resolveComponents, renderComponent, toMap } from './util'
import { defaultOptions } from './stubs'

export default function(source) {
  this.cacheable()

  const body = fm(source).body,
        options = { ...defaultOptions, ...getOptions(this) },
        md = new MarkdownIt(options.markdownit),
        components = toMap(resolveComponents(options.components, md.render.bind(md))),
        { postRender } = options

  return postRender(
    md.render(
      Array.from(components.keys())
        .reduce((result, key) => renderComponent(result, { name: key, render: components.get(key) }), body)
    )
  )
}
