export default function(render, { toHighlighted, toInnerHtml, toGrid }) {
  return new Map([
    [
      'NiftyAside',
      { preRender: string => render(string), isBlock: true }
    ],
    [
      'NiftyCodeblock',
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
      'NiftyHeading',
      { preRender: string => toInnerHtml(render(string)), isBlock: true }
    ],
    [
      'NiftyTable',
      { preRender: string => toGrid(render(string)), isBlock: true }
    ],
  ])
}
