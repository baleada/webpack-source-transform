import MarkdownIt from 'markdown-it'
import fm from 'front-matter'
import { getOptions } from 'loader-utils'
import { resolveComponents, toMap, removeOuterParagraphs, applyPreRenders } from './util'
import { defaultOptions } from './stubs'

export default function(source) {
  this.cacheable()

  const body = fm(source).body,
        options = { ...defaultOptions, ...getOptions(this) },
        md = new MarkdownIt({ ...options.markdownit, html: true }),
        components = toMap(resolveComponents(options.components, md.render.bind(md))),
        { preservedNewlineSymbol, postRender } = options,
        preRendered = Array.from(components.keys()).reduce((preRendered, componentName) => applyPreRenders(preRendered, componentName, components, preservedNewlineSymbol), body),
        rendered = md.render(preRendered),
        postRendered = postRender(Array.from(components.keys()).reduce((postRendered, componentName) => removeOuterParagraphs(postRendered, componentName, components), rendered)),
        preservedNewlineSymbolRegExp = new RegExp(preservedNewlineSymbol, 'g')

  return postRendered.replace(preservedNewlineSymbolRegExp, '\n')
}
