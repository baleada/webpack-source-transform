export default function(render, { toHighlighted, toInnerHtml, toGrid }) {
  return new Map([
    [
      'NiftyAside',
      { preRender: string => render(string), isBlock: true }
    ],
    [
      'NiftyCodeblock',
      { preRender: string => toHighlighted(render(string)), isBlock: true }
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
