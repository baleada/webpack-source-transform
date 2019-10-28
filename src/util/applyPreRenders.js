import renderComponent from './renderComponent'

export default function(postRendered, key, components, preservedNewlineSymbol) {
  return renderComponent(
    postRendered,
    {
      name: key,
      preRender: components.get(key).preRender,
      preserveNewline: components.get(key).preserveNewline
    },
    preservedNewlineSymbol
  )
}
