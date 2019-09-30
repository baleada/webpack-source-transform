import Rainbow from 'rainbow-code'
import toInnerHtml from './toInnerHtml'

export default function(markup) {
  const language = markup.match(/language-\w+/)[0].replace(/language-/, ''),
        withoutPre = toInnerHtml(markup),
        withoutCode = toInnerHtml(withoutPre)

  return `<pre><code class="language-${language}">${Rainbow.colorSync(withoutCode, language)}</code></pre>`
}
