export default function(string, { name, preRender, preserveNewline }, preservedNewlineSymbol) {
  const componentRegExp = name instanceof RegExp
    ? name
    : new RegExp(`<${name}\s?(.*?)>((?:.|\r?\n)*?)</${name}>`, 'gm'), // Doesn't work if components are nested inside themselves
        getPreRendered = preserveNewline
          ? markdown => preRender(markdown).replace(/\n/g, preservedNewlineSymbol)
          : markdown => preRender(markdown).replace(/\n/g, ''),
        replacer = (match, attrs, markdown) => `<${name}${attrs}>${getPreRendered(markdown)}</${name}>`

  return string.replace(componentRegExp, replacer)
}
