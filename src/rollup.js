import { createFilter } from '@rollup/pluginutils'

export default function(options = {}) {
  const { transform, include, exclude } = options,
        filter = createFilter(include, exclude)

  return {
    name: 'loader',
    transform: (source, id) => {
      if (!filter(id)) {
        return null
      }

      return transform(source, this, id)
    }
  }
}