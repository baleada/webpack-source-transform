export default function(string, { name, preRender }) {
  const componentRegExp = new RegExp(`<${name}(.*?)>((?:.|\r?\n)*?)</${name}>`, 'gm'), // Doesn't work if components are nested inside themselves
        replacer = (match, attrs, markdown) => `<${name}${attrs}>${preRender(markdown).replace(/\n/g, '')}</${name}>`

  return string.replace(componentRegExp, replacer)
}
