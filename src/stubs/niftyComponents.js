export default function(render, { toHighlighted, toInnerHtml, toGrid }) {
  return new Map([
    ['NiftyArticle', string => render(string)],
    ['NiftyAside', string => render(string)],
    ['NiftyCodeblock', string => toHighlighted(render(string))],
    ['NiftyHeading', string => toInnerHtml(render(string))],
    ['NiftyTable', string => toGrid(render(string))],
  ])
}
