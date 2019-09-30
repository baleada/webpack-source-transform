export default function(markup) {
  return markup
    .replace(/^<(?:[A-Za-z0-9-]+?\s?)(.*?)>(?:\r?\n)*?/, '')
    .replace(/(?:\r?\n)*?<\/[A-Za-z0-9-]*?>(?:\r?\n)*?$/, '')
}
