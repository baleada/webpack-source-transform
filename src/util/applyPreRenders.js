import renderComponent from './renderComponent'

export default function(postRendered, key, components) {
  return renderComponent(postRendered, { name: key, preRender: components.get(key).preRender })
}
