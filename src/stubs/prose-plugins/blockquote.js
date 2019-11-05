import replaceTag from './util/replaceTag'

export default function(md, options) {
  md.renderer.rules.blockquote_open = renderProseBlockquoteOpen(md)
  md.renderer.rules.blockquote_close = renderProseBlockquoteClose(md)
}

function renderProseBlockquoteOpen (md) {
  return (token) => {
    return replaceTag(
      md.renderer.renderToken(...arguments),
      'ProseBlockquote',
      false,
      {
        attrs: {
          // figure out how to pass attrs/props to blockquote
        }
      }
    )
  }
}

function renderProseBlockquoteClose (md) {
  return () => {
    return replaceTag(
      md.renderer.renderToken(...arguments),
      'ProseBlockquote',
      true
    )
  }
}
