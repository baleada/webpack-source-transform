function shouldRemove (componentName, components) {
  return components.get(componentName).isBlock
}

export default function(rendered, componentName, components) {
  if (shouldRemove(componentName, components)) {
    const paragraphRegExp = new RegExp(`<p>(<${componentName}(?:.*?)>)((?:.|\r?\n)*?)(</${componentName}>)</p>`, 'gm'),
          replacer = (match, open, contents, close) => `${open}${contents}${close}`

    rendered = rendered.replace(paragraphRegExp, replacer)
  }

  return rendered
}
