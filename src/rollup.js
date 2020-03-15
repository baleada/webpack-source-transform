import pluginUtils from '@rollup/pluginutils'

export default function(options = {}) {
  const { transform, include, exclude } = options,
        { createFilter } = pluginUtils,
        filter = createFilter(include, exclude)

  return {
    name: 'loader',
    transform: (source, id) => {
      if (!filter(id)) {
        return null
      }

      return transform({
        source,
        id,
        context: this,
        utils: pluginUtils
      })
    }
  }
}