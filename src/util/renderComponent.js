export default function(string, { name, preRender, preserveNewline }) {
  const componentRegExp = new RegExp(`<${name}\s?(.*?)>((?:.|\r?\n)*?)</${name}>`, 'gm'), // Doesn't work if components are nested inside themselves
        getPreRendered = preserveNewline
          ? markdown => preRender(markdown).replace(/\n/g, 'NIFTY_LOADER_PRESERVED_NEWLINE') // TODO: use guaranteed unique value or expose for configuration
          : markdown => preRender(markdown).replace(/\n/g, ''),
        replacer = (match, attrs, markdown) => `<${name}${attrs}>${getPreRendered(markdown)}</${name}>`

  return string.replace(componentRegExp, replacer)
}
