export default function(rendered, loader) {
  const { attributes: { title }, stats: { mtime }, markup } = rendered

  return `\
<section class="contents">\
<ProseHeading :level="1">${title}</ProseHeading>\
<ProseUpdatedAt timestamp="${mtime}" />\
${markup}\
</section>`
}
