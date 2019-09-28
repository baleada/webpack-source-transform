import Prism from 'prismjs'

export default function(markup) {
  const language = markup.match(/language-\w+/)[0].replace(/language-/, ''),
        grammar = Prism.languages[language]

  return Prism.highlight(markup, grammar, 'language')
}