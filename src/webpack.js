import { getOptions } from 'loader-utils'
import validate from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    transform: {
      instanceof: 'Function',
    },
  },
  "additionalProperties": false,
}

export default function(source) {
  this.cacheable()

  const options = { transform: source => source, ...getOptions(this) },

  validate(schema, options, {
    name: "Baleada Loader",
    baseDataPath: 'options',
    postFormatter: (formattedError, error) => {
      return error.keyword === 'type'
        ? `${formattedError}\nSee the Baleada docs for more info: https://baleada.netlify.com/docs/loader`
        : formattedError
    },
  })

  const { transform } = options
  return transform(source, this)
}
