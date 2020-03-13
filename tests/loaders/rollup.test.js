import fs from 'fs'
import { rollup } from 'rollup'
import test from 'ava';
import { rollup as loader } from '../../src';

const inputOptions = {
        input: 'tests/stubs/baleada.js',
        plugins: [
          loader({
            transform: ({ source, id }) => {
              console.log(id)
              console.log(source)

              return source.replace(/Baleada/, `${id} - Baleada`)
            }
          })
        ]
      },
      outputOptions = {
        file: 'tests/loader-output/rollup.js',
        format: 'cjs',
      },
      withFilePathRegexp = new RegExp('tests/stubs/baleada.js - Baleada: a toolkit for building web apps')

test('uses the transform callback', async t => {
  const bundle = await rollup(inputOptions)
  await bundle.write(outputOptions);

  const value = fs.readFileSync('./tests/loader-output/rollup.js', 'utf8')

  t.assert(withFilePathRegexp.test(value))
})
