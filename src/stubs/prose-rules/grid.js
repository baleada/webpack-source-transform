import replaceTag from './util/replaceTag'

export default function(md, options) {
  md.renderer.rules.table_open = renderProseGridOpen(md)
  md.renderer.rules.table_close = renderProseGridDescendant(md, 'Grid', true)
  md.renderer.rules.thead_open = renderProseGridDescendant(md, 'Rowgroup', false)
  md.renderer.rules.thead_close = renderProseGridDescendant(md, 'Rowgroup', true)
  md.renderer.rules.tbody_open = renderProseGridDescendant(md, 'Rowgroup', false)
  md.renderer.rules.tbody_close = renderProseGridDescendant(md, 'Rowgroup', true)
  md.renderer.rules.tr_open = renderProseGridDescendant(md, 'Row', false)
  md.renderer.rules.tr_close = renderProseGridDescendant(md, 'Row', true)
  md.renderer.rules.th_open = renderProseGridDescendant(md, 'Columnheader', false)
  md.renderer.rules.th_close = renderProseGridDescendant(md, 'Columnheader', true)
  md.renderer.rules.td_open = renderProseGridDescendant(md, 'Gridcell', false)
  md.renderer.rules.td_close = renderProseGridDescendant(md, 'Gridcell', true)
}

function renderProseGridOpen (md) {
  return () => {
    return replaceTag(
      md.renderer.render(...arguments),
      'ProseGrid',
      true,
      {
        attrs: {
          // TODO: figure out how to pass attrs/props to markdown table
        }
      }
    )
  }
}

function renderProseGridDescendant (md, descendantName, isClose) {
  return () => {
    return replaceTag(
      md.renderer.render(...arguments),
      `Prose${descendantName}`,
      isClose
    )
  }
}
