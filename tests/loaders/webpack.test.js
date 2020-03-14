import fs from 'fs'
import test from 'ava'
import { exec } from '@baleada/prepare'

const withFilePathRegexp = new RegExp('tests/stubs/baleada.js - Baleada: a toolkit for building web apps')

test('uses the transform callback', async t => {
  // Remove any previous loader output
  await fs.unlink('tests/loader-output/webpack.js', err => {
    if (err) {
      if (!/no such file/.test(err.message)) throw err
    }
  })

  exec('webpack --config ./tests/stubs/webpack.config.js')

  const value = fs.readFileSync('./tests/loader-output/webpack.js', 'utf8')

  t.assert(withFilePathRegexp.test(value))
})
