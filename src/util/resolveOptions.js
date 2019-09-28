import * as api from './api'

export default function(rawOptions) {
  return (typeof rawOptions === 'function')
    ? rawOptions(api)
    : rawOptions
}
