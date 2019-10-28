import replaceTag from './util/replaceTag'

export default function(md, options) {
  md.renderer.rules.heading_open = renderProseHeadingOpen(md)
  md.renderer.rules.heading_close = renderProseHeadingClose(md)
}

function renderProseHeadingOpen (md) {
  return (token) => {
    return replaceTag(
      md.renderer.render(...arguments),
      'ProseHeading',
      false,
      {
        boundAttrs: {
          level: token.tag.slice(1)
        }
      }
    )
  }
}

function renderProseHeadingClose (md) {
  return () => {
    return replaceTag(
      md.renderer.render(...arguments),
      'ProseHeading',
      true
    )
  }
}
