export default function(md, options) {
  md.renderer.rules.fence = renderProseCodeblock(md)
}

function renderProseCodeblock (md) {
  const rules = md.renderer.rules,
        renderFence = rules.hasOwnProperty('fence') ? rules.fence : md.renderer.renderToken

  return () => {
    const markup = renderFence(...arguments),
          withoutTrailingNewline = markup.slice(0, markup.length - 1)

    return `<ProseCodeblock>${withoutTrailingNewline}</ProseCodeblock>\n`
  }
}
