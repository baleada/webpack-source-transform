import Prism from 'prismjs'
import loadLanguages from 'prismjs/components'
import toInnerHtml from './toInnerHtml'

const languageAliases = {
  js: 'javascript',
  html: 'markup',
}

export default function(markup) {
  const suffix = markup.match(/language-\w+/)[0].replace(/language-/, ''),
        language = languageAliases.hasOwnProperty(suffix)
          ? languageAliases[suffix]
          : suffix,
        grammar = Prism.languages[language],
        withoutPre = toInnerHtml(markup),
        withoutCode = toInnerHtml(withoutPre),
        highlighted = language && grammar && Prism.highlight(withoutCode, grammar, language),
        html = highlighted || markup

  return `<pre><code class="language-${language}">${html}</code></pre>`
}
