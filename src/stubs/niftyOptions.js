export default function({ defaultRenderer, toHighlighted, toInnerHtml, toGrid }) {
  return new Map([
    ['NiftyArticle', string => defaultRenderer.render(string)],
    ['NiftyAside', string => defaultRenderer.render(string)],
    ['NiftyCodeblock', string => toHighlighted(defaultRenderer.render(string))],
    ['NiftyHeading', string => toInnerHtml(defaultRenderer.render(string))],
    ['NiftyTable', string => toGrid(defaultRenderer.render(string))],
  ])
}
