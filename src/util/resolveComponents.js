import * as transforms from '../transforms'

export default function(components = new Map(), render) {
  return (typeof components === 'function')
    ? components(render, transforms)
    : components
}
