export default function(render, { toHighlighted, toInnerHtml, toGrid }) {
  return new Map([
    [
      'ProseAside',
      { preRender: string => render(string), isBlock: true }
    ],
    [
      'ProseCodeblock',
      {
        preRender: string => {
          return toHighlighted(
            render(string)
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"')
          )
        },
        isBlock: true,
        preserveNewline: true
      }
    ],
    [
      'ProseHeading',
      { preRender: string => toInnerHtml(render(string)), isBlock: true }
    ],
    [
      'ProseTable',
      { preRender: string => toGrid(render(string)), isBlock: true }
    ],
  ])
}
