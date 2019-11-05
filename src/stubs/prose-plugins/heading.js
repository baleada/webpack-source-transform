import replaceTag from './util/replaceTag'

export default function(md, options) {
  md.renderer.rules.heading_open = renderProseHeadingOpen(md)
  md.renderer.rules.heading_close = renderProseHeadingClose(md)
}

function renderProseHeadingOpen (md) {
  return (tokens, index) => {
    return replaceTag(
      md.renderer.renderToken(...arguments),
      'ProseHeading',
      false,
      {
        boundAttrs: {
          level: tokens[index].tag.slice(1)
        }
      }
    )
  }
}

function renderProseHeadingClose (md) {
  return () => {
    return replaceTag(
      md.renderer.renderToken(...arguments),
      'ProseHeading',
      true
    )
  }
}
