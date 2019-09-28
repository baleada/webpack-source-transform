export default function(markup) {
  return markup
    .replace(/^<[A-Za-z0-9-]*?>/, '')
    .replace(/<\/[A-Za-z0-9-]*?>(?:\r?\n)*?$/, '')
}
