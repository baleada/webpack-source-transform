import fm from 'front-matter'

export default function(source, loader) {
  const frontMatter = fm(source),
        stats = loader.fs.statSync(loader.resource)

  return { frontMatter, stats }
}
