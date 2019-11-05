import { getOptions } from 'loader-utils'
import { prosePreRender, proseRender, prosePostRender } from './stubs'

export default function(source) {
  this.cacheable()

  const options = { preRender: prosePreRender, render: proseRender, postRender: prosePostRender, ...getOptions(this) },
        { preRender, render, postRender } = options,
        preRendered = preRender(source, this),
        rendered = render(preRendered, this)

  return postRender(rendered, this)
}
