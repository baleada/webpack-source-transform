export default function(string, { name, render }) {
  const componentRegExp = new RegExp(`<${name}(.*?)>((?:.|\r?\n)*?)</${name}>`, 'gm'), // Doesn't work if components are nested inside themselves
        replacer = (match, attrs, markdown) => `<${name}${attrs}>${render(markdown)}</${name}>`

  return string.replace(componentRegExp, replacer)
}
