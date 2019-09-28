export default function toGrid (markup) {
  const replacers = [
    {
      regexp: /<table(.*?)>/g,
      replacer: (match, attrs) => `<div role="grid"${attrs}>`,
    },
    {
      regexp: /<(?:thead|tbody)(.*?)>/g,
      replacer: (match, attrs) => `<div role="rowgroup"${attrs}>`,
    },
    {
      regexp: /<tr(.*?)>/g,
      replacer: (match, attrs) => `<div role="row"${attrs}>`,
    },
    {
      regexp: /<th(.*?)>/g,
      replacer: (match, attrs) => `<div role="columnheader" tabindex="-1"${attrs}>`,
    },
    {
      regexp: /<td(.*?)>/g,
      replacer: (match, attrs) => `<div role="gridcell" tabindex="-1"${attrs}>`,
    },
    {
      regexp: /<\/(?:table|thead|tbody|tr|th|td)>/g,
      replacer: (match, attrs) => '</div>',
    },
  ]

  return replacers.reduce((withRoles, { regexp, replacer }) => withRoles.replace(regexp, replacer), markup)
}
