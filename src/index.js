import { getOptions } from 'loader-utils'
import { resolveOptions, renderComponent, toMap } from './util'

export default function(source) {
  const rawOptions = getOptions(this),
        options = resolveOptions(rawOptions),
        optionsMap = toMap(options)

  return optionsMap.keys().reduce((result, key) => renderComponent(result, { name: key, render: optionsMap.get(key) }), source)
}
